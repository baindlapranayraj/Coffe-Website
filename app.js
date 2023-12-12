// Scroll Reveal 

let nav = document.querySelector(".nav-bar");
let heart = document.querySelectorAll(".add-fav");

scrolling();

function scrolling(){

    let animate = ScrollReveal({
        origin :'top',
        distance: '100px',
        duration : '2000',
        delay : "400"
    });
    
    // animateone.reveal('.team-card1');
    animate.reveal(".card");
    animate.reveal('.nav-bar');
    
    let animateone = ScrollReveal({
        origin :'top',
        distance: '100px',
        duration : '2000',
        delay : "400"
    });
    
    animateone.reveal(".card1");
    animateone.reveal('.team-card1');
    animateone.reveal(".twitter");
    
    let animatetwo = ScrollReveal({
        origin :'top',
        distance: '100px',
        duration : '2200',
        delay : "400"
    });
    
    animatetwo.reveal('.team-card2');
    // animatetwo.reveal('.team-card2');
    animateone.reveal(".card2");
    animatetwo.reveal(".linkedin")
    
    let animatethree = ScrollReveal({
        origin :'top',
        distance: '100px',
        duration : '2300',
        delay : "400"
    });
    
    animatethree.reveal(".instagram")
    animatethree.reveal(".team-card3")
    // animatethree.reveal('.team-card3');
    animateone.reveal(".card3");
    
    let animatefour = ScrollReveal({
        origin :'top',
        distance: '100px',
        duration : '2400',
        delay : "400"
    });
    
    animateone.reveal(".card4");
    
    let animatefive = ScrollReveal({
        origin :'top',
        distance: '100px',
        duration : '2500',
        delay : "400"
    });
    
    animateone.reveal(".card5");
    animatefive.reveal(".company-logo");
    
    let animate1 = ScrollReveal({
        origin :'left',
        distance: '60px',
        duration : '2000',
        delay : "400"
    });
    
    animate1.reveal(".nav-links")
    animate1.reveal(".home-txt");
    
    let animate2 = ScrollReveal({
        origin :'right',
        distance: '60px',
        duration : '2000',
        delay : "400"
    });
    
    animate2.reveal(".main-img");
    
}
    
    
    
    
    heart.forEach((a) =>{

    if(a.style.color ==! "red" ){
        a.addEventListener("click",() =>{
            a.style.color = "red";
        })
    }

    else if(a.style.color == "red"){
        a.addEventListener("click",() =>{
            a.style.color = "gainsboro"
        })
    }
    })



// ++++++++++++++++++++++++++++++++ Review Sliding Using Swiper.js +++++++++++++++++++++++++++++++++

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });

//  +++++++++++++++++++++  Close Add-Cart +++++++++++++++++++++++

let close = document.querySelector(".close");
let addCart = document.querySelector(".cart-tab");
let shoppingCart = document.querySelector(".shopping-bag");



shoppingCart.addEventListener("click",() =>{
    addCart.style.transform = "translateX(0)"
    console.log("clicked");
})

close.addEventListener("click",() =>{
    addCart.style.transform = "translateX(100%)"
})

// Adding in cart


let addBtn = document.querySelectorAll(".add-cart");
let ProductListHtml = document.querySelector(".listcart");
let ListProducts;



const initApp = () => {
    // Get Data
    fetch('product.json')
    .then(response => response.json())
    .then(Data => {
        ListProducts = Data
        console.log(ListProducts);
        // addDataToHTML()
    })
}

initApp()