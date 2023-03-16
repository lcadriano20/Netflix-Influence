let cardRef = document.querySelector('.segundasection__cards')
let form = document.querySelector('.section__form')
let btn = document.querySelector('.section__btn')
let rating = document.querySelector('.section__rating')
let url = document.querySelector('.section__url')
let genero = document.querySelector('.section__genero')


rating.addEventListener('keyup',(e) => validarRating(e.target.value))
genero.addEventListener('keyup',(e) => validarDesc(e.target.value))
url.addEventListener('keyup',(e) =>validarUrl(e.target.value))
btn.addEventListener('click',(e) =>adicionarCurso(e))


let cursoData = { 
    titulo: '',
    genero: '',
    url: ''
}
let ValidaCampos = () => {
    
        const ratingValido = rating.value.length >= 4;
        const generoValida = genero.value.length >= 4;
        const urlValida = url.value.length >=4
      
        if (ratingValido && generoValida && urlValida) {

          btn.disabled = false;
        } else {

         btn.disabled = true;
        }
      
    }


let validarRating= (rating) => {
    cursoData.rating = rating

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

        <div class="card__rating">
            <img src="${cursoData.rating}" class="card__rating">
        </div>

        <div>
            <img src="${cursoData.url}" class="card__url">
        </div>
        
        <div class="card__genero">
            <p>${cursoData.genero}</p>
        </div>
    </div>
`
form.reset()
 ValidaCampos()
}
