var addFormManager = {

  form: $('section.add .author'),

  addAuthor: function (done) {

    var author = formManager.validateAuthor(addFormManager.form);

    if (author) {

      $.ajax({
        url: '/app_data/authors/add.php',
        method: 'post',
        data: author,
        success: function (id) {

          author.id = id;

          listManager.addAuthor(author);
          listManager.authors.push(author);

          addFormManager.reset();

          if (done) {
            done();
          }

        },
        error: function () {
          console.log('Failed to create author');
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
      addFormManager.addAuthor(addFormManager.cancel);
    });

    $('.add-another', addFormManager.form).click(function () {
      addFormManager.addAuthor();
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

  $('.add-author button').click(function () {
    $('section.add').addClass('active');
  });

});
