$(function() {

  function createNode(element) {

    return $('<' + element + ' />');

  }

  function createLink(linkTo, linkText, className) {

    return createNode('a')
      .attr('href', linkTo)
      .html(linkText)
      .addClass(className);

  }

  $.ajax({
    url: '/app_data/books/get-all.php',
    dataType: 'json',
    success: function(books) {

      var booksTable = $('.books');

      books.forEach(function(book) {

        var accessno = createNode('td').html(book.accessno);
        var title = createNode('td').html(book.title);
        var actions = createNode('td').append(
          createLink('/admin/edit?id=' + book.id, 'Edit', 'edit'),
          createLink('/admin/delete?id=' + book.id, 'Delete', 'delete')
        ).addClass('actions');

        var row = $('<tr />').append(accessno, title, actions);

        booksTable.append(row);

      });

    }
  });

});
