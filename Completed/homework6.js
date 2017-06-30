// Buy Button


$(document).ready(function() {

  $('.js-buy').on('click', function() {
    $('.js-buy').addClass('active');
    $('.js-buy').text('Added To Cart!');

    var cartCount = parseInt($('.js-cart-count').text());
    cartCount += 1;
    $('.js-cart-count').text(cartCount);

    window.setTimeout(function() {
      $('.js-buy').text('Buy Now!');
      $('.js-buy').removeClass('active');
    }, 500);
  });


// Active Tabs

$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

});
