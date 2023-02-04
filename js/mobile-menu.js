(() => {
  const refs = {
    openModalBtn: document.querySelector("[menu-modal-open]"),
    closeModalBtn: document.querySelector("[menu-modal-close]"),
    menu: document.querySelector("[menu-modal]"),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle("is-open");
    refs.body.classList.toggle("no-scroll");
  }
})();
