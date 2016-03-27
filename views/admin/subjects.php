<?php
function getFields() {
?>
<div class="txt-group">
  <input type="text" class="txt name" placeholder="Subject Name">
</div>
<ul class="errors"></ul>
<?php
}
?>

<section class="subject-list">

  <section class="add">
    <div class="add-subject">
      <button>Add Subject</button>
    </div>
    <form class="subject" novalidate>
      <?php getFields(); ?>
      <div class="btn-group">
        <button class="add-another">Add Another</button>
        <button class="add-one">Add</button>
        <button class="reset" type="reset">Reset</button>
        <button class="cancel">Cancel</button>
      </div>
    </form>
  </section>

  <section class="edit">
    <form class="subject" novalidate>
      <?php getFields(); ?>
      <div class="btn-group">
        <button class="save">Save</button>
        <button class="cancel">Cancel</button>
      </div>
    </form>
  </section>

  <div class="header">
    <div class="name">Name</div>
    <div class="actions">Actions</div>
  </div>
  <div class="subjects"></div>
</div>
<script src="/js/error-manager.js"></script>
<script src="/js/admin/subjects/list-manager.js"></script>
<script src="/js/admin/subjects/form-manager.js"></script>
<script src="/js/admin/subjects/add-form-manager.js"></script>
<script src="/js/admin/subjects/edit-form-manager.js"></script>
