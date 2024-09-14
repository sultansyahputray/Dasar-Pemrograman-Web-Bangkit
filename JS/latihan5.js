const array = Array.from("Sultan");
console.log(array);

const users = new Array("Agus", "Budi", "Tono");
const fruit = ["apple", "mango", "pineapple"];
const customer = Array.from(users);
console.log(customer);
console.log(fruit[0]);

fruit[0] = "watermelon";
console.log(fruit[0]);

fruit.push("durian");
console.log(fruit);

const [bapak, anak, cucu] = users;
console.log(bapak);
console.log(anak);
console.log(cucu);

const angka = [1,4,2,6,53,46,4,3];
angka.sort();
console.log(angka);

angka.sort(function(a,b) {
  return b-a;
});
console.log(angka);

angka.sort((a,b) => a-b);
console.log(angka);