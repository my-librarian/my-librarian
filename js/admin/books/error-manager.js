var errorManager = {

  errors: [],

  addError: function (err) {
    var found = errorManager.errors.find(function (error) {
      return err === error;
    });
    if (!found) {
      errorManager.errors.push(err);
    }

    errorManager.showErrors();
  },

  showErrors: function () {
    $('ul.errors').html('');
    errorManager.errors.forEach(function (error) {
      $('ul.errors').append($('<li />').html(error));
    });
  },

  removeError: function (err) {
    var index = errorManager.errors.findIndex(function (error) {
      return err === error;
    });
    if (index >= 0) {
      errorManager.errors.splice(index, 1);
    }

    errorManager.showErrors();
  },

  removeAllErrors: function () {
    errorManager.errors = [];
    errorManager.showErrors();
  }

};
