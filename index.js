// module.exports = {
  function markActivePanel(el) {
    console.log(el.id, 'has been clicked.')
    console.log(el.className)
    el.className = el.className+' panel-active'
    return (el.id)
  }

  function addImage() {
    // need to be able to specify image src and element it will be posted to

    var panel = document.getElementsByClassName('panel-active')
    console.log(panel[0].id)
    document.getElementById(panel[0].id).innerHTML='<img src="./images/smiley.png"/> '
  }

// }
//LOOK UP SVG
