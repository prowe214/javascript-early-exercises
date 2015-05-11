var arr = [10,20,30];

var average = function(arr) {
  var i = 0;
  var sum = 0

  while (i < arr.length) {
    sum = sum + arr[i];
    i++;
  }

  var average = sum / arr.length;

  return average;
}

console.log(average(arr));
