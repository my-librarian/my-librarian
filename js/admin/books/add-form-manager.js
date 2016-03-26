$(function () {

  var form = $('.add .book');

  function addBook(done) {

    var err = 'All fields are required';
    var data = {
      accessno: $('.txt.accessno', form).val(),
      rackno: $('.txt.rackno', form).val(),
      adddate: $('.txt.adddate', form).val(),
      title: $('.txt.title', form).val(),
      subject: $('.txt.subject', form).val(),
      author: $('.txt.author', form).val()
    };
    var empty = Object.keys(data).find(function (key) {
      return data[key] === '';
    });

    if (empty) {
      errorManager.addError(err);
    } else {
      errorManager.removeError(err);
    }

    if (errorManager.errors.length > 0) {
      return null;
    }

    $.ajax({
      url: '/app_data/books/add.php',
      method: 'post',
      data: data,
      success: function (id) {

        data.id = id;

        listManager.addBook(data);
        listManager.books.push(data);

        resetForm();

        if (done) {
          done();
        }

      },
      error: function () {
        console.log('Failed to create book');
      }
    });

  }

  function toggleErrorClass(element, error, hasError) {
    if (hasError) {
      errorManager.addError(error);
      $(element).addClass('error');
    } else {
      errorManager.removeError(error);
      $(element).removeClass('error');
    }
  }

  $('.txt.accessno').blur(function () {
    var value = this.value;
    var found = listManager.books.find(function (book) {
      return book.accessno === value;
    });
    toggleErrorClass(this, 'Access number already exists', found);
  });

  $('.txt.rackno').blur(function () {
    this.value = this.value.toUpperCase();
    var format = /R-[0-9]{1,2}-[A-Z]-[0-9]{1,2}/;
    toggleErrorClass(
      this,
      'Invalid rack number given, required in R-##-X-## format',
      !format.test(this.value)
    );
  });

  $('.txt.subject').autocomplete({
    source: '/app_data/subject/get-all.php'
  });

  $('.txt.author').autocomplete({
    source: '/app_data/author/get-all.php'
  });

  form.submit(false);

  function closeForm() {
    $('.add').removeClass('active');
  }

  function resetForm() {
    $('.reset').click();
    $('.txt').removeClass('error');
    errorManager.removeAllErrors();
  }

  $('.add-one').click(function () {
    addBook(closeForm);
  });

  $('.add-another').click(function () {
    addBook();
  });

  $('.add-book button').click(function () {
    $('.add').addClass('active');
  });

  $('.cancel').click(function () {
    resetForm();
    closeForm();
  });

  $('.txt.adddate').datepicker({
    dateFormat: 'yy-mm-dd',
    maxDate: new Date()
  })

});
