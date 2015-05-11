var arr = [1,2,4,8,16,32,];

var sequence = function(arr) {
  i = 0;
  var result = 0

  while (i<= arr.length) {
    result = Math.pow(2,i);
    console.log(result);
    i++;
  };
};

sequence(arr);
