import ReactDOM from "react-dom";

import Webcontent from "./App";

ReactDOM.render( < Webcontent / > , document.getElementById('root'))


const open_menu = document.querySelector('.open-menu');
const menu = document.querySelector('.menu');
const open_icon = document.querySelector('.open-menu .open');
const close_icon = document.querySelector('.open-menu .close');


open_menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    open_icon.classList.toggle('active');
})