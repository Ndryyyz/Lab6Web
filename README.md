# Lab6Web — Praktikum 6: JavaScript DOM dan Event Handling

| | |
|---|---|
| **Nama** | Muhamad Prasetyo Andri Wibowo |
| **NIM** | 312510181 |
| **Kelas** | I251B |
| **Program Studi** | Teknik Informatika, Universitas Pelita Bangsa |
| **Mata Kuliah** | Pemrograman Web (Pertemuan 7) |

## 1. Tujuan Praktikum

1. Memahami DOM sebagai representasi dokumen HTML yang dapat diakses melalui JavaScript.
2. Menggunakan `id`, `class`, dan selector CSS untuk memilih elemen HTML.
3. Mengubah teks, atribut, kelas CSS, dan gaya elemen melalui JavaScript.
4. Menangani event pengguna menggunakan `addEventListener()`.
5. Membuat validasi form dan menampilkan pesan sesuai kondisi input.
6. Mengembangkan halaman interaktif dengan minimal tiga fungsi yang berjalan benar.

## 2. Struktur File

```
Lab6Web/
├── README.md
├── latihan/                  # Latihan 1–6 (bagian E modul) + eksperimen G.1
│   ├── index.html
│   ├── style.css
│   └── script.js
├── mini-project/             # Form Pendaftaran Workshop (bagian F) + eksperimen G.2, G.3, G.4
│   ├── index.html
│   ├── style.css
│   └── script.js
├── eksperimen/               # Eksperimen G.5 (script dengan dan tanpa defer)
│   ├── tanpa-defer.html
│   ├── dengan-defer.html
│   └── script.js
└── screenshots/              # Bukti hasil setiap latihan
```

## 3. Cara Menjalankan

1. Unduh atau clone repository ini.
2. Buka folder `Lab6Web` di Visual Studio Code.
3. Buka `latihan/index.html`, `mini-project/index.html`, atau file di `eksperimen/` dengan browser (klik dua kali, atau klik kanan lalu *Open with Live Server*).
4. Tekan **F12** lalu buka tab **Console** untuk memeriksa apakah ada error.

Tidak ada library atau instalasi tambahan. Semua berjalan langsung di browser.

## 4. Langkah Kerja

Setiap folder berisi tiga file yang dipisah menurut fungsinya: `index.html` untuk struktur, `style.css` untuk tampilan, dan `script.js` untuk perilaku. File JavaScript dihubungkan dengan atribut `defer` di dalam `<head>` supaya baru berjalan setelah HTML selesai dibaca.

### Latihan 1 — Mengubah teks dengan DOM

Elemen dipilih dengan `document.getElementById()`, lalu isinya diubah lewat `textContent`.

```js
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";
```

Hasil: judul dan paragraf berubah begitu halaman dibuka.

![Latihan 1] <img width="900" height="430" alt="01-latihan1-ubah-teks" src="https://github.com/user-attachments/assets/96136463-56df-44f3-80b7-8e525214b881" />

### Latihan 2 — Event click

Tombol diberi `addEventListener("click", ...)`. Setiap kali diklik, paragraf menampilkan jam saat tombol ditekan.

![Latihan 2] <img width="900" height="430" alt="02-latihan2-event-click" src="https://github.com/user-attachments/assets/5744d1dc-9381-4903-b61a-1b8629822c9c" />

### Latihan 3 — Mengubah kelas dan gaya CSS

Kelas `highlight` dan `teks-besar` ditulis di CSS, sedangkan JavaScript hanya menambah atau melepas nama kelasnya dengan `classList.toggle()`. Klik pertama mengaktifkan gaya, klik kedua mengembalikannya seperti semula.

Perbedaan tiga method `classList`:

| Method | Fungsi |
|---|---|
| `add("x")` | Menambahkan kelas `x`. Kalau sudah ada, tidak terjadi apa-apa. |
| `remove("x")` | Menghapus kelas `x`. Kalau tidak ada, tidak terjadi apa-apa. |
| `toggle("x")` | Menambahkan kelas jika belum ada, menghapusnya jika sudah ada. |

![Latihan 3] <img width="720" height="204" alt="03-latihan3-classlist-aktif" src="https://github.com/user-attachments/assets/13cb6776-b401-4c11-8e01-883ff5471ed8" />

### Latihan 4 — Event input dan penghitung karakter

Event `input` aktif setiap kali isi kolom berubah (mengetik, menghapus, atau menempel), sehingga angka jumlah karakter selalu ikut berubah. Atribut `maxlength="40"` membatasi isian paling banyak 40 karakter.

Pengujian: mengetik nama 29 karakter menghasilkan angka 29, mengetik 50 karakter berhenti di 40, dan menghapus seluruh isi mengembalikan angka ke 0.

