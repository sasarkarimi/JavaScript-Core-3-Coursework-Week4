function convertToOldRoman(n) {
   
    const map = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IIII: 4,
      I: 1,
    };
    let result = "";

    for (key in map) {
      const repeatCounter = Math.floor(n / map[key]);

      if (repeatCounter !== 0) {
        result += key.repeat(repeatCounter);
      }

      n %= map[key];

      if (n === 0) return result;
    }

    return result;
  }


module.exports = convertToOldRoman;