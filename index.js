var menudiv = document.querySelector('.MenuDiv')
var sidebar = document.querySelector('.sidebar')
var cross = document.querySelector('.cross')
var bottombar = document.querySelector('.bottombar')
var bottombar2 = document.querySelector('.bottombar2')

var dealerDiv = document.querySelector('.dealerDiv')
var cross2 = document.querySelector('.cross2')
var cross3 = document.querySelector('.cross3')
var lilast = document.querySelector('.li-last')
var closediv = document.querySelector('.closer-div')
var phantom = document.querySelector('.phantom')
var Downimg = document.querySelector('.Downimg')
var closerdiv2 = document.querySelector('.closer-div2')
var move = document.querySelectorAll('.move')
var button1 = document.querySelector('.button-1')
var button2 = document.querySelector('.button-2')
var rangebox1 = document.querySelector('.rangebox1')
var rangebox2 = document.querySelector('.rangebox2')
const form = document.querySelector('form');
const checkbox = document.querySelector('#privacy');

button2.addEventListener('click', () => {
    rangebox1.style.visibility = 'hidden'
    rangebox2.style.visibility = 'visible'

})
button1.addEventListener('click', () => {
    rangebox2.style.visibility = 'hidden'
    rangebox1.style.visibility = 'visible'
})

menudiv.addEventListener('click', () => {
    sidebar.style.left = '0'
    sidebar.style.transition = 'all ease-in 1s'
    move[0].classList.add('move1')
    move[1].classList.add('move2')
    move[2].classList.add('move3')
    move[3].classList.add('move4')
    move[4].classList.add('move5')
    move[5].classList.add('move6')
    move[6].classList.add('move7')

    for (var i = 0; i < move.length; i++) {
        move[i].classList.add('anyone')
    }
    move.forEach((e) => {
        e.style.opacity = 0
    })
    move[0].classList.remove('movea')
    move[1].classList.remove('moveb')
    move[2].classList.remove('movec')
    move[3].classList.remove('moved')
    move[4].classList.remove('movee')
    move[5].classList.remove('movef')
    move[6].classList.remove('moveg')
})
cross.addEventListener('click', () => {
    sidebar.style.left = '-635px'

    sidebar.style.transition = 'all ease-in 1s 2.4s'
    move.forEach((e) => {
        e.style.opacity = 1
    })
    move[0].classList.remove('move1')
    move[1].classList.remove('move2')
    move[2].classList.remove('move3')
    move[3].classList.remove('move4')
    move[4].classList.remove('move5')
    move[5].classList.remove('move6')
    move[6].classList.remove('move7')

    for (var i = 0; i < move.length; i++) {
        move[i].classList.remove('anyone')
    }


    move[0].classList.add('movea')
    move[1].classList.add('moveb')
    move[2].classList.add('movec')
    move[3].classList.add('moved')
    move[4].classList.add('movee')
    move[5].classList.add('movef')
    move[6].classList.add('moveg')
})

dealerDiv.addEventListener('click', () => {
    console.log(dealerDiv);
    bottombar.style.top = '0'
})
cross2.addEventListener('click', () => {
    bottombar.style.top = '100vh'
})

lilast.addEventListener('click', () => {
    console.log(dealerDiv);
    bottombar2.style.top = '0'
})
cross3.addEventListener('click', () => {
    bottombar2.style.top = '100vh'
})


phantom.addEventListener('click', () => {
    console.log(closediv);
    closediv.classList.toggle('close')
})
sidebar.addEventListener('click', () => {
    console.log(sidebar, 'clickiiing');
    sidebar.style.left = '-100%'
})
phantom.addEventListener('click', () => {
    closerdiv2.classList.toggle('close2')
})
form.addEventListener('submit', function (event) {
    if (!checkbox.checked) {
        alert('Please accept the Privacy Policy');
        event.preventDefault();
    }
});