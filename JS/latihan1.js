const umur = 23;
const nama = "Sultan";
const penumlahan = 4+4;
const string_to_number = "1256 km";
const number_to_string = 222678;
const message = "namaku " + nama + ", aku berumur " + umur;
let konversi_ke_angka;
let konversi_ke_string;
let hasil;

function Biodata(nama, umur) {
  const name = nama;
  const age = umur;

  console.log(`my name is ${name}, i'm ${age} years old`);
}

function Perkalian(x, y) {
  hasil = x*y;
  return hasil;
}

// konversi_ke_angka = Number(string_to_number);
// konversi_ke_angka = parseInt(string_to_number);
konversi_ke_angka = parseFloat(string_to_number);
konversi_ke_string = number_to_string.toString();

console.log(`aku ${nama}, umurku ${umur} tahun`);
console.log(penumlahan);
Biodata("Sahya", 21);
Perkalian(124, 223);
console.log(konversi_ke_angka);
console.log(konversi_ke_string);
console.log(message);

console.log("hasil dari perkalian ini adalah ", Perkalian(2,4));