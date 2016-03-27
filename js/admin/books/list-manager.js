var listManager = {

  addBook: function (book) {

    var bookNode = listManager.createBook(book);
    $('.book-list .books').append(bookNode);
  },

  createBook: function (book) {

    var accessno = listManager.createNode('div', 'accessno', book.accessno);
    var title = listManager.createNode('div', 'title', book.title);
    var actions = listManager.createNode('div', 'actions')
      .append(
        listManager.createNode('button', 'edit').click(function () {
          listManager.editBook(book.id);
        }),
        listManager.createNode('button', 'delete').click(function () {
          listManager.deleteBook(book.id);
        })
      );

    return listManager.createNode('div', 'book')
      .attr('id', 'book-' + book.id)
      .append(accessno, title, actions);
  },

  createNode: function (element, className, text) {

    return $('<' + element + ' />')
      .html(text)
      .addClass(className);
  },

  deleteBook: function (id) {

    $.ajax({
      url: '/app_data/books/delete.php',
      method: 'post',
      data: {
        id: id
      },
      success: function () {
        var index = listManager.books.findIndex(function (book) {
          return book.id === id;
        });
        if (index >= 0) {
          listManager.books.splice(index, 1);
        }
        $('#book-' + id).remove();
      },
      error: function () {
        console.log("Failed to delete book");
      }
    })
  },

  editBook: function (id) {

    $.ajax({
      url: '/app_data/books/get-one.php',
      dataType: 'json',
      data: {
        id: id
      },
      success: function (data) {
        editFormManager.edit(data);
      }
    })

  },

  getAllBooks: function () {

    $.ajax({
      url: '/app_data/books/get-all.php',
      dataType: 'json',
      success: function (books) {
        books.forEach(listManager.addBook);
        listManager.books = books;
      }
    });
  }
};

$(function () {

  listManager.getAllBooks();
  formManager.bindAutocomplete();
  formManager.bindDatePicker();
  formManager.bindValidation();

});
