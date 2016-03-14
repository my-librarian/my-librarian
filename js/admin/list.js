$(function () {

  function createNode(element, className, text) {

    return $('<' + element + ' />')
      .html(text)
      .addClass(className);

  }

  function createBook(book) {

    var accessno = createNode('div', 'accessno', book.accessno);
    var title = createNode('div', 'title', book.title);
    var actions = createNode('div', 'actions')
      .append(
        createNode('button', 'edit'),
        createNode('button', 'delete')
      );

    return createNode('div', 'book').append(accessno, title, actions);

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
