import { ServiceItem, PortfolioItem, TestimonialItem, FaqItem, ContactInfo, DesignShowcaseItem, BeforeAfterProject } from '../types';

export const CONTACT_DATA: ContactInfo = {
  csPhone: '0859-4734-2718',
  csPhoneRaw: '6285947342718',
  email: 'halo@oxnbuild.com',
  address: 'Kawasan Bisnis Konstruksi & Arsitektur, Jabodetabek & Sekitarnya',
  workingHours: 'Layanan CS WhatsApp Siaga 24 Jam Setiap Hari (Fast Respon)',
};

export const getWaUrl = (message?: string): string => {
  const defaultText = 'Halo CS OXN BUILD, saya ingin konsultasi mengenai bangun / renovasi properti sesuai kebutuhan saya.';
  const encoded = encodeURIComponent(message || defaultText);
  return `https://api.whatsapp.com/send?phone=${CONTACT_DATA.csPhoneRaw}&text=${encoded}`;
};

export const openWhatsApp = (message?: string) => {
  const url = getWaUrl(message);
  // Using direct link element click to guarantee bypassing popup blockers
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'construction',
    title: 'Konstruksi',
    category: 'construction',
    tagline: 'Bangun Properti Baru dari Nol: Rumah Tinggal, Ruko & Bangunan',
    description: 'Pembangunan dari tanah kosong hingga serah terima kunci. Dikerjakan berdasarkan perhitungan struktur kokoh, fondasi cakar ayam bertulang, dan mutu beton teruji tahan gempa.',
    features: [
      'Pembangunan rumah tinggal tipe 1, 2, atau 3 lantai',
      'Struktur fondasi cakar ayam, sloof, kolom & balok kokoh',
      'Pengecoran dak lantai presisi & rata waterpass',
      'RAB transparan dengan spesifikasi material SNI',
      'Garansi struktur resmi tertulis'
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=900&q=80',
    popular: true,
  },
  {
    id: 'renovation',
    title: 'Renovasi',
    category: 'renovation',
    tagline: 'Transformasi & Peremajaan: Fasad, Tambah Lantai & Ruang',
    description: 'Solusi renovasi menyeluruh maupun sebagian (facelift). Meningkatkan nilai estetika dan kenyamanan rumah dengan penataan tata ruang yang lebih optimal dan fungsional.',
    features: [
      'Pembaruan fasad eksterior modern & tropis',
      'Peningkatan lantai (dak 2/3 lantai) & sekat ruangan',
      'Bongkar pasang atap baja ringan, plafon, & genteng',
      'Plesteran, acian anti retak rambut & pengecatan ulang',
      'Penyesuaian tata ruang agar lebih lega dan sejuk'
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
    popular: false,
  },
  {
    id: 'maintenance',
    title: 'Perbaikan',
    category: 'maintenance',
    tagline: 'Solusi Praktis: Pipa Air, Pompa, Sanitasi, Bocor & Listrik',
    description: 'Layanan teknisi dan tukang ahli untuk perbaikan cepat dan tuntas. Menangani masalah pipa air bocor dalam dinding, instalasi toren/pompa booster, sanitasi wastafel/kloset, plafon rembes, dan listrik.',
    features: [
      'Deteksi & perbaikan pipa air bocor dalam dinding',
      'Instalasi pipa air bersih (PVC / PPR panas-dingin)',
      'Pemasangan toren air & pompa pendorong booster otomatis',
      'Perbaikan sanitasi (kloset duduk/jongkok, wastafel, shower)',
      'Perbaikan plafon gypsum jebol rembes & kelistrikan rumah'
    ],
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=80',
    popular: false,
  },
  {
    id: 'supporting',
    title: 'Pekerjaan Pendukung',
    category: 'supporting',
    tagline: 'Kitchen Set, Kanopi, Pagar, Waterproofing & Finishing Interior',
    description: 'Pekerjaan pelengkap terintegrasi untuk menyempurnakan fungsi dan estetika hunian. Dikerjakan dengan material pilihan dan fitting presisi tinggi.',
    features: [
      'Kitchen set & backdrop TV custom multiplex HPL premium',
      'Pembuatan kanopi carport (alderon, tempered glass, solarflat)',
      'Pagar minimalis dorong/lipat, railing tangga & balkon',
      'Aplikasi waterproofing membran bakar & semen slurry dak',
      'Pemasangan lantai granit presisi & partisi ruangan'
    ],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
    popular: false,
  }
];

export const WHY_US_POINTS = [
  {
    title: 'Konsultasi',
    desc: 'Bebas diskusi awal seputar ide desain, keluhan kerusakan rumah, maupun estimasi biaya tanpa dipungut biaya komitmen.',
    iconName: 'MessageSquare'
  },
  {
    title: 'Komunikasi Jelas',
    desc: 'Transparansi penuh di setiap langkah: update progres foto/video berkala dan CS WhatsApp siaga 24 jam yang cepat merespons.',
    iconName: 'FileCheck'
  },
  {
    title: 'Pekerjaan Sesuai Kebutuhan',
    desc: 'Kami mendengarkan prioritas Anda: mulai dari perbaikan ringan parsial, renovasi bertahap, hingga bangun baru menyeluruh.',
    iconName: 'CheckCircle2'
  },
  {
    title: 'Penawaran Dapat Dinegosiasikan',
    desc: 'Rincian RAB terbuka per item pekerjaan. Fleksibel disesuaikan dengan alokasi budget dan opsi material terbaik tanpa biaya tersembunyi.',
    iconName: 'ShieldCheck'
  }
];

export const WORKFLOW_6_STEPS = [
  {
    step: '1',
    title: 'Konsultasi',
    desc: 'Hubungi CS WhatsApp kami untuk mendiskusikan rencana bangun, renovasi, atau perbaikan rumah Anda.'
  },
  {
    step: '2',
    title: 'Kirim Foto / Lokasi',
    desc: 'Kirimkan foto kondisi saat ini, denah (bila ada), dan titik lokasi proyek agar tim kami dapat melakukan analisa awal.'
  },
  {
    step: '3',
    title: 'Survey Bila Diperlukan',
    desc: 'Untuk pekerjaan yang memerlukan pengukuran akurat, tim kami siap datang langsung ke lokasi Anda (Gratis se-Jabodetabek).'
  },
  {
    step: '4',
    title: 'Penawaran',
    desc: 'Kami menyusun Rencana Anggaran Biaya (RAB) yang transparan, rinci, jelas spesifikasi bahannya, dan ramah di kantong.'
  },
  {
    step: '5',
    title: 'Kesepakatan',
    desc: 'Diskusi & negosiasi santai hingga sesuai dengan kesiapan Anda, dilanjutkan penandatanganan SPK resmi yang mengikat kedua pihak.'
  },
  {
    step: '6',
    title: 'Pengerjaan',
    desc: 'Tim tukang berpengalaman memulai pekerjaan tepat waktu dengan pengawasan teliti hingga serah terima kunci dan garansi resmi.'
  }
];

export const BEFORE_AFTER_PROJECTS: BeforeAfterProject[] = [
  {
    id: 'renovasi-fasad-jagakarsa',
    title: 'Renovasi Fasad & Peninggian 2 Lantai',
    location: 'Jagakarsa, Jakarta Selatan',
    category: 'Renovasi Rumah',
    description: 'Transformasi rumah lama bergaya 90-an menjadi hunian modern tropis bertingkat. Penambahan dak lantai atas, roster udara, dan cat eksterior tahan cuaca.',
    scope: ['Perkuatan Fondasi & Kolom', 'Dak Lantai 2 Beton Presisi', 'Fasad Modern Minimalis', 'Cat Eksterior Weatherproof'],
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=900&q=80',
    processImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=900&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'bangun-baru-bsd',
    title: 'Pembangunan Rumah Tinggal 2 Lantai Dari Nol',
    location: 'BSD City, Tangerang Selatan',
    category: 'Konstruksi Baru',
    description: 'Pembangunan rumah tinggal minimalis kontemporer dari lahan tanah kosong. Mengutamakan bukaan jendela lebar, pencahayaan alami, dan carport luas.',
    scope: ['Pondasi Cakar Ayam & Sloof SNI', 'Dinding Bata Ringan Lot Siku', 'Atap Baja Ringan & Genteng Keramik', 'Pengecoran & Finishing Rapi'],
    beforeImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80',
    processImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'kitchen-set-bekasi',
    title: 'Pembuatan Kitchen Set & Penataan Open Space',
    location: 'Grand Galaxy, Bekasi',
    category: 'Pekerjaan Pendukung',
    description: 'Perombakan area dapur dan ruang makan menjadi konsep open space modern. Kitchen set multiplex anti rayap dengan top table granit tahan gores.',
    scope: ['Bongkar Dinding Sekat Lama', 'Kitchen Set L-Shape HPL', 'Top Table Granit Nero', 'Drop Ceiling & LED Warm White'],
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80',
    processImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
    afterImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'waterproofing-dak-depok',
    title: 'Perbaikan Bocor & Waterproofing Dak Beton',
    location: 'Cinere, Depok',
    category: 'Perbaikan & Maintenance',
    description: 'Penanganan tuntas kebocoran dak toren dan talang air yang merembes ke plafon lantai bawah. Uji rendam 48 jam bebas bocor bergaransi.',
    scope: ['Kerok Lapisan Bocor Lama', 'Perbaikan Kemiringan Talang', 'Aplikasi Waterproofing 3 Lapis', 'Penggantian Plafon Gypsum Baru'],
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
    processImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80'
  }
];

export const WORKFLOW_STEPS = WORKFLOW_6_STEPS;
export const TRUST_POINTS = WHY_US_POINTS;

export const PORTFOLIO_DATA: PortfolioItem[] = [];

export const CONSTRUCTION_DESIGNS: DesignShowcaseItem[] = [
  {
    id: 'desain-arsitektur-tropis',
    title: 'Desain Hunian Modern Tropis 2 Lantai',
    category: 'Arsitektur Modern',
    subtitle: 'Fasad Kontemporer, Sirkulasi Sejuk & Cahaya Alami Maksimal',
    description: 'Konsep desain arsitektur rumah bertingkat yang memadukan estetika minimalis dengan efisiensi sirkulasi udara tropis. Mengoptimalkan bukaan jendela, kisi-kisi penahan panas, dan tata ruang lapang.',
    features: ['Fasad Rapi Estetik', 'Pencahayaan Alami Hemat Listrik', 'RAB Fleksibel Terjangkau'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    budgetTier: 'Harga Menyesuaikan Budget',
  },
  {
    id: 'struktur-konstruksi-sni',
    title: 'Konstruksi Struktur & Pengecoran Presisi',
    category: 'Struktur Konstruksi',
    subtitle: 'Pembesian Kokoh, Mutu Beton K-250 & Pengawasan Harian',
    description: 'Pengerjaan struktur utama fondasi cakar ayam, kolom balok, dan dak lantai beton dengan perakitan besi kokoh. Diawasi langsung oleh mandor berpengalaman untuk menjamin ketahanan gempa puluhan tahun.',
    features: ['Besi Berkualitas Penuh', 'Pengecoran Rapi Padat', 'Garansi Struktur 12 Bulan'],
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80',
    budgetTier: 'Transparan Tanpa Biaya Siluman',
  },
  {
    id: 'interior-living-room',
    title: 'Desain Interior Living Room & Open Space',
    category: 'Interior Mewah',
    subtitle: 'Plafon Drop Ceiling, Tata Lampu Hangat & Lantai Granit Presisi',
    description: 'Penataan interior ruang keluarga terintegrasi dengan konsep open space. Menghadirkan kesan luas dan mewah dengan kombinasi drop ceiling gypsum, backdrop TV modern, dan nat keramik super rapi.',
    features: ['Tata Ruang Fungsional', 'Plafon Drop Ceiling Mewah', 'Finishing Halus Siku'],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    budgetTier: 'Paket Hemat Elegan',
  },
  {
    id: 'renovasi-fasad-rumah',
    title: 'Renovasi Fasad & Perluasan Bangunan',
    category: 'Renovasi Fasad',
    subtitle: 'Penyegaran Tampilan Depan Rumah Lama Menjadi Baru & Gagah',
    description: 'Solusi peremajaan tampilan eksterior hunian lawas tanpa perlu membongkar seluruh bangunan. Meliputi perapian dinding, aplikasi cat eksterior tahan cuaca, aksen batu alam, dan pembuatan kanopi carport.',
    features: ['Transformasi Eksterior Cepat', 'Bahan Tahan Cuaca Ekstrem', 'Dompet Tetap Tenang'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    budgetTier: 'Ekonomis & Tepat Waktu',
  },
  {
    id: 'kitchen-set-modern',
    title: 'Desain Kitchen Set & Meja Bar Ergonomis',
    category: 'Ruang Dapur',
    subtitle: 'Kabinet Custom Multiplex Anti Rayap & Finishing HPL Premium',
    description: 'Pembuatan area dapur bersih dan dapur kotor yang tertata rapi. Dilengkapi lemari gantung hidrolik soft-close, top table granit tahan gores, serta instalasi kompor tanam dan cooker hood yang rapi.',
    features: ['Bahan Tahan Lembap & Rayap', 'Engsel Soft-Close Premium', 'Desain 3D Sebelum Produksi'],
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    budgetTier: 'Disesuaikan Ukuran Dapur',
  },
  {
    id: 'rekayasa-arsitektur-kerja',
    title: 'Perencanaan Gambar Kerja & Analisis Struktur',
    category: 'Arsitektur Modern',
    subtitle: 'Visualisasi 3D, Denah Tata Ruang Presisi & Rincian RAB Matang',
    description: 'Tahap awal perencanaan menyeluruh sebelum pengerjaan lapangan dimulai. Klien mendapatkan gambar arsitektur lengkap, tata letak pipa dan listrik, serta rincian kebutuhan material per meter agar biaya tidak membengkak.',
    features: ['Konsultasi 3D Gratis', 'Perhitungan Beban Akurat', 'Bebas Tanya Kapan Saja'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    budgetTier: 'Gratis Survey Lokasi',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [];

export const FAQS_DATA: FaqItem[] = [
  {
    question: 'Apakah konsultasi dan survey lokasi dikenakan biaya?',
    answer: 'Konsultasi awal dan survey lokasi untuk wilayah area operasional kami adalah GRATIS tanpa ikatan. Tim estimator kami akan datang mengukur dan memberikan rekomendasi solusi terbaik untuk hunian Anda.',
    category: 'Umum'
  },
  {
    question: 'Apakah harga OXN BUILD terjangkau dan ramah di kantong?',
    answer: 'Sangat terjangkau! Kami memegang prinsip bahwa hunian idaman yang kokoh dan estetik tidak harus menguras atau mengosongkan dompet Anda. Kami menyusun Rencana Anggaran Biaya (RAB) fleksibel yang disesuaikan dengan kemampuan budget Anda. Kami berikan rekomendasi material terbaik dengan harga hemat dan efisien tanpa mengurangi kualitas dan estetika bangunan.',
    category: 'Biaya & Harga'
  },
  {
    question: 'Apakah Customer Service OXN BUILD benar-benar siap melayani 24 jam?',
    answer: 'Ya, tim Customer Service kami siaga 24 jam setiap hari via WhatsApp di 0859-4734-2718. Anda bebas bertanya, berkonsultasi seputar renovasi/bangun baru, meminta estimasi biaya, maupun mengajukan jadwal survey lokasi gratis kapan saja sesuai waktu luang Anda.',
    category: 'Customer Service'
  },
  {
    question: 'Bagaimana sistem pembayaran untuk proyek renovasi atau bangun baru?',
    answer: 'Pembayaran dilakukan secara bertahap (sistem termin) yang disesuaikan dengan persentase progres fisik di lapangan. Anda hanya membayar termin berikutnya setelah progres termin sebelumnya diverifikasi dan disetujui bersama.',
    category: 'Biaya & Kontrak'
  },
  {
    question: 'Apakah ada jaminan garansi setelah pekerjaan selesai?',
    answer: 'Ya, seluruh pekerjaan OXN BUILD dilindungi oleh garansi resmi tertulis. Kami memberikan garansi pemeliharaan kebocoran dan finishing, serta garansi struktur hingga 12 bulan setelah serah terima kunci.',
    category: 'Garansi'
  },
  {
    question: 'Berapa lama estimasi waktu pengerjaan proyek?',
    answer: 'Waktu pengerjaan bergantung pada skala proyek. Renovasi ringan memakan waktu 2–4 minggu, renovasi total 2–4 bulan, sedangkan bangun rumah baru berkisar antara 4–8 bulan. Jadwal kerja (time schedule S-curve) akan dicantumkan secara jelas dalam kontrak kerja.',
    category: 'Waktu'
  },
  {
    question: 'Apakah saya bisa menggunakan desain arsitektur yang sudah saya miliki sendiri?',
    answer: 'Sangat bisa. Jika Anda sudah memiliki gambar kerja arsitektur atau denah sendiri, kami dapat langsung menghitungkan RAB berdasarkan gambar tersebut. Namun jika belum ada, tim arsitek OXN BUILD siap membantu merancang dari nol.',
    category: 'Desain'
  },
  {
    question: 'Apakah OXN BUILD melayani perbaikan ringan seperti pasang pipa bocor, toren, atau kran?',
    answer: 'Tentu saja! Selain renovasi skala besar dan bangun baru, OXN BUILD memiliki divisi Perbaikan Ringan & Maintenance. Kami melayani instalasi saluran pipa air bersih & pembuangan (PPR/PVC), perbaikan pipa bocor dalam dinding, pemasangan toren air, pompa pendorong (booster), instalasi sanitasi kloset/wastafel, perbaikan plafon rembes, hingga kelistrikan rumah dengan teknisi ahli dan estimasi biaya transparan.',
    category: 'Perbaikan Ringan'
  }
];
