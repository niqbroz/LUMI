const missions = {
  water: {
    theme: "Air",
    accent: "#0f766e",
    accentSoft: "#d6f3f0",
    label: "Water World Mission",
    title: "Menyelidiki sungai yang mendadak keruh",
    question:
      "Mengapa air sungai dekat sekolah berubah keruh setelah hujan, dan data apa yang paling penting untuk dicek?",
    summary:
      "Kamu diminta menyelidiki apakah perubahan warna air disebabkan limpasan sampah, saluran limbah, atau efek hujan yang membawa sedimen dari permukaan.",
    simpleSummary:
      "Cari tahu kenapa sungai jadi keruh. Bandingkan sampah, limbah, dan hujan lalu lihat bukti yang paling kuat.",
    concepts: [
      "pencemaran air",
      "sebab-akibat",
      "kualitas air",
      "observasi lapangan",
      "solusi berbasis bukti",
    ],
    data: ["warna air", "bau", "pH", "curah hujan", "titik limbah", "arus sungai"],
    scene: [
      { title: "Sungai keruh", text: "Warna berubah setelah hujan deras.", x: 6, y: 58 },
      { title: "Saluran limbah", text: "Perlu cek apakah ada aliran langsung.", x: 58, y: 18 },
      { title: "Kebun sekolah", text: "Tanah gundul bisa menambah sedimen.", x: 16, y: 18 },
      { title: "Titik sampel", text: "Bandingkan hulu, tengah, dan hilir.", x: 56, y: 62 },
    ],
    media: [
      { type: "Video", title: "60 detik: Kenapa air bisa keruh?", meta: "Animasi sebab-akibat sederhana" },
      { type: "Audio", title: "Narasi Lumi", meta: "Penjelasan pelan dan singkat" },
      { type: "Infografik", title: "Bukti yang perlu dikumpulkan", meta: "pH, bau, arus, sedimen" },
    ],
    narration:
      "Hari ini kita menyelidiki sungai yang mendadak keruh. Jangan langsung menebak. Amati warna air, cek pH, bandingkan titik sampel, lalu cari penyebab paling mungkin.",
    lumi: {
      welcome:
        "Halo, penjelajah sains. Misi kita hari ini adalah mencari penyebab utama sungai yang berubah keruh setelah hujan. Mulai dari bukti yang bisa diamati, bukan dari tebakan.",
      hint:
        "Bandingkan kondisi hulu, tengah, dan hilir. Kalau semua keruh merata setelah hujan, sedimen bisa jadi penyebab kuat. Kalau keruh hanya dekat saluran tertentu, cek limbah lokal.",
      simple:
        "Lihat dulu bagian sungai mana yang paling keruh. Itu membantu kita tahu sumber masalahnya.",
      solutionCheck:
        "Solusi yang kuat harus mengurangi sumber kotoran masuk ke sungai sekaligus menyiapkan cara mengecek apakah air benar-benar membaik setelah tindakan dilakukan.",
    },
    sliders: [
      { key: "waste", label: "Sampah terbawa ke sungai", min: 0, max: 10, value: 6, unit: "/10", desc: "Semakin tinggi, semakin banyak limbah padat di aliran." },
      { key: "rain", label: "Curah hujan", min: 0, max: 10, value: 7, unit: "/10", desc: "Hujan deras bisa membawa sedimen dan sampah ke sungai." },
      { key: "plants", label: "Tanaman penyaring", min: 0, max: 10, value: 3, unit: "/10", desc: "Vegetasi di tepi sungai membantu menyaring limpasan." },
    ],
    compute(values) {
      const clarity = clamp(94 - values.waste * 5 - values.rain * 3 + values.plants * 4, 12, 98);
      const safety = clamp(88 - values.waste * 4 - values.rain * 2 + values.plants * 4, 10, 96);
      const habitat = clamp(36 - values.waste * 2 + values.plants * 6 - values.rain, 5, 94);
      const readiness = clamp(40 + values.plants * 5 - values.waste * 2, 8, 96);
      return {
        metrics: [
          { label: "Kejernihan air", value: clarity, tone: metricTone(clarity) },
          { label: "Keamanan kesehatan", value: safety, tone: metricTone(safety) },
          { label: "Habitat sungai", value: habitat, tone: metricTone(habitat) },
          { label: "Kesiapan aksi", value: readiness, tone: metricTone(readiness) },
        ],
        insight:
          clarity < 50
            ? "Air masih sangat tertekan. Prioritas utama adalah menghentikan aliran sampah dan menambah area penyaring di tepi sungai."
            : "Kondisi mulai membaik. Sekarang fokus pada pemantauan pH dan memastikan sumber pencemar lokal benar-benar berkurang.",
      };
    },
    solutions: [
      { id: "water-filter", title: "Pasang kebun penyaring", desc: "Tanaman lokal di tepi saluran untuk menahan sedimen.", impact: 82, cost: 72, feasibility: 76, evidence: 80, tags: ["root", "measure", "nature"] },
      { id: "water-audit", title: "Audit titik limbah", desc: "Petakan sumber limbah rumah tangga dan sekolah.", impact: 76, cost: 84, feasibility: 85, evidence: 78, tags: ["root", "measure", "data"] },
      { id: "water-campaign", title: "Kampanye buang sampah", desc: "Edukasi kelas dan penempatan signage.", impact: 58, cost: 90, feasibility: 88, evidence: 60, tags: ["habit", "community"] },
      { id: "water-sampling", title: "Jadwal uji air mingguan", desc: "Cek warna, bau, dan pH secara konsisten.", impact: 70, cost: 82, feasibility: 79, evidence: 92, tags: ["measure", "data"] },
    ],
    verificationFocus: {
      cause: "Apakah solusi menyasar sumber limbah atau sedimen utama?",
      evidence: "Apakah ada cara membandingkan kualitas air sebelum dan sesudah aksi?",
      realism: "Apakah solusi cukup ringan untuk dilakukan sekolah dan warga sekitar?",
    },
    reflectionPrompt:
      "Data apa yang paling membantumu membedakan antara limpasan hujan biasa dan pencemaran dari aktivitas manusia?",
    teacher: {
      goal: "Siswa mampu menjelaskan hubungan antara limpasan, pencemaran, dan kualitas air serta mengusulkan tindakan berbasis bukti.",
      flow: "5 menit pemantik, 10 menit eksplorasi visual, 10 menit simulasi, 5 menit memilih solusi, 5 menit refleksi kelas.",
      questions: [
        "Bukti mana yang menunjukkan penyebab utama, bukan hanya gejala?",
        "Mengapa air jernih belum tentu aman?",
        "Bagaimana cara sekolah memantau hasil tindakannya?",
      ],
    },
  },
  air: {
    theme: "Udara",
    accent: "#0d9488",
    accentSoft: "#d8faf4",
    label: "Air City Mission",
    title: "Mengapa udara pagi di sekitar sekolah terasa berat?",
    question:
      "Polusi mana yang paling berpengaruh terhadap udara sekolah: kendaraan, pembakaran sampah, atau kurangnya pohon peneduh?",
    summary:
      "Kamu akan membandingkan sumber emisi dan melihat bagaimana kualitas udara berubah saat lalu lintas, pembakaran sampah, dan jumlah pohon diatur ulang.",
    simpleSummary:
      "Bandingkan kendaraan, asap bakar sampah, dan pohon. Mana yang paling membuat udara tidak nyaman?",
    concepts: ["polusi udara", "partikel", "suhu kota", "kesehatan pernapasan", "mitigasi lokal"],
    data: ["jumlah kendaraan", "arah angin", "titik bakar sampah", "jumlah pohon", "jam sibuk"],
    scene: [
      { title: "Gerbang sekolah", text: "Banyak motor berhenti saat jam masuk.", x: 8, y: 58 },
      { title: "Area bakar sampah", text: "Asap mudah terjebak bila angin lemah.", x: 60, y: 22 },
      { title: "Koridor angin", text: "Gedung rapat menghambat sirkulasi udara.", x: 24, y: 18 },
      { title: "Pohon peneduh", text: "Vegetasi menurunkan panas dan debu.", x: 56, y: 66 },
    ],
    media: [
      { type: "Video", title: "Mini story: udara sekolah", meta: "Jam sibuk vs siang hari" },
      { type: "Audio", title: "Lumi membacakan observasi", meta: "Cocok untuk mode dengar" },
      { type: "Infografik", title: "Polusi yang tidak selalu terlihat", meta: "Partikel, asap, panas kota" },
    ],
    narration:
      "Mari lihat kenapa udara sekolah terasa berat. Perhatikan kendaraan, asap pembakaran, dan jumlah pohon. Setiap perubahan memberi dampak berbeda pada kualitas udara dan suhu.",
    lumi: {
      welcome:
        "Udara yang buruk tidak selalu terlihat. Kita perlu membandingkan beberapa sumber polusi sebelum memilih solusi terbaik.",
      hint:
        "Coba turunkan pembakaran sampah dulu. Jika kualitas udara naik tajam, berarti sumber itu berpengaruh besar. Lalu cek apakah kendaraan masih menahan perbaikan.",
      simple:
        "Lihat sumber asap paling dekat dengan sekolah. Sumber yang paling dekat sering paling terasa dampaknya.",
      solutionCheck:
        "Solusi terbaik untuk udara biasanya gabungan: kurangi emisi, perbaiki sirkulasi, lalu ukur perubahan saat jam sibuk.",
    },
    sliders: [
      { key: "vehicles", label: "Kepadatan kendaraan", min: 0, max: 10, value: 7, unit: "/10", desc: "Semakin tinggi, emisi dan panas jalan meningkat." },
      { key: "trees", label: "Jumlah pohon peneduh", min: 0, max: 10, value: 3, unit: "/10", desc: "Pohon membantu menyerap panas dan menahan debu." },
      { key: "burning", label: "Pembakaran sampah", min: 0, max: 10, value: 5, unit: "/10", desc: "Asap dari pembakaran sangat mengganggu kualitas udara." },
    ],
    compute(values) {
      const quality = clamp(92 - values.vehicles * 4 - values.burning * 6 + values.trees * 4, 10, 97);
      const breathing = clamp(88 - values.vehicles * 3 - values.burning * 5 + values.trees * 4, 12, 97);
      const temperature = clamp(70 - values.vehicles * 2 - values.burning + values.trees * 5, 10, 96);
      const readiness = clamp(42 + values.trees * 4 - values.burning * 2, 8, 95);
      return {
        metrics: [
          { label: "Kualitas udara", value: quality, tone: metricTone(quality) },
          { label: "Kenyamanan bernapas", value: breathing, tone: metricTone(breathing) },
          { label: "Kesejukan area", value: temperature, tone: metricTone(temperature) },
          { label: "Kesiapan sekolah", value: readiness, tone: metricTone(readiness) },
        ],
        insight:
          quality < 52
            ? "Udara masih tertekan. Pengurangan pembakaran sampah memberi dampak cepat, lalu susul pengaturan kendaraan dan penghijauan."
            : "Udara membaik. Langkah berikutnya adalah menjaga pola transportasi dan memantau kondisi pada jam sibuk.",
      };
    },
    solutions: [
      { id: "air-no-burn", title: "Zona tanpa bakar sampah", desc: "Aturan dan pengawasan sederhana di sekitar sekolah.", impact: 84, cost: 86, feasibility: 82, evidence: 78, tags: ["root", "community"] },
      { id: "air-walk", title: "Drop-off lebih jauh", desc: "Kurangi antrean kendaraan tepat di gerbang.", impact: 72, cost: 90, feasibility: 74, evidence: 72, tags: ["root", "habit"] },
      { id: "air-trees", title: "Koridor pohon peneduh", desc: "Tambahkan tanaman dan area hijau di titik panas.", impact: 68, cost: 64, feasibility: 70, evidence: 76, tags: ["nature", "root"] },
      { id: "air-monitor", title: "Pemantauan udara jam sibuk", desc: "Catat kondisi pagi dan siang untuk evaluasi.", impact: 66, cost: 88, feasibility: 83, evidence: 90, tags: ["measure", "data"] },
    ],
    verificationFocus: {
      cause: "Apakah tindakanmu mengurangi emisi terbesar di sekitar sekolah?",
      evidence: "Apakah ada rencana memantau udara sebelum dan sesudah intervensi?",
      realism: "Apakah solusi bisa diterapkan tanpa alat mahal?",
    },
    reflectionPrompt:
      "Bagaimana kamu membedakan solusi yang benar-benar menurunkan polusi dengan solusi yang hanya membuat lingkungan terasa lebih nyaman?",
    teacher: {
      goal: "Siswa menafsirkan hubungan antara emisi lokal, vegetasi, dan kenyamanan bernapas di lingkungan sekolah.",
      flow: "Mulai dari observasi jam sibuk, lanjut simulasi emisi, lalu bandingkan solusi pengurangan polusi dan mitigasi panas.",
      questions: [
        "Mengapa pohon penting tetapi tidak cukup bila sumber asap tetap ada?",
        "Sumber polusi mana yang paling dekat dengan siswa?",
        "Data apa yang perlu dicatat setiap hari?",
      ],
    },
  },
  waste: {
    theme: "Sampah",
    accent: "#ca8a04",
    accentSoft: "#fef3c7",
    label: "Waste Zone Mission",
    title: "Mengurangi sampah sekolah yang terus menumpuk",
    question:
      "Pilihan mana yang paling efektif: mengurangi plastik sekali pakai, memilah sampah, atau memperluas kompos?",
    summary:
      "Kamu akan melihat bagaimana kebiasaan kantin dan pemilahan sampah memengaruhi volume sampah, tekanan ke tempat pembuangan, dan kemudahan implementasi di sekolah.",
    simpleSummary:
      "Coba kurangi plastik, tambah pemilahan, dan kompos. Lalu lihat dampaknya ke jumlah sampah.",
    concepts: ["3R", "limbah makanan", "perubahan perilaku", "kompos", "sistem sekolah"],
    data: ["plastik harian", "sisa makanan", "tempat sampah", "partisipasi siswa", "rute pengangkutan"],
    scene: [
      { title: "Kantin sekolah", text: "Banyak kemasan sekali pakai.", x: 8, y: 60 },
      { title: "Sudut kompos", text: "Masih kecil dan jarang dipakai.", x: 58, y: 20 },
      { title: "Tempat sampah campur", text: "Menyulitkan pemilahan.", x: 26, y: 22 },
      { title: "Titik pengangkutan", text: "Volume besar membuat biaya naik.", x: 54, y: 68 },
    ],
    media: [
      { type: "Video", title: "Dari kantin ke TPA", meta: "Perjalanan satu bungkus plastik" },
      { type: "Audio", title: "Hint Lumi", meta: "Bandingkan kebiasaan dan sistem" },
      { type: "Infografik", title: "Plastik vs organik", meta: "Sumber dan tindakan berbeda" },
    ],
    narration:
      "Sampah sekolah tidak hanya soal banyak atau sedikit. Kita perlu tahu jenis sampah, kebiasaan pengguna, dan sistem pemilahannya agar solusi benar-benar bekerja.",
    lumi: {
      welcome:
        "Mari cek mengapa sampah sekolah terus menumpuk. Perhatikan mana yang berasal dari kebiasaan harian dan mana yang berasal dari sistem yang belum mendukung.",
      hint:
        "Kalau plastik sekali pakai masih tinggi, pemilahan saja belum cukup. Kurangi sumbernya dulu, lalu dukung dengan sistem kompos dan tempat sampah terpilah.",
      simple:
        "Kurangi sampah dari awal, lalu bantu siswa membuang di tempat yang benar.",
      solutionCheck:
        "Solusi yang kuat untuk sampah biasanya menggabungkan pengurangan sumber, pemilahan yang jelas, dan tindak lanjut seperti kompos atau bank sampah.",
    },
    sliders: [
      { key: "singleUse", label: "Plastik sekali pakai", min: 0, max: 10, value: 8, unit: "/10", desc: "Sumber utama lonjakan volume sampah harian." },
      { key: "sorting", label: "Kualitas pemilahan", min: 0, max: 10, value: 3, unit: "/10", desc: "Label yang jelas membuat pemilahan lebih efektif." },
      { key: "compost", label: "Pemakaian kompos", min: 0, max: 10, value: 2, unit: "/10", desc: "Semakin tinggi, semakin sedikit organik ke TPA." },
    ],
    compute(values) {
      const reduction = clamp(90 - values.singleUse * 5 + values.sorting * 3 + values.compost * 4, 8, 98);
      const landfill = clamp(86 - values.singleUse * 4 + values.sorting * 3 + values.compost * 5, 8, 97);
      const ease = clamp(42 - values.singleUse + values.sorting * 4 + values.compost * 3, 12, 95);
      const participation = clamp(36 - values.singleUse * 2 + values.sorting * 5 + values.compost * 3, 10, 95);
      return {
        metrics: [
          { label: "Efisiensi sampah", value: reduction, tone: metricTone(reduction) },
          { label: "Tekanan ke TPA", value: landfill, tone: metricTone(landfill) },
          { label: "Kemudahan sekolah", value: ease, tone: metricTone(ease) },
          { label: "Partisipasi siswa", value: participation, tone: metricTone(participation) },
        ],
        insight:
          reduction < 55
            ? "Sampah masih tinggi karena sumbernya belum dikurangi. Intervensi paling cepat adalah kebijakan kantin dan pengurangan kemasan sekali pakai."
            : "Sistem mulai bekerja. Tantangan berikutnya adalah menjaga konsistensi pemilahan dan memastikan kompos tetap berjalan.",
      };
    },
    solutions: [
      { id: "waste-refill", title: "Program botol isi ulang", desc: "Kurangi pembelian air kemasan di kantin.", impact: 84, cost: 68, feasibility: 73, evidence: 80, tags: ["root", "habit"] },
      { id: "waste-bins", title: "Tempat sampah terpilah", desc: "Pisahkan organik, daur ulang, dan residu.", impact: 72, cost: 78, feasibility: 86, evidence: 74, tags: ["system", "community"] },
      { id: "waste-compost", title: "Kompos sisa makanan", desc: "Olahan organik untuk kebun sekolah.", impact: 78, cost: 72, feasibility: 70, evidence: 83, tags: ["root", "nature"] },
      { id: "waste-audit", title: "Audit sampah mingguan", desc: "Ukur jenis sampah sebelum kebijakan baru.", impact: 60, cost: 88, feasibility: 85, evidence: 92, tags: ["measure", "data"] },
    ],
    verificationFocus: {
      cause: "Apakah solusi mengurangi sumber sampah, bukan hanya memindahkan tempatnya?",
      evidence: "Apakah kamu punya cara mengukur perubahan volume dan jenis sampah?",
      realism: "Apakah siswa, kantin, dan guru bisa menjalankan solusi ini bersama?",
    },
    reflectionPrompt:
      "Mengapa tempat sampah terpilah saja belum cukup jika kebiasaan penggunaan plastik sekali pakai masih tinggi?",
    teacher: {
      goal: "Siswa membedakan strategi pengurangan sumber, pemilahan, dan pengolahan sampah organik.",
      flow: "Mulai dari audit visual, lanjut simulasi sistem sampah, kemudian rancang paket solusi untuk kantin dan kelas.",
      questions: [
        "Sampah jenis apa yang paling dominan di sekolah?",
        "Solusi mana yang paling cepat terlihat dampaknya?",
        "Bagaimana cara menjaga partisipasi siswa tetap tinggi?",
      ],
    },
  },
  energy: {
    theme: "Energi",
    accent: "#ea580c",
    accentSoft: "#ffedd5",
    label: "Energy Lab Mission",
    title: "Membuat sekolah lebih hemat energi",
    question:
      "Kebiasaan apa yang paling memengaruhi konsumsi listrik sekolah: lampu, ventilasi, atau investasi panel surya?",
    summary:
      "Bandingkan keputusan harian dan perbaikan fasilitas untuk melihat mana yang paling efisien, terjangkau, dan nyaman untuk ruang kelas.",
    simpleSummary:
      "Atur lampu, ventilasi, dan panel surya. Lalu lihat mana yang membuat sekolah lebih hemat.",
    concepts: ["efisiensi energi", "biaya listrik", "emisi", "ventilasi", "energi terbarukan"],
    data: ["lampu menyala", "ventilasi alami", "jam pakai AC/kipas", "tagihan bulanan", "luas atap"],
    scene: [
      { title: "Ruang kelas", text: "Lampu tetap menyala saat siang.", x: 10, y: 58 },
      { title: "Jendela & ventilasi", text: "Bisa kurangi kebutuhan pendinginan.", x: 56, y: 18 },
      { title: "Atap sekolah", text: "Potensi panel surya belum dipakai.", x: 24, y: 18 },
      { title: "Papan meter", text: "Data pemakaian bisa dibandingkan per minggu.", x: 58, y: 68 },
    ],
    media: [
      { type: "Video", title: "Sekolah hemat energi", meta: "Kebiasaan kecil, efek besar" },
      { type: "Audio", title: "Panduan Lumi", meta: "Cara membaca konsumsi energi" },
      { type: "Infografik", title: "Trade-off solusi energi", meta: "Biaya awal vs manfaat jangka panjang" },
    ],
    narration:
      "Hemat energi tidak selalu berarti alat mahal. Banyak perubahan datang dari kebiasaan sehari-hari, ventilasi yang baik, dan pemilihan investasi yang tepat.",
    lumi: {
      welcome:
        "Mari cek bagaimana sekolah memakai energi. Kita bandingkan kebiasaan harian dengan solusi jangka panjang seperti panel surya.",
      hint:
        "Kalau lampu dan ventilasi masih boros, panel surya belum otomatis menyelesaikan semuanya. Kurangi konsumsi dulu, lalu pertimbangkan investasi.",
      simple:
        "Pertama, pakai listrik seperlunya. Setelah itu baru lihat apakah sekolah perlu energi tambahan dari surya.",
      solutionCheck:
        "Solusi energi paling kuat biasanya dimulai dari efisiensi, kemudian ditopang teknologi yang sesuai konteks sekolah.",
    },
    sliders: [
      { key: "lights", label: "Lampu menyala tidak perlu", min: 0, max: 10, value: 6, unit: "/10", desc: "Skor tinggi berarti banyak pemborosan cahaya." },
      { key: "ventilation", label: "Ventilasi alami", min: 0, max: 10, value: 4, unit: "/10", desc: "Semakin baik, ruang kelas lebih nyaman tanpa listrik tambahan." },
      { key: "solar", label: "Pemanfaatan panel surya", min: 0, max: 10, value: 2, unit: "/10", desc: "Investasi jangka panjang untuk sebagian kebutuhan energi." },
    ],
    compute(values) {
      const efficiency = clamp(88 - values.lights * 5 + values.ventilation * 4 + values.solar * 3, 8, 97);
      const savings = clamp(82 - values.lights * 4 + values.ventilation * 3 + values.solar * 5, 10, 98);
      const emissions = clamp(78 - values.lights * 3 + values.ventilation * 2 + values.solar * 6, 8, 97);
      const comfort = clamp(40 - values.lights + values.ventilation * 5 + values.solar * 2, 10, 95);
      return {
        metrics: [
          { label: "Efisiensi energi", value: efficiency, tone: metricTone(efficiency) },
          { label: "Penghematan biaya", value: savings, tone: metricTone(savings) },
          { label: "Dampak emisi", value: emissions, tone: metricTone(emissions) },
          { label: "Kenyamanan kelas", value: comfort, tone: metricTone(comfort) },
        ],
        insight:
          efficiency < 55
            ? "Pemborosan masih tinggi. Prioritas awal adalah kebiasaan mematikan lampu dan perbaikan ventilasi sebelum investasi besar."
            : "Efisiensi membaik. Sekarang panel surya bisa menjadi pelengkap yang lebih masuk akal secara biaya dan emisi.",
      };
    },
    solutions: [
      { id: "energy-led", title: "Program lampu LED", desc: "Ganti lampu lama dengan LED hemat energi.", impact: 82, cost: 62, feasibility: 70, evidence: 82, tags: ["root", "system"] },
      { id: "energy-routine", title: "Patroli hemat energi", desc: "Siswa cek lampu dan kipas sebelum pulang.", impact: 70, cost: 90, feasibility: 86, evidence: 72, tags: ["habit", "community"] },
      { id: "energy-vent", title: "Optimasi ventilasi kelas", desc: "Atur bukaan untuk mengurangi kebutuhan pendingin.", impact: 74, cost: 78, feasibility: 77, evidence: 76, tags: ["root", "nature"] },
      { id: "energy-solar", title: "Pilot panel surya", desc: "Mulai dari area kecil seperti perpustakaan.", impact: 79, cost: 48, feasibility: 56, evidence: 84, tags: ["measure", "system"] },
    ],
    verificationFocus: {
      cause: "Apakah solusi mengurangi pemborosan energi paling besar?",
      evidence: "Apakah perubahan bisa dilacak lewat meter atau tagihan sederhana?",
      realism: "Apakah sekolah mampu menjalankan solusi ini dalam tahap awal?",
    },
    reflectionPrompt:
      "Mengapa investasi teknologi seperti panel surya perlu didahului dengan perbaikan kebiasaan konsumsi energi?",
    teacher: {
      goal: "Siswa mengevaluasi pilihan efisiensi energi sekolah berdasarkan biaya, kenyamanan, dan dampak lingkungan.",
      flow: "Observasi kebiasaan energi, simulasi beberapa skenario, lalu pilih strategi bertahap yang realistis.",
      questions: [
        "Mana yang paling cepat mengurangi tagihan?",
        "Apakah solusi mahal selalu paling efektif?",
        "Bagaimana siswa bisa terlibat dalam penghematan energi?",
      ],
    },
  },
  climate: {
    theme: "Iklim",
    accent: "#2563eb",
    accentSoft: "#dbeafe",
    label: "Climate Dome Mission",
    title: "Menghadapi panas kota dan banjir sekolah",
    question:
      "Tindakan mana yang paling membantu adaptasi iklim sekolah: kurangi beton, tambah pohon, atau simpan air hujan?",
    summary:
      "Kamu akan membandingkan beberapa strategi adaptasi untuk melihat pengaruhnya pada suhu area, ketahanan banjir, dan manfaat bagi siswa.",
    simpleSummary:
      "Kurangi area panas, tambah pohon, dan simpan air hujan. Lalu lihat mana yang paling membantu sekolah.",
    concepts: ["adaptasi iklim", "pulau panas", "resapan air", "ketahanan sekolah", "co-benefit"],
    data: ["luas beton", "titik genangan", "pohon peneduh", "arah aliran air", "suhu siang"],
    scene: [
      { title: "Lapangan beton", text: "Memantulkan panas dan mempercepat aliran air.", x: 10, y: 60 },
      { title: "Titik genangan", text: "Banjir kecil muncul setelah hujan deras.", x: 60, y: 20 },
      { title: "Atap & talang", text: "Air hujan bisa ditampung untuk kebun.", x: 24, y: 18 },
      { title: "Pohon peneduh", text: "Kurang rapat di area antre siswa.", x: 56, y: 68 },
    ],
    media: [
      { type: "Video", title: "Iklim dan sekolah", meta: "Panas kota dan genangan sehari-hari" },
      { type: "Audio", title: "Narasi adaptasi", meta: "Bahasa ramah siswa" },
      { type: "Infografik", title: "Adaptasi vs mitigasi", meta: "Apa bedanya?" },
    ],
    narration:
      "Masalah iklim di sekolah sering terasa sebagai panas berlebih dan genangan. Kita perlu melihat langkah mana yang paling membantu kondisi sehari-hari siswa.",
    lumi: {
      welcome:
        "Misi ini tentang adaptasi. Kita tidak hanya menurunkan panas, tetapi juga membuat sekolah lebih siap saat hujan deras.",
      hint:
        "Coba bandingkan pohon dan area resapan. Jika suhu turun tetapi genangan tetap tinggi, berarti sekolah butuh solusi yang menangani air, bukan hanya panas.",
      simple:
        "Sekolah yang adem belum tentu aman dari banjir. Lihat dua-duanya.",
      solutionCheck:
        "Solusi iklim terbaik biasanya punya manfaat ganda: lebih sejuk, lebih aman saat hujan, dan tetap realistis untuk sekolah.",
    },
    sliders: [
      { key: "concrete", label: "Luas area beton", min: 0, max: 10, value: 7, unit: "/10", desc: "Semakin luas, panas dan aliran permukaan meningkat." },
      { key: "shade", label: "Pohon peneduh", min: 0, max: 10, value: 3, unit: "/10", desc: "Pohon memberi keteduhan dan membantu resapan." },
      { key: "harvest", label: "Pemanfaatan air hujan", min: 0, max: 10, value: 2, unit: "/10", desc: "Tandon dan resapan meningkatkan kesiapan banjir." },
    ],
    compute(values) {
      const heat = clamp(86 - values.concrete * 5 + values.shade * 5 + values.harvest * 2, 8, 97);
      const flood = clamp(82 - values.concrete * 4 + values.shade * 3 + values.harvest * 5, 10, 98);
      const readiness = clamp(36 - values.concrete + values.shade * 4 + values.harvest * 5, 10, 97);
      const benefit = clamp(40 - values.concrete + values.shade * 5 + values.harvest * 4, 12, 98);
      return {
        metrics: [
          { label: "Kenyamanan termal", value: heat, tone: metricTone(heat) },
          { label: "Ketahanan banjir", value: flood, tone: metricTone(flood) },
          { label: "Kesiapan adaptasi", value: readiness, tone: metricTone(readiness) },
          { label: "Manfaat ke siswa", value: benefit, tone: metricTone(benefit) },
        ],
        insight:
          flood < 55
            ? "Sekolah masih rentan. Menambah pohon membantu, tetapi area resapan dan pemanfaatan air hujan perlu diperkuat untuk mengurangi genangan."
            : "Adaptasi mulai seimbang. Tantangan berikutnya adalah memastikan manfaatnya dirasakan di area yang paling sering dipakai siswa.",
      };
    },
    solutions: [
      { id: "climate-trees", title: "Koridor pohon teduh", desc: "Fokus pada jalur antre dan lapangan.", impact: 78, cost: 72, feasibility: 79, evidence: 76, tags: ["nature", "root"] },
      { id: "climate-rain", title: "Tandon air hujan", desc: "Tampung air dari atap untuk kebun dan kebersihan.", impact: 80, cost: 58, feasibility: 63, evidence: 84, tags: ["root", "system"] },
      { id: "climate-paving", title: "Ubah area keras jadi resapan", desc: "Gunakan paving berpori atau zona tanah.", impact: 82, cost: 54, feasibility: 58, evidence: 82, tags: ["root", "measure"] },
      { id: "climate-map", title: "Peta titik panas dan genangan", desc: "Pantau area kritis sebelum dan sesudah aksi.", impact: 62, cost: 88, feasibility: 83, evidence: 92, tags: ["measure", "data"] },
    ],
    verificationFocus: {
      cause: "Apakah solusi menangani panas dan air berlebih di titik yang tepat?",
      evidence: "Apakah kamu akan memantau suhu dan genangan setelah intervensi?",
      realism: "Apakah sekolah bisa memulai dari area prioritas dulu?",
    },
    reflectionPrompt:
      "Mengapa solusi adaptasi iklim yang baik perlu mempertimbangkan lebih dari satu dampak sekaligus?",
    teacher: {
      goal: "Siswa menganalisis strategi adaptasi iklim sekolah dari sisi panas, air, dan kenyamanan belajar.",
      flow: "Diskusi fenomena lokal, simulasi adaptasi, lalu rancang solusi prioritas rendah-biaya dan manfaat ganda.",
      questions: [
        "Mana yang paling sering dirasakan siswa: panas atau genangan?",
        "Solusi mana yang memberi manfaat ganda?",
        "Data lapangan apa yang mudah dikumpulkan siswa?",
      ],
    },
  },
  food: {
    theme: "Pangan & Kesehatan",
    accent: "#16a34a",
    accentSoft: "#dcfce7",
    label: "Food & Health Hub Mission",
    title: "Membuat pilihan makan sekolah lebih sehat dan aman",
    question:
      "Masalah utama ada di menu, kebersihan, atau kebiasaan membeli jajanan terlalu manis?",
    summary:
      "Kamu akan menyeimbangkan kebiasaan konsumsi, kebersihan, dan pilihan bahan pangan untuk melihat dampaknya pada kesehatan dan sisa makanan.",
    simpleSummary:
      "Cek jajanan manis, kebiasaan cuci tangan, dan menu lokal. Mana yang paling membantu kesehatan siswa?",
    concepts: ["gizi seimbang", "keamanan pangan", "kebersihan", "kebiasaan makan", "sisa makanan"],
    data: ["jajanan manis", "cuci tangan", "menu lokal", "sisa makanan", "suhu penyimpanan"],
    scene: [
      { title: "Kantin", text: "Pilihan jajanan dominan manis dan kemasan.", x: 8, y: 60 },
      { title: "Wastafel", text: "Belum semua siswa cuci tangan sebelum makan.", x: 58, y: 18 },
      { title: "Meja menu", text: "Bahan lokal bisa dibuat lebih menarik.", x: 24, y: 18 },
      { title: "Sisa makanan", text: "Perlu cek apakah porsinya sesuai.", x: 56, y: 68 },
    ],
    media: [
      { type: "Video", title: "Jajanan, gizi, dan kebiasaan", meta: "Pilihan kecil, dampak besar" },
      { type: "Audio", title: "Lumi mode dengar", meta: "Panduan kesehatan sederhana" },
      { type: "Infografik", title: "Makanan aman di sekolah", meta: "Menu, kebersihan, dan porsi" },
    ],
    narration:
      "Misi ini mengajakmu melihat hubungan antara pilihan makanan, kebiasaan kebersihan, dan kesehatan siswa secara utuh, bukan terpisah-pisah.",
    lumi: {
      welcome:
        "Kesehatan pangan bukan hanya soal apa yang dimakan, tetapi juga bagaimana makanan disiapkan dan bagaimana kebiasaan siswa terbentuk.",
      hint:
        "Kalau menu membaik tetapi cuci tangan tetap rendah, risiko kesehatan bisa tetap ada. Coba lihat kebiasaan dan sistem sekaligus.",
      simple:
        "Makanan sehat perlu disiapkan dengan aman dan dipilih dengan kebiasaan yang baik.",
      solutionCheck:
        "Solusi yang kuat untuk pangan sekolah perlu seimbang: lebih sehat, tetap disukai siswa, dan mudah dijalankan kantin.",
    },
    sliders: [
      { key: "snacks", label: "Jajanan manis berlebih", min: 0, max: 10, value: 7, unit: "/10", desc: "Semakin tinggi, kualitas pilihan gizi menurun." },
      { key: "handwash", label: "Kebiasaan cuci tangan", min: 0, max: 10, value: 4, unit: "/10", desc: "Meningkatkan keamanan makanan sehari-hari." },
      { key: "localFood", label: "Menu lokal bergizi", min: 0, max: 10, value: 3, unit: "/10", desc: "Makanan lokal bisa menambah variasi dan kualitas gizi." },
    ],
    compute(values) {
      const nutrition = clamp(84 - values.snacks * 4 + values.handwash * 2 + values.localFood * 5, 10, 97);
      const safety = clamp(82 - values.snacks * 2 + values.handwash * 6 + values.localFood * 3, 12, 98);
      const waste = clamp(68 - values.snacks + values.handwash * 2 + values.localFood * 4, 10, 95);
      const adoption = clamp(42 - values.snacks + values.handwash * 3 + values.localFood * 5, 10, 96);
      return {
        metrics: [
          { label: "Keseimbangan gizi", value: nutrition, tone: metricTone(nutrition) },
          { label: "Keamanan konsumsi", value: safety, tone: metricTone(safety) },
          { label: "Efisiensi porsi", value: waste, tone: metricTone(waste) },
          { label: "Peluang diterima", value: adoption, tone: metricTone(adoption) },
        ],
        insight:
          safety < 58
            ? "Kebersihan masih menjadi titik rawan. Perbaikan menu perlu diiringi kebiasaan cuci tangan dan penanganan makanan yang lebih baik."
            : "Kondisi mulai lebih seimbang. Tantangan berikutnya adalah menjaga siswa tetap tertarik pada opsi yang lebih sehat.",
      };
    },
    solutions: [
      { id: "food-menu", title: "Menu lokal bergizi", desc: "Sorot opsi sehat dengan bahan yang mudah didapat.", impact: 78, cost: 74, feasibility: 72, evidence: 78, tags: ["root", "system"] },
      { id: "food-handwash", title: "Rutinitas cuci tangan", desc: "Poster, pengingat, dan akses wastafel yang jelas.", impact: 74, cost: 88, feasibility: 86, evidence: 82, tags: ["root", "habit"] },
      { id: "food-label", title: "Label makanan sederhana", desc: "Tampilkan gula, protein, dan serat secara ramah anak.", impact: 68, cost: 84, feasibility: 78, evidence: 76, tags: ["measure", "data"] },
      { id: "food-portion", title: "Porsi dan survei preferensi", desc: "Kurangi sisa makanan lewat porsi yang pas.", impact: 64, cost: 86, feasibility: 82, evidence: 80, tags: ["measure", "community"] },
    ],
    verificationFocus: {
      cause: "Apakah solusi menyentuh pola makan dan kebersihan yang paling bermasalah?",
      evidence: "Apakah ada data sederhana untuk melihat perubahan pilihan dan kesehatan?",
      realism: "Apakah solusi tetap masuk akal untuk kantin sekolah?",
    },
    reflectionPrompt:
      "Mengapa perbaikan menu tidak cukup jika kebiasaan kebersihan siswa belum berubah?",
    teacher: {
      goal: "Siswa memahami kaitan antara gizi, keamanan pangan, kebiasaan sehat, dan sisa makanan di sekolah.",
      flow: "Identifikasi masalah kantin, uji skenario dalam simulasi, lalu rancang kombinasi intervensi yang realistis.",
      questions: [
        "Apa yang membuat pilihan sehat sulit dipilih siswa?",
        "Bagaimana kebersihan memengaruhi hasil belajar?",
        "Data apa yang mudah dikumpulkan dari kantin?",
      ],
    },
  },
  biodiversity: {
    theme: "Biodiversitas",
    accent: "#15803d",
    accentSoft: "#dcfce7",
    label: "Biodiversity Forest Mission",
    title: "Menjaga habitat kecil di sekitar sekolah",
    question:
      "Apa yang paling membantu keanekaragaman hayati lokal: kurangi pestisida, tambah tanaman asli, atau perbanyak area habitat?",
    summary:
      "Kamu akan melihat bagaimana keputusan di kebun dan halaman sekolah memengaruhi penyerbuk, rantai makanan, dan keseimbangan ekosistem lokal.",
    simpleSummary:
      "Kurangi pestisida, tambah tanaman lokal, dan buat habitat. Lalu lihat bagaimana makhluk hidup di sekitar sekolah merespons.",
    concepts: ["ekosistem", "penyerbuk", "tanaman asli", "habitat", "konservasi lokal"],
    data: ["jenis tanaman", "pestisida", "serangga penyerbuk", "zona teduh", "tempat bertelur"],
    scene: [
      { title: "Kebun sekolah", text: "Banyak tanaman hias nonlokal.", x: 8, y: 58 },
      { title: "Area pestisida", text: "Perlu cek pengaruhnya ke serangga baik.", x: 58, y: 18 },
      { title: "Habitat kecil", text: "Belum cukup tempat berlindung untuk fauna.", x: 22, y: 18 },
      { title: "Zona pengamatan", text: "Hitung kupu-kupu dan lebah setiap minggu.", x: 56, y: 68 },
    ],
    media: [
      { type: "Video", title: "Makhluk kecil, peran besar", meta: "Penyerbuk di sekitar sekolah" },
      { type: "Audio", title: "Cerita Lumi", meta: "Kenapa habitat kecil penting?" },
      { type: "Infografik", title: "Tanaman asli vs nonlokal", meta: "Dampaknya ke ekosistem" },
    ],
    narration:
      "Keanekaragaman hayati tidak selalu jauh di hutan. Halaman sekolah pun bisa menjadi habitat kecil yang penting bila dikelola dengan baik.",
    lumi: {
      welcome:
        "Kita akan melihat bagaimana pilihan tanaman dan penggunaan pestisida memengaruhi makhluk hidup kecil di sekitar sekolah.",
      hint:
        "Jika tanaman bertambah tetapi pestisida masih tinggi, penyerbuk belum tentu kembali. Bandingkan habitat dan risiko secara bersamaan.",
      simple:
        "Makhluk hidup kecil butuh makanan, tempat tinggal, dan lingkungan yang aman.",
      solutionCheck:
        "Solusi biodiversitas yang baik harus memperbaiki habitat, mengurangi tekanan, dan menyediakan cara mengamati perubahan dari waktu ke waktu.",
    },
    sliders: [
      { key: "pesticides", label: "Penggunaan pestisida", min: 0, max: 10, value: 6, unit: "/10", desc: "Semakin tinggi, risiko bagi penyerbuk meningkat." },
      { key: "nativePlants", label: "Tanaman asli", min: 0, max: 10, value: 3, unit: "/10", desc: "Tanaman lokal mendukung rantai makanan setempat." },
      { key: "habitat", label: "Area habitat kecil", min: 0, max: 10, value: 2, unit: "/10", desc: "Sudut habitat memberi tempat berlindung dan berkembang." },
    ],
    compute(values) {
      const species = clamp(82 - values.pesticides * 5 + values.nativePlants * 5 + values.habitat * 4, 8, 98);
      const pollinators = clamp(78 - values.pesticides * 6 + values.nativePlants * 5 + values.habitat * 4, 8, 98);
      const balance = clamp(38 - values.pesticides + values.nativePlants * 5 + values.habitat * 5, 10, 98);
      const beauty = clamp(48 - values.pesticides + values.nativePlants * 4 + values.habitat * 4, 10, 97);
      return {
        metrics: [
          { label: "Keanekaragaman spesies", value: species, tone: metricTone(species) },
          { label: "Kesehatan penyerbuk", value: pollinators, tone: metricTone(pollinators) },
          { label: "Keseimbangan ekosistem", value: balance, tone: metricTone(balance) },
          { label: "Daya tarik sekolah", value: beauty, tone: metricTone(beauty) },
        ],
        insight:
          pollinators < 55
            ? "Penyerbuk masih rentan. Pengurangan pestisida perlu berjalan bersama penambahan tanaman asli agar habitat benar-benar pulih."
            : "Habitat mulai lebih ramah. Langkah berikutnya adalah menjaga pengamatan rutin agar perubahan bisa dibuktikan.",
      };
    },
    solutions: [
      { id: "bio-native", title: "Taman tanaman asli", desc: "Tanaman lokal untuk makanan penyerbuk.", impact: 82, cost: 74, feasibility: 76, evidence: 82, tags: ["root", "nature"] },
      { id: "bio-pesticide", title: "Kurangi pestisida kimia", desc: "Ganti dengan kontrol hama yang lebih aman.", impact: 84, cost: 70, feasibility: 68, evidence: 80, tags: ["root", "system"] },
      { id: "bio-corner", title: "Sudut habitat mikro", desc: "Kayu, batu, dan air dangkal untuk fauna kecil.", impact: 74, cost: 82, feasibility: 79, evidence: 78, tags: ["nature", "community"] },
      { id: "bio-count", title: "Hitung penyerbuk mingguan", desc: "Gunakan lembar observasi sederhana.", impact: 62, cost: 92, feasibility: 86, evidence: 91, tags: ["measure", "data"] },
    ],
    verificationFocus: {
      cause: "Apakah solusi mengurangi tekanan utama pada habitat lokal?",
      evidence: "Apakah ada cara mengamati perubahan spesies dari waktu ke waktu?",
      realism: "Apakah sekolah bisa merawat habitat ini secara berkelanjutan?",
    },
    reflectionPrompt:
      "Mengapa menambah tanaman saja belum tentu cukup bila faktor yang merusak habitat masih tetap ada?",
    teacher: {
      goal: "Siswa mengenali faktor yang mendukung atau menghambat biodiversitas lokal di sekitar sekolah.",
      flow: "Observasi kebun, simulasi faktor ekosistem, pilih solusi restorasi, lalu buat rencana monitoring sederhana.",
      questions: [
        "Mengapa tanaman asli penting bagi penyerbuk?",
        "Apa risiko penggunaan pestisida berlebihan?",
        "Bagaimana siswa bisa memantau biodiversitas lokal?",
      ],
    },
  },
};

