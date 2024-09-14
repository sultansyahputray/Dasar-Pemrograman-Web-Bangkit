const productMap = new Map([
  ['shoes', 500],
  ['cap', 350],
  ['jeans', 250]
]);

console.log(productMap);

productMap.set('name', 'aras');
productMap.set(1, 'number');
console.log(productMap);

console.log(productMap.get(1));
console.log(productMap.get("jeans"));

productMap.delete('shoes');
console.log(productMap);

const set = new Set();
set.add(1);
set.add(2);
set.add("apple");

console.log(set);
for (const number of set) {
  console.log(number);
}

set.forEach((value) => console.log(value));

function myFunc(numbers, ...manyMoreArgs) {
  console.log('numbers', numbers);
  console.log('manyMoreArgs', manyMoreArgs);
  console.log(numbers.length);
  console.log(manyMoreArgs.length);
}

myFunc('one', 'two', 'three');

const favorites = ['Nasi Goreng', 'Mie Goreng', 'Ayam Bakar', 'Tahu', 'Tempe'];

const [first, second, ...rest] = favorites;

console.log(first);
console.log(second);
console.log(rest);