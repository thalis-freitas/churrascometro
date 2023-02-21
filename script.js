let meat = 0
let beer = 0
let drinks = 0
let meatForLessTime = 450
let beerForLessTime = 1.2
let drinksForLessTime = 1
let meatForBiggerTime = 650
let beerForBiggerTime = 2
let drinksForBiggerTime = 1.5
let adults = document.getElementById('adults')
let children = document.getElementById('children')
let duration = document.getElementById('duration')
let presentationArea = document.getElementById('presentation-area')
let calculationArea = document.getElementById('calculation-area')
let results = document.getElementById('results')
let settingsArea = document.getElementById('settings-area')

settingsArea.style.display = 'none'
calculationArea.style.display = 'none'
document.body.style.background = '#333333'
document.body.style.color = 'white'

document.querySelector('#settings').addEventListener('click', ()=>{
    settingsArea.style.display = 'inline-block'
    presentationArea.style.display = 'none'
    calculationArea.style.display = 'none'
    results.style.display = 'none'
    settings.style.display = 'none'
})

document.querySelector('#go-back').addEventListener('click', ()=>{
    settingsArea.style.display = 'none'
    presentationArea.style.display = 'none'
    calculationArea.style.display = 'inline-block'
    settings.style.display = 'inline-block'
})

let editMinorMeat = document.getElementById('edit-minor-meat')
let editMinorBeer = document.getElementById('edit-minor-beer')
let editMinorDrinks = document.getElementById('edit-minor-drinks')

let editBiggerMeat = document.getElementById('edit-bigger-meat')
let editBiggerBeer = document.getElementById('edit-bigger-beer')
let editBiggerDrinks = document.getElementById('edit-bigger-drinks')

function validateMeasurements(){
    if (editMinorMeat.value <= 0 ||
        editMinorBeer.value <= 0 ||
        editMinorDrinks.value <= 0 ||
        editBiggerMeat.value <= 0 ||
        editBiggerBeer.value <= 0 ||
        editBiggerDrinks.value <= 0){
        alert('Ops... \nPor favor verifique se inseriu as medidas corretamente, o churrascômetro não aceita valores nulos ou negativos.')
        return false
    }
}

function changeMeasurements(){
    meatForLessTime = editMinorMeat.value
    beerForLessTime = editMinorBeer.value
    drinksForLessTime = editMinorDrinks.value
    meatForBiggerTime = editBiggerMeat.value
    beerForBiggerTime = editBiggerBeer.value
    drinksForBiggerTime = editBiggerDrinks.value
    presentationArea.style.display = 'none'
    calculationArea.style.display = 'inline-block'
    settingsArea.style.display = 'none'
    results.style.display = 'inline-block'
}

document.querySelector('#to-save').addEventListener('click', ()=>{
    settings.style.display = 'inline-block'
    if (validateMeasurements() != false)
        changeMeasurements()
})

let lightMode = document.getElementById('light-mode')
let darkMode = document.getElementById('dark-mode')

darkMode.addEventListener('click', ()=>{
    document.body.style.background = '#333333'
    document.body.style.color = 'white'
    darkMode.style.display = 'none'
    lightMode.style.display = 'inline-block'
})

lightMode.addEventListener('click', ()=>{
    document.body.style.background = '#efefef'
    document.body.style.color = 'black'
    darkMode.style.display = 'inline-block'
    lightMode.style.display = 'none'
})

document.querySelector('#start').addEventListener('click', ()=>{
    presentationArea.style.display = 'none'
    calculationArea.style.display = 'inline-block'
})

function meatWeightFormat() {
    if (meat < 1000) {
        results.innerHTML = `<h3> A quantidade ideal para o churrasco é de: </h3> <p> ${parseInt(meat)}g de carne</p><p>${beer}L de cerveja</p><p>${drinks}L de refrigerante/suco</p>`
    }else{
        results.innerHTML = `<h3> A quantidade ideal para o churrasco é de: </h3> <p> ${(meat / 1000)}kg de carne</p><p>${beer}L de cerveja</p><p>${drinks}L de refrigerante/suco</p>`
    }
}

function validateValues(){
    if (adults.value <= 0 ||
        children.value < 0 ||
        duration.value <= 0) {
        alert('Ops...\nPor favor verifique se inseriu os valores corretamente, é necessário ter no mínimo um adulto e 1 hora de duração.')
        results.style.display = 'none'
        return false
    }
}

function displayResultForLessTime(){
    meat = ((adults.value * meatForLessTime) + (children.value * meatForLessTime * 0.5)).toFixed(2)
    beer = (adults.value * beerForLessTime).toFixed(1)
    drinks = ((adults.value * drinksForLessTime) + (children.value * drinksForLessTime * 0.5)).toFixed(1)
    results.style.display = 'inline-block'
    meatWeightFormat()
}

function displayResultForBiggerTime(){
    meat = ((adults.value * meatForBiggerTime) + (children.value * meatForBiggerTime * 0.5)).toFixed(2)
    beer = (adults.value * beerForBiggerTime).toFixed(1)
    drinks = ((adults.value * drinksForBiggerTime) + (children.value * drinksForBiggerTime * 0.5)).toFixed(1)
    results.style.display = 'inline-block'
    meatWeightFormat()
}

document.querySelector('#calculate').addEventListener('click', ()=>{
    if (validateValues() != false)
        (duration.value <= 6) ? displayResultForLessTime() : displayResultForBiggerTime()
})