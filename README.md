# Klob Jobs

> ⏰ Time limit: **210 min**


## Summary

Pada tugas kali ini kalian akan membuat sebuah aplikasi bernama `Klob Jobs`. Dalam aplikasi ini kalian akan menampilkan berbagai macam `Lowongan Pekerjaan`. 
Kalian dapat menambahkan `Lowongan Pekerjaan` baru dan juga menambahkan `Lowongan Pekerjaan` ke dalam halaman `Lamaran Terkirim`. 

Tidak Perlu membuat server , 
Untuk data awal yang disimpan kedalam redux Silahkan fetch dari https://test-server-klob.onrender.com/fakeJob/agustus/2023
atau jika terjadi masalah atau kendala silahkan menggunakan `db.json` sebagai database awal pada aplikasi ini.

## Branch Development

- Buat branch "development" untuk memulai tugas ini
- batas commit yang akan di cek adalah 210 menit / 3,5 jam sejak di mulai

## Branch Release

- Setelah 3,5 jam pertama dari branch "development" lalu buat branch "release" yang diambil dari branch "development" untuk melanjutkan tugas ini 
- batas commit yang akan di cek adalah 24 jam sejak di mulai



## Competencies

- React
- React Router
- Redux or Context
- Reusable Component

## Release 0

Buatlah sebuah halaman dengan path `/` yang akan menampilkan kumpulan `Lowongan Pekerjaan` yang tersedia.

Pada setiap item nya akan terdapat data:

- Logo Perusahaan dari `Lowongan Pekerjaan` tersebut
- Nama Perusahaan yang membuka `Lowongan Pekerjaan` tersebut.
- Nama `Lowongan Pekerjaan` tersebut.
- Status dari `Lowongan Pekerjaan` tersebut.
- Kisaran Gaji dari `Lowongan Pekerjaan` tersebut.
- Tanggal di posting `Lowongan Pekerjaan` tersebut.

Pada setiap item nya juga akan terdapat sebuah button "KIRIM LAMARAN" untuk menambahkan `Lowongan Pekerjaan` tersebut ke dalam halaman `Lamaran Terkirim`.

<img width="800" src="./Release-0.png" alt="list">

**Rules**

- Data dari `Lowongan Pekerjaan` wajib didapatkan dari `redux` atau `context`.
- Kalian dibebaskan untuk membuat design dari aplikasi ini selama fitur yang kita minta terpenuhi 😉
- Perhatikan juga penempatan element pada aplikasi kalian sehingga nyaman untuk dilihat oleh user 😉
- Kalian dibebaskan untuk menggunakan CSS Frameworks apapun

## Release 1

Buatlah sebuah form yang akan menambahkan `Lowongan Pekerjaan` baru kedalam database kita yang tersimpan di `redux` atau `context`. Kalian dapat membuat halaman baru atau membuat modal untuk form ini.

Data yang dapat di input untuk `Lowongan Pekerjaan` baru kita adalah:

- Logo Perusahaan dari `Lowongan Pekerjaan` tersebut
- Nama Perusahaan yang membuka `Lowongan Pekerjaan` tersebut.
- Nama `Lowongan Pekerjaan` tersebut.
- Status karyawan dari `Lowongan Pekerjaan` tersebut.
- Gaji terkecil dari `Lowongan Pekerjaan` tersebut.
- Gaji terbesar dari `Lowongan Pekerjaan` tersebut.
- Tanggal di posting `Lowongan Pekerjaan` tersebut.

Jika kalian menggunakan halaman baru pastikan user kembali ke halaman `/` ketika berhasil menyimpan data `Lowongan Pekerjaan`.

Pastikan `Lowongan Pekerjaan` yang baru kalian buat sudah terlihat pada list di halaman `/`

