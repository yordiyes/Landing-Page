document.addEventListener("DOMContentLoaded",(event0=>{
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");
    const motoContainer = document.getElementById('moto-container')

    menuIcon.addEventListener('click', ()=>{
        navLinks.classList.toggle("active")
        if(navLinks.classList.contains("active") )
            motoContainer.classList.remove('top-padding');
        else{
            motoContainer.classList.add('top-padding');
        }
    })
}))
const navbar = document.querySelector('.nav-bar');
const linkContainer = document.getElementById('nav-links');
window.addEventListener('scroll', ()=>{
    navbar.classList.toggle('navbar-on-scroll', window.scrollY > 0);
    linkContainer.classList.toggle('nav-links-sm', window.scrollY > 0);
})


