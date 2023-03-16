let cardRef = document.querySelector('.segundasection__cards')
let form = document.querySelector('.section__form')
let btn = document.querySelector('.section__btn')
let titulo = document.querySelector('.section__titulo')
let url = document.querySelector('.section__url')
let genero = document.querySelector('.section__genero')


titulo.addEventListener('keyup',(e) => validarTitulo(e.target.value))
genero.addEventListener('keyup',(e) => validarDesc(e.target.value))
url.addEventListener('keyup',(e) =>validarUrl(e.target.value))
btn.addEventListener('click',(e) =>adicionarCurso(e))


let cursoData = { 
    titulo: '',
    genero: '',
    url: ''
}
let ValidaCampos = () => {
    
        const tituloValido = titulo.value.length >= 4;
        const generoValida = genero.value.length >= 4;
        const urlValida = url.value.length >=4
      
        if (tituloValido && generoValida && urlValida) {

          btn.disabled = false;
        } else {

         btn.disabled = true;
        }
      
    }


let validarTitulo = (titulo) => {
    cursoData.titulo = titulo

    ValidaCampos()
}

let validarDesc = (genero) => {
    cursoData.genero= genero
    ValidaCampos()
 

}
let validarUrl = (url) => {
    cursoData.url = url
    ValidaCampos()
}

let adicionarCurso = (e) => {
    e.preventDefault()
    cardRef.innerHTML += `
    <div class="card">
        <div class="card__genero">
            <p>${cursoData.genero}</p>
        </div>
        <img src="${cursoData.url}" alt="">
    </div>
`
form.reset()
 ValidaCampos()
}
