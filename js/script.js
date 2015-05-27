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

  $('#contact-show').click(function(){
    $('#modal-contact').hide();
  });
  //「閉じる」ボタンが押されたときに
  //「#modal-contact」を隠してください

  $('#submit-btn').click(function(){
    $('#contact-form').html(<div class="thanks-msg">お問い合わせいただきありがとうございます。<br>内容が確認でき次第返信をさせていただきますので、<br>今しばらくお待ち下さい。</div>);
  });
  //「送信」ボタンが押されたときに
  //「#contact-form」の中身を書きかえてください
	
});