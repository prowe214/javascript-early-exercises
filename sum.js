var arr = [1,2,3];

var sum = function(arr) {
  var i = 0;
  var result = 0

  while (i < arr.length) {
    result = result + arr[i];
    i++;
  };

  return result;
}

console.log(sum(arr));
