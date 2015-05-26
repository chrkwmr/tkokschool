$(function(){
	$('#read-more').click(function(){
		$('#more-text').slideToggle('slow');
	});

	$('.gallery-item').hover(
    function(){
      $(this).children('.gallery-cover').fadeIn();
    },
    function(){
      $(this).find('.gallery-cover').fadeOut();
    }
  );
	
});