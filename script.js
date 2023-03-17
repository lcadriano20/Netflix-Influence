let cardRef = document.querySelector('.segundasection__cards')
let form = document.querySelector('.section__form')
let btn = document.querySelector('.section__btn')
let rating = document.querySelector('.section__rating')
let url = document.querySelector('.section__url')
let ageRestriction = document.querySelector('#ageRestriction')


rating.addEventListener('keyup',(e) => validarRating(e.target.value))
ageRestriction.addEventListener('keyup',(e) => validarAge(e.target.value))
url.addEventListener('keyup',(e) =>validarUrl(e.target.value))
btn.addEventListener('click',(e) =>adicionarCurso(e))


const cursoData = { 
    titulo: '',
    ageRestriction: '',
    url: ''
}
const ValidaCampos = () => {
    
        const ratingValido = rating.value.length >= 4;
        const ageValida = ageRestriction.value.length >= 4;
        const urlValida = url.value.length >=4
      
        if (ratingValido && ageValida && urlValida) {

          btn.disabled = false;
        } else {

         btn.disabled = true;
        }
      
    }


let validarRating= (rating) => {
    cursoData.rating = rating

    ValidaCampos()
}

const validarAge = (ageRestriction) => {
    cursoData.ageRestriction= ageRestriction
    ValidaCampos()
 

}
const validarUrl = (url) => {
    cursoData.url = url
    ValidaCampos()
}

const adicionarCurso = (e) => {
    e.preventDefault()

    cardRef.innerHTML += `
    <div class="card">

        <div class="card__rating">
            <img src="${cursoData.rating}" class="card__rating">
        </div>

        <div>
            <img src="${cursoData.url}" class="card__url">
            <img src="${cursoData.ageRestriction}" class="card__ageRestriction">
        </div>
        
    </div>
`
form.reset()
 ValidaCampos()
}
