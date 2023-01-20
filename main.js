const form = document.querySelector('form');
const submit = document.querySelector('button');

//Funcion para validar que el formulario este completo
const validacion = ({firstName, lastName, gender, dob, lenguajes = '', country, bio}) => {
    
    const objeto = {firstName, lastName, gender, dob, lenguajes, country, bio}
    const validacionForm = Object.values(objeto).every((elemento) => !elemento == '');
    if(validacionForm){
        return objeto
    }else{
        return `Oye te falta completar el formulario ${firstName} e.e`
    }
}

//Evento principal, llama a la funcion Validacion
submit.addEventListener('click', (event) => {
    event.preventDefault();
    let objetoFinal = {}
    let arreglo = [];
    Array.from(form).forEach((elemento) =>{
        if(elemento.name !='gender' && elemento.name != 'lenguajes'){
            objetoFinal[elemento.name] = elemento.value;
        }else if(elemento.name ==='gender' && elemento.checked){
            objetoFinal[elemento.name] = elemento.value;
        }else if(elemento.name === 'lenguajes' && elemento.checked){
            arreglo.push(elemento.value)
            objetoFinal[elemento.name] = [].concat(arreglo);
        } 
    })
    console.log(validacion(objetoFinal));
})

