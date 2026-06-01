const projects = [
  {
    id: 1,
    title: "Patient Queue App",
    images: [
      "/assets/projects/GiriHusada.png",
    ],
    url: "https://github.com/username/attendance-app",
    description:
      "Aplikasi manajemen antrian pasien untuk fasilitas kesehatan, dirancang untuk menyederhanakan proses janji temu dan mengurangi waktu tunggu. Dibuat menggunakan Flutter sebagai framework cross-platform, dengan state management menggunakan Provider. Backend dibangun dengan Laravel sebagai framework PHP, menggunakan MySQL untuk database. Fitur utama termasuk pendaftaran pasien, pemantauan antrian secara real-time, dan laporan harian untuk administrator.",
  },
  {
    id: 2,
    title: "Tomato Ripeness Detector",
    images: [
      "/assets/projects/SitomaApp.png",
    ],
    url: "https://github.com/username/tomato-app",
    description:
      "Aplikasi berbasis AI yang mendeteksi tingkat kematangan tomat menggunakan teknik pemrosesan gambar. Dikembangkan dengan Python menggunakan library OpenCV untuk pemrosesan gambar, TensorFlow untuk model machine learning, dan Flask sebagai backend API. Model dilatih pada dataset gambar tomat dengan berbagai tingkat kematangan. Fitur termasuk deteksi real-time melalui kamera, klasifikasi kematangan (matang segar, mentah segar, matang tidak segar, matang segar), dan rekomendasi panen untuk petani.",
  },
  {
    id: 3,
    title: "Time Tracking App",
    images: [
      "/assets/projects/TimeTrackApp.png",
    ],
    url: "https://github.com/username/tomato-app",
    description:
      "Aplikasi pelacakan waktu untuk meningkatkan produktivitas, membantu pengguna melacak waktu yang dihabiskan untuk tugas-tugas. Dikembangkan selama magang di CV. Codespace Indonesia, Malang, Jawa Timur (Juli 2025 - Oktober 2025), sebagai bagian dari pengembangan aplikasi untuk mendukung operasional perusahaan. Dibuat menggunakan Flutter dengan state management Bloc untuk mengelola logika bisnis yang kompleks dan Dio untuk HTTP requests ke API backend. Fitur utama mencakup timer start/stop, kategorisasi tugas, laporan payslip perbulan, dan reminder notifikasi. Selama pengembangan, saya bertanggung jawab untuk merancang antarmuka pengguna dengan berkerja bersama tim UI/UX, mengimplementasikan logika pelacakan waktu, dan memastikan integrasi dengan backend untuk sinkronisasi data dengan tim Backend.",
  },
  {
    id: 4,
    title: "Gift App",
    images: [
      "/assets/projects/MilaniaCraft.png",
    ],
    url: "https://github.com/username/tomato-app",
    description:
    "Aplikasi untuk memilih dan mengirim hadiah yang dipersonalisasi, dirancang untuk memberikan pengalaman pengguna yang sederhana dan personal. Dibangun menggunakan PHP native untuk backend dengan PDO untuk akses database dan Android SDK untuk antarmuka mobile. Database menggunakan MySQL untuk menyimpan data pengguna dan pesanan. Fitur utama meliputi rekomendasi hadiah berdasarkan preferensi pengguna dan customisasi pesan. Pembayaran dilakukan melalui WhatsApp untuk memudahkan transaksi manual antara pengguna dan penjual.",
  },
  {
    id: 5,
    title: "Apotek Online",
    images: [
      "/assets/projects/ApotekOnline.png",
    ],
    url: "https://github.com/username/tomato-app",
    description:
      "Platform apotek online yang memungkinkan pengguna memesan obat dan berkonsultasi dengan apoteker secara remote. Dibangun menggunakan Laravel sebagai framework PHP untuk backend dan frontend, dengan Blade templating untuk antarmuka pengguna, dan MySQL untuk database. Pengguna memesan obat melalui platform, mengambil pesanan di lokasi apotek, dan melakukan pembayaran secara langsung (cash on delivery). Fitur utama meliputi pencarian obat, upload resep dokter, konsultasi chat/video, dan manajemen inventori untuk admin apotek.",
  },
  {
    id: 6,
    title: "Aset Management",
    images: [
      "/assets/projects/eRPT-Asset.png",
    ],
    url: "https://github.com/usernamee/tomato-app",
    description:
      "Sistem manajemen aset perusahaan untuk melacak penggunaan dan jadwal pemeliharaan guna mengoptimalkan pemanfaatan sumber daya. Dibangun menggunakan Laravel sebagai framework PHP untuk backend dan frontend, dengan Blade templating untuk antarmuka pengguna, dan SQL Server untuk database. Fitur termasuk inventaris aset, pelacakan lokasi dengan QR code scanning, jadwal maintenance otomatis, laporan depreciasi aset, dan integrasi dengan sistem akuntansi.",
  },
  {
    id: 7,
    title: "GreenSense",
    images: [
      "/assets/projects/GreenSense.png",
    ],
    url: "https://github.com/username/greensense-app",
    description:
      "Green Sense adalah aplikasi inovatif yang dirancang khusus untuk mengoptimalkan manajemen lingkungan dalam rumah kaca. Aplikasi ini mengintegrasikan teknologi sensor canggih dan perangkat lunak pintar untuk menyediakan solusi otomatisasi yang efisien bagi irigasi dan pencahayaan tanaman di lingkungan rumah kaca.",
  },
  {
    id: 8,
    title: "EyeCare AI",
    images: [
      "/assets/projects/EyeCare.png",
    ],
    url: "https://github.com/username/eyecare-ai",
    description:
      "EyeCare AI adalah website berbasis kecerdasan buatan (Artificial Intelligence) yang dirancang untuk mengklasifikasikan penyakit mata secara cepat dan akurat melalui analisis citra retina atau fundus. Website ini memanfaatkan model deep learning berbasis CNN (MobileNetV2) untuk mendeteksi berbagai kondisi mata seperti katarak, diabetic retinopathy, glaucoma, dan mata normal. Pengguna dapat mengunggah gambar mata melalui fitur upload, lalu sistem melakukan prediksi dan menampilkan hasil klasifikasi beserta tingkat kepercayaannya (confidence level). Dengan tampilan yang user-friendly dan proses yang efisien, EyeCare AI membantu meningkatkan kemudahan deteksi dini penyakit mata serta mendukung pemanfaatan teknologi AI dalam bidang kesehatan.",
  },
  {
    id: 9,
    title: "MSJ Project",
    images: [
      "/assets/projects/MSJProject.png",
    ],
    url: "https://github.com/username/msj-project",
    description:
      "MSJ Project adalah kumpulan project yang dikerjakan selama magang di PT Multi Spunindo Jaya, terdiri dari MSJ Asset, MSJ Catering, MSJ Ticketing, dan TSI ERP. MSJ Asset mendukung manajemen aset dan operasional perusahaan secara terintegrasi dengan fitur pencatatan/pelabelan aset, pengelolaan perpindahan aset, pemeliharaan, monitoring kondisi, serta laporan dashboard, aktivitas harian, penerimaan barang, dan defect. MSJ Catering mengelola operasional catering dari perencanaan menu, inspeksi/sidak, pencatatan temuan dan tindak lanjut, hingga pelaporan dan pemantauan status melalui dashboard untuk meningkatkan efisiensi dan kontrol kualitas. MSJ Ticketing menangani manajemen ticketing, permintaan barang, dan peminjaman aset dengan alur approval berlapis, transfer/penugasan tiket, pelacakan status, serta dashboard dan laporan periodik. TSI ERP mencakup manajemen master, transaksi persediaan/produksi, modul pembelian, dashboard operasional, barcode scanning untuk akurasi, dan laporan terstruktur yang dapat diekspor guna integrasi logistik, produksi, dan pengadaan.",
  },
];

export default projects;
