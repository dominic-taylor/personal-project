module.exports = {
  addImage: function () {
    var img = '/test/images/100x100-smile.png'

    var panel = document.getElementById('panel')
    var ctx = panel.getContext('2d')

    ctx.drawImage(img)
  }

}
