$(function () {

  function createNode(element, className, text) {

    return $('<' + element + ' />')
      .html(text)
      .addClass(className);

  }

  function deleteBook(id) {

    $.ajax({
      url: '/app_data/books/delete.php',
      method: 'post',
      data: {
        id: id
      },
      success: function () {
        $('#book-' + id).remove();
      },
      error: function () {
        console.log("Failed to delete book");
      }
    })

  }

  function createBook(book) {

    var accessno = createNode('div', 'accessno', book.accessno);
    var title = createNode('div', 'title', book.title);
    var actions = createNode('div', 'actions')
      .append(
        createNode('button', 'edit'),
        createNode('button', 'delete').click(function () {
          deleteBook(book.id);
        })
      );

    return createNode('div', 'book')
      .attr('id', 'book-' + book.id)
      .append(accessno, title, actions);

  }

  $.ajax({
    url: '/app_data/books/get-all.php',
    dataType: 'json',
    success: function (books) {

      var booksTable = $('.list .books');

      books.forEach(function (book) {

        booksTable.append(createBook(book));

      });

    }
  });

});
