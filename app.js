// Back to top button

 // Get the button
 let mybutton = document.getElementById("myBtn");

 // When page is scrolled
 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
 if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
 } else {
     mybutton.style.display = "none";
 }
 }

 // When back button is clicked
 function topFunction() {
 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
 }