![Latihan 4] <img width="720" height="196" alt="04-latihan4-penghitung-karakter" src="https://github.com/user-attachments/assets/05c29cdc-f120-4df8-87cb-2c9f26583980" />


### Latihan 5 — Validasi form pendaftaran

Event `submit` dipakai bersama `event.preventDefault()` agar halaman tidak dimuat ulang sebelum data diperiksa. Pemeriksaan dilakukan berurutan: nama, email, lalu usia. Atribut `novalidate` pada `<form>` mematikan validasi bawaan browser sehingga pesan yang tampil adalah pesan dari JavaScript.

Lima kondisi yang diuji:

| No | Kondisi | Pesan yang tampil | Screenshot |
|---|---|---|---|
| a | Semua kosong | Nama wajib diisi. ![a] <img width="720" height="347" alt="05a-latihan5-semua-kosong" src="https://github.com/user-attachments/assets/bfa65525-cf7c-4dd1-9029-74ecf6a013bf" />
| b | Nama kosong (email dan usia valid) | Nama wajib diisi. ![b] <img width="720" height="347" alt="05b-latihan5-nama-kosong" src="https://github.com/user-attachments/assets/ed69de73-e960-411c-9aaa-cfc489109b28" />
| c | Email tidak valid (`ndry@`) | Masukkan email yang valid. ![c] <img width="720" height="347" alt="05c-latihan5-email-tidak-valid" src="https://github.com/user-attachments/assets/7124db0c-5bc5-4e59-8199-c8791cf8fd31" />

| d | Usia di bawah 17 (`16`) | Usia harus berupa bilangan bulat 17–100. ![d] <img width="720" height="347" alt="05d-latihan5-usia-di-bawah-17" src="https://github.com/user-attachments/assets/0af34290-e142-4f27-81be-4a01382340f6" />

| e | Semua valid | Validasi berhasil. Form siap diproses. ![e] <img width="720" height="347" alt="05e-latihan5-semua-valid" src="https://github.com/user-attachments/assets/79b8bcf6-38d2-4fa8-9ce2-4ebcce5219f2" />


### Latihan 6 — Daftar tugas sederhana (To-do List)

Elemen `<li>`, `<span>`, dan `<button>` dibuat lewat `document.createElement()`, lalu dipasang ke daftar dengan `append()` dan `appendChild()`. Teks tugas dimasukkan dengan `textContent`, jadi kalau pengguna mengetik `<b>Uji teks HTML</b>`, yang tampil adalah teks apa adanya dan bukan huruf tebal.

![Latihan 6 - tandai selesai] <img width="720" height="326" alt="06a-latihan6-todo-tandai-selesai" src="https://github.com/user-attachments/assets/ce40910a-d408-4f11-aa43-1befb650fb67" />

## 5. Mini Project — Form Pendaftaran Workshop

Folder: `mini-project/`

Halaman pendaftaran workshop dengan formulir di kiri dan ringkasan input di kanan. Pada layar sempit (mobile), dua bagian ini tersusun ke bawah.

Fitur interaktif dan event yang dipakai:

| Fitur | Event | Penjelasan |
|---|---|---|
| Validasi nama, email, dan sesi | `submit` | Semua kolom diperiksa sekaligus, pesan kesalahan tampil di bawah kolom yang salah, dan kursor pindah ke kolom pertama yang salah. |
| Pesan kesalahan hilang otomatis | `input`, `change` | Begitu pengguna memperbaiki isian, pesan kesalahan pada kolom itu diperiksa ulang. |
| Ringkasan input langsung | `input`, `change` | Panel kanan menampilkan nama, email, sesi, dan alasan yang sedang diketik. |
| Penghitung karakter alasan | `input` | Menampilkan jumlah karakter dari batas 120. |
| Info sesi yang dipilih | `change` | Dropdown sesi menampilkan teks "Sesi dipilih: ..." di bawahnya. |
| Pesan sukses | `submit` | Setelah semua valid, muncul pesan hijau berisi nama dan sesi, lalu form dikosongkan. |
| Tombol Hapus Input | `click` | Mengosongkan seluruh isian, pesan, dan ringkasan. |
| Sembunyikan/tampilkan informasi | `click` | Menambah atau melepas kelas `tersembunyi`. |

Aturan validasi: nama wajib dan minimal 3 karakter, email wajib dan sesuai format `nama@domain.com`, sesi wajib dipilih. Alasan mengikuti bersifat opsional.

Catatan: nama sesi, jadwal, dan teks informasi workshop adalah contoh isian. Bisa diganti langsung di `index.html`.

