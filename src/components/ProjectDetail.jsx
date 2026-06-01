import { useParams, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import projects from '../data/projectData';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  const workflowsById = {
    1: [
      {
        title: 'Pendaftaran pasien',
        detail: 'Pasien mendaftar dan mengambil nomor antrian melalui aplikasi.',
      },
      {
        title: 'Pengaturan jadwal',
        detail: 'Sistem menyusun jadwal dan menampilkan status antrian terkini.',
      },
      {
        title: 'Monitoring antrian',
        detail: 'Pasien memantau progres antrian secara real-time.',
      },
      {
        title: 'Laporan harian',
        detail: 'Administrator meninjau laporan antrian untuk evaluasi layanan.',
      },
    ],
    2: [
      {
        title: 'Ambil gambar tomat',
        detail: 'Pengguna membuka kamera atau mengunggah foto tomat.',
      },
      {
        title: 'Analisis AI',
        detail: 'Model memproses gambar dan mengklasifikasi kematangan.',
      },
      {
        title: 'Hasil klasifikasi',
        detail: 'Aplikasi menampilkan kategori kematangan yang terdeteksi.',
      },
      {
        title: 'Rekomendasi panen',
        detail: 'Pengguna mendapat saran tindak lanjut berdasarkan hasil.',
      },
    ],
    3: [
      {
        title: 'Pilih aktivitas',
        detail: 'Pengguna memilih tugas atau kategori pekerjaan.',
      },
      {
        title: 'Mulai/berhenti timer',
        detail: 'Timer dijalankan untuk melacak durasi setiap aktivitas.',
      },
      {
        title: 'Sinkronisasi data',
        detail: 'Data waktu tersimpan dan tersinkron ke backend.',
      },
      {
        title: 'Laporan & reminder',
        detail: 'Pengguna melihat laporan bulanan dan notifikasi pengingat.',
      },
    ],
    4: [
      {
        title: 'Pilih hadiah',
        detail: 'Pengguna memilih hadiah sesuai preferensi.',
      },
      {
        title: 'Personalisasi pesan',
        detail: 'Tambahkan pesan khusus untuk penerima.',
      },
      {
        title: 'Pesan via WhatsApp',
        detail: 'Pemesanan dilakukan melalui WhatsApp untuk transaksi manual.',
      },
      {
        title: 'Proses & kirim',
        detail: 'Penjual memproses pesanan dan menyiapkan pengiriman.',
      },
    ],
    5: [
      {
        title: 'Cari obat/resep',
        detail: 'Pengguna mencari obat atau mengunggah resep dokter.',
      },
      {
        title: 'Konsultasi apoteker',
        detail: 'Lakukan konsultasi melalui chat atau video.',
      },
      {
        title: 'Pesan obat',
        detail: 'Obat dipesan melalui platform sesuai kebutuhan.',
      },
      {
        title: 'Ambil & bayar',
        detail: 'Pesanan diambil di apotek dan dibayar COD.',
      },
    ],
    6: [
      {
        title: 'Input inventaris',
        detail: 'Admin memasukkan data aset perusahaan.',
      },
      {
        title: 'Pelacakan QR',
        detail: 'Lokasi aset dipantau melalui pemindaian QR code.',
      },
      {
        title: 'Jadwal maintenance',
        detail: 'Sistem menjadwalkan perawatan otomatis.',
      },
      {
        title: 'Laporan depresiasi',
        detail: 'Tinjau laporan depresiasi dan integrasi akuntansi.',
      },
    ],
    7: [
      {
        title: 'Monitoring sensor',
        detail: 'Sensor rumah kaca mengirim data suhu, kelembapan, dan cahaya.',
      },
      {
        title: 'Analisis kondisi',
        detail: 'Aplikasi menganalisis data untuk menentukan kebutuhan irigasi.',
      },
      {
        title: 'Otomasi irigasi',
        detail: 'Sistem menjalankan penyiraman otomatis sesuai ambang batas.',
      },
      {
        title: 'Kontrol pencahayaan',
        detail: 'Pencahayaan diatur agar tanaman mendapat intensitas ideal.',
      },
    ],
    8: [
      {
        title: 'Unggah citra retina',
        detail: 'Pengguna mengunggah gambar fundus/retina melalui fitur upload.',
      },
      {
        title: 'Prediksi AI',
        detail: 'Model MobileNetV2 memproses gambar untuk klasifikasi penyakit.',
      },
      {
        title: 'Hasil & confidence',
        detail: 'Sistem menampilkan hasil klasifikasi beserta confidence level.',
      },
      {
        title: 'Dukungan deteksi dini',
        detail: 'Hasil membantu pengguna memahami kondisi mata lebih awal.',
      },
    ],
  };

  const workflowSteps = workflowsById[project?.id] || [];

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Project Not Found
          </h2>
          {/* <Link
            to="/"
            className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Back to Home
          </Link> */}
        </div>
      </div>
    );
  }

  const { title, images, description, url } = project;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 p-6 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        {/* <Link
          to="/"
          className="mb-6 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Back to Home
        </Link> */}
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
          {title}
        </h1>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mb-6"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full h-96 rounded-lg bg-transparent flex items-center justify-center overflow-hidden">
                <img
                  src={img}
                  alt={`${title} screen ${idx + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
          {description}
        </p>
        {workflowSteps.length > 0 && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Workflow Penggunaan
            </h2>
            <div className="relative">
              <ul className="space-y-5">
                {workflowSteps.map((step, idx) => (
                  <li key={idx} className="relative pl-10">
                    <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-gray-300"></span>
                    {idx < workflowSteps.length - 1 && (
                      <span className="absolute left-[4px] top-[22px] h-[calc(100%+4px)] w-[4px] bg-gray-200"></span>
                    )}
                    <div className="text-gray-800 dark:text-gray-100 font-semibold">
                      {step.title}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {step.detail}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {/* <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          View Project on GitHub
        </a> */}
      </div>
    </div>
  );
};

export default ProjectDetail;
