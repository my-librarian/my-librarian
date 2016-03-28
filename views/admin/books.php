<?php
function getFields() {
?>
<div class="txt-group">
  <input type="text" class="txt accessno" placeholder="Accession No (#####)">
  <input type="text" class="txt rackno" placeholder="Rack No (R-##-X-##)">
  <input type="text" class="txt adddate" placeholder="Addition Date (YYYY-MM-DD)" readonly>
  <input type="text" class="txt title" placeholder="Book Title">
  <input type="text" class="txt subject" placeholder="Subject (type to search)">
  <input type="text" class="txt author" placeholder="Author (type to search)">
</div>
<ul class="errors"></ul>
<?php
}
?>

<section class="book-list">

  <section class="add">
    <div class="add-book">
      <button>Add Book</button>
    </div>
    <form class="book" novalidate>
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
    <form class="book" novalidate>
      <?php getFields(); ?>
      <div class="btn-group">
        <button class="save">Save</button>
        <button class="cancel">Cancel</button>
      </div>
    </form>
  </section>

  <div class="header">
    <div class="accessno">
      AccnNo.
    </div>
    <div class="title">
      Title
    </div>
    <div class="actions">
      Actions
    </div>
  </div>
  <div class="books">

  </div>
</section>
<script src="/js/error-manager.js"></script>
<script src="/js/admin/books/list-manager.js"></script>
<script src="/js/admin/books/form-manager.js"></script>
<script src="/js/admin/books/add-form-manager.js"></script>
<script src="/js/admin/books/edit-form-manager.js"></script>
