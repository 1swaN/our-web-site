var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  const header = document.querySelector('.header')
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
    header.style.boxShadow = ' 0 16px 20px rgba(0,0,0,0.2);'
    header.style.transition = 'all .7s ease-out'
  
  } else {
    document.querySelector(".header").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}