const state = {
  currentWorld: "water",
  simpleMode: false,
  highContrast: false,
  reducedMotion: false,
  sliderTouches: 0,
  promptsSent: 0,
  reflectionsSaved: 0,
  worlds: {},
};

const worldButtons = Array.from(document.querySelectorAll(".world-card"));
const toggleButtons = Array.from(document.querySelectorAll(".toggle-button"));
const actionButtons = Array.from(document.querySelectorAll("[data-action]"));

const els = {
  missionLabel: document.getElementById("missionLabel"),
  missionTitle: document.getElementById("missionTitle"),
  missionQuestion: document.getElementById("missionQuestion"),
  missionSummary: document.getElementById("missionSummary"),
  themeName: document.getElementById("themeName"),
  sceneNodes: document.getElementById("sceneNodes"),
  missionConcepts: document.getElementById("missionConcepts"),
  missionData: document.getElementById("missionData"),
  mediaLibrary: document.getElementById("mediaLibrary"),
  chatLog: document.getElementById("chatLog"),
  promptForm: document.getElementById("promptForm"),
  promptInput: document.getElementById("promptInput"),
  labControls: document.getElementById("labControls"),
  metricsGrid: document.getElementById("metricsGrid"),
  labInsight: document.getElementById("labInsight"),
  solutionsGrid: document.getElementById("solutionsGrid"),
  impactScore: document.getElementById("impactScore"),
  costScore: document.getElementById("costScore"),
  feasibilityScore: document.getElementById("feasibilityScore"),
  evidenceScore: document.getElementById("evidenceScore"),
  solutionInsight: document.getElementById("solutionInsight"),
  verificationList: document.getElementById("verificationList"),
  reflectionPrompt: document.getElementById("reflectionPrompt"),
  reflectionJournal: document.getElementById("reflectionJournal"),
  reflectionStatus: document.getElementById("reflectionStatus"),
  saveReflection: document.getElementById("saveReflection"),
  generateReflection: document.getElementById("generateReflection"),
  xpValue: document.getElementById("xpValue"),
  missionValue: document.getElementById("missionValue"),
  streakValue: document.getElementById("streakValue"),
  compassGrid: document.getElementById("compassGrid"),
  badgeShelf: document.getElementById("badgeShelf"),
  teacherGoal: document.getElementById("teacherGoal"),
  teacherFlow: document.getElementById("teacherFlow"),
  teacherQuestions: document.getElementById("teacherQuestions"),
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, Math.round(value)));
}

