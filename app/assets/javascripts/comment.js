$(function(){
  function buildHTML(comment){
    var html = `<div class="umain__comment__title__content__name" data-comment-id="${comment.id}">
                <a class="umain__comment__title__content__name__user" href=/users/${comment.user_id}>${comment.user_name}</a>
                  <div class="umain__content__title__content__name__text">
                    ${comment.text}
                    <div class="umain__comment__title__content__name__text__time">
                      ${comment.created_at}
                    </div>
                  </div>
                </div>`
    return html;
  }
  $('#new_comment').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.umain__comment__title__content').append(html);
      $('.umain__comment__field__text').val('');
      $('.umain__comment__field__submit').prop('disabled', false);
    })
    .fail(function(){
      alert('コメントできません');
    });
  });
  if (location.pathname.match()){ //もし現在のURLパスがindexアクションだったら（http://localhost:3000/fruitsもしくはhttp://localhost:3000）
    setInterval(reloadMessages, 7000);//5000ミリ秒ごとにupdateという関数を実行する
  }
  var reloadMessages = function() { 
    if($('.umain__comment__title__content__name')[0]){
      var last_comment_id = $(".umain__comment__title__content__name").last().data("message-id")
      $.ajax({
        url: location.href,
        type: 'GET',
        dataType: 'json',
        data: {id: last_comment_id}
      })
      .done(function(comments) {
        var insertHTML = '';
        $.each(comments, function(i, comment){
          insertHTML += buildHTML(comment)
        });
        if (comments.length != 0){
        $('.umain__comment__title__content__name').append(insertHTML);
        $('.umain__comment__title__content__name').animate({scrollTop: $('.umain__comment__title__content__name')[0].scrollHeight});
        }
      })
      .fail(function() {
        alert('error');
      });
    }
  }
  
})
