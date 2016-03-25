// $(document).ready(function() {

  function markActivePanel(el) {
    $('.panel-active').removeClass('panel-active')
    // console.log(el.id, 'has been clicked.')
    el.className = el.className+' panel-active'
    drag()
    resize()
  }

  function addImage() {
    // need to be able to specify image src and element it will be posted to

    var panel = document.getElementsByClassName('panel-active')
    console.log(panel[0].id)
    document.getElementById(panel[0].id).innerHTML='<img src="./images/smiley.png"/> '
    document.getElementById(panel[0].id).classList.remove('panel-active')
  }

 function drag() {
   $('.panel-active').draggable();
   $('.panel-active').resizable({
    animate: true
   });
 }

 function resize() {

 }
 // });
// }
//LOOK UP SVG
