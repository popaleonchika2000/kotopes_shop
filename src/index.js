import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Password } from '@mui/icons-material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach(password => {
      if (password.type = "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    })
  })
})



// https://www.youtube.com/watch?v=kQqJz7j2gBU ссылка на видео, чтобы сделать карточки товаров
// https://dzen.ru/video/watch/64df2259a6dd3261d867fac4?f=d2d выпадающее меню
// https://www.youtube.com/watch?v=ROqsYIVCJ5Y регистрация и вход