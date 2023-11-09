function isHappyNumber(n) {
  // Fungsi untuk menghitung jumlah kuadrat digit
  function sumOfSquares(num) {
    let sum = 0;
    while (num > 0) {
      let digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  // Set untuk mendeteksi siklus
  let seen = new Set();

  // Iterasi hingga n menjadi 1 (angka bahagia) atau terjebak dalam siklus
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = sumOfSquares(n);
  }

  // Jika n adalah 1, maka itu adalah angka bahagia
  return n === 1;
}

// Contoh penggunaan dengan input 19
let n = 19;
let result = isHappyNumber(n);
console.log(result); // Output: true
