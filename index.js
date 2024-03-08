let moreBtn = document.querySelector('.moreBtn')
let hideMenusection = document.querySelector('.hideMenusection')

let menushow = false;
moreBtn.addEventListener('click', (e) => {
    if (menushow === false) {
        e.preventDefault();
        hideMenusection.style.display = 'block'
        menushow = true;
    } else {
        e.preventDefault();
        hideMenusection.style.display = 'none'
        menushow = false
    }
})


let menuBtn = document.querySelector('.MenuBtn');
let menuLinkSection = document.querySelector('.menuLinkSection');
let loginSection = document.querySelector('.loginSection');
let desktopNavbar = document.querySelector('.desktop-navbar');
let menuTab = document.querySelector('.menuTab');



menuBtn.addEventListener('click', (e) => {
    if (menushow === false) {
        e.preventDefault();
        hideMenusection.style.display = 'block'
        menuLinkSection.style.display = 'block'
        loginSection.style.display = 'block'
        desktopNavbar.style.backgroundColor = 'blue'
        menuTab.style.color = 'white'
        menushow = true;
    } else {
        e.preventDefault();
        hideMenusection.style.display = 'none';
        menuLinkSection.style.display = 'none'
        loginSection.style.display = 'none'
        menuTab.style.color = 'black'
        
        desktopNavbar.style.backgroundColor = 'white'
        menushow = false
    }
})