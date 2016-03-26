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

    var empty = Object.keys(data).find(function (key) {
      return data[key] === '';
    });

    if (empty) {
      form.addClass('error');
      return null;
    }

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

  function showError(element, hasError) {
    if (hasError) {
      $(element).addClass('error');
    } else {
      $(element).removeClass('error');
    }
  }

  $('.txt.accessno').blur(function () {
    var value = this.value;
    var found = listManager.books.find(function (book) {
      return book.accessno === value;
    });
    showError(this, found);
  });

  $('.txt.rackno').blur(function () {
    this.value = this.value.toUpperCase();
    showError(this, !/R-[0-9]{1,2}-[A-Z]-[0-9]{1,2}/.test(this.value));
  });

  form.submit(false);

  function closeForm() {
    $('.add').removeClass('active');
  }

  function resetForm() {
    $('.reset').click();
    $('.txt').removeClass('error');
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

  $('.cancel').click(function () {
    resetForm();
    closeForm();
  });

  $('.txt.adddate').datepicker({
    dateFormat: 'yy-mm-dd',
    maxDate: new Date()
  })

});
