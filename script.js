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
    rating: '',
    ageRestriction: '',
    url: ''
}


const ValidaCampos = () => {
    
        const urlValida    = url.value.length >=4
      
        if (urlValida) {

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

    if(cursoData.rating == 5) {
        cursoData.rating = 'https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474__340.png'
    }


    if(cursoData.ageRestriction == 16) {
        cursoData.ageRestriction = 'https://static.vecteezy.com/system/resources/previews/018/723/340/original/age-rating-sign-over-16-on-transparent-background-free-png.png'
    }
    if(cursoData.ageRestriction == 14) {
        cursoData.ageRestriction = 'https://static.vecteezy.com/system/resources/previews/018/251/258/non_2x/age-rating-sign-over-14-on-transparent-background-free-png.png'
    }


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
