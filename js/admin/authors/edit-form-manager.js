var editFormManager = {

  form: $('section.edit .author'),
  author: null,

  bindCancelButton: function () {

    $('.cancel', editFormManager.form).click(editFormManager.cancel);
  },

  bindSaveButton: function () {

    $('.save', editFormManager.form).click(editFormManager.saveAuthor);
  },

  cancel: function () {

    if (editFormManager.author) {
      listManager.authors.push(editFormManager.author);
      editFormManager.author = null;
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

  edit: function (author) {

    editFormManager.cancel();
    editFormManager.author = author;

    listManager.authors = listManager.authors.filter(function (lmAuthor) {
      return author.id != lmAuthor.id;
    });

    $('.txt.name', editFormManager.form).val(author.name);

    $('section.edit').addClass('active');
    $('section.add').addClass('edit-mode');
  },

  saveAuthor: function () {

    var author = formManager.validateAuthor(editFormManager.form);

    if (author) {

      author.id = editFormManager.author.id;

      $.ajax({
        url: '/app_data/authors/update.php',
        method: 'post',
        data: author,
        success: function () {

          var authorNode = $('#author-' + author.id);
          $('.name', authorNode).html(author.name);
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
