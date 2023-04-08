function outer() {
    const a = 'cloudy';
    const b = { prop: 'sunny' };
  
    function inner(a, b) {
      b.prop = 'cloudy';
      console.log(a, b);
    }
  
    inner(a, b);
    console.log(a, b);
  }
  
  outer();
  