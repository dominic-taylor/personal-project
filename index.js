$(document).ready(function() {
 $(".panel").click(markActivePanel)
 $(".big-panel").click(markActivePanel)
 $("#submit-image").click(addImage)
 });

function destroyPanel(event) {
  $('.panel-active').remove()
}

function markActivePanel(event) {
    $('.panel-active').removeClass('panel-active')
    $(this).addClass("panel-active")
    $(this).draggable({
      cursor: "grab"
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

  function addImage(event) {
    event.preventDefault()
    var url = document.getElementById('image-url').value
    console.log(url)
    var panel = document.getElementsByClassName('panel-active')
    console.log(panel[0].id)
    document.getElementById(panel[0].id).innerHTML='<img src="'+url+'"/> '
    document.getElementById(panel[0].id).classList.remove('panel-active')
  }

