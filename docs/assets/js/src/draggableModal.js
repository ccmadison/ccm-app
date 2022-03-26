let pos1 = 0;
let pos2 = 0;
let pos3 = 0;
let pos4 = 0;

function elementDrag(e) {
  const element = elementDrag.element;

  // e = e || window.event;
  e.preventDefault();

  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;

  element.style.top = `${(element.offsetTop - pos2)}px`;
  element.style.left = `${(element.offsetLeft - pos1)}px`;
}

function closeDragElement() {
  document.onmouseup = null;
  document.onmousemove = null;
}

function draggableModal(modal) {
  document.querySelector('.modal-header').onmousedown = (e) => {
    // e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    elementDrag.element = modal;
    document.onmousemove = elementDrag;
  };
}

export default draggableModal;