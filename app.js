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


// FANS PAGE START ////
const reviews = [
    {
        id: 1,
        name: "name1 lastname1",
        job: "city1",
        img: "https://i.ibb.co/GxvmX00/unnamed1.jpg",
        text: "Attended 48 matches",
    },
    {
        id: 2,
        name: "name2 lastname2",
        job: "city2",
        img: "https://i.ibb.co/hfWyXkv/unnamed2.jpg",
        text: "Attended 41 matches",
    },
    {
        id: 3,
        name: "name3 lastname3",
        job: "city3",
        img: "https://i.ibb.co/1dFv0hw/unnamed3.jpg",
        text: "Attended 30 matches",
    },
    {
        id: 4,
        name: "name4 lastname4",
        job: "city4",
        img: "https://i.ibb.co/SmzQBsR/unnamed4.jpg",
        text: "Attended 28 matches",
    },
    ];
    const img = document.getElementById("person-img");
    const author = document.getElementById("author");
    const job = document.getElementById("job");
    const info = document.getElementById("info");

    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentItem = 0;

    window.addEventListener('DOMContentLoaded', function (){
        showPerson();
    });

    function showPerson(){
        const item = reviews[currentItem];
        img.src = item.img;
        author.textContent = item.name;
        job.textContent = item.job;
        info.textContent = item.text;
    }

    nextBtn.addEventListener('click', function(){
        currentItem++;
        if(currentItem > reviews.length - 1){
            currentItem = 0;
        }
        showPerson();
    });

    prevBtn.addEventListener('click', function(){
        currentItem--;
        if(currentItem < 0){
            currentItem = reviews.length - 1;
        }
        showPerson();
    });
// FANS PAGE START ////