var arr = [1,9,7];

var largest = function(arr) {
  i = 0;
  big = 0;

  while (i < arr.length) {
    if (arr[i] > big) {
      big = arr[i];
    };
    i++;
  };

  return big;
};

console.log(largest(arr));
