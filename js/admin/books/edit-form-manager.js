var editFormManager = {

  form: $('section.edit .book'),
  book: null,

  bindCancelButton: function () {

    $('.cancel', editFormManager.form).click(editFormManager.cancel);
  },

  bindSaveButton: function () {

    $('.save', editFormManager.form).click(editFormManager.saveBook);
  },

  cancel: function () {

    if (editFormManager.book) {
      listManager.books.push(editFormManager.book);
      editFormManager.book = null;
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

  edit: function (book) {

    console.log(book);

    editFormManager.cancel();
    editFormManager.book = book;

    listManager.books = listManager.books.filter(function (lmBook) {
      return book.id != lmBook.id;
    });

    $('.txt.accessno', editFormManager.form).val(book.accessno);
    $('.txt.rackno', editFormManager.form).val(book.rackno);
    $('.txt.adddate', editFormManager.form).val(book.adddate);
    $('.txt.title', editFormManager.form).val(book.title);
    $('.txt.subject', editFormManager.form).val(book.subject);
    $('.txt.author', editFormManager.form).val(book.author);

    $('section.edit').addClass('active');
    $('section.add').addClass('edit-mode');
  },

  saveBook: function () {

    var book = formManager.validateBook(editFormManager.form);

    if (book) {

      book.id = editFormManager.book.id;

      $.ajax({
        url: '/app_data/books/update.php',
        method: 'post',
        data: book,
        success: function () {

          var bookNode = $('#book-' + book.id);
          $('.accessno', bookNode).html(book.accessno);
          $('.title', bookNode).html(book.title);
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
