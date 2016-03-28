var editFormManager = {

  form: $('section.edit .subject'),
  subject: null,

  bindCancelButton: function () {

    $('.cancel', editFormManager.form).click(editFormManager.cancel);
  },

  bindSaveButton: function () {

    $('.save', editFormManager.form).click(editFormManager.saveSubject);
  },

  cancel: function () {

    if (editFormManager.subject) {
      listManager.subjects.push(editFormManager.subject);
      editFormManager.subject = null;
    }

    editFormManager.form[0].reset();
    $('section.edit').removeClass('active');
    $('section.add').removeClass('edit-mode');
    $('.txt', editFormManager.form).removeClass('error');
    errorManager.removeAllErrors();
  },

  cancelFormSubmit: function () {

    editFormManager.form.submit(false);
  },

  edit: function (subject) {

    editFormManager.cancel();
    editFormManager.subject = subject;

    listManager.subjects = listManager.subjects.filter(function (lmSubject) {
      return subject.id != lmSubject.id;
    });

    $('.txt.name', editFormManager.form).val(subject.name);

    $('section.edit').addClass('active');
    $('section.add').addClass('edit-mode');
  },

  saveSubject: function () {

    var subject = formManager.validateSubject(editFormManager.form);

    if (subject) {

      subject.id = editFormManager.subject.id;

      $.ajax({
        url: '/app_data/subjects/update.php',
        method: 'post',
        data: subject,
        success: function () {

          var subjectNode = $('#subject-' + subject.id);
          $('.name', subjectNode).html(subject.name);
          editFormManager.cancel();
        }
      })
    }

  }

};

$(function () {

  editFormManager.cancelFormSubmit();
  editFormManager.bindCancelButton();
  editFormManager.bindSaveButton();

});
