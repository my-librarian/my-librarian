var addFormManager = {

  form: $('section.add .book'),

  addBook: function (done) {

    var book = formManager.validateBook(addFormManager.form);

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