| Tampilan awal | Semua kosong lalu Daftar |
|---|---|
| ![awal] <img width="1100" height="942" alt="07-miniproject-tampilan-awal" src="https://github.com/user-attachments/assets/c9517728-1562-49c8-9f0f-f44cb2b387e1" />
 | ![kosong] <img width="1100" height="1003" alt="08-miniproject-semua-kosong" src="https://github.com/user-attachments/assets/f8a7dda9-b56b-44ae-b2dc-c316d93204aa" />
 |

| Nama terlalu pendek dan email salah | Input terisi dan ringkasan langsung |
|---|---|
| ![pendek] <img width="1100" height="1003" alt="09-miniproject-nama-pendek-email-salah" src="https://github.com/user-attachments/assets/b4e879f6-bd44-4666-aba8-d0f4d02fcb1a" />
 | ![terisi] <img width="1100" height="967" alt="10-miniproject-input-terisi-ringkasan" src="https://github.com/user-attachments/assets/f7e96d40-fc89-47dc-8778-c38c63c8878a" />
 |

| Pendaftaran berhasil | Informasi disembunyikan |
|---|---|
| ![berhasil] <img width="1100" height="967" alt="10-miniproject-input-terisi-ringkasan" src="https://github.com/user-attachments/assets/546473db-bd1f-40f1-85e4-99256a31f983" />
 | ![sembunyi] <img width="1100" height="942" alt="12-miniproject-info-disembunyikan" src="https://github.com/user-attachments/assets/5e24f6a6-10b7-4e5d-b41c-9e44bc056f42" />
 |

Tampilan di layar mobile (lebar 390 px, tanpa scroll horizontal):

![mobile] <img width="390" height="1521" alt="13-miniproject-tampilan-mobile" src="https://github.com/user-attachments/assets/ee64885e-1c99-4858-abd2-3a3767a0fc10" />


## 6. Eksperimen Mandiri

| No | Eksperimen | Hasil | Lokasi |
|---|---|---|---|
| 1 | Tombol hapus satu item pada To-do List | Tombol **Hapus** ditambahkan pada setiap tugas. Memakai `item.remove()`. | `latihan/script.js` |
| 2 | Nama minimal tiga karakter | Konstanta `MIN_NAMA = 3`. Nama `Al` ditolak dengan pesan "Nama minimal 3 karakter." | `mini-project/script.js` |
| 3 | Event `change` pada dropdown sesi | Sesi yang dipilih tampil di bawah dropdown dan di ringkasan. | `mini-project/script.js` |
| 4 | Sembunyikan/tampilkan paragraf lewat class CSS | `classList.toggle("tersembunyi")` dengan aturan `.tersembunyi { display: none; }`. | `mini-project/script.js`, `style.css` |
| 5 | Script tanpa `defer` di `<head>` | Terjadi error, dijelaskan di bawah. | `eksperimen/` |

### Eksperimen 5 — Script tanpa `defer` di `<head>`

Script yang sama (`eksperimen/script.js`) dimuat di dua halaman. Isinya mengambil elemen `#judul` lalu mengubah teksnya.

| `tanpa-defer.html` | `dengan-defer.html` |
|---|---|
| ![tanpa defer] <img width="700" height="220" alt="14-eksperimen-tanpa-defer" src="https://github.com/user-attachments/assets/30446023-ec33-4c64-98c3-b7796f31a631" />
 | ![dengan defer] <img width="700" height="220" alt="15-eksperimen-dengan-defer" src="https://github.com/user-attachments/assets/73fb1cfc-9645-46b6-a97f-9d05a71ecfa9" />
 |

**Yang teramati:** pada halaman tanpa `defer`, judul tidak berubah dan Console menampilkan error:

```
Uncaught TypeError: Cannot set properties of null (setting 'textContent')
```

**Penyebab:** browser membaca HTML dari atas ke bawah. Saat bertemu `<script>` di `<head>` tanpa `defer`, parsing berhenti dan script langsung dijalankan. Pada saat itu `<body>` belum dibaca, sehingga `<h1 id="judul">` belum ada di DOM. `getElementById("judul")` mengembalikan `null`, dan baris berikutnya mencoba mengisi `textContent` milik `null`, sehingga terjadi `TypeError`.

**Solusi:** pakai atribut `defer` (script diunduh bersamaan tetapi dijalankan setelah HTML selesai dibaca), atau letakkan `<script>` tepat sebelum `</body>`, atau bungkus kode dengan event `DOMContentLoaded`.

## 7. Pertanyaan Evaluasi

**1. Apa yang dimaksud dengan DOM dan apa manfaatnya?**

