'use strict'

const searchImages = async(text) => {
    const key = 'live_Iol31MDJPlIbTExY1LyOcqQoJmQ5wTk7SD01jZjWbyjmpnkNc07eKp2OgIiBy2Rt';
    const url = `https://cdn2.thecatapi.com/images/ebv.jpg/?key=${key}&q=${text}`;
    const response = await fetch(url);
    return response.json();
};

const accessKey = "oQmD9vxtQWOEJVAbPpn9bcMft2ts0rJYI8QdnLtLaaY"

const formEl = document.querySelector("form")
const inputEl = document.getElementById("pesquisa")
const containerImg = document.querySelector(".container-imagens")
const botaoMostrar = document.getElementById(".botao-mostrar-mais")