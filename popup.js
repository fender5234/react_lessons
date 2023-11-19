const popup = document.querySelector('.popup-body');
const popupButton = popup.querySelector('.popup-body__button');

const popupHide = () => {
  popupButton.addEventListener('click', () => {
    popup.classList.remove('popup-body--active');
  });
};

const popupShow = () => {
  popup.classList.add('popup-body--active');
};

export { popupHide, popupShow };

