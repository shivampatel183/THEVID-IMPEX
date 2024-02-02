
// import LocomotiveScroll from 'locomotive-scroll';
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider() {
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})




$(function() {
    setTimeout(function() { $(".preloaderBg").fadeOut(1500); }, 1000)
    
    })
function scroll_l() {
    var left = document.querySelector(".gree");
    left.scrollBy(-400, 0)
}

function scroll_r() {
    var right = document.querySelector(".gree");
    right.scrollBy(400, 0)
}


ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1500,
    delay: 200
});

ScrollReveal().reveal('.gree , .d41 ,.exp1', { delay: 300,origin:'left' });    
ScrollReveal().reveal('.pera , .w1 ,h1' , { delay: 300 });
ScrollReveal().reveal('.d32 ,.exp2', { delay: 300 ,origin:'right'});





var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos >= currentScrollPos) {
    document.getElementById("nevbar").style.top = "0";
  } else {
    document.getElementById("nevbar").style.top = "-72px";
  }
  prevScrollpos = currentScrollPos;
}

  
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $(".slider .list .item img").css({
      width: (100 + scroll/40) + "%"
    })
  })


  const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});
  

