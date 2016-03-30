$(document).ready(function() {
 $("#page").on('click','.panel', markActivePanel)
 $(".big-panel").click(markActivePanel)
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
  var number = $('.panel').length
  $("#page").append("<div id='panel-"+number+"'class='panel panel-new' ></div>")
 }

  function newText() {
  console.log('hi')
  var number = $('textarea').length
  $("#page").append("<div id='panel-"+number+"'><textarea id='text-box"+number+"'class='panel'></textarea> </div>")
 }




  function addImage(event) {
    event.preventDefault()
    var url = document.getElementById('image-url').value
    console.log(url)
    var panel = document.getElementsByClassName('panel-active')
    console.log(panel[0].id)
    document.getElementById(panel[0].id).innerHTML='<img src="'+url+'"/> '
    document.getElementById(panel[0].id).classList.remove('panel-active')
  }

