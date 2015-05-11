var arr = [20,19,40];

var smallest = function(arr) {
  i = 0;
  small = arr[0];

  while (i < arr.length) {
    if (arr[i] < small) {
      small = arr[i];
    };
    i++;
  };

  return small;
};

console.log(smallest(arr));