function metricTone(value) {
  if (value >= 75) return "good";
  if (value >= 50) return "focus";
  return "caution";
}

function ensureWorldState(worldId) {
  if (!state.worlds[worldId]) {
    const mission = missions[worldId];
    state.worlds[worldId] = {
      sliders: Object.fromEntries(mission.sliders.map((item) => [item.key, item.value])),
      selectedSolutions: [],
      chat: [{ role: "lumi", text: mission.lumi.welcome }],
      reflection: "",
      visited: true,
    };
  }

  return state.worlds[worldId];
}

function getCurrentMission() {
  return missions[state.currentWorld];
}

function getCurrentWorldState() {
  return ensureWorldState(state.currentWorld);
}

function renderMission() {
  const mission = getCurrentMission();
  const worldState = getCurrentWorldState();

  document.documentElement.style.setProperty("--accent", mission.accent);
  document.documentElement.style.setProperty("--accent-soft", mission.accentSoft);

  els.missionLabel.textContent = mission.label;
  els.missionTitle.textContent = mission.title;
  els.missionQuestion.textContent = mission.question;
  els.missionSummary.textContent = state.simpleMode ? mission.simpleSummary : mission.summary;
  els.themeName.textContent = `Tema: ${mission.theme}`;
  els.reflectionPrompt.textContent = mission.reflectionPrompt;
  els.teacherGoal.textContent = mission.teacher.goal;
  els.teacherFlow.textContent = mission.teacher.flow;

  els.sceneNodes.innerHTML = mission.scene
    .map(
      (item) => `
        <article class="scene-node" style="left:${item.x}%; top:${item.y}%;">
          <strong>${item.title}</strong>
          <span>${item.text}</span>
        </article>
      `,
    )
    .join("");

  els.missionConcepts.innerHTML = mission.concepts.map((item) => `<span>${item}</span>`).join("");
  els.missionData.innerHTML = mission.data.map((item) => `<span>${item}</span>`).join("");
  els.mediaLibrary.innerHTML = mission.media
    .map(
      (item) => `
        <article class="media-card">
          <small>${item.type}</small>
          <strong>${item.title}</strong>
          <span>${item.meta}</span>
        </article>
      `,
    )
    .join("");
  els.teacherQuestions.innerHTML = mission.teacher.questions.map((item) => `<span>${item}</span>`).join("");

  els.reflectionJournal.value = worldState.reflection;

  worldButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.world === state.currentWorld);
  });

  renderChat();
  renderSliders();
  renderSimulation();
  renderSolutions();
  renderVerification();
  renderDashboard();
}

