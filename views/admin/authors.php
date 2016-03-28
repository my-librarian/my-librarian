<?php
function getFields() {
?>
<div class="txt-group">
  <input type="text" class="txt name" placeholder="Author Name">
</div>
<ul class="errors"></ul>
<?php
}
?>

<section class="author-list">

  <section class="add">
    <div class="add-author">
      <button>Add Author</button>
    </div>
    <form class="author" novalidate>
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
    <form class="author" novalidate>
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
  <div class="authors"></div>
</div>
<script src="/js/error-manager.js"></script>
<script src="/js/admin/authors/list-manager.js"></script>
<script src="/js/admin/authors/form-manager.js"></script>
<script src="/js/admin/authors/add-form-manager.js"></script>
<script src="/js/admin/authors/edit-form-manager.js"></script>
