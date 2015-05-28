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
//readmore

	$('.gallery-item').hover(
    function(){
      $(this).children('.gallery-cover').fadeIn();
    },
    function(){
      $(this).find('.gallery-cover').fadeOut();
    }
  );
//gallery-item

  //「お問い合わせ」ボタンが押されたときに
  //「#modal-contact」を表示してください
  $('#contact-show').click(function(){
    $('#modal-contact').fadeIn('slow');
  });
  // 「閉じる」ボタンが押されたときに
  // 「#modal-contact」を隠してください
  $('#close-contact').click(function(){
    $('#modal-contact').fadeOut('slow');
  });
  
  //「送信」ボタンが押されたときに
  //「#contact-form」の中身を書きかえてください
  $('#submit-btn').click(function(){
    $('#contact-form').html('<div class="thanks-msg">お問い合わせいただきありがとうございます。</div>');
  });
//contact

  //「.step-list」のどれかが押されたときに
  $('.step-list').click(function(){
    var index = $(this).index();

    //「.step-list」全体から「active」クラスを取り除き
    $('.step-list').removeClass('active');

    //押されたものだけに「active」クラスを与え
    $(this).addClass('active');

    //「.explain」全体から「active」クラスを取り除き
    $('.explain').removeClass('active');

    //押された「.step-list」と同じインデックス番号をもつものだけに「active」クラスを与える
    $('.explain').eq(index).addClass('active');
  });
//textile

});