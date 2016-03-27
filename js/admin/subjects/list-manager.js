var listManager = {

  addSubject: function (subject) {

    var subjectNode = listManager.createSubject(subject);
    $('.subject-list .subjects').append(subjectNode);
  },

  createSubject: function (subject) {

    var name = listManager.createNode('div', 'name', subject.name);
    var actions = listManager.createNode('div', 'actions')
      .append(
        listManager.createNode('button', 'edit').click(function () {
          listManager.editSubject(subject.id);
        }),
        listManager.createNode('button', 'delete').click(function () {
          listManager.deleteSubject(subject.id);
        })
      );

    return listManager.createNode('div', 'subject')
      .attr('id', 'subject-' + subject.id)
      .append(name, actions);
  },

  createNode: function (element, className, text) {

    return $('<' + element + ' />')
      .html(text)
      .addClass(className);
  },

  deleteSubject: function (id) {

    $.ajax({
      url: '/app_data/subjects/delete.php',
      method: 'post',
      data: {
        id: id
      },
      success: function () {
        var index = listManager.subjects.findIndex(function (subject) {
          return subject.id === id;
        });
        if (index >= 0) {
          listManager.subjects.splice(index, 1);
        }
        $('#subject-' + id).remove();
      },
      error: function () {
        console.log("Failed to delete subject");
      }
    })
  },

  editSubject: function (id) {

    $.ajax({
      url: '/app_data/subjects/get-one.php',
      dataType: 'json',
      data: {
        id: id
      },
      success: function (data) {
        editFormManager.edit(data);
      }
    })

  },

  getAllSubjects: function () {

    $.ajax({
      url: '/app_data/subjects/get-all.php',
      dataType: 'json',
      success: function (subjects) {
        subjects.forEach(listManager.addSubject);
        listManager.subjects = subjects;
      }
    });
  }

};

$(function () {

  listManager.getAllSubjects();

});
