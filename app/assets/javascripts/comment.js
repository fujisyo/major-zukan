$(function(){
  function buildHTML(comment){
    var html = `<div class="umain__comment__title__content__name">
                  <a class="umain__comment__title__content__name__user" href=/users/${comment.user_id}>${comment.user_name}</a>
                  ${comment.text}
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
      alert('error');
    })
  })
})