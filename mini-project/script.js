// script.js — Mini Project: Form Pendaftaran Workshop
// Praktikum Pemrograman Web - Pertemuan 7: JavaScript DOM dan Event Handling

// ===== 1. Memilih elemen =====
const form = document.getElementById("formWorkshop");
const inputNama = document.getElementById("nama");
const inputEmail = document.getElementById("email");
const selectSesi = document.getElementById("sesi");
const inputCatatan = document.getElementById("catatan");

const errNama = document.getElementById("errNama");
const errEmail = document.getElementById("errEmail");
const errSesi = document.getElementById("errSesi");
const infoSesi = document.getElementById("infoSesi");
const jumlahCatatan = document.getElementById("jumlahCatatan");
const pesanForm = document.getElementById("pesanForm");

const ringNama = document.getElementById("ringNama");
const ringEmail = document.getElementById("ringEmail");
const ringSesi = document.getElementById("ringSesi");
const ringCatatan = document.getElementById("ringCatatan");

const tombolReset = document.getElementById("tombolReset");
const tombolInfo = document.getElementById("tombolInfo");
const infoWorkshop = document.getElementById("infoWorkshop");

// ===== 2. Aturan validasi =====
const MIN_NAMA = 3; // Eksperimen G.2: nama minimal tiga karakter
const POLA_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ===== 3. Fungsi bantu =====
function teksSesiTerpilih() {
  if (selectSesi.value === "") {
    return "";
  }
  return selectSesi.options[selectSesi.selectedIndex].text;
}

// Menampilkan atau menghapus pesan kesalahan pada satu kolom
function setError(kolom, elemenError, teks) {
  elemenError.textContent = teks;
  kolom.classList.toggle("input-salah", teks !== "");
  kolom.setAttribute("aria-invalid", teks !== "" ? "true" : "false");
}

function cekNama() {
  const nama = inputNama.value.trim();
  if (nama === "") {
    setError(inputNama, errNama, "Nama wajib diisi.");
    return false;
  }
  if (nama.length < MIN_NAMA) {
    setError(inputNama, errNama, "Nama minimal " + MIN_NAMA + " karakter.");
    return false;
  }
  setError(inputNama, errNama, "");
  return true;
}

function cekEmail() {
  const email = inputEmail.value.trim();
  if (email === "") {
    setError(inputEmail, errEmail, "Email wajib diisi.");
    return false;
  }
  if (!POLA_EMAIL.test(email)) {
    setError(inputEmail, errEmail, "Masukkan email yang valid, contoh: nama@email.com.");
    return false;
  }
  setError(inputEmail, errEmail, "");
  return true;
}

function cekSesi() {
  if (selectSesi.value === "") {
    setError(selectSesi, errSesi, "Pilih salah satu sesi workshop.");
    return false;
  }
  setError(selectSesi, errSesi, "");
  return true;
}

// Ringkasan input yang diperbarui secara langsung
function perbaruiRingkasan() {
  ringNama.textContent = inputNama.value.trim() || "-";
  ringEmail.textContent = inputEmail.value.trim() || "-";
  ringSesi.textContent = teksSesiTerpilih() || "-";
  ringCatatan.textContent = inputCatatan.value.trim() || "-";
}

function perbaruiCounter() {
  jumlahCatatan.textContent = inputCatatan.value.length;
}

// Mengembalikan tampilan ke kondisi awal setelah form dikosongkan
function bersihkanTampilan() {
  setError(inputNama, errNama, "");
  setError(inputEmail, errEmail, "");
  setError(selectSesi, errSesi, "");
  infoSesi.textContent = "";
  perbaruiCounter();
  perbaruiRingkasan();
}

function tampilkanPesan(jenis, teks) {
  pesanForm.className = "pesan-form " + jenis;
  pesanForm.textContent = teks;
}

// Pesan "belum berhasil" dihapus saat pengguna mulai memperbaiki isian
function hapusPesanGagal() {
  if (pesanForm.classList.contains("gagal")) {
    pesanForm.className = "pesan-form";
    pesanForm.textContent = "";
  }
}

// ===== 4. Event: input =====
inputNama.addEventListener("input", function () {
  hapusPesanGagal();
  perbaruiRingkasan();
  // Jika sebelumnya sudah ada pesan salah, periksa ulang saat pengguna memperbaiki
  if (errNama.textContent !== "") {
    cekNama();
  }
});

inputEmail.addEventListener("input", function () {
  hapusPesanGagal();
  perbaruiRingkasan();
  if (errEmail.textContent !== "") {
    cekEmail();
  }
});

inputCatatan.addEventListener("input", function () {
  perbaruiCounter();
  perbaruiRingkasan();
});

// ===== 5. Event: change (Eksperimen G.3: tampilkan sesi yang dipilih) =====
selectSesi.addEventListener("change", function () {
  hapusPesanGagal();
  const sesi = teksSesiTerpilih();
  infoSesi.textContent = sesi === "" ? "" : "Sesi dipilih: " + sesi;
  perbaruiRingkasan();
  if (errSesi.textContent !== "") {
    cekSesi();
  }
});

// ===== 6. Event: submit =====
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Semua kolom diperiksa agar semua pesan kesalahan tampil sekaligus
  const namaValid = cekNama();
  const emailValid = cekEmail();
  const sesiValid = cekSesi();

  if (!namaValid || !emailValid || !sesiValid) {
    tampilkanPesan("gagal", "Pendaftaran belum berhasil. Periksa kembali isian yang ditandai.");
    // Fokus ke kolom pertama yang salah
    if (!namaValid) {
      inputNama.focus();
    } else if (!emailValid) {
      inputEmail.focus();
    } else {
      selectSesi.focus();
    }
    return;
  }

  const nama = inputNama.value.trim();
  const sesi = teksSesiTerpilih();

  form.reset();
  bersihkanTampilan();
  tampilkanPesan("sukses", "Pendaftaran berhasil! Terima kasih, " + nama + ". Kamu terdaftar di " + sesi + ".");
});

// ===== 7. Event: click (tombol hapus input) =====
tombolReset.addEventListener("click", function () {
  form.reset();
  bersihkanTampilan();
  pesanForm.className = "pesan-form";
  pesanForm.textContent = "";
  inputNama.focus();
});

// ===== 8. Event: click (Eksperimen G.4: sembunyikan/tampilkan paragraf lewat class) =====
tombolInfo.addEventListener("click", function () {
  const tersembunyi = infoWorkshop.classList.toggle("tersembunyi");
  tombolInfo.textContent = tersembunyi ? "Tampilkan informasi" : "Sembunyikan informasi";
  tombolInfo.setAttribute("aria-expanded", tersembunyi ? "false" : "true");
});

// Kondisi awal
bersihkanTampilan();