const openBtn = document.querySelector('#open');
const modal = document.querySelector('.modal-wrapper');
const closeBtn = document.querySelector('#close');

openBtn.onclick = () => {
  modal.style.display = 'flex';
}

closeBtn.onclick = () => {
  modal.style.display = 'none';
}