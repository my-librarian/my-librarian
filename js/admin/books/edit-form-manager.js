var editFormManager = {

  edit: function (book) {

    var form = $('.edit .book');

    console.log(book);

    $('.txt.accessno', form).val(book.accessno);
    $('.txt.rackno', form).val(book.rackno);
    $('.txt.adddate', form).val(book.adddate);
    $('.txt.title', form).val(book.title);
    $('.txt.subject', form).val(book.subject);
    $('.txt.author', form).val(book.author);

    $('.edit').addClass('active');

  }

};

$(function () {

  var form = $('.edit .book');

  form.submit(false);

});
