let ListaPosts = [];

const  ObjPost= {
  fecha: "",
  titulo: "",
  texto: "",
};

const form = document.querySelector("#form");
const InsertTittle = document.querySelector("#titulo");
const InsertText = document.querySelector("#texto");
const botonPublicar = document.querySelector("#btn-publicar");

function crearPost() 
{
    ListaPosts.push({ ...ObjPost });
    mostrarPosts();
    form.reset();
    limpiarPost();
}


function limpiarPost() 
{
    ObjPost.fecha = "";
    ObjPost.titulo = "";
    ObjPost.texto = "";
}

function refreshHTML() {
  const divPosts = document.querySelector(".div-posts");
  while (divPosts.firstChild) {
    divPosts.removeChild(divPosts.firstChild);
  }
}

function mostrarPosts() {
  refreshHTML();
  const divPosts = document.querySelector(".div-posts");

  ListaPosts.forEach((nota) => {
    const { fecha, titulo, texto } = nota;

    const parrafo = document.createElement("p");
    parrafo.textContent = `${fecha} - ${titulo} - ${texto} - `;
    parrafo.dataset.id = fecha;

    const hr = document.createElement("hr");
    divPosts.appendChild(parrafo);
    divPosts.appendChild(hr);
  });
  }
;
