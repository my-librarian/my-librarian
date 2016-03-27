var addFormManager = {

  form: $('.add .book'),

  addBook: function (done) {

    var book = addFormManager.validateBook();

    if (book) {

      $.ajax({
        url: '/app_data/books/add.php',
        method: 'post',
        data: book,
        success: function (id) {

          book.id = id;

          listManager.addBook(book);
          listManager.books.push(book);

          addFormManager.reset();

          if (done) {
            done();
          }

        },
        error: function () {
          console.log('Failed to create book');
        }
      });
    }
  },

  cancel: function () {
    $('section.add').removeClass('active');
  },

  cancelFormSubmit: function () {

    addFormManager.form.submit(false);
  },

  bindAddButtons: function () {

    $('.add-one', addFormManager.form).click(function () {
      addFormManager.addBook(addFormManager.cancel);
    });

    $('.add-another', addFormManager.form).click(function () {
      addFormManager.addBook();
    });
  },

  bindCancelButton: function () {

    $('.cancel', addFormManager.form).click(function () {
      addFormManager.reset();
      addFormManager.cancel();
    });
  },

  bindResetButton: function () {

    $('.reset', addFormManager.form).click(function () {
      $('.txt').removeClass('error');
      errorManager.removeAllErrors();
    });
  },

  validateBook: function () {

    var err = 'All fields are required';
    var book = {
      accessno: $('.txt.accessno', addFormManager.form).val(),
      rackno: $('.txt.rackno', addFormManager.form).val(),
      adddate: $('.txt.adddate', addFormManager.form).val(),
      title: $('.txt.title', addFormManager.form).val(),
      subject: $('.txt.subject', addFormManager.form).val(),
      author: $('.txt.author', addFormManager.form).val()
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
  },

  reset: function () {

    $('.reset', addFormManager.form).click();
  }

};

$(function () {

  addFormManager.cancelFormSubmit();
  addFormManager.bindAddButtons();
  addFormManager.bindCancelButton();
  addFormManager.bindResetButton();

  $('.add-book button').click(function () {
    $('section.add').addClass('active');
  });

});
