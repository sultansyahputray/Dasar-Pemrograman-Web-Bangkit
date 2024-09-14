let x,y,z;

x = 6;
y = 7;
z = x+y;

if (x  >= y) {
  console.log("salah");
} else {
  console.log("benar");
}

for (let i = 1; i <= z; i++) {
  // let spaces = ' '.repeat(z - i); 
  let stars = '*'.repeat(2 * i - 1);  
  // console.log(spaces + stars);
  console.log(stars);
}

function pertambahan(x, y) {
  let hasil = x+y;
  return hasil;
}

console.log(pertambahan(3,8));

if (x > y) {
  return;
} else {
  console.log("salah");
}

function perkalian(a,b) {
  return a*b;
}

function pemanggilan(operator, c, d) {
  return operator(c,d);
}

console.log(pemanggilan(perkalian, 2, 3));