function renderChat() {
  const worldState = getCurrentWorldState();
  els.chatLog.innerHTML = worldState.chat
    .map(
      (entry) => `
        <article class="chat-message ${entry.role}">
          <strong>${entry.role === "lumi" ? "Lumi" : "Kamu"}</strong>
          <p>${entry.text}</p>
        </article>
      `,
    )
    .join("");

  els.chatLog.scrollTop = els.chatLog.scrollHeight;
}

function pushChat(role, text) {
  const worldState = getCurrentWorldState();
  worldState.chat.push({ role, text });
  renderChat();
  renderDashboard();
}

function renderSliders() {
  const mission = getCurrentMission();
  const worldState = getCurrentWorldState();

  els.labControls.innerHTML = mission.sliders
    .map((slider) => {
      const value = worldState.sliders[slider.key];
      return `
        <label class="slider-card" for="${slider.key}">
          <header>
            <div>
              <strong>${slider.label}</strong>
              <p>${slider.desc}</p>
            </div>
            <span class="slider-value">${value}${slider.unit}</span>
          </header>
          <input
            id="${slider.key}"
            data-slider="${slider.key}"
            type="range"
            min="${slider.min}"
            max="${slider.max}"
            value="${value}"
          />
        </label>
      `;
    })
    .join("");

  Array.from(document.querySelectorAll("[data-slider]")).forEach((input) => {
    input.addEventListener("input", (event) => {
      const worldStateRef = getCurrentWorldState();
      worldStateRef.sliders[event.currentTarget.dataset.slider] = Number(event.currentTarget.value);
      state.sliderTouches += 1;
      renderSliders();
      renderSimulation();
      renderVerification();
      renderDashboard();
    });
  });
}

