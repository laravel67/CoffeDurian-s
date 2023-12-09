// Toggle class active
const NavbarNav = document.querySelector('.navbar-nav');
// Ketika humberger menu di klik
document.querySelector('#hamburger-menu').onclick= ()=>{
    NavbarNav.classList.toggle('active');
}

// Klik semberangan
const humberger= document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
    if(!humberger.contains(e.target) && !NavbarNav.contains(e.target)){
        NavbarNav.classList.remove('active');
    }
});