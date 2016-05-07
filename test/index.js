var test = require('tape')

test('Testing ComiCapp', function (t) {

  t.equal(addImage(), imgUrlString, 'get image url' )
  t.end()
})

function addImage(event) {
  event.preventDefault()
  var url = document.getElementById('image-url').value
  var panel = document.getElementsByClassName('panel-active')
  document.getElementById(panel[0].id).innerHTML='<img src="'+url+'"/> '
  document.getElementById(panel[0].id).classList.remove('panel-active')
}

var imgUrlString = 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg'