function computeCurrent() {
  const mission = getCurrentMission();
  const worldState = getCurrentWorldState();
  return mission.compute(worldState.sliders);
}

function renderSimulation() {
  const computed = computeCurrent();

  els.metricsGrid.innerHTML = computed.metrics
    .map(
      (metric) => `
        <article class="metric-card ${metric.tone}">
          <span>${metric.label}</span>
          <strong>${metric.value}</strong>
        </article>
      `,
    )
    .join("");

  els.labInsight.textContent = computed.insight;
}

function renderSolutions() {
  const mission = getCurrentMission();
  const worldState = getCurrentWorldState();
  const selectedSet = new Set(worldState.selectedSolutions);

  els.solutionsGrid.innerHTML = mission.solutions
    .map(
      (solution) => `
        <button class="solution-card ${selectedSet.has(solution.id) ? "active" : ""}" data-solution="${solution.id}" type="button">
          <strong>${solution.title}</strong>
          <p>${solution.desc}</p>
          <small>Dampak ${solution.impact} • Bukti ${solution.evidence}</small>
        </button>
      `,
    )
    .join("");

  Array.from(document.querySelectorAll("[data-solution]")).forEach((button) => {
    button.addEventListener("click", (event) => {
      const solutionId = event.currentTarget.dataset.solution;
      const selected = new Set(getCurrentWorldState().selectedSolutions);

      if (selected.has(solutionId)) {
        selected.delete(solutionId);
      } else {
        selected.add(solutionId);
      }

      getCurrentWorldState().selectedSolutions = Array.from(selected);
      renderSolutions();
      renderVerification();
      renderDashboard();
    });
  });

  renderSolutionScores();
}

