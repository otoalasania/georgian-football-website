//SCROLL UP START//
window.addEventListener('scroll' , function(){
    var scroll =document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 500)
})

function scrollToTop(){
    window.scrollTo({
        top: 0
    })
}
//SCROLL UP END//

//LOADER START//
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; 
});
//LOADER END//