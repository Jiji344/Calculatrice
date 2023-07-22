import './style.css'

const screen = document.querySelector ('.screen')



const toucheUn = document.querySelector('.une')
toucheUn.addEventListener('click',ftoucheUn) 

function ftoucheUn() {
    screen.textContent = 1;
    }

const toucheDeux = document.querySelector('.deux')
toucheDeux.addEventListener('click',ftoucheDeux) 

function ftoucheDeux() {
    screen.textContent = 2;
    }

const toucheTrois = document.querySelector('.trois')
toucheTrois.addEventListener('click',()=> console.log('3')) 

const touchePlus = document.querySelector('.plus')
touchePlus.addEventListener('click',()=> console.log('+')) 

const toucheQuatre = document.querySelector('.quatre')
toucheQuatre.addEventListener('click',()=> console.log('4')) 

const toucheCinq = document.querySelector('.cinq')
toucheCinq.addEventListener('click',()=> console.log('5')) 

const toucheSix = document.querySelector('.six')
toucheSix.addEventListener('click',()=> console.log('6')) 

const toucheDivise = document.querySelector('.divise')
toucheDivise.addEventListener('click',()=> console.log('/')) 

const toucheSept = document.querySelector('.sept')
toucheSept.addEventListener('click',()=> console.log('7')) 

const toucheHuit = document.querySelector('.huit')
toucheHuit.addEventListener('click',()=> console.log('8')) 

const toucheNeuf = document.querySelector('.neuf')
toucheNeuf.addEventListener('click',()=> console.log('9')) 

const toucheFois = document.querySelector('.fois')
toucheFois.addEventListener('click',()=> console.log('*')) 

const touchePoint = document.querySelector('.point')
touchePoint.addEventListener('click',()=> console.log('.')) 

const toucheZero = document.querySelector('.zero')
toucheZero.addEventListener('click',()=> console.log('0')) 

const toucheReset = document.querySelector('.reset')
toucheReset.addEventListener('click',()=> console.log('c')) 

const toucheMoins = document.querySelector('.moins')
toucheMoins.addEventListener('click',()=> console.log('-')) 

const toucheEgal = document.querySelector('.egal')
toucheEgal.addEventListener('click',()=> console.log('=')) 