DOM (Document Object Model) adalah representasi dokumen HTML dalam bentuk pohon objek. Setiap tag, atribut, dan teks menjadi node yang bisa diakses lewat JavaScript. Manfaatnya, JavaScript bisa memilih elemen, mengubah teks, atribut, dan gaya, menambah atau menghapus elemen, serta merespons tindakan pengguna tanpa memuat ulang halaman, sehingga halaman menjadi interaktif.

**2. Apa perbedaan `getElementById()`, `querySelector()`, dan `querySelectorAll()`?**

| Method | Cara memilih | Hasil |
|---|---|---|
| `getElementById("x")` | Berdasarkan `id` saja (tanpa tanda `#`) | Satu elemen, atau `null` jika tidak ada |
| `querySelector("sel")` | Selector CSS apa pun (`#id`, `.kelas`, `tag`) | Elemen **pertama** yang cocok, atau `null` |
| `querySelectorAll("sel")` | Selector CSS apa pun | **Semua** elemen yang cocok dalam `NodeList` (kosong jika tidak ada) |

**3. Apa fungsi `addEventListener()` dan sebutkan tiga contoh event?**

`addEventListener()` menghubungkan sebuah event dengan fungsi yang dijalankan saat event itu terjadi pada elemen. Satu elemen boleh punya beberapa listener untuk event yang sama tanpa saling menimpa. Contoh event: `click` (elemen diklik), `input` (isi kolom berubah), dan `submit` (form dikirim). Event lain: `change`, `keydown`, `mouseover`.

**4. Mengapa `event.preventDefault()` digunakan pada event submit form?**

Perilaku bawaan submit adalah mengirim data form dan memuat ulang halaman. Kalau dibiarkan, JavaScript tidak sempat memeriksa isian, dan pesan validasi langsung hilang karena halaman dimuat ulang. Dengan `preventDefault()`, pengiriman bawaan dibatalkan sehingga data bisa diperiksa dulu dan pesan kesalahan atau sukses bisa ditampilkan di halaman.

**5. Apa perbedaan `textContent` dan `innerHTML` dari sisi penggunaan dan keamanan?**

`textContent` memperlakukan isinya sebagai teks biasa. Jika berisi tanda seperti `<b>`, tanda itu tampil apa adanya. `innerHTML` memperlakukan isinya sebagai markup HTML sehingga bisa membuat elemen baru. Dari sisi keamanan, memasukkan teks pengguna yang tidak dipercaya ke `innerHTML` berisiko XSS (Cross-Site Scripting), misalnya `<img src=x onerror=...>` yang menjalankan script berbahaya. Karena itu data dari pengguna ditampilkan dengan `textContent`, dan pada praktikum ini diuji dengan input `<b>Uji teks HTML</b>` yang tampil sebagai teks.

**6. Bagaimana `classList.toggle()` membantu mengubah tampilan elemen?**

`toggle()` menambahkan kelas jika elemen belum memilikinya dan menghapusnya jika sudah punya. Dengan begitu satu tombol cukup untuk mengaktifkan dan menonaktifkan sebuah tampilan, tanpa perlu menulis `if` untuk memeriksa kondisi saat ini. Aturan tampilannya tetap ditulis di CSS, sedangkan JavaScript hanya mengganti nama kelas, sehingga kode lebih rapi dan mudah diubah.

**7. Sebutkan minimal tiga skenario pengujian validasi form.**

| Skenario | Contoh input | Hasil yang diharapkan |
|---|---|---|
| Semua kolom kosong | (kosong) | Pesan "wajib diisi" tampil, form tidak diproses |
| Nama terlalu pendek | `Al` | "Nama minimal 3 karakter." |
| Email tidak valid | `ndry@` | Pesan email tidak valid |
| Sesi belum dipilih | `-- Pilih sesi --` | "Pilih salah satu sesi workshop." |
| Usia di bawah batas | `16` | "Usia harus berupa bilangan bulat 17–100." |
| Usia melebihi batas atau desimal | `101`, `20.5` | Pesan usia tampil |
| Semua input valid | Nama, email, sesi benar | Pesan sukses, form dikosongkan |

## 8. Pengujian

Seluruh latihan, mini project, dan eksperimen diuji di browser Chromium dengan 49 pengecekan otomatis (hasil elemen, teks pesan, kelas CSS, dan tidak adanya error di Console). Semua lolos. Tampilan mobile juga dicek agar tidak ada scroll horizontal.

## 9. Kesimpulan

Praktikum ini menunjukkan bahwa DOM memungkinkan JavaScript memilih dan mengubah elemen HTML, sedangkan event listener membuat halaman bereaksi terhadap tindakan pengguna. Validasi form dengan `submit` dan `preventDefault()`, penghitung karakter dengan `input`, dan tampilan dinamis dengan `classList` menjadi dasar untuk membuat halaman web yang interaktif.
