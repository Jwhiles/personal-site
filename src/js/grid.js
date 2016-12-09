var points = document.querySelectorAll('button')

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var color1 = getRandomColor()
var color2 = getRandomColor()

function addEvents (xs, f) {
  for (var i = 0; i < xs.length; i++) {
    xs[i].addEventListener('mouseenter', f)
  }
}

addEvents(points, function () {
  console.log('hello');
  this.style.backgroundColor = color1
  this.addEventListener('mouseenter', () => {
    this.style.backgroundColor = color2
  })
})
