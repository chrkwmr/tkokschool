$(function(){

	$('#read-more').click(function(){
		$('#more-text').slideDown('slow',function(){
      $('#read-more').hide();
      $('#close').show();
    });

	});

  $('#close').click(function() {
    /* Act on the event */
    $('#more-text').slideUp('slow',function(){
      $('#read-more').show();
      $('#close').hide();
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