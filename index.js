import { popupHide, popupShow } from './popup.js';

document.addEventListener('DOMContentLoaded', () => {
  const formAuthentication = document.querySelector('.form');

  if (!formAuthentication) {
    return;
  }

  const inputLogin = formAuthentication.querySelector('#login');
  const inputPass = formAuthentication.querySelector('#pass');

  formAuthentication.addEventListener('submit', (event) => {
    event.preventDefault();
    if (inputLogin.value && inputPass.value) {
      // Храним данные из полей в json
      const userdata = JSON.stringify({
        login: inputLogin.value,
        password: inputPass.value,
      });
      // Ну если будет реальный фетч до данные из JSONа выше в него пойдут
      fetch('https://www.jsonplaceholder.org/').then(() => popupShow());
    }
  });
});

popupHide();

