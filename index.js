$(document).ready(function() {
 $("#page").on('click','.panel', markActivePanel)
 $("#submit-image").click(addImage)
 });

 function destroyPanel(event) {
  $('.panel-active').remove()
 }

 function markActivePanel(event) {
    $('.panel').removeClass('panel-new')
    $('.panel-active').removeClass('panel-active')
    $('.ui-resizable').resizable('destroy')
    $('.ui-draggable').draggable('destroy')

    $(this).addClass("panel-active")
    $(this).draggable({
      cursor: "crosshair"
    })

    $(this).resizable({
          start: function(event, ui) {
            $(this).css({
              position: "relative !important",
              top: "0 !important",
              left: "0 !important"
            });
          },
          stop: function(event, ui) {
            $(this).css({
              position: "",
              top: "",
              left: ""
            });
          }
    })
 }
 function newPanel() {
  var number = $('.panel').length + 1
  $("#page").append("<div id='panel-"+number+"'class='panel panel-new' ></div>")
 }

 function newText() {
  var number = $('panel').length + 1
  $("#page").append(
    "<div id='panel-"+number+"' class='panel arrow_box'><textarea spellcheck='false' id='text-box-"+number+"' class='text-box'>Write Here</textarea> </div>")
 }

  function addImage(event) {
    event.preventDefault()
    var url = document.getElementById('image-url').value
    var panel = document.getElementsByClassName('panel-active')
    document.getElementById(panel[0].id).innerHTML='<img src="'+url+'"/> '
    document.getElementById(panel[0].id).classList.remove('panel-active')
  }
}
