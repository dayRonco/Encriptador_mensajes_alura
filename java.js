const d = document;
const txtEncriptar = d.querySelector(".cajatexto");
const IMGmuneco = d.querySelector(".muneco");
const imgloader = d.querySelector(".loader");
const Imgojos = d.querySelector(".ojos");
const resultado = d.querySelector(".titulo");
const parrafo = d.querySelector(".texto")
const btnencriptar = d.querySelector(".encriptar");
const btndesencriptar = d.querySelectorAll(".encriptar");
const btncopiar = d.querySelector(".copiar");


const llaves=[
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
];

function encriptarMensaje(mensaje){
    let mensajeEncriptado = "";
    for (let i=0; i<mensaje.length; i++){
        let letra = mensaje[i];
        let encriptado = letra;
        for(let j=0; j<llaves.length; j++){
            if(letra=== llaves[j][0]){
                encriptado = llaves [j][1];
                break;
            }
        }
        mensajeEncriptado += encriptado;
    }
    return mensajeEncriptado;
}

function desencriptarMensaje(mensaje){ 
    let mensajeDesencriptado =  mensaje;
    for(let i=0; i<llaves.length; i++){
        let regex =new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex,llaves[i][0]);
    }
    return mensajeDesencriptado;
}

//ocultar elementos
txtEncriptar.addEventListener("input", e=>{
    IMGmuneco.style.display ="none";
    imgloader.classList.remove("hidden");
    resultado.textContent = "Esperando Mensaje..."
    parrafo.textContent = "";
});

//funcion boton encriptar
btnencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let mensaje = txtEncriptar.value.toLowerCase();
    let mensajeEncriptado = encriptarMensaje(mensaje);
    parrafo.textContent = mensajeEncriptado; 
    btncopiar.classList.remove("hidden");
    resultado.textContent = "Mensaje Encontrado"
    imgloader.classList.add("hidden");
});

btndesencriptar[1].addEventListener("click", e=>{
    e.preventDefault();
    let mensaje = txtEncriptar.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    parrafo.textContent = mensajeDesencriptado; 
    btncopiar.classList.remove("hidden");
    resultado.textContent = "Mensaje Encontrado";
    imgloader.classList.add("hidden");
});


btncopiar.addEventListener('click', ()=>{
    let copiartext = parrafo.textContent;
    navigator.clipboard.writeText(copiartext).then(()=>{
       IMGmuneco.style.display = "block";
       imgloader.classList.add("hidden");
       resultado.textContent = "El mensaje fue copiado";
       btncopiar.classList.add("hidden");
       parrafo.textContent = "";  
    })
})
