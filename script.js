const TOOLKIT = [
  { id: "scan", title: "SCAN", hint: "Cek gejala visual" },
  { id: "sample", title: "SAMPLE", hint: "Ambil data fisik" },
  { id: "map", title: "MAP", hint: "Lacak sumber aliran" },
  { id: "interview", title: "ASK", hint: "Dengar info lapangan" },
];

const MISSIONS = {
  water: {
    order: 1,
    short: "Water",
    worldTitle: "Water World",
    missionTitle: "Sungai sekolah tiba-tiba keruh",
    prompt:
      "Pilih tool yang tepat, buka hotspot, lalu cari penyebab utama sebelum menyusun action pack.",
    easyPrompt:
      "Klik titik bercahaya dengan tool yang cocok. Kumpulkan bukti, pilih penyebab, lalu pasang 2 solusi.",
    intro:
      "Kita tidak menebak. Mulai dari sungai, cek pipa, bandingkan lereng tanah, lalu lihat data mana yang paling kuat.",
    recapTag: "Bukti air",
    rootCause: "drain",
    hotspots: [
      {
        id: "w1",
        code: "A1",
        label: "Sungai",
        tool: "sample",
        x: 12,
        y: 62,
        clue: "Sampel dekat pipa punya pH paling turun dan bau paling kuat.",
        easy: "Air paling buruk ada dekat pipa buangan.",
        weights: { drain: 3, runoff: 1 },
      },
      {
        id: "w2",
        code: "A2",
        label: "Pipa",
        tool: "map",
        x: 64,
        y: 22,
        clue: "Aliran keluar masih aktif meski hujan sudah reda.",
        easy: "Pipa tetap membuang air walau hujan berhenti.",
        weights: { drain: 3 },
      },
      {
        id: "w3",
        code: "A3",
        label: "Lereng",
        tool: "scan",
        x: 26,
        y: 20,
        clue: "Tanah gundul membawa sedimen, tetapi paling terasa di sisi hulu saja.",
        easy: "Lereng memang kotor, tapi efeknya tidak merata.",
        weights: { runoff: 3 },
      },
      {
        id: "w4",
        code: "A4",
        label: "Jaring",
        tool: "interview",
        x: 64,
        y: 68,
        clue: "Petugas bilang sampah banyak tersangkut, tapi warna paling keruh muncul sebelum titik jaring.",
        easy: "Sampah ada, tapi bukan sumber utama warna keruh.",
        weights: { litter: 2, drain: 1 },
      },
    ],
    suspects: [
      { id: "drain", title: "Saluran limbah", blurb: "Ada buangan lokal masuk ke sungai." },
      { id: "runoff", title: "Lereng berlumpur", blurb: "Sedimen dari tanah terbawa hujan." },
      { id: "litter", title: "Sampah permukaan", blurb: "Sampah padat menyumbat aliran." },
    ],
    solutions: [
      {
        id: "water-audit",
        title: "Audit pipa buangan",
        blurb: "Petakan dan tutup sumber aliran yang salah.",
        stats: { impact: 88, speed: 74, budget: 78, proof: 84 },
        tags: ["root", "measure"],
      },
      {
        id: "water-filter",
        title: "Kebun penyaring",
        blurb: "Tambahkan tanaman di tepian saluran.",
        stats: { impact: 80, speed: 68, budget: 72, proof: 70 },
        tags: ["root"],
      },
      {
        id: "water-test",
        title: "Tes air mingguan",
        blurb: "Bandingkan pH, bau, dan warna tiap pekan.",
        stats: { impact: 64, speed: 78, budget: 86, proof: 94 },
        tags: ["measure"],
      },
      {
        id: "water-cleanup",
        title: "Aksi bersih sungai",
        blurb: "Angkat sampah sambil edukasi warga.",
        stats: { impact: 58, speed: 88, budget: 88, proof: 58 },
        tags: ["surface"],
      },
    ],
    winText:
      "Bagus. Kamu tidak berhenti di gejala. Bukti paling kuat menunjuk ke saluran limbah sebagai penyebab utama.",
    loseText:
      "Action pack-mu sudah bergerak, tetapi penyebab utamanya belum pas. Cek lagi bukti yang paling dekat dengan sumber perubahan air.",
  },
  air: {
    order: 2,
    short: "Air",
    worldTitle: "Air City",
    missionTitle: "Udara pagi di sekolah terasa berat",
    prompt:
      "Bandingkan asap bakar sampah, antrean kendaraan, dan sirkulasi udara. Cari mana yang paling menekan kualitas udara.",
    easyPrompt:
      "Cek sumber asap satu per satu. Lihat mana yang paling dekat dan paling kuat efeknya.",
    intro:
      "Udara buruk tidak selalu terlihat. Kita kumpulkan bukti dulu sebelum memilih tindakan.",
    recapTag: "Bukti udara",
    rootCause: "burning",
    hotspots: [
      {
        id: "a1",
        code: "B1",
        label: "Gerbang",
        tool: "scan",
        x: 12,
        y: 64,
        clue: "Antrean motor menaikkan asap, tapi puncaknya cepat hilang setelah jam masuk.",
        easy: "Kendaraan berpengaruh, tapi efeknya tidak bertahan lama.",
        weights: { traffic: 2 },
      },
      {
        id: "a2",
        code: "B2",
        label: "Asap",
        tool: "sample",
        x: 68,
        y: 24,
        clue: "Partikel tertinggi terdeteksi di dekat titik pembakaran sampah.",
        easy: "Titik asap memberi hasil partikel paling tinggi.",
        weights: { burning: 3 },
      },
      {
        id: "a3",
        code: "B3",
        label: "Angin",
        tool: "map",
        x: 30,
        y: 18,
        clue: "Arah angin membawa asap langsung ke area kelas bawah.",
        easy: "Angin mendorong asap ke sekolah.",
        weights: { burning: 2, heattrap: 1 },
      },
      {
        id: "a4",
        code: "B4",
        label: "UKS",
        tool: "interview",
        x: 62,
        y: 68,
        clue: "Keluhan batuk paling sering muncul saat warga sekitar membakar sampah, bukan saat lalu lintas biasa.",
        easy: "Keluhan naik saat ada pembakaran.",
        weights: { burning: 2, traffic: 1 },
      },
    ],
    suspects: [
      { id: "burning", title: "Bakar sampah", blurb: "Asap lokal menyelimuti sekolah." },
      { id: "traffic", title: "Antrean kendaraan", blurb: "Emisi gerbang menumpuk." },
      { id: "heattrap", title: "Sirkulasi lemah", blurb: "Udara tertahan di sekitar gedung." },
    ],
    solutions: [
      {
        id: "air-ban",
        title: "Zona tanpa bakar",
        blurb: "Aturan dan pengawasan sederhana.",
        stats: { impact: 88, speed: 78, budget: 88, proof: 76 },
        tags: ["root"],
      },
      {
        id: "air-walk",
        title: "Drop-off lebih jauh",
        blurb: "Kurangi antre di gerbang sekolah.",
        stats: { impact: 72, speed: 74, budget: 84, proof: 68 },
        tags: ["root"],
      },
      {
        id: "air-monitor",
        title: "Log udara jam sibuk",
        blurb: "Catat kondisi pagi dan siang.",
        stats: { impact: 60, speed: 82, budget: 92, proof: 94 },
        tags: ["measure"],
      },
      {
        id: "air-trees",
        title: "Koridor pohon",
        blurb: "Tambah buffer hijau di tepi jalan.",
        stats: { impact: 68, speed: 62, budget: 70, proof: 72 },
        tags: ["support"],
      },
    ],
    winText:
      "Nice catch. Bukti lapangan paling konsisten menunjuk pembakaran sampah sebagai sumber utama tekanan udara.",
    loseText:
      "Kamu sudah menekan gejala, tapi akar masalahnya masih kabur. Cek lagi hotspot dengan partikel tertinggi.",
  },
  waste: {
    order: 3,
    short: "Waste",
    worldTitle: "Waste Zone",
    missionTitle: "Sampah sekolah menumpuk tiap siang",
    prompt:
      "Cari apakah sumber utamanya plastik sekali pakai, tempat sampah campur, atau sisa makanan kantin.",
    easyPrompt:
      "Bandingkan sumber sampah paling besar. Cari mana yang paling sering muncul.",
    intro:
      "Sampah yang terlihat banyak belum tentu berasal dari penyebab yang sama. Kita butuh bukti jenis dan alurnya.",
    recapTag: "Bukti sampah",
    rootCause: "singleUse",
    hotspots: [
      {
        id: "ws1",
        code: "C1",
        label: "Kantin",
        tool: "scan",
        x: 12,
        y: 62,
        clue: "Kemasan sekali pakai mendominasi sampah setelah jam istirahat.",
        easy: "Plastik kantin paling banyak terlihat setelah istirahat.",
        weights: { singleUse: 3 },
      },
      {
        id: "ws2",
        code: "C2",
        label: "Tong",
        tool: "sample",
        x: 66,
        y: 22,
        clue: "Tong campur memang membuat daur ulang sulit, tetapi volume terbesar tetap datang dari kemasan ringan.",
        easy: "Tempat sampah campur bikin repot, tapi jumlah terbesar tetap dari kemasan.",
        weights: { mixedBins: 2, singleUse: 1 },
      },
      {
        id: "ws3",
        code: "C3",
        label: "Rute",
        tool: "map",
        x: 28,
        y: 18,
        clue: "Jalur angkut sering penuh pada hari ketika kantin menjual minuman kemasan.",
        easy: "Hari minuman kemasan = sampah paling banyak.",
        weights: { singleUse: 2 },
      },
      {
        id: "ws4",
        code: "C4",
        label: "Dapur",
        tool: "interview",
        x: 64,
        y: 68,
        clue: "Sisa makanan ada, tetapi jauh lebih sedikit dibanding sampah bungkus.",
        easy: "Sisa makanan ada, tapi tidak sebanyak bungkus plastik.",
        weights: { foodWaste: 2, singleUse: 1 },
      },
    ],
    suspects: [
      { id: "singleUse", title: "Plastik sekali pakai", blurb: "Volume utama datang dari kemasan." },
      { id: "mixedBins", title: "Tong campur", blurb: "Sistem pemilahan tidak jelas." },
      { id: "foodWaste", title: "Sisa makanan", blurb: "Organik menumpuk dari kantin." },
    ],
    solutions: [
      {
        id: "waste-refill",
        title: "Botol isi ulang",
        blurb: "Kurangi pembelian minuman kemasan.",
        stats: { impact: 86, speed: 70, budget: 72, proof: 76 },
        tags: ["root"],
      },
      {
        id: "waste-bins",
        title: "Tong terpilah",
        blurb: "Pisah organik, daur ulang, residu.",
        stats: { impact: 72, speed: 82, budget: 80, proof: 72 },
        tags: ["support"],
      },
      {
        id: "waste-audit",
        title: "Audit sampah",
        blurb: "Hitung jenis sampah setiap minggu.",
        stats: { impact: 60, speed: 84, budget: 92, proof: 94 },
        tags: ["measure"],
      },
      {
        id: "waste-canteen",
        title: "Kebijakan kantin",
        blurb: "Batasi item sekali pakai.",
        stats: { impact: 88, speed: 68, budget: 78, proof: 80 },
        tags: ["root"],
      },
    ],
    winText:
      "Kamu membaca pola dengan tepat. Bukti paling banyak mengarah ke plastik sekali pakai dari kebiasaan kantin.",
    loseText:
      "Masih terasa seperti memperbaiki sistem sampah tanpa menyentuh sumber terbesar. Lihat lagi hotspot kantin dan rute angkut.",
  },
  energy: {
    order: 4,
    short: "Energy",
    worldTitle: "Energy Lab",
    missionTitle: "Sekolah boros listrik sepanjang hari",
    prompt:
      "Cari pemborosan terbesar: lampu siang hari, ventilasi buruk, atau belum ada energi surya.",
    easyPrompt:
      "Lihat apa yang paling sering memboroskan listrik sekarang, bukan yang paling keren teknologinya.",
    intro:
      "Teknologi baru menarik, tapi investigasi energi harus mulai dari kebiasaan dan pemakaian nyata.",
    recapTag: "Bukti energi",
    rootCause: "lights",
    hotspots: [
      {
        id: "e1",
        code: "D1",
        label: "Kelas",
        tool: "scan",
        x: 12,
        y: 64,
        clue: "Lampu banyak menyala saat cahaya matahari sudah cukup.",
        easy: "Lampu tetap hidup meski ruangan terang.",
        weights: { lights: 3 },
      },
      {
        id: "e2",
        code: "D2",
        label: "Meter",
        tool: "sample",
        x: 66,
        y: 22,
        clue: "Lonjakan konsumsi terbesar muncul saat blok kelas aktif penuh di siang hari.",
        easy: "Siang hari paling boros saat kelas dipakai.",
        weights: { lights: 2, cooling: 1 },
      },
      {
        id: "e3",
        code: "D3",
        label: "Jendela",
        tool: "map",
        x: 28,
        y: 18,
        clue: "Ventilasi memang kurang baik, tetapi beban energi dasar tetap dominan dari pencahayaan.",
        easy: "Ventilasi ada masalah, tapi lampu masih paling dominan.",
        weights: { cooling: 2, lights: 1 },
      },
      {
        id: "e4",
        code: "D4",
        label: "Satpam",
        tool: "interview",
        x: 64,
        y: 68,
        clue: "Petugas melihat banyak ruang kosong tetap menyalakan lampu sampai sore.",
        easy: "Ruang kosong sering lupa mematikan lampu.",
        weights: { lights: 2 },
      },
    ],
    suspects: [
      { id: "lights", title: "Lampu berlebih", blurb: "Pencahayaan boros sepanjang hari." },
      { id: "cooling", title: "Ventilasi buruk", blurb: "Ruang panas memicu konsumsi tambahan." },
      { id: "solar", title: "Tanpa panel surya", blurb: "Tidak ada suplai energi alternatif." },
    ],
    solutions: [
      {
        id: "energy-led",
        title: "Switch ke LED",
        blurb: "Ganti lampu lama secara bertahap.",
        stats: { impact: 84, speed: 68, budget: 64, proof: 80 },
        tags: ["root"],
      },
      {
        id: "energy-patrol",
        title: "Patroli hemat",
        blurb: "Checklist siswa sebelum pulang.",
        stats: { impact: 72, speed: 88, budget: 92, proof: 74 },
        tags: ["root"],
      },
      {
        id: "energy-log",
        title: "Log meter mingguan",
        blurb: "Bandingkan blok kelas per minggu.",
        stats: { impact: 58, speed: 82, budget: 94, proof: 96 },
        tags: ["measure"],
      },
      {
        id: "energy-solar",
        title: "Pilot panel surya",
        blurb: "Mulai dari satu area kecil.",
        stats: { impact: 78, speed: 52, budget: 42, proof: 76 },
        tags: ["support"],
      },
    ],
    winText:
      "Mantap. Kamu memilih akar pemborosan saat ini, bukan sekadar teknologi paling menarik untuk dipasang.",
    loseText:
      "Solusimu terlihat futuristik, tetapi belum tentu menyasar kebocoran energi terbesar. Cek lagi pola lampu siang hari.",
  },
  climate: {
    order: 5,
    short: "Climate",
    worldTitle: "Climate Dome",
    missionTitle: "Halaman sekolah panas dan gampang tergenang",
    prompt:
      "Cari pemicu utama: terlalu banyak beton, kurang pohon, atau drainase lokal yang buruk.",
    easyPrompt:
      "Bandingkan area paling panas dan area paling sering banjir. Cari pola yang sama.",
    intro:
      "Iklim terasa sebagai panas dan genangan. Kita perlu melihat apakah keduanya datang dari akar yang sama.",
    recapTag: "Bukti iklim",
    rootCause: "hardscape",
    hotspots: [
      {
        id: "c1",
        code: "E1",
        label: "Lapangan",
        tool: "scan",
        x: 14,
        y: 62,
        clue: "Area beton penuh menyimpan panas paling lama setelah tengah hari.",
        easy: "Beton paling bikin panas bertahan lama.",
        weights: { hardscape: 3, noShade: 1 },
      },
      {
        id: "c2",
        code: "E2",
        label: "Talang",
        tool: "sample",
        x: 66,
        y: 24,
        clue: "Genangan muncul lebih cepat di area keras meski drain belum tersumbat total.",
        easy: "Genangan muncul cepat karena air tidak meresap.",
        weights: { hardscape: 2, poorDrain: 1 },
      },
      {
        id: "c3",
        code: "E3",
        label: "Peta air",
        tool: "map",
        x: 28,
        y: 18,
        clue: "Aliran hujan bergerak sangat cepat melintasi permukaan yang kedap air.",
        easy: "Air langsung lari di atas permukaan keras.",
        weights: { hardscape: 2, poorDrain: 1 },
      },
      {
        id: "c4",
        code: "E4",
        label: "Penjaga",
        tool: "interview",
        x: 64,
        y: 68,
        clue: "Pohon memang kurang, tetapi titik paling bermasalah tetap area yang tertutup beton.",
        easy: "Kurang pohon ada pengaruh, tapi beton masih paling berat.",
        weights: { noShade: 2, hardscape: 1 },
      },
    ],
    suspects: [
      { id: "hardscape", title: "Beton berlebih", blurb: "Permukaan keras memicu panas dan limpasan." },
      { id: "noShade", title: "Kurang pohon", blurb: "Area terbuka tidak punya peneduh." },
      { id: "poorDrain", title: "Drainase buruk", blurb: "Air tertahan di titik tertentu." },
    ],
    solutions: [
      {
        id: "climate-paving",
        title: "Zona resapan",
        blurb: "Ubah area keras jadi lebih pori.",
        stats: { impact: 88, speed: 58, budget: 54, proof: 80 },
        tags: ["root"],
      },
      {
        id: "climate-trees",
        title: "Koridor teduh",
        blurb: "Fokus pada jalur padat siswa.",
        stats: { impact: 78, speed: 64, budget: 70, proof: 74 },
        tags: ["support"],
      },
      {
        id: "climate-rain",
        title: "Tandon hujan",
        blurb: "Tampung air dari atap sekolah.",
        stats: { impact: 74, speed: 60, budget: 58, proof: 82 },
        tags: ["root"],
      },
      {
        id: "climate-map",
        title: "Log titik panas",
        blurb: "Ukur suhu dan genangan rutin.",
        stats: { impact: 56, speed: 80, budget: 92, proof: 96 },
        tags: ["measure"],
      },
    ],
    winText:
      "Yes. Kamu membaca hubungan panas dan genangan sebagai satu sistem, bukan dua masalah terpisah.",
    loseText:
      "Kamu sudah memilih aksi yang membantu, tapi akar masalahnya belum terpetakan dengan tepat. Lihat lagi pola permukaan keras.",
  },
  food: {
    order: 6,
    short: "Food",
    worldTitle: "Food & Health Hub",
    missionTitle: "Kantin ramai, tapi siswa sering kurang fit",
    prompt:
      "Cari penyebab utama: kebersihan tangan, jajanan manis, atau porsi makanan yang tidak pas.",
    easyPrompt:
      "Cek apakah masalah paling besar datang dari kebersihan, pilihan makanan, atau sisa porsi.",
    intro:
      "Makanan sehat tidak cukup jika prosesnya tidak aman. Kita lihat apa yang paling memengaruhi kondisi siswa.",
    recapTag: "Bukti pangan",
    rootCause: "hygiene",
    hotspots: [
      {
        id: "f1",
        code: "F1",
        label: "Wastafel",
        tool: "scan",
        x: 12,
        y: 64,
        clue: "Banyak siswa melewati jam makan tanpa cuci tangan.",
        easy: "Kebiasaan cuci tangan masih rendah.",
        weights: { hygiene: 3 },
      },
      {
        id: "f2",
        code: "F2",
        label: "Suhu",
        tool: "sample",
        x: 66,
        y: 22,
        clue: "Beberapa makanan siap saji dibiarkan cukup lama di suhu ruang.",
        easy: "Makanan kadang terlalu lama dibiarkan terbuka.",
        weights: { hygiene: 3 },
      },
      {
        id: "f3",
        code: "F3",
        label: "Menu",
        tool: "map",
        x: 28,
        y: 18,
        clue: "Pilihan manis tinggi memang populer, tetapi tidak paling terkait dengan keluhan mendadak.",
        easy: "Jajanan manis ada masalah, tapi bukan sumber keluhan tercepat.",
        weights: { sugary: 2, hygiene: 1 },
      },
      {
        id: "f4",
        code: "F4",
        label: "Dapur",
        tool: "interview",
        x: 64,
        y: 68,
        clue: "Petugas kantin bilang antrean padat membuat prosedur higienis sering dipercepat.",
        easy: "Saat ramai, kebersihan sering jadi tidak konsisten.",
        weights: { hygiene: 2, portions: 1 },
      },
    ],
    suspects: [
      { id: "hygiene", title: "Kebersihan lemah", blurb: "Risiko muncul dari tangan dan penanganan makanan." },
      { id: "sugary", title: "Jajanan manis", blurb: "Pilihan gula mendominasi." },
      { id: "portions", title: "Porsi tidak pas", blurb: "Sisa makanan dan energi tidak seimbang." },
    ],
    solutions: [
      {
        id: "food-handwash",
        title: "Rutinitas cuci tangan",
        blurb: "Tambah pengingat dan alur antre.",
        stats: { impact: 84, speed: 84, budget: 90, proof: 80 },
        tags: ["root"],
      },
      {
        id: "food-safe",
        title: "Checklist aman saji",
        blurb: "Pastikan suhu dan waktu aman.",
        stats: { impact: 88, speed: 72, budget: 84, proof: 88 },
        tags: ["root", "measure"],
      },
      {
        id: "food-label",
        title: "Label menu mudah",
        blurb: "Sorot gula, protein, serat.",
        stats: { impact: 64, speed: 78, budget: 86, proof: 74 },
        tags: ["support"],
      },
      {
        id: "food-log",
        title: "Log keluhan dan menu",
        blurb: "Catat pola setelah jam makan.",
        stats: { impact: 56, speed: 84, budget: 92, proof: 96 },
        tags: ["measure"],
      },
    ],
    winText:
      "Tepat. Kamu menangkap bahwa keamanan proses bisa lebih mendesak daripada sekadar komposisi menu.",
    loseText:
      "Masih terlihat seperti fokus pada pilihan makanan tanpa mengunci sumber risiko tercepat. Lihat lagi wastafel dan suhu saji.",
  },
  biodiversity: {
    order: 7,
    short: "Bio",
    worldTitle: "Biodiversity Forest",
    missionTitle: "Serangga penyerbuk makin jarang terlihat",
    prompt:
      "Cari pemicu utama: pestisida, kurang tanaman asli, atau habitat kecil yang hilang.",
    easyPrompt:
      "Bandingkan apa yang membuat makhluk kecil sulit datang: racun, kurang makanan, atau kurang tempat berlindung.",
    intro:
      "Biodiversitas kecil di sekolah juga penting. Kita cari faktor mana yang paling menekan penyerbuk.",
    recapTag: "Bukti biodiversitas",
    rootCause: "pesticide",
    hotspots: [
      {
        id: "b1",
        code: "G1",
        label: "Daun",
        tool: "scan",
        x: 12,
        y: 64,
        clue: "Daun tampak bersih dari hama, tetapi penyerbuk juga sangat jarang terlihat setelah penyemprotan.",
        easy: "Setelah semprot, penyerbuk makin jarang.",
        weights: { pesticide: 3 },
      },
      {
        id: "b2",
        code: "G2",
        label: "Sampel",
        tool: "sample",
        x: 66,
        y: 22,
        clue: "Jejak bahan kimia ditemukan di area yang biasanya ramai serangga.",
        easy: "Area favorit serangga terkena bahan kimia.",
        weights: { pesticide: 3 },
      },
      {
        id: "b3",
        code: "G3",
        label: "Peta bunga",
        tool: "map",
        x: 28,
        y: 18,
        clue: "Tanaman asli memang sedikit, tetapi penurunan tajam terjadi setelah pola semprot berubah.",
        easy: "Tanaman asli kurang, tapi penurunan tajam datang setelah penyemprotan.",
        weights: { nativePlants: 2, pesticide: 1 },
      },
      {
        id: "b4",
        code: "G4",
        label: "Tukang kebun",
        tool: "interview",
        x: 64,
        y: 68,
        clue: "Habitat kecil pernah ada, namun serangga mulai hilang lebih cepat setelah jadwal pestisida diperbanyak.",
        easy: "Habitat penting, tapi semprotan lebih cepat menekan serangga.",
        weights: { habitatLoss: 2, pesticide: 1 },
      },
    ],
    suspects: [
      { id: "pesticide", title: "Pestisida", blurb: "Bahan kimia menekan penyerbuk." },
      { id: "nativePlants", title: "Tanaman asli minim", blurb: "Sumber makanan lokal kurang." },
      { id: "habitatLoss", title: "Habitat hilang", blurb: "Tempat berlindung menipis." },
    ],
    solutions: [
      {
        id: "bio-cut",
        title: "Kurangi pestisida",
        blurb: "Ganti dengan kontrol yang lebih aman.",
        stats: { impact: 88, speed: 74, budget: 80, proof: 82 },
        tags: ["root"],
      },
      {
        id: "bio-native",
        title: "Taman tanaman asli",
        blurb: "Tambah makanan untuk penyerbuk.",
        stats: { impact: 82, speed: 64, budget: 74, proof: 78 },
        tags: ["support"],
      },
      {
        id: "bio-count",
        title: "Hitung penyerbuk",
        blurb: "Pantau populasi tiap minggu.",
        stats: { impact: 58, speed: 84, budget: 94, proof: 96 },
        tags: ["measure"],
      },
      {
        id: "bio-corner",
        title: "Habitat mikro",
        blurb: "Tambahkan sudut aman untuk fauna kecil.",
        stats: { impact: 74, speed: 68, budget: 78, proof: 76 },
        tags: ["support"],
      },
    ],
    winText:
      "Hebat. Kamu menemukan tekanan paling kuat sebelum memilih tambahan habitat sebagai pendukung.",
    loseText:
      "Solusi pendukungmu bagus, tetapi belum mengunci tekanan utama pada penyerbuk. Cek lagi hotspot sampel dan daun.",
  },
};

