var list = [];

var i = 0;
var j = 0;

function setup() {
  createCanvas(600, 400);
  list = new Array(width);
  for (var k = 0; k < list.length; k++) {
    list[k] = random(height);
  }
}

function draw() {
  background(0);

  if (i < list.length) {
    for (j = 0; j < list.length - i - 1; j++) {
      var a = list[j];
      var b = list[j + 1];
      if (a > b) {
        flipIt(list, j, j + 1);
      }
    }
  } 
  else {
    noLoop();
  }
  i++;

  for (var l = 0; l < list.length; l++) {
    stroke('darkorange');
    line(l, height, l, height - list[l]);
  }
}

function flipIt(arr, a, b) {
  var last = arr[a];
  arr[a] = arr[b];
  arr[b] = last;
}