function renderSolutionScores() {
  const mission = getCurrentMission();
  const worldState = getCurrentWorldState();
  const selectedSolutions = mission.solutions.filter((item) => worldState.selectedSolutions.includes(item.id));

  const summary = selectedSolutions.length
    ? selectedSolutions.reduce(
        (acc, item) => ({
          impact: acc.impact + item.impact,
          cost: acc.cost + item.cost,
          feasibility: acc.feasibility + item.feasibility,
          evidence: acc.evidence + item.evidence,
        }),
        { impact: 0, cost: 0, feasibility: 0, evidence: 0 },
      )
    : { impact: 0, cost: 0, feasibility: 0, evidence: 0 };

  const denominator = Math.max(selectedSolutions.length, 1);
  const scores = {
    impact: Math.round(summary.impact / denominator),
    cost: Math.round(summary.cost / denominator),
    feasibility: Math.round(summary.feasibility / denominator),
    evidence: Math.round(summary.evidence / denominator),
  };

  els.impactScore.style.width = `${scores.impact}%`;
  els.costScore.style.width = `${scores.cost}%`;
  els.feasibilityScore.style.width = `${scores.feasibility}%`;
  els.evidenceScore.style.width = `${scores.evidence}%`;

  if (!selectedSolutions.length) {
    els.solutionInsight.textContent =
      "Pilih satu atau lebih solusi untuk melihat trade-off antara dampak, biaya, kemudahan, dan kekuatan bukti.";
    return;
  }

  const strongest = [scores.impact, scores.cost, scores.feasibility, scores.evidence].every((value) => value >= 70);
  els.solutionInsight.textContent = strongest
    ? "Paket solusi ini cukup seimbang. Tantangan berikutnya adalah memastikan ada pengukuran hasil setelah intervensi."
    : "Paket solusi ini punya potensi, tetapi masih ada trade-off yang perlu diperbaiki. Coba gabungkan solusi pengurangan sumber dengan solusi pemantauan.";
}