const state = {
  currentWorld: "water",
  activeTool: "scan",
  simpleMode: false,
  totalXp: 0,
};

const missionStates = {};

const worldTabs = document.getElementById("worldTabs");
const objectiveStack = document.getElementById("objectiveStack");
const toolGrid = document.getElementById("toolGrid");
const stepTrack = document.getElementById("stepTrack");
const scene = document.getElementById("scene");
const sceneCaption = document.getElementById("sceneCaption");
const evidenceGrid = document.getElementById("evidenceGrid");
const suspectGrid = document.getElementById("suspectGrid");
const solutionGrid = document.getElementById("solutionGrid");
const speechBox = document.getElementById("speechBox");
const xpValue = document.getElementById("xpValue");
const starsValue = document.getElementById("starsValue");
const clearValue = document.getElementById("clearValue");
const evidenceCounter = document.getElementById("evidenceCounter");
const suspectCounter = document.getElementById("suspectCounter");
const solutionCounter = document.getElementById("solutionCounter");
const missionRank = document.getElementById("missionRank");
const meterCopy = document.getElementById("meterCopy");
const impactMeter = document.getElementById("impactMeter");
const speedMeter = document.getElementById("speedMeter");
const budgetMeter = document.getElementById("budgetMeter");
const proofMeter = document.getElementById("proofMeter");
const startOverlay = document.getElementById("startOverlay");
const startGame = document.getElementById("startGame");
const submitMission = document.getElementById("submitMission");
const resetMission = document.getElementById("resetMission");
const resultOverlay = document.getElementById("resultOverlay");
const replayMission = document.getElementById("replayMission");
const nextMission = document.getElementById("nextMission");

