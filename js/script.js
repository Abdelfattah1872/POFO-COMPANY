$('a[href^="#"]').on('click', function(event) {

  var target = $( $(this).attr('href') );

  if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: target.offset().top
      }, 1000);
  }
});

$("#myBtn").click(function(){ 
  $("html, body").animate({ scrollTop: 0 }, 1000); 
  return false; 
}); 



$("#clasic").click(function(){
  // action
  $(".card-deck .card:eq(0)").hide("slow")
  $(".card-deck .card:eq(1)").hide("slow")
  $(".card-deck .card:eq(2)").hide("slow")
  $(".card-deck .card:eq(3)").hide("slow")
  // rserve
  $(".card-deck .card:eq(4)").show()
  $(".card-deck .card:eq(5)").show()
  $(".card-deck .card:eq(6)").show()
  $(".card-deck .card:eq(7)").show()
})
$("#new").click(function(){
  $(".card-deck .card:eq(4)").hide("slow")
  $(".card-deck .card:eq(5)").hide("slow")
  $(".card-deck .card:eq(6)").hide("slow")
  $(".card-deck .card:eq(7)").hide("slow")
  // reserve
  $(".card-deck .card:eq(0)").show()
  $(".card-deck .card:eq(1)").show()
  $(".card-deck .card:eq(2)").show()
  $(".card-deck .card:eq(3)").show()
})
$("#all").click(function(){
  $(".card-deck .card").show()
})









// scroll top button
var mybutton = document.getElementById("myBtn");
window.onscroll = function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}