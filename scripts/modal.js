const buttonMore = document.querySelector('.subscribe__link_more');
const popupModal = document.querySelector('.modal');
const modalClose = popupModal.querySelector('.modal__close');
const ESCAPE_KEY = 'Escape';

function openPopup(popupName) {
  popupName.classList.add('modal_opened');

  // добавляем обработчики закрытия по Escape и клику на overlay
  document.addEventListener('keydown', handleHotkey);
  document.addEventListener('mousedown', handleOverlayClick);
}

function closePopup(popupName) {
  popupName.classList.remove('modal_opened');
  
  // удаляем обработчики закрытия по Escape и клику на overlay
  document.removeEventListener('keydown', handleHotkey);
  document.removeEventListener('click', handleOverlayClick);
}

function handleHotkey(evt) {
  // проверяем есть ли открытый попап и только тогда закрываем
  const activePopup = document.querySelector('.modal_opened');
  if (activePopup && evt.key === 'Escape') { 
    closePopup(activePopup);
  }
}

function handleOverlayClick(evt) {
  const activePopup = document.querySelector('.modal_opened');
  
  if (activePopup && evt.target === activePopup ) {
    closePopup(activePopup);
  }
}

buttonMore.addEventListener('click', () => { openPopup(popupModal); });
modalClose.addEventListener('click', () => { closePopup(popupModal) });