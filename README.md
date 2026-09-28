# Awan Putih Foundation — Sistem Informasi & Manajemen Donasi Terpadu Berbasis Web

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Status](https://img.shields.io/badge/Status-Active_Development-success.svg)]()

> Repositori resmi proyek pengembangan perangkat lunak sistem informasi dan manajemen donasi terpadu (finansial dan logistik barang) untuk **Awan Putih Foundation (Kabupaten Semarang)**. Dirancang untuk mata kuliah **Pengembangan Perangkat Lunak (A12.76706)** — Program Studi S1 Sistem Informasi, Fakultas Ilmu Komputer, Universitas Dian Nuswantoro (UDINUS).

---

## 👥 Tim Pengembang (Kelompok 2)

| Foto / Inisial | Nama Lengkap | Akun GitHub | Peran & Tanggung Jawab Utama |
| :---: | :--- | :--- | :--- |
| 👑 | **Syahnahl Dilarexa** | [@Syaahnhl](https://github.com/Syaahnhl) | **Project Manager & Lead Architect** (Perencanaan, arsitektur sistem, integrasi modul, deployment) |
| 🎨 | **Abdul Hamid** | [@ovaltinegif](https://github.com/ovaltinegif) | **UI/UX Designer & Frontend Developer** (Perancangan antarmuka, responsivitas, interaksi komponen) |
| ⚙️ | **M. Arfian Dwi Pangestu** | [@fichoss](https://github.com/fichoss) | **Backend Developer & Database Engineer** (Arsitektur REST API, manajemen database, integrasi webhook) |
| 🛡️ | **Kevin Cahyo Ardiansyah** | [@TeaCupCin](https://github.com/TeaCupCin) | **QA Engineer & Technical Writer** (Dokumentasi teknis, pengujian sistem, penjaminan mutu ISO 25010) |

---

## 🌟 Latar Belakang & Visi Proyek

Awan Putih Foundation merupakan organisasi nirlaba yang berfokus pada tanggap darurat bencana, santunan anak yatim dhuafa, dan distribusi pangan di wilayah Kabupaten Semarang dan sekitarnya. 

Sebelumnya, operasional yayasan masih terkendala pencatatan manual:
1. Rekonsiliasi mutasi bank yang lambat dan rentan *human error*.
2. Ketiadaan visibilitas status donasi logistik barang fisik (sembako, pakaian, buku) bagi donatur setelah diserahkan.
3. Keterlambatan penerbitan bukti setor donasi resmi.

Platform ini hadir sebagai solusi terpadu **End-to-End**:
- Mengotomatisasi penerimaan donasi finansial melalui integrasi *Payment Gateway* dan penerbitan *E-Receipt* instan ber-QR code verifikasi.
- Menyediakan modul **Live Tracking Donasi Logistik Barang** berbasis kode resi unik dengan visualisasi timeline 4 tahap (Diterima di Gudang → Sortir & Mutu → Ekspedisi Relawan → Diserahkan ke Penerima Manfaat).
- Menyajikan **Portal Transparansi Publik** dengan visualisasi alokasi dana dan buku besar serah terima bantuan secara terbuka untuk memelihara akuntabilitas publik.
- Menyediakan **Dasbor Manajemen Pengelola Multi-Peran** (*Super Admin*, *Staf Logistik*, *Manajer Keuangan*) untuk operasional harian yayasan.

---

## 🚀 Fitur Utama

### 1. Portal Publik & Kampanye Donasi
- **Katalog Program Donasi Finansial:** Kartu program dinamis dengan progress bar real-time, nominal terkumpul vs target, sisa hari, dan filter multi-kategori (Bencana, Pendidikan, Kesehatan, Pangan).
- **Checkout Donasi Interaktif:**
  - Pilihan nominal cepat (Rp 25.000 s/d Rp 500.000) dan custom input.
  - Data donatur dengan opsi *"Hamba Allah (Anonim)"* dan kolom titipan doa kebaikan.
  - Pilihan kanal pembayaran: QRIS Instan, Virtual Account (BCA, Mandiri, BRI), E-Wallet (GoPay, OVO, ShopeePay).
  - Simulasi pembayaran real-time dengan efek selebrasi.
  - Generator **E-Receipt Resmi** lengkap dengan kode verifikasi transaksi QR Code yang dapat langsung dicetak atau diunduh.

### 2. Donasi Logistik Barang & Gudang
- **Pengajuan Donasi Barang Fisik:** Formulir donasi terstruktur untuk sembako, pakaian layak pakai, perlengkapan sekolah, dan kebutuhan medis.
- **Opsi Penyerahan:** Pilihan antar mandiri ke Gudang Cabang (Bawen/Ungaran) atau layanan jemput donasi oleh armada relawan yayasan.
- **Auto Resi Generator:** Menghasilkan kode resi logistik unik (contoh: `AWP-LOG-8821`, `AWP-BRG-2026-9812`).

### 3. Mesin Pelacakan Bantuan (Live Public Tracking)
- Cek status bantuan langsung melalui input nomor resi.
- Visual timeline 4 tahap terverifikasi:
  1. *Donasi Diterima & Diverifikasi di Gudang*
  2. *Sortir & Pengecekan Kualitas Mutu Logistik*
  3. *Pengemasan & Dalam Perjalanan Armada Relawan*
  4. *Telah Diserahkan kepada Penerima Manfaat* (disertai foto dokumentasi & nama penerima)

### 4. Portal Transparansi & Akuntabilitas Terbuka
- Visualisasi grafik interaktif (Chart.js) untuk persentase alokasi penyaluran dana donasi.
- Tabel *Live Handover Ledger* riwayat serah terima logistik dan dana ke komunitas.
- Fitur simulasi unduh laporan pertanggungjawaban publik (PDF).

### 5. Dasbor Manajemen Yayasan (Backoffice)
- **Role-Based Access Control Preview:** Simulasi hak akses untuk *Super Admin*, *Staf Gudang & Logistik*, dan *Manajer Keuangan*.
- **Manajemen Donasi Finansial:** Verifikasi mutasi, konfirmasi pembayaran manual, dan filter status.
- **Manajemen Mutasi Gudang & Resi:** Staf logistik dapat mengubah progres tahapan resi barang dari *Diterima* hingga *Selesai Diserahkan*.
- **Tambah Kampanye Baru:** Formulir penambahan program donasi dengan target anggaran dan tanggal penutupan.
- **Ekspor Laporan:** Ekspor data donasi ke dalam format spreadsheet CSV/Excel.

---

## 🛠️ Arsitektur & Teknologi

- **Frontend Core:** Single Page Application (SPA) arsitektur berbasis Modern Semantic HTML5, CSS3, dan Vanilla JavaScript (ES6+ Module Standard).
- **Styling & UI:** Tailwind CSS (utility-first framework) dipadukan dengan Google Fonts (*Plus Jakarta Sans* & *Inter*) serta *custom glassmorphism*.
- **Iconography:** Lucide Icons.
- **Data Visualization:** Chart.js.
- **Interactive Feedback:** Canvas Confetti.
- **Versi Kompatibilitas:** Mendukung seluruh browser modern (Chrome, Edge, Firefox, Safari, Opera) dengan tata letak responsif penuh (*Mobile*, *Tablet*, *Desktop*).

---

## 💻 Panduan Menjalankan Secara Lokal

Repositori ini telah dikonfigurasi agar dapat langsung dijalankan tanpa dependensi *build tool* yang rumit:

1. **Clone repositori:**
   ```bash
   git clone https://github.com/Syaahnhl/awan-putih.git
   cd awan-putih
   ```

2. **Jalankan web server lokal:**
   Anda dapat menggunakan ekstensi *Live Server* di VS Code, atau menggunakan perintah Python bawaan:
   ```bash
   # Menggunakan Python 3:
   python -m http.server 8080
   ```

3. **Buka di browser:**
   Akses `http://localhost:8080` pada peramban web pilihan Anda.

---

## 📋 Struktur Direktori

```
awan-putih/
│
├── index.html              # Berkas utama aplikasi web (SPA lengkap)
├── README.md               # Dokumentasi proyek & daftar kolaborator tim
├── .gitignore              # Konfigurasi pengabaian berkas git
│
├── css/
│   └── style.css           # Styling kustom, animasi smooth, glassmorphism
│
├── js/
│   └── app.js              # State management, tracking engine, modal payment, admin logic
│
└── assets/                 # Direktori aset gambar, logo, dan dokumen pendukung
```

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah lisensi MIT — silakan merujuk ke berkas [LICENSE](LICENSE) untuk rincian selengkapnya.
