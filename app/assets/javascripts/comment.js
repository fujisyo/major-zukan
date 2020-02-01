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
  var reloadComments = function() { 
    if(window.location.href.match(/\/tweets\/\d+\/comments/)){
      last_comment_id = $(".umain__comment__title__content__name").last().data("comment-id")
      $.ajax({
        url: 'api/comments',
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
        $('.umain__comment__title__content').append(insertHTML);
        $('.umain__comment__title__content').animate({scrollTop: $('.umain__comment__title__content')[0].scrollHeight});
        }
      })
      .fail(function() {
        alert("更新できませんでした");
      });
    }
  }
  setInterval(reloadComments, 7000);
  
})
