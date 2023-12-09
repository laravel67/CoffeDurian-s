// Toggle class active
const NavbarNav = document.querySelector('.navbar-nav');
// Ketika humberger menu di klik
document.querySelector('#hamburger-menu').onclick= ()=>{
    NavbarNav.classList.toggle('active');
}
// Searching
const searchForm =document.querySelector('.search-form');
const searchBox  =document.querySelector('#search-box');
document.querySelector('#search-button').onclick=(e)=>{
    e.preventDefault();
    searchForm.classList.toggle('active');
    searchBox.focus();
}


// Klik semberangan
const hm =document.querySelector('#hamburger-menu');
const sb =document.querySelector('#search-button');

document.addEventListener('click', function(e){
    if(!hm.contains(e.target) && !NavbarNav.contains(e.target)){
        NavbarNav.classList.remove('active');
    }

    if(!sb.contains(e.target) && !NavbarNav.contains(e.target)){
        searchForm.classList.remove('active');
    }
});




