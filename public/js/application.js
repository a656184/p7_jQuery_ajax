$(document).ready(function(){
  $("#get_color").on('click', function(e){
    e.preventDefault();
    $.ajax({
      type: 'get',
      url: '/colors',
    }).done(function(response) {
      $("ul li:nth-child(" + response.cell + ")").css('background-color', response.color);
    });
  });
});
