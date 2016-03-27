var listManager = {

  addAuthor: function (author) {

    var authorNode = listManager.createAuthor(author);
    $('.author-list .authors').append(authorNode);
  },

  createAuthor: function (author) {

    var name = listManager.createNode('div', 'name', author.name);
    var actions = listManager.createNode('div', 'actions')
      .append(
        listManager.createNode('button', 'edit').click(function () {
          listManager.editAuthor(author.id);
        }),
        listManager.createNode('button', 'delete').click(function () {
          listManager.deleteAuthor(author.id);
        })
      );

    return listManager.createNode('div', 'author')
      .attr('id', 'author-' + author.id)
      .append(name, actions);
  },

  createNode: function (element, className, text) {

    return $('<' + element + ' />')
      .html(text)
      .addClass(className);
  },

  deleteAuthor: function (id) {

    $.ajax({
      url: '/app_data/authors/delete.php',
      method: 'post',
      data: {
        id: id
      },
      success: function () {
        var index = listManager.authors.findIndex(function (author) {
          return author.id === id;
        });
        if (index >= 0) {
          listManager.authors.splice(index, 1);
        }
        $('#author-' + id).remove();
      },
      error: function () {
        console.log("Failed to delete author");
      }
    })
  },

  editAuthor: function (id) {

    $.ajax({
      url: '/app_data/authors/get-one.php',
      dataType: 'json',
      data: {
        id: id
      },
      success: function (data) {
        editFormManager.edit(data);
      }
    })

  },

  getAllAuthors: function () {

    $.ajax({
      url: '/app_data/authors/get-all.php',
      dataType: 'json',
      success: function (authors) {
        authors.forEach(listManager.addAuthor);
        listManager.authors = authors;
      }
    });
  }

};

$(function () {

  listManager.getAllAuthors();

});