> Kalian dapat melihat [KLOB](https://www.klob.id/jobs) sebagai referensi Lowongan Pekerjaan yang bisa kalian tambahkan

<img width="800" src="./Release-1.png" alt="add">

**Rules**

- Menyimpan data `Lowongan Pekerjaan` harus melalui `redux` atau `context`, 
  tidak perlu mengubah di db.json atau di server cukup ubah data yg ada di redux saja.
- Kalian dibebaskan untuk membuat design dari aplikasi ini selama fitur yang kita minta terpenuhi 😉
- Perhatikan juga penempatan element pada aplikasi kalian sehingga nyaman untuk dilihat oleh user 😉

## Release 2

Lakukanlah sebuah action ketika user menekan salah satu `Lowongan Pekerjaan` yang ada di halaman utama. Action yang dilakukan adalah mengarahkan user ke halaman `/detail-lowongan-perkerjaan/:jobVacancyCode` yang menampilkan detail dari `Lowongan Pekerjaan` yang dipilih oleh user.

**Notes**

- Kalian diperbolehkan membuat sebuah button untuk melakukan action ini.

Data yang ditampilkan pada halaman `/detail-lowongan-perkerjaan/:jobVacancyCode` adalah:

- Logo Perusahaan dari `Lowongan Pekerjaan` tersebut
- Nama Perusahaan yang membuka `Lowongan Pekerjaan` tersebut.
- Nama `Lowongan Pekerjaan` tersebut.
- Deskripsi dari `Lowongan Pekerjaan` tersebut.
- Status dari `Lowongan Pekerjaan` tersebut.
- Kisaran Gaji dari `Lowongan Pekerjaan` tersebut.
- Tanggal di posting `Lowongan Pekerjaan` tersebut.

Pada halaman ini rubahlah format gaji dari 1000000 menjadi IDR 1.000.000 dan format tangga posting dari 01/02/2022 menjadi 6 bulan yang lalu

contoh:

```
gaji => 1000000, output = IDR 1.000.000
gaji => 01/02/2022, output = 6 bulan yang lalu

```

<img width="800" src="./Release-2.png" alt="detail">

**Rules**

- Data dari detail `Lowongan Pekerjaan` wajib didapatkan dari `redux` atau `context`.
- Kalian dibebaskan untuk membuat design dari aplikasi ini selama fitur yang kita minta terpenuhi 😉
- Perhatikan juga penempatan element pada aplikasi kalian sehingga nyaman untuk dilihat oleh user 😉

## Release 3

Setiap `Lowongan Pekerjaan` yang terdapat pada aplikasi ini dapat kita tambahkan ke `Lamaran Terkirim`. Implementasikan button `KIRIM LAMARAN` pada setiap `Lowongan Pekerjaan` yang akan menambahkan `Lowongan Pekerjaan` tersebut ke dalam `Lamaran Terkirim`. `Lowongan Pekerjaan` yang sudah pernah ditambahkan ke `Lamaran Terkirim` tidak dapat ditambahkan kembali ke dalam `Lamaran Terkirim`. Data yang disimpan pada setiap item di `Lamaran Terkirim` sama dengan yang disimpan pada setiap `Lowongan Pekerjaan`.

<img width="800" src="./Release-3-a.png" alt="home">

**Rules**

- Data `Lamaran Terkirim` harus disimpan di dalam data di `redux` atau `context`.
  tidak perlu mengubah di db.json atau di server cukup ubah data yg ada di redux saja.
- Lowongan Pekerjaan yang sudah dimasukkan tidak bisa ditambahkan lagi ke dalam halaman `Lamaran Terkirim`
- Menyimpan data `Lamaran Terkirim` harus melalui `action` di `redux` atau `context`.

## Release 4

Buatlah sebuah halaman `/Lamaran Terkirim` yang akan menampilkan kumpulan `Lowongan Pekerjaan` yang kalian tambahkan ke `Lamaran Terkirim`. Tampilan kumpulan `Lowongan Pekerjaan` di halaman ini sama dengan yang berada di halaman `/` tetapi memiliki perbedaan pada button untuk menghapus `Lowongan Pekerjaan` yang ada `Lamaran Terkirim`.

<img width="800" src="./Release-3-b.png" alt="Lamaran Terkirim">
<img width="800" src="./Release-4.png" alt="Lamaran Terkirim">

**Rules**

- Data dari list `Lamaran Terkirim` wajib didapatkan dari `redux` atau `context`.
- Lowongan Pekerjaan yang sudah dibatalkan maka, 
  pada halaman "/" button "KIRIM LAMARAN" menjadi enable dan bisa ditambahkan lagi ke dalam Lamaran Terkirim.
- Kalian dibebaskan untuk membuat design dari aplikasi ini selama fitur yang kita minta terpenuhi 😉
- Perhatikan juga penempatan element pada aplikasi kalian sehingga nyaman untuk dilihat oleh user 😉

## Release 5

Buatlah sebuah validasi ketika user ingin menyimpan data `Lowongan Pekerjaan` baru dengan rules sebagai berikut:

- Semua input harus terisi sebelum menyimpan data ke database.
- Tampilkan sebuah feedback ketika ada data yang belum terisi pada form, 
  feedback ini dapat berbentuk modal/alert/toast/warning tetapi tidak diperbolehkan menggunakan fungsi `alert()` javascript.
- Field Gaji hanya bisa diinput dengan angka.

<img width="800" src="./Release-5-c.png" alt="addWithError">

Rapikanlah halaman `/` dengan rules sebagai berikut:

- Tampilkan sebuah image default jika image dari link url nya bermasalah
- Responsive halaman web dan mobile

<img width="800" src="./Release-5-a.png" alt="home">
