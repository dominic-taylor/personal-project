$(document).ready(function() {
 $(".panel").click(markActivePanel)
 $(".big-panel").click(markActivePanel)
 $("#menu").resizable()
 });
// }
//LOOK UP SVG

function destroyPanel(event) {
  $('.panel-active').remove()
}


function markActivePanel(event) {
    $('.panel-active').removeClass('panel-active')
    $(this).addClass("panel-active")
    $(this).draggable({
      cursor: "grabbing"
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

  function addImage() {
    // need to be able to specify image src and element it will be posted to

    var panel = document.getElementsByClassName('panel-active')
    console.log(panel[0].id)
    document.getElementById(panel[0].id).innerHTML='<img src="./images/smiley.png"/> '
    document.getElementById(panel[0].id).classList.remove('panel-active')
  }

 // function drag() {
 //   $('.panel-active').draggable();
 //   $('.panel-active').resizable();
 // }

 // function resize() {

 // }
