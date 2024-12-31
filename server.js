const express = require('express');
const app = express();
const fs = require('fs'); // Modul untuk membaca file
const path = require('path');
const port = 3000;

// Endpoint untuk merender halaman utama (index.html)
app.get('/', (req, res) => {
    // Baca file HTML dari sistem file
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, html) => {
        if (err) {
            console.error(err);
            res.status(500).send('Terjadi kesalahan.');
        } else {
            // Kirim file HTML sebagai respons
            res.setHeader('Content-Type', 'text/html');
            res.send(html);
        }
    });
});

// Endpoint untuk melayani file statis (misalnya gambar, CSS, JS)
app.use('/static', express.static(path.join(__dirname, 'public')));

// Jalankan server pada port 3000
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
