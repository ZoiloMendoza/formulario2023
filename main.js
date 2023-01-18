const form = document.querySelector('form');
const submit = document.querySelector('button');

//Funcion para validar que el formulario este completo
const validacion = (objetoFinal) => {
    let valores = Object.values(objetoFinal)
    let claves = Object.keys(objetoFinal)

    let output = valores.every((elemento) => !elemento == '');

    if(output && claves.includes('lenguajes')){
        return objetoFinal
    }else{
        return `Oye te falta completar el formulario ${valores[0]} e.e`
    }
}

//Evento principal, llama a la funcion Validacion
submit.addEventListener('click', (event) => {
    event.preventDefault();
    let objetoFinal = {}
    let arreglo = [];
    Array.from(form).forEach((elemento) =>{
        if(elemento.name != 'button' && elemento.name !='gender' && elemento.name != 'lenguajes'){
            objetoFinal[elemento.name] = elemento.value;
        }else if(elemento.name ==='gender' && elemento.checked){
            objetoFinal[elemento.name] = elemento.value;
        }else if(elemento.name ==='lenguajes' && elemento.checked){
            arreglo.push(elemento.value)
            objetoFinal[elemento.name] = [].concat(arreglo);
        } 
    })
    console.log(validacion(objetoFinal));
})

