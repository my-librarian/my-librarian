$(function () {

  var form = $('.add .book');

  function addBook(done) {

    var data = {
      accessno: $('.txt.accessno', form).val(),
      rackno: $('.txt.rackno', form).val(),
      adddate: $('.txt.adddate', form).val(),
      title: $('.txt.title', form).val(),
      subject: $('.txt.subject', form).val(),
      author: $('.txt.author', form).val()
    };

    $.ajax({
      url: '/app_data/books/add.php',
      method: 'post',
      data: data,
      success: function (id) {

        data.id = id;

        listManager.addBook(data);

        resetForm();

        if (done) {
          done();
        }

      },
      error: function () {
        console.log("Failed to create book");
      }
    });

  }

  form.submit(function (event) {

    event.preventDefault();
    addBook();
    return false;
  });

  function closeForm() {
    $('.add').removeClass('active');
  }

  function resetForm() {
    $('.reset').click();
  }

  $('.add-one').click(function () {
    addBook(closeForm);
  });

  $('.add-another').click(function () {
    addBook();
  });

  $('.add-book button').click(function () {
    $('.add').addClass('active');
  });

  $('.cancel').click(closeForm);

  $('.txt.adddate').datepicker({
    dateFormat: 'yy-mm-dd',
    maxDate: new Date()
  })

});
