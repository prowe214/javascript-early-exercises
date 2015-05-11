var arr = [10,10,10];

var subtract = function(arr) {
  var i = 0;
  var result = 0;

  while (i < arr.length) {
    result = result - arr[i];
    i++;
  };

  return result;
};

console.log(subtract(arr));
