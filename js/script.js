$(function(){

	$('#read-more').click(function(){
		$('#more-text').slideDown('slow',function(){
      $('#read-more').fadeOut();
    });

	});

  $('#close').click(function() {
    /* Act on the event */
    $('#more-text').slideUp('slow',function(){
      $('#read-more').fadeIn();
    });
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