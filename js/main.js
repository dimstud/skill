// 1
let x1 = 2,
  x2 = 10,
  y1 = 3,
  y2 = 5;
  
  //let dot1 = Math.abs(x1 - x2), dot2 = Math.abs(y1 - y2);
  
  //let totall = Math.sqrt(Math.pow(dot1, 2) + Math.pow(dot2, 2));
  let rectangleArrea = Math.abs(x1 - x2) * Math.abs(y1 - y2);
  console.log(rectangleArrea);

//S = ((x2 - x1)2 + (y2 - y1)2) / 2


// 2
const drodAnd = (a, b, n) => {
  let aRez = Math.trunc((a - Math.floor(a)) * Math.pow(10, n));
  let bRez = Math.trunc((b - Math.floor(b)) * Math.pow(10, n));
  console.log(aRez);
  console.log(bRez);
  console.log(aRez > bRez);
  console.log(aRez < bRez);
  console.log(aRez >= bRez);
  console.log(aRez <= bRez);
  console.log(aRez === bRez);
  console.log(aRez != bRez);
};

drodAnd(13.123456789, 2.123, 5);
drodAnd(13.890123, 2.891564, 2 );
drodAnd(13.890123, 2.891564, 3 );