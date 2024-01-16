(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $(".dropdown-trigger").dropdown();
   // M.toast({html: 'Explica alguma coisa!'})

   $(document).ready(function(){
   $('.collapsible').collapsible();
  });

  }); // end of document ready
})(jQuery); // end of jQuery name space


// var el = document.getElementById('menu'); // elemento alto
// var numPx = '1'; // Quantidade de pixels a contar do TOP até definir a cor

// window.addEventListener('scroll', function() {
//     if (window.scrollY > numPx) {
//       el.classList.add('mudaCor');
//     } else {
//       el.classList.remove('mudaCor');
//     }
// });
