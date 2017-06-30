$(document).ready(function()){

$('.button').on("click",function(){
      $(".button").addClass("class");
      $(".button").text("Added to Cart!");

      var cartCount = parseInt($(".js-cart-count").text());
      cartCount += 1;
      $(".js-cart-count").text(cartCount);

      window.setTimeout(function() {
      $(".button").text("Buy Now!");
      $(".button").removeClass("active");
    }, 500);

    });