function buildVerification() {
  const mission = getCurrentMission();
  const worldState = getCurrentWorldState();
  const computed = computeCurrent();
  const solutions = mission.solutions.filter((item) => worldState.selectedSolutions.includes(item.id));
  const tags = new Set(solutions.flatMap((item) => item.tags));
  const averages = solutions.length
    ? solutions.reduce(
        (acc, item) => ({
          impact: acc.impact + item.impact,
          cost: acc.cost + item.cost,
          feasibility: acc.feasibility + item.feasibility,
          evidence: acc.evidence + item.evidence,
        }),
        { impact: 0, cost: 0, feasibility: 0, evidence: 0 },
      )
    : { impact: 0, cost: 0, feasibility: 0, evidence: 0 };

  const divisor = Math.max(solutions.length, 1);
  const avgFeasibility = averages.feasibility / divisor;
  const avgEvidence = averages.evidence / divisor;
  const meanMetric =
    computed.metrics.reduce((acc, item) => acc + item.value, 0) / Math.max(computed.metrics.length, 1);

  return [
    {
      title: "Menyasar penyebab utama",
      detail: mission.verificationFocus.cause,
      level: tags.has("root") ? "strong" : solutions.length ? "medium" : "low",
      label: tags.has("root") ? "Kuat" : solutions.length ? "Perlu cek" : "Belum",
    },
    {
      title: "Ada rencana mengukur hasil",
      detail: mission.verificationFocus.evidence,
      level: tags.has("measure") || tags.has("data") ? "strong" : avgEvidence >= 75 ? "medium" : "low",
      label: tags.has("measure") || tags.has("data") ? "Kuat" : avgEvidence >= 75 ? "Perlu cek" : "Belum",
    },
    {
      title: "Realistis untuk sekolah",
      detail: mission.verificationFocus.realism,
      level: avgFeasibility >= 72 ? "strong" : avgFeasibility >= 55 ? "medium" : "low",
      label: avgFeasibility >= 72 ? "Kuat" : avgFeasibility >= 55 ? "Perlu cek" : "Belum",
    },
    {
      title: "Dampak berpotensi terasa",
      detail: "Bandingkan hasil simulasi dan paket solusi. Solusi ideal memperbaiki metrik yang paling lemah.",
      level: meanMetric >= 72 && solutions.length >= 2 ? "strong" : solutions.length ? "medium" : "low",
      label: meanMetric >= 72 && solutions.length >= 2 ? "Kuat" : solutions.length ? "Perlu cek" : "Belum",
    },
  ];
}

function renderVerification() {
  const checks = buildVerification();
  els.verificationList.innerHTML = checks
    .map(
      (item) => `
        <article class="verification-item">
          <div class="verification-head">
            <strong>${item.title}</strong>
            <span class="status-pill ${item.level}">${item.label}</span>
          </div>
          <p>${item.detail}</p>
        </article>
      `,
    )
    .join("");

  renderSolutionScores();
}