const resultTitle = document.getElementById("resultTitle");
const resultRank = document.getElementById("resultRank");
const resultSummary = document.getElementById("resultSummary");
const resultEvidence = document.getElementById("resultEvidence");
const resultCause = document.getElementById("resultCause");
const resultActions = document.getElementById("resultActions");

const worldTitle = document.getElementById("worldTitle");
const worldPrompt = document.getElementById("worldPrompt");
const missionTitle = document.getElementById("missionTitle");

function ensureMissionState(worldId) {
  if (!missionStates[worldId]) {
    missionStates[worldId] = {
      foundHotspots: [],
      selectedCause: null,
      selectedSolutions: [],
      bestStars: 0,
      cleared: false,
      lastRank: "Waiting",
    };
  }

  return missionStates[worldId];
}

function currentMission() {
  return MISSIONS[state.currentWorld];
}

function currentMissionState() {
  return ensureMissionState(state.currentWorld);
}

function setSpeech(text) {
  speechBox.textContent = text;
}

function worldOrder() {
  return Object.keys(MISSIONS).sort((a, b) => MISSIONS[a].order - MISSIONS[b].order);
}

function renderWorldTabs() {
  worldTabs.innerHTML = worldOrder()
    .map((id) => {
      const mission = MISSIONS[id];
      const saved = ensureMissionState(id);
      const tag = saved.bestStars ? ` ${saved.bestStars}S` : "";
      return `
        <button class="world-tab ${id === state.currentWorld ? "active" : ""}" data-world="${id}" type="button">
          ${mission.short}${tag}
        </button>
      `;
    })
    .join("");

  Array.from(worldTabs.querySelectorAll("[data-world]")).forEach((button) => {
    button.addEventListener("click", () => {
      state.currentWorld = button.dataset.world;
      document.body.dataset.world = state.currentWorld;
      renderAll();
    });
  });
}

