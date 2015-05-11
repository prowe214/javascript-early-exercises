var runFib = function(n) {
  var a = 1;                  //i-1
  var b = 1;                  //i-2
  var x = 0;                  //next num

  console.log(a);
  console.log(b);

  while ((x = a+b) <= n) {
    x = a + b;
    console.log(x);
    b = a;
    a = x;
  };

};

runFib(144);
