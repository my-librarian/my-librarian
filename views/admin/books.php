<section class="list">
  <section class="add">
    <div class="add-book">
      <button>Add Book</button>
    </div>
    <form class="book" novalidate>
      <div class="txt-group">
        <input type="text" class="txt accessno" placeholder="Accession No (#####)" maxlength="5">
        <input type="text" class="txt rackno" placeholder="Rack No (X-##-X-##)">
        <input type="text" class="txt adddate" placeholder="Addition Date (YYYY-MM-DD)" readonly>
        <input type="text" class="txt title" placeholder="Book Title">
        <input type="text" class="txt subject" placeholder="Subject (type to search)">
        <input type="text" class="txt author" placeholder="Author (type to search)">
      </div>
      <div class="btn-group">
        <button class="add-another">Add Another</button>
        <button class="add-one">Add</button>
        <button class="reset" type="reset">Reset</button>
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
<script src="/js/admin/books/list.js"></script>
<script src="/js/admin/books/add.js"></script>