function renderObjectives() {
  const mission = currentMission();
  const saved = currentMissionState();
  const objectives = [
    {
      done: saved.foundHotspots.length >= 3,
      title: "Scout the scene",
      detail: `${saved.foundHotspots.length}/4 hotspot terbuka`,
    },
    {
      done: Boolean(saved.selectedCause),
      title: "Lock the cause",
      detail: saved.selectedCause ? suspectTitle(saved.selectedCause) : "Pilih penyebab utama",
    },
    {
      done: saved.selectedSolutions.length >= 2,
      title: "Build action pack",
      detail: `${saved.selectedSolutions.length}/2 action card dipilih`,
    },
    {
      done: saved.cleared,
      title: "Launch mission",
      detail: saved.cleared ? `Rank ${saved.lastRank}` : mission.rootCause ? "Kirim saat siap" : "Belum siap",
    },
  ];

  objectiveStack.innerHTML = objectives
    .map(
      (item, index) => `
        <article class="objective-item ${item.done ? "done" : ""}">
          <div class="objective-dot">${item.done ? "OK" : index + 1}</div>
          <div class="objective-copy">
            <strong>${item.title}</strong>
            <span>${item.detail}</span>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderToolkit() {
  toolGrid.innerHTML = TOOLKIT.map(
    (tool) => `
      <button class="tool-button ${tool.id === state.activeTool ? "active" : ""}" data-tool="${tool.id}" type="button">
        <strong>${tool.title}</strong>
        <span>${tool.hint}</span>
      </button>
    `,
  ).join("");

  Array.from(toolGrid.querySelectorAll("[data-tool]")).forEach((button) => {
    button.addEventListener("click", () => {
      state.activeTool = button.dataset.tool;
      renderToolkit();
      sceneCaption.textContent = `Tool aktif: ${toolName(state.activeTool)}. Pilih hotspot yang cocok untuk membuka bukti.`;
    });
  });
}

function renderSteps() {
  const saved = currentMissionState();
  const steps = [
    { label: "Scout", active: saved.foundHotspots.length < 3, done: saved.foundHotspots.length >= 3 },
    { label: "Trace", active: saved.foundHotspots.length >= 3 && !saved.selectedCause, done: Boolean(saved.selectedCause) },
    {
      label: "Fix",
      active: Boolean(saved.selectedCause) && saved.selectedSolutions.length < 2,
      done: saved.selectedSolutions.length >= 2,
    },
    { label: "Launch", active: saved.selectedSolutions.length >= 2 && !saved.cleared, done: saved.cleared },
  ];

  stepTrack.innerHTML = steps
    .map(
      (step) => `
        <div class="step-pill ${step.active ? "active" : ""} ${step.done ? "done" : ""}">
          ${step.label}
        </div>
      `,
    )
    .join("");
}

function renderScene() {
  const mission = currentMission();
  const saved = currentMissionState();
  scene.innerHTML = mission.hotspots
    .map(
      (spot) => `
        <button
          class="hotspot ${saved.foundHotspots.includes(spot.id) ? "found" : ""}"
          data-hotspot="${spot.id}"
          type="button"
          style="left:${spot.x}%; top:${spot.y}%;"
        >
          <span class="hotspot-code">${spot.code}</span>
          <strong>${spot.label}</strong>
          <small>${toolName(spot.tool)}</small>
        </button>
      `,
    )
    .join("");

  Array.from(scene.querySelectorAll("[data-hotspot]")).forEach((button) => {
    button.addEventListener("click", () => openHotspot(button.dataset.hotspot, button));
  });
}

function openHotspot(spotId, button) {
  const mission = currentMission();
  const saved = currentMissionState();
  const spot = mission.hotspots.find((item) => item.id === spotId);

  if (!spot) return;

  if (saved.foundHotspots.includes(spotId)) {
    setSpeech("Hotspot ini sudah kamu buka. Pakai bukti itu untuk memperkuat dugaanmu.");
    return;
  }

  if (state.activeTool !== spot.tool) {
    button.classList.add("wrong");
    window.setTimeout(() => button.classList.remove("wrong"), 260);
    setSpeech(`Tool kurang cocok. Coba gunakan ${toolName(spot.tool)} untuk hotspot ${spot.label}.`);
    return;
  }

  saved.foundHotspots.push(spotId);
  state.totalXp += 14;
  setSpeech(state.simpleMode ? spot.easy : spot.clue);
  renderAll();
}

function renderEvidence() {
  const mission = currentMission();
  const saved = currentMissionState();
  evidenceCounter.textContent = `${saved.foundHotspots.length}/4`;

  if (!saved.foundHotspots.length) {
    evidenceGrid.innerHTML = `<div class="empty-state">Belum ada bukti. Pilih tool lalu klik hotspot di scene.</div>`;
    return;
  }

  evidenceGrid.innerHTML = saved.foundHotspots
    .map((id) => {
      const spot = mission.hotspots.find((item) => item.id === id);
      return `
        <article class="evidence-item">
          <strong>${spot.label}</strong>
          <span>${state.simpleMode ? spot.easy : spot.clue}</span>
          <em>${toolName(spot.tool)}</em>
        </article>
      `;
    })
    .join("");
}

function suspectTitle(id) {
  const mission = currentMission();
  const suspect = mission.suspects.find((item) => item.id === id);
  return suspect ? suspect.title : "-";
}

function evidenceWeights() {
  const mission = currentMission();
  const saved = currentMissionState();
  const score = {};

  mission.suspects.forEach((suspect) => {
    score[suspect.id] = 0;
  });

  saved.foundHotspots.forEach((id) => {
    const spot = mission.hotspots.find((item) => item.id === id);
    Object.entries(spot.weights).forEach(([key, value]) => {
      score[key] += value;
    });
  });

  return score;
}

function renderSuspects() {
  const mission = currentMission();
  const saved = currentMissionState();
  const unlocked = saved.foundHotspots.length >= 3;
  const scores = evidenceWeights();
  const maxScore = Math.max(...Object.values(scores), 1);

  suspectCounter.textContent = unlocked ? "Tap to accuse" : "Locked";

  suspectGrid.innerHTML = mission.suspects
    .map((suspect) => {
      const confidence = Math.round((scores[suspect.id] / maxScore) * 100);
      return `
        <button
          class="suspect-button ${unlocked ? "" : "locked"} ${saved.selectedCause === suspect.id ? "active" : ""}"
          data-suspect="${suspect.id}"
          type="button"
        >
          <strong>${suspect.title}</strong>
          <span>${suspect.blurb}</span>
          <div class="confidence-track"><i style="width:${unlocked ? confidence : 0}%"></i></div>
          <em>${unlocked ? `${confidence}% evidence` : "Collect 3 clues"}</em>
        </button>
      `;
    })
    .join("");

  Array.from(suspectGrid.querySelectorAll("[data-suspect]")).forEach((button) => {
    button.addEventListener("click", () => {
      if (!unlocked) {
        setSpeech("Buka minimal 3 hotspot dulu agar Cause Board aktif.");
        return;
      }

      currentMissionState().selectedCause = button.dataset.suspect;
      if (button.dataset.suspect === mission.rootCause) {
        setSpeech("Dugaanmu kuat. Bukti paling berat memang mengarah ke sini. Sekarang pilih 2 action card.");
      } else {
        setSpeech("Dugaan ini bisa saja, tapi beberapa bukti utama belum benar-benar mendukungnya. Boleh cek ulang sebelum launch.");
      }
      renderAll();
    });
  });
}

function renderSolutions() {
  const mission = currentMission();
  const saved = currentMissionState();
  const unlocked = Boolean(saved.selectedCause);

  solutionCounter.textContent = `${saved.selectedSolutions.length}/2`;

  solutionGrid.innerHTML = mission.solutions
    .map((solution) => {
      const active = saved.selectedSolutions.includes(solution.id);
      return `
        <button
          class="solution-button ${unlocked ? "" : "locked"} ${active ? "active" : ""}"
          data-solution="${solution.id}"
          type="button"
        >
          <strong>${solution.title}</strong>
          <span>${solution.blurb}</span>
          <div class="mini-track"><i style="width:${solution.stats.impact}%"></i></div>
          <em>${solution.tags.join(" + ")}</em>
        </button>
      `;
    })
    .join("");

  Array.from(solutionGrid.querySelectorAll("[data-solution]")).forEach((button) => {
    button.addEventListener("click", () => toggleSolution(button.dataset.solution));
  });
}

function toggleSolution(solutionId) {
  const saved = currentMissionState();
  if (!saved.selectedCause) {
    setSpeech("Kunci penyebab utama dulu, baru action card bisa dipasang dengan tepat.");
    return;
  }

  const selected = new Set(saved.selectedSolutions);
  if (selected.has(solutionId)) {
    selected.delete(solutionId);
  } else {
    if (selected.size >= 2) {
      setSpeech("Pilih maksimal 2 action card agar paket solusi tetap fokus.");
      return;
    }
    selected.add(solutionId);
  }

  saved.selectedSolutions = Array.from(selected);
  setSpeech("Action pack diperbarui. Lihat Mission Meter untuk membaca trade-off-nya.");
  renderAll();
}

function selectedSolutionObjects() {
  const mission = currentMission();
  const saved = currentMissionState();
  return mission.solutions.filter((item) => saved.selectedSolutions.includes(item.id));
}

function missionMetrics() {
  const saved = currentMissionState();
  const solutions = selectedSolutionObjects();

  if (!solutions.length) {
    return { impact: 0, speed: 0, budget: 0, proof: 0, note: "Pilih action card untuk melihat kekuatan paket solusi." };
  }

  const total = solutions.reduce(
    (acc, solution) => ({
      impact: acc.impact + solution.stats.impact,
      speed: acc.speed + solution.stats.speed,
      budget: acc.budget + solution.stats.budget,
      proof: acc.proof + solution.stats.proof,
      tags: acc.tags.concat(solution.tags),
    }),
    { impact: 0, speed: 0, budget: 0, proof: 0, tags: [] },
  );

  const count = solutions.length;
  let impact = Math.round(total.impact / count);
  let speed = Math.round(total.speed / count);
  let budget = Math.round(total.budget / count);
  let proof = Math.round(total.proof / count);
  const tags = new Set(total.tags);

  if (saved.selectedCause === currentMission().rootCause) {
    impact = Math.min(100, impact + 6);
    proof = Math.min(100, proof + 6);
  } else if (saved.selectedCause) {
    impact = Math.max(0, impact - 10);
    proof = Math.max(0, proof - 12);
  }

  if (tags.has("root") && tags.has("measure")) {
    proof = Math.min(100, proof + 8);
  }

  const note =
    tags.has("root") && tags.has("measure")
      ? "Paket ini seimbang: ada aksi inti dan cara mengukur hasil."
      : "Paketmu bergerak, tapi akan lebih kuat jika menggabungkan aksi inti dengan aksi ukur.";

  return { impact, speed, budget, proof, note };
}

function renderMeters() {
  const metrics = missionMetrics();
  impactMeter.style.width = `${metrics.impact}%`;
  speedMeter.style.width = `${metrics.speed}%`;
  budgetMeter.style.width = `${metrics.budget}%`;
  proofMeter.style.width = `${metrics.proof}%`;
  meterCopy.textContent = metrics.note;

  const saved = currentMissionState();
  if (!saved.selectedCause) {
    missionRank.textContent = "Need Cause";
  } else if (saved.selectedSolutions.length < 2) {
    missionRank.textContent = "Build Pack";
  } else {
    missionRank.textContent = rankForScore(previewScore()).rank;
  }
}

function previewScore() {
  const mission = currentMission();
  const saved = currentMissionState();
  const metrics = missionMetrics();
  const evidenceScore = Math.round((saved.foundHotspots.length / 4) * 28);
  const causeScore = saved.selectedCause === mission.rootCause ? 34 : saved.selectedCause ? 10 : 0;
  const actionScore = Math.round(metrics.impact * 0.18 + metrics.proof * 0.16 + metrics.speed * 0.08 + metrics.budget * 0.08);
  return evidenceScore + causeScore + actionScore;
}

function rankForScore(score) {
  if (score >= 90) return { rank: "S", stars: 3 };
  if (score >= 75) return { rank: "A", stars: 2 };
  if (score >= 58) return { rank: "B", stars: 1 };
  return { rank: "C", stars: 0 };
}

function renderHUD() {
  xpValue.textContent = state.totalXp;
  const stars = worldOrder().reduce((sum, id) => sum + ensureMissionState(id).bestStars, 0);
  const clears = worldOrder().filter((id) => ensureMissionState(id).bestStars > 0).length;
  starsValue.textContent = stars;
  clearValue.textContent = `${clears}/7`;
}

function renderMissionCopy() {
  const mission = currentMission();
  worldTitle.textContent = mission.worldTitle;
  worldPrompt.textContent = state.simpleMode ? mission.easyPrompt : mission.prompt;
  missionTitle.textContent = mission.missionTitle;
  sceneCaption.textContent = `Tool aktif: ${toolName(state.activeTool)}. Klik hotspot yang cocok untuk mengumpulkan bukti.`;
}

function toolName(id) {
  const tool = TOOLKIT.find((item) => item.id === id);
  return tool ? tool.title : id.toUpperCase();
}

function submitCurrentMission() {
  const mission = currentMission();
  const saved = currentMissionState();

  if (saved.foundHotspots.length < 3) {
    setSpeech("Belum cukup bukti. Buka minimal 3 hotspot dulu sebelum launch.");
    return;
  }

  if (!saved.selectedCause) {
    setSpeech("Pilih penyebab utama dulu di Cause Board.");
    return;
  }

  if (saved.selectedSolutions.length < 2) {
    setSpeech("Pilih 2 action card agar paket solusi terasa lengkap.");
    return;
  }

  const score = previewScore();
  const rankInfo = rankForScore(score);
  saved.cleared = true;
  saved.lastRank = rankInfo.rank;
  if (rankInfo.stars > saved.bestStars) {
    saved.bestStars = rankInfo.stars;
  }
  state.totalXp += 36 + rankInfo.stars * 10;

  resultTitle.textContent = `${mission.worldTitle} cleared`;
  resultRank.textContent = `Rank ${rankInfo.rank}  |  ${rankInfo.stars}/3 Stars`;
  resultSummary.textContent =
    saved.selectedCause === mission.rootCause ? mission.winText : mission.loseText;
  resultEvidence.textContent = `${saved.foundHotspots.length}/4`;
  resultCause.textContent =
    saved.selectedCause === mission.rootCause ? "Locked correctly" : "Need better read";
  resultActions.textContent = `${saved.selectedSolutions.length}/2 ready`;
  resultOverlay.hidden = false;

  renderAll();
}

function resetCurrentMission() {
  const previous = ensureMissionState(state.currentWorld);
  missionStates[state.currentWorld] = {
    foundHotspots: [],
    selectedCause: null,
    selectedSolutions: [],
    bestStars: previous.bestStars,
    cleared: false,
    lastRank: "Waiting",
  };
  setSpeech(currentMission().intro);
  renderAll();
}

function nextWorld() {
  const order = worldOrder();
  const currentIndex = order.indexOf(state.currentWorld);
  const target = order[(currentIndex + 1) % order.length];
  state.currentWorld = target;
  document.body.dataset.world = target;
  resultOverlay.hidden = true;
  setSpeech(currentMission().intro);
  renderAll();
}

function handleQuickAction(action) {
  const mission = currentMission();
  const saved = currentMissionState();
  const scores = evidenceWeights();
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  if (action === "hint") {
    if (saved.foundHotspots.length < 3) {
      setSpeech("Hint: buka hotspot dengan tool yang belum kamu pakai. Bukti yang beragam biasanya memperjelas pola.");
      return;
    }
    if (!saved.selectedCause) {
      setSpeech(`Hint: lihat bar tertinggi di Cause Board. Saat ini jejak terkuat mengarah ke ${suspectTitle(sorted[0][0]).toLowerCase()}.`);
      return;
    }
    if (saved.selectedSolutions.length < 2) {
      setSpeech("Hint: action pack yang kuat biasanya gabungkan kartu root dengan kartu measure.");
      return;
    }
    setSpeech("Kamu sudah hampir siap. Launch misi untuk melihat apakah paketmu benar-benar solid.");
    return;
  }

  if (action === "recap") {
    if (!saved.foundHotspots.length) {
      setSpeech("Recap kosong. Kamu belum mengambil bukti apa pun.");
      return;
    }
    const top = sorted[0] ? suspectTitle(sorted[0][0]) : "belum jelas";
    setSpeech(`${mission.recapTag}: ${saved.foundHotspots.length} hotspot terbuka. Jejak terkuat saat ini mengarah ke ${top.toLowerCase()}.`);
    return;
  }

  if (action === "easy") {
    state.simpleMode = !state.simpleMode;
    setSpeech(state.simpleMode ? "Simple mode aktif. Petunjuk dibuat lebih singkat." : mission.intro);
    renderAll();
  }
}

function renderAll() {
  renderWorldTabs();
  renderMissionCopy();
  renderObjectives();
  renderToolkit();
  renderSteps();
  renderScene();
  renderEvidence();
  renderSuspects();
  renderSolutions();
  renderMeters();
  renderHUD();
}

startGame.addEventListener("click", () => {
  startOverlay.hidden = true;
  setSpeech(currentMission().intro);
});

submitMission.addEventListener("click", submitCurrentMission);
resetMission.addEventListener("click", resetCurrentMission);
replayMission.addEventListener("click", () => {
  resultOverlay.hidden = true;
  resetCurrentMission();
});
nextMission.addEventListener("click", nextWorld);

Array.from(document.querySelectorAll("[data-quick]")).forEach((button) => {
  button.addEventListener("click", () => handleQuickAction(button.dataset.quick));
});

ensureMissionState(state.currentWorld);
document.body.dataset.world = state.currentWorld;
setSpeech(currentMission().intro);
renderAll();