function parsePrompt(text) {
  const mission = getCurrentMission();
  const prompt = text.toLowerCase();
  const computed = computeCurrent();
  const weakestMetric = computed.metrics.slice().sort((a, b) => a.value - b.value)[0];

  if (prompt.includes("data") || prompt.includes("bukti")) {
    return `Data yang paling penting saat ini adalah ${mission.data.slice(0, 3).join(", ")}. Gunakan itu untuk membedakan penyebab utama dari gejalanya.`;
  }

  if (prompt.includes("solusi") || prompt.includes("pilih")) {
    return `Mulai dari metrik yang paling lemah, yaitu ${weakestMetric.label.toLowerCase()}. Pilih solusi yang benar-benar memengaruhi area itu, lalu tambahkan cara mengukurnya.`;
  }

  if (prompt.includes("mengapa") || prompt.includes("kenapa")) {
    return `Pertanyaan bagus. Jangan langsung jawab dengan opini. Bandingkan dulu bukti yang kamu punya, lalu cari hubungan sebab-akibat yang paling konsisten.`;
  }

  if (prompt.includes("mudah") || prompt.includes("sederhana")) {
    return mission.lumi.simple;
  }

  return `Kamu sudah berada di jalur yang baik. Coba cek lagi apakah bukti, penyebab, dan solusi yang kamu pilih benar-benar saling terhubung.`;
}

function renderDashboard() {
  const visitedWorlds = Object.keys(state.worlds).length;
  const allWorldStates = Object.values(state.worlds);
  const totalSelected = allWorldStates.reduce((acc, item) => acc + item.selectedSolutions.length, 0);
  const completedWorlds = allWorldStates.filter((item) => item.reflection.trim().length > 0 && item.selectedSolutions.length >= 2).length;
  const xp =
    visitedWorlds * 90 +
    totalSelected * 28 +
    state.sliderTouches * 6 +
    state.promptsSent * 14 +
    state.reflectionsSaved * 32;

  const verificationCount = buildVerification().filter((item) => item.level === "strong").length;

  const compass = [
    { label: "Observasi", value: clamp(36 + visitedWorlds * 10 + state.promptsSent * 2, 0, 100) },
    { label: "Membaca data", value: clamp(28 + state.sliderTouches * 4, 0, 100) },
    { label: "Memahami konsep", value: clamp(32 + visitedWorlds * 8 + state.promptsSent * 3, 0, 100) },
    { label: "Membuat solusi", value: clamp(22 + totalSelected * 7, 0, 100) },
    { label: "Memverifikasi", value: clamp(18 + verificationCount * 17, 0, 100) },
    { label: "Refleksi", value: clamp(16 + state.reflectionsSaved * 20, 0, 100) },
  ];

  const badges = buildBadges(visitedWorlds, totalSelected, verificationCount, completedWorlds);

  els.xpValue.textContent = xp;
  els.missionValue.textContent = visitedWorlds;
  els.streakValue.textContent = badges.length;
  els.compassGrid.innerHTML = compass
    .map(
      (item) => `
        <article class="compass-row">
          <header>
            <span>${item.label}</span>
            <strong>${item.value}</strong>
          </header>
          <div class="compass-track"><i style="width:${item.value}%"></i></div>
        </article>
      `,
    )
    .join("");

  els.badgeShelf.innerHTML = badges.map((item) => `<span class="badge-pill">${item}</span>`).join("");
}

function buildBadges(visitedWorlds, totalSelected, verificationCount, completedWorlds) {
  const badges = ["Evidence Explorer"];
  if (state.sliderTouches >= 3) badges.push("Data Reader");
  if (totalSelected >= 2) badges.push("Solution Builder");
  if (verificationCount >= 3) badges.push("Young Scientist");
  if (state.currentWorld === "water" && verificationCount >= 3) badges.push("Water Detective");
  if (state.currentWorld === "climate" && verificationCount >= 3) badges.push("Climate Thinker");
  if (state.currentWorld === "energy" && verificationCount >= 3) badges.push("Energy Saver");
  if (visitedWorlds >= 4) badges.push("Cross-World Explorer");
  if (completedWorlds >= 1) badges.push("Reflection Keeper");
  return badges;
}

function activateWorld(worldId) {
  state.currentWorld = worldId;
  ensureWorldState(worldId);
  renderMission();
}

worldButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activateWorld(button.dataset.world);
  });
});

actionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const mission = getCurrentMission();
    const action = button.dataset.action;
    const worldState = getCurrentWorldState();

    if (action === "hint") {
      pushChat("user", "Aku butuh hint.");
      pushChat("lumi", mission.lumi.hint);
      state.promptsSent += 1;
    }

    if (action === "simple") {
      pushChat("user", "Jelaskan lebih mudah.");
      pushChat("lumi", mission.lumi.simple);
      state.promptsSent += 1;
    }

    if (action === "check") {
      const total = worldState.selectedSolutions.length;
      pushChat("user", "Tolong cek solusiku.");
      pushChat(
        "lumi",
        total
          ? `${mission.lumi.solutionCheck} Saat ini kamu memilih ${total} solusi. Sekarang cek lagi apakah ada cara mengukur hasilnya.`
          : "Pilih dulu setidaknya satu solusi, lalu kita cek apakah solusi itu menyasar penyebab utama.",
      );
      state.promptsSent += 1;
    }

    renderDashboard();
  });
});

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.toggle;

    if (action === "simple") {
      state.simpleMode = !state.simpleMode;
      button.classList.toggle("active", state.simpleMode);
      renderMission();
      return;
    }

    if (action === "contrast") {
      state.highContrast = !state.highContrast;
      document.body.classList.toggle("high-contrast", state.highContrast);
      button.classList.toggle("active", state.highContrast);
      return;
    }

    if (action === "motion") {
      state.reducedMotion = !state.reducedMotion;
      document.body.classList.toggle("reduced-motion", state.reducedMotion);
      button.classList.toggle("active", state.reducedMotion);
      return;
    }

    if (action === "listen") {
      button.classList.add("active");
      speakCurrentMission();
      window.setTimeout(() => button.classList.remove("active"), 1400);
    }
  });
});

els.promptForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = els.promptInput.value.trim();

  if (!value) return;

  pushChat("user", value);
  pushChat("lumi", parsePrompt(value));
  state.promptsSent += 1;
  els.promptInput.value = "";
  renderDashboard();
});

els.generateReflection.addEventListener("click", () => {
  const mission = getCurrentMission();
  const worldState = getCurrentWorldState();
  const selectedNames = mission.solutions
    .filter((item) => worldState.selectedSolutions.includes(item.id))
    .map((item) => item.title.toLowerCase());

  const computed = computeCurrent();
  const strongestMetric = computed.metrics.slice().sort((a, b) => b.value - a.value)[0];

  const sample = `Hari ini aku belajar bahwa ${mission.theme.toLowerCase()} perlu dipahami lewat data, bukan tebakan. Solusi yang menurutku paling masuk akal adalah ${
    selectedNames.length ? selectedNames.join(", ") : "gabungan tindakan yang menyasar penyebab utama"
  }. Dari simulasi, aku melihat bahwa ${strongestMetric.label.toLowerCase()} bisa membaik jika tindakan dilakukan secara konsisten dan hasilnya tetap diukur.`;

  els.reflectionJournal.value = sample;
  getCurrentWorldState().reflection = sample;
  els.reflectionStatus.textContent = "Contoh refleksi sudah dibuat. Kamu bisa edit sesuai pemahamanmu.";
  renderDashboard();
});

els.saveReflection.addEventListener("click", () => {
  const value = els.reflectionJournal.value.trim();
  getCurrentWorldState().reflection = value;

  if (!value) {
    els.reflectionStatus.textContent = "Tulis refleksi singkat dulu agar misi terasa lengkap.";
    return;
  }

  state.reflectionsSaved += 1;
  els.reflectionStatus.textContent = "Refleksi tersimpan. Science Compass-mu ikut bertambah.";
  renderDashboard();
});

function speakCurrentMission() {
  const mission = getCurrentMission();
  if (!("speechSynthesis" in window)) {
    pushChat("lumi", "Browser ini belum mendukung mode bacakan, tapi semua narasi tetap tersedia dalam bentuk teks.");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(mission.narration);
  utterance.lang = "id-ID";
  utterance.rate = 1;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

ensureWorldState("water");
renderMission();
