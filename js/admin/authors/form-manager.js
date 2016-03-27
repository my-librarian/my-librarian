var formManager = {

  checkDuplicateValue: function (author) {

    var err = 'Author name already exists; change name and save or cancel editing';
    console.log(listManager.authors);
    var index = listManager.authors.findIndex(function (lmAuthor) {
      return author.toLowerCase() === lmAuthor.name.toLowerCase();
    });

    if (index >= 0) {
      errorManager.addError(err);
    } else {
      errorManager.removeError(err);
    }
  },

  checkEmptyValue: function (author) {

    var err = 'Author name is required';

    if (author === '') {
      errorManager.addError(err);
    } else {
      errorManager.removeError(err);
    }
  },

  validateAuthor: function (form) {

    var author = {
      name: $('.txt.name', form).val()
    };

    formManager.checkEmptyValue(author.name);
    formManager.checkDuplicateValue(author.name);

    if (errorManager.errors.length > 0) {
      return false;
    }

    return author;
  }

};
