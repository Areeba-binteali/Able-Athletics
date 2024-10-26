let topbar = document.getElementById('topbar');
let mobileMenu = document.getElementById('mobile-menu');
let card1 = document.getElementById('card-1');
let card1Image = document.getElementById('card-1-img');
let card2 = document.getElementById('card-2');
let card2Image = document.getElementById('card-2-img');
let card3 = document.getElementById('card-3');
let card3Image = document.getElementById('card-3-img');
let card4 = document.getElementById('card-4');
let card4Image = document.getElementById('card-4-img');

function removeTopbar(){
    topbar.style.minHeight = 0;
    topbar.style.height = 0;
    mobileMenu.style.top = '15%';
}

function openMenu(){
    mobileMenu.style.height = '100%';
    if( topbar.style.height !== '0px'){
        mobileMenu.style.top = '140px';
    }
    else{
        mobileMenu.style.top = '15%';
    }
}
function closeMenu(){
    mobileMenu.style.height = 0;
}


card1.addEventListener('mouseenter', () =>{
    card1Image.src = './assests/images/running-blue.png';
});
card1.addEventListener('mouseleave', () =>{
    card1Image.src = './assests/images/running.png';
});

card2.addEventListener('mouseenter', () =>{
    card2Image.src = './assests/images/volunteering-blue.png';
});
card2.addEventListener('mouseleave', () =>{
    card2Image.src = './assests/images/volunteering.png';
});

card3.addEventListener('mouseenter', () =>{
    card3Image.src = './assests/images/consultation-blue.png';
});
card3.addEventListener('mouseleave', () =>{
    card3Image.src = './assests/images/consultation.png';
});

card4.addEventListener('mouseenter', () =>{
    card4Image.src = './assests/images/coaching-blue.png';
});
card4.addEventListener('mouseleave', () =>{
    card4Image.src = './assests/images/coaching.png';
});
// jQuery(document).ready(function($){
// $(".close-class").click(function(){
//     $("#topbar").slideToggle();
//   });
// });