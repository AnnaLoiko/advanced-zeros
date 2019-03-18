module.exports = function getZerosCount(number, base) {
  let zerosCount = Infinity;

  for ( let i = 2; i <= base; i++ ) {
    if ( base % i !== 0 ) continue;
    
    let simpleMultiplier = i;
    let countSimpleMultiplier = 0;
    let sum = 0;
    let summand = Math.floor( number / simpleMultiplier );
    
    while ( base % simpleMultiplier === 0 ) {
      base = base / simpleMultiplier;
      countSimpleMultiplier++; 
    };
  
    while ( summand > 0 ) {
      sum = sum + summand;
      summand = Math.floor( summand / simpleMultiplier );
    };

    currentZeroCount = Math.floor( sum / countSimpleMultiplier );
    zerosCount = ( zerosCount > currentZeroCount ) ? currentZeroCount : zerosCount;
  };

  return zerosCount;
}