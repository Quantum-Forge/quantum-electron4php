## **Electron-Laravel Integration**

### **Deskripsi**

Ini adalah proyek contoh yang mengintegrasikan aplikasi [Laravel 10](https://laravel.com/) dengan [Electron](https://www.electronjs.org/) untuk menciptakan aplikasi desktop berbasis web. Dengan menggunakan Electron, Anda dapat mengemas aplikasi web Laravel Anda sebagai aplikasi desktop yang dapat berjalan di Windows, macOS, dan Linux. Proyek ini juga menyertakan server PHP untuk melayani aplikasi Laravel di dalam jendela Electron.

### **Fitur**

- **Integrasi Laravel dan Electron**: Menyediakan contoh bagaimana menjalankan aplikasi Laravel di dalam jendela aplikasi desktop menggunakan Electron.
- **PHP Server**: Menyertakan konfigurasi untuk menjalankan server PHP yang mengelola aplikasi Laravel di latar belakang.
- **Pengaturan Zoom**: Menyesuaikan tingkat zoom untuk tampilan aplikasi agar sesuai dengan kebutuhan tampilan desktop.
- **Menu Aplikasi**: Menyediakan menu aplikasi dasar untuk macOS dengan opsi seperti Quit dan Edit.

### **Prasyarat**

- **Node.js**: Pastikan Node.js dan npm sudah terinstal di sistem Anda.
- **PHP**: PHP harus terinstal untuk menjalankan server PHP.
- **Composer**: Digunakan untuk mengelola dependensi Laravel.

### **Cara Menggunakan**

1. **Instal Dependensi Node.js**:
   ```bash
   npm install
   ```

2. **Clone Repository Laravel**:
   ```bash
   git clone https://github.com/laravel/laravel.git laravel-10-files
   ```

3. **Edit Konfigurasi**:
   - Buka file `main.js`.
   - Ganti konstanta `LARAVEL_DIRECTORY` dengan nama folder Laravel jika diperlukan:
     ```javascript
     const LARAVEL_DIRECTORY = 'laravel-10-files';
     ```

4. **Mulai Aplikasi**:
   ```bash
   npm start
   ```

Tentu, berikut adalah penambahan dokumentasi tentang cara membangun aplikasi Electron menjadi file executable (`.exe`) menggunakan npm:

---

### **Membangun Aplikasi Electron menjadi File Executable**

Setelah Anda mengembangkan aplikasi Anda dan siap untuk mendistribusikannya, Anda dapat membangun aplikasi Electron menjadi file executable. Ini memungkinkan Anda untuk mendistribusikan aplikasi Anda sebagai file `.exe` untuk Windows. Berikut adalah langkah-langkah untuk melakukannya:

1. **Instal Dependensi Build**:
   Pertama, Anda perlu menambahkan beberapa dependensi build untuk Electron. Pastikan Anda telah menginstal `electron-builder` atau alat serupa yang digunakan untuk membangun aplikasi Electron. Anda dapat menambahkan `electron-builder` dengan perintah berikut:
   ```bash
   npm install --save-dev electron-builder
   ```

2. **Konfigurasi `package.json`**:

Dalam bagian `"build"` di `package.json`, Anda sudah mengonfigurasi beberapa pengaturan penting. Berikut adalah penjelasan tentang bagian-bagian tersebut dan cara penggunaannya:

```json
"build": {
  "appId": "QuantumPOS.com",
  "productName": "QuantumPOS",
  "files": [
    "quantum-forge-pos/**",
    "php/**",
    "node_modules/**",
    "main.js",
    "package.json"
  ],
  "extraResources": [
    {
      "from": "php/",
      "to": "php/"
    },
    {
      "from": "quantum-forge-pos/",
      "to": "quantum-forge-pos/"
    }
  ],
  "win": {
    "icon": "icons/logo.ico"
  },
  "mac": {
    "icon": "icons/logo.icns"
  },
  "linux": {
    "icon": "icons/logo.png"
  }
}
```

#### **Penjelasan Konfigurasi**

- **`appId`**: ID unik untuk aplikasi Anda. Biasanya dalam format domain terbalik. Pastikan ID ini unik untuk mencegah konflik dengan aplikasi lain.

- **`productName`**: Nama produk atau aplikasi yang akan ditampilkan kepada pengguna. Ini adalah nama yang akan terlihat pada aplikasi yang diinstal.

- **`files`**: Daftar pola yang menentukan file mana yang akan disertakan dalam paket build. Pola ini menunjuk ke file dan direktori yang harus disertakan dalam build. Misalnya:
  - `"quantum-forge-pos/**"`: Menyertakan semua file dan subdirektori dalam `quantum-forge-pos`.
  - `"php/**"`: Menyertakan semua file dan subdirektori dalam `php/`.
  - `"node_modules/**"`: Menyertakan semua dependensi Node.js.
  - `"main.js"` dan `"package.json"`: Menyertakan file konfigurasi utama aplikasi.

- **`extraResources`**: Menyediakan file tambahan yang akan disertakan dalam build, tetapi tidak terdaftar dalam `files`. Misalnya:
  - File dari `php/` akan disalin ke direktori `php/` dalam paket build.
  - File dari `quantum-forge-pos/` akan disalin ke direktori `quantum-forge-pos/` dalam paket build.

- **`win`**: Konfigurasi spesifik untuk Windows:
  - `"icon"`: Jalur ke file ikon aplikasi untuk Windows dalam format `.ico`.

- **`mac`**: Konfigurasi spesifik untuk macOS:
  - `"icon"`: Jalur ke file ikon aplikasi untuk macOS dalam format `.icns`.

- **`linux`**: Konfigurasi spesifik untuk Linux:
  - `"icon"`: Jalur ke file ikon aplikasi untuk Linux dalam format `.png`.

### **Langkah-langkah untuk Membangun Aplikasi**

1. **Instal `electron-builder`**:
   Pastikan Anda telah menginstal `electron-builder` dengan perintah:
   ```bash
   npm install --save-dev electron-builder
   ```

2. **Tambah Skrip Build**:
   Tambahkan skrip build di `package.json` jika belum ada:
   ```json
   "scripts": {
     "start": "electron .",
     "build": "electron-builder"
   }
   ```

3. **Bangun Aplikasi**:
   Jalankan perintah build untuk menghasilkan file executable:
   ```bash
   npm run build
   ```

4. **Cek Hasil Build**:
   Setelah build selesai, periksa direktori output (`release` atau direktori yang Anda tentukan dalam konfigurasi) untuk file executable dan installer.

### **Catatan Tambahan**

- **Ikon**: Pastikan file ikon (`.ico`, `.icns`, `.png`) berada di jalur yang benar dan memiliki resolusi yang sesuai untuk kualitas tampilan yang baik di berbagai platform.
  
- **File Path**: Verifikasi bahwa jalur file dalam `files` dan `extraResources` sesuai dengan struktur direktori proyek Anda.

Dengan mengikuti konfigurasi dan langkah-langkah ini, Anda akan dapat membangun aplikasi Electron dengan baik dan mendistribusikannya sebagai file executable untuk berbagai platform.

3. **Bangun Aplikasi**:
   Jalankan perintah build untuk membuat file executable:
   ```bash
   npm run build
   ```

   Perintah ini akan menggunakan `electron-builder` untuk membangun aplikasi Anda dan menghasilkan file `.exe` di direktori `release` (atau sesuai dengan konfigurasi Anda).

4. **Distribusi**:
   Setelah proses build selesai, Anda akan menemukan file executable di direktori `release`. Anda dapat membagikan file ini kepada pengguna untuk diinstal di Windows.


### **Masalah dan Kontribusi**

Jika Anda mengalami masalah atau ingin memberikan kontribusi pada proyek ini, silakan buat [issue](https://github.com/username/repository/issues) di repositori ini. Kami menyambut baik kontribusi dari komunitas untuk meningkatkan dan mengembangkan proyek ini lebih lanjut.

### **Lisensi**

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

