var formManager = {

  checkDuplicateValue: function (subject) {

    var err = 'Subject already exists; change subject and save or cancel editing';
    console.log(listManager.subjects);
    var index = listManager.subjects.findIndex(function (lmSubject) {
      return subject.toLowerCase() === lmSubject.name.toLowerCase();
    });

    if (index >= 0) {
      errorManager.addError(err);
    } else {
      errorManager.removeError(err);
    }
  },

  checkEmptyValue: function (subject) {

    var err = 'Subject is required';

    if (subject === '') {
      errorManager.addError(err);
    } else {
      errorManager.removeError(err);
    }
  },

  validateSubject: function (form) {

    var subject = {
      name: $('.txt.name', form).val()
    };

    formManager.checkEmptyValue(subject.name);
    formManager.checkDuplicateValue(subject.name);

    if (errorManager.errors.length > 0) {
      return false;
    }

    return subject;
  }

};
