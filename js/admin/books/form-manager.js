var formManager = {

  bindAutocomplete: function () {

    $('.txt.subject').autocomplete({
      source: '/app_data/subject/get-all.php'
    });

    $('.txt.author').autocomplete({
      source: '/app_data/author/get-all.php'
    });
  },

  bindDatePicker: function () {

    $('.txt.adddate').datepicker({
      dateFormat: 'yy-mm-dd',
      maxDate: new Date()
    });
  },

  bindValidation: function () {

    $('.txt.accessno').blur(function (event) {

      var value = event.target.value;
      var found = listManager.books.find(function (book) {
        return book.accessno === value;
      });

      formManager.toggleErrorClass(this, 'Access number already exists', found);
    });

    $('.txt.rackno').blur(function (event) {

      var value = event.target.value.toUpperCase();
      var format = /R-[0-9]{1,2}-[A-Z]-[0-9]{1,2}/;

      event.target.value = value.toUpperCase();
      formManager.toggleErrorClass(
        this,
        'Invalid rack number given, required in R-##-X-## format',
        !format.test(value)
      );
    });
  },

  toggleErrorClass: function (element, error, hasError) {

    if (hasError) {
      errorManager.addError(error);
      $(element).addClass('error');
    } else {
      errorManager.removeError(error);
      $(element).removeClass('error');
    }
  },

  validateBook: function (form) {

    var err = 'All fields are required';
    var book = {
      accessno: $('.txt.accessno', form).val(),
      rackno: $('.txt.rackno', form).val(),
      adddate: $('.txt.adddate', form).val(),
      title: $('.txt.title', form).val(),
      subject: $('.txt.subject', form).val(),
      author: $('.txt.author', form).val()
    };
    var empty = Object.keys(book).find(function (key) {
      return book[key] === '';
    });

    if (empty) {
      errorManager.addError(err);
    } else {
      errorManager.removeError(err);
    }

    if (errorManager.errors.length > 0) {
      return false;
    }

    return book;
  }

};
