

const formulario = document.querySelector("#formulario")
const btnEnviar = document.querySelector('#btnEnviar')
const btnCargando = document.querySelector('#btnCargando')

/* evento y funcion para validar formulario */

formulario.addEventListener('submit',e => {
    /* console.group("me diste click") */
    e.preventDefault();

    const datos = new FormData(formulario)

    console.log('campo Email', datos.get('emailCampo'))
    console.log('campo Password', datos.get('passCampo'))
    console.log('campo Check Box', datos.get('checkCampo'))

    formulario.reset();
})