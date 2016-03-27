var addFormManager = {

  form: $('section.add .subject'),

  addSubject: function (done) {

    var subject = formManager.validateSubject(addFormManager.form);

    if (subject) {

      $.ajax({
        url: '/app_data/subjects/add.php',
        method: 'post',
        data: subject,
        success: function (id) {

          subject.id = id;

          listManager.addSubject(subject);
          listManager.subjects.push(subject);

          addFormManager.reset();

          if (done) {
            done();
          }

        },
        error: function () {
          console.log('Failed to create subject');
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
      addFormManager.addSubject(addFormManager.cancel);
    });

    $('.add-another', addFormManager.form).click(function () {
      addFormManager.addSubject();
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

  $('.add-subject button').click(function () {
    $('section.add').addClass('active');
  });

});
