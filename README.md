# Advance Challange Happy-Number

`Weekly Coding Challenge #10829`

## Permasalahan

Tulislah algoritma untuk menentukan apakah suatu bilangan n `bahagia`.
Angka `bahagia` adalah angka yang ditentukan oleh proses berikut:

- Dimulai dengan bilangan bulat positif apa pun, ganti bilangan tersebut dengan jumlah kuadrat angka-angkanya.
- Ulangi proses ini sampai angkanya sama dengan 1 (dimana angka tersebut akan tetap ada), atau angka tersebut berputar tanpa henti dalam siklus yang tidak menyertakan 1.
- Angka-angka yang proses ini berakhir dengan 1 adalah angka-angka bahagia.
  return true jika n adalah angka `bahagia`, dan `false` jika tidak

## Input

Input yang diberikan hanya memiliki tipe data integer untuk n

## Output yang diharapkan akan seperti berikut:

`Input:`
19

`Output:`
true

`Penjelasan`

12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
