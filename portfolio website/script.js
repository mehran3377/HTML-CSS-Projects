window.addEventListener('scroll', ()=>{

    let nav = document.querySelector('nav');
    let windowPosition = window.scrollY > 0;
    nav.classList.toggle('active', windowPosition);

})