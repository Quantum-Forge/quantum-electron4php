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

### **Masalah dan Kontribusi**

Jika Anda mengalami masalah atau ingin memberikan kontribusi pada proyek ini, silakan buat [issue](https://github.com/username/repository/issues) di repositori ini. Kami menyambut baik kontribusi dari komunitas untuk meningkatkan dan mengembangkan proyek ini lebih lanjut.

### **Lisensi**

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

