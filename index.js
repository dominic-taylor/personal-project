// module.exports = {
  function addImage() {
    var panel = document.getElementById('panel')
    var ctx = panel.getContext('2d')
    console.log(ctx.drawImage)
    var img = document.createElement("img")

    img.id = 'image'
    img.src = './images/smiley.png'
    console.log(img)
    ctx.drawImage(img, 0, 0, 100, 100)
    console.log("add img button click avtivating function")
  }

// }
