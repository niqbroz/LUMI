import * as THREE from "https://unpkg.com/three@0.164.1/build/three.module.js";

const modes = {
  kids: {
    label: "Dasar",
    description:
      "Cerita sederhana, visual besar, dan pilihan terbatas untuk melatih observasi serta sebab-akibat.",
    stats: { xp: 120, streak: "4 hari", badge: "Water Scout", skill: "Observasi 68%" },
    missions: [
      {
        id: "air-1",
        issue: "Air",
        title: "Sungai Keruh di Kampung",
        summary: "Cari penyebab utama air keruh dan pilih aksi paling berdampak.",
        phases: {
          observe: "Lihat 3 gejala: warna air, bau, dan ikan berkurang. Pilih gejala mana yang paling jelas terlihat.",
          analyze: "Bandingkan bukti: sampah rumah tangga, limbah deterjen, dan hujan lebat. Tentukan penyebab dominan.",
          build: "Bangun solusi dua langkah: kurangi sumber sampah + jadwal bersih rutin RT.",
          verify: "Cek 2 indikator sederhana setelah 2 minggu: kejernihan air dan jumlah sampah terapung."
        },
        hints: [
          "Mulai dari gejala yang terlihat langsung, jangan lompat ke solusi.",
          "Cari bukti mana yang paling sering muncul di lokasi.",
          "Solusi terbaik biasanya mengurangi sumber masalah, bukan hanya membersihkan akibat."
        ]
      },
      {
        id: "sampah-1",
        issue: "Sampah",
        title: "Misteri Tempat Sampah Penuh",
        summary: "Pahami kenapa volume sampah sekolah cepat menumpuk.",
        phases: {
          observe: "Amati jenis sampah paling banyak: plastik sekali pakai, kertas, atau sisa makanan.",
          analyze: "Urutkan penyebab: kebiasaan beli kemasan, minim tempat isi ulang, dan jadwal angkut telat.",
          build: "Pilih satu intervensi utama: stasiun isi ulang + pembatasan kemasan sekali pakai.",
          verify: "Bandingkan volume sampah sebelum dan sesudah intervensi dalam grafik mingguan."
        },
        hints: [
          "Pisahkan masalah perilaku dan masalah sistem sekolah.",
          "Cek data sederhana: hitung kantong sampah per hari.",
          "Intervensi kecil yang konsisten sering lebih efektif dari aksi besar sesekali."
        ]
      },
      {
        id: "energi-1",
        issue: "Energi",
        title: "Lampu Kelas Boros",
        summary: "Temukan kebiasaan yang membuat konsumsi listrik kelas terlalu tinggi.",
        phases: {
          observe: "Catat waktu lampu/kipas tetap menyala saat kelas kosong.",
          analyze: "Bandingkan dua data: jam pemakaian dan jumlah perangkat aktif.",
          build: "Buat aturan piket energi 3 langkah untuk mengurangi pemakaian yang tidak perlu.",
          verify: "Lihat perubahan tagihan listrik bulanan kelas sebelum dan sesudah aturan."
        },
        hints: [
          "Fokus ke kebiasaan yang sering terjadi setiap hari.",
          "Pilih solusi yang paling mudah dijalankan semua siswa.",
          "Verifikasi butuh data sebelum-sesudah, bukan hanya perasaan."
        ]
      }
    ]
  },
  teen: {
    label: "Menengah",
    description:
      "Pilihan isu lebih kompleks dengan data, trade-off, dan argumen berbasis bukti.",
    stats: { xp: 320, streak: "9 hari", badge: "Evidence Builder", skill: "Verifikasi 54%" },
    missions: [
      {
        id: "air-2",
        issue: "Air",
        title: "Air Tanah Menurun",
        summary: "Evaluasi dampak pemakaian air berlebih dan solusi konservasi.",
        phases: {
          observe: "Baca data debit sumur, curah hujan, dan konsumsi air rumah tangga.",
          analyze: "Tentukan sebab utama dari tren penurunan: ekstraksi, tutupan lahan, atau kebocoran jaringan.",
          build: "Rancang kombinasi solusi: panen hujan, audit kebocoran, dan aturan konsumsi puncak.",
          verify: "Verifikasi dengan indikator 3 bulan: tinggi muka air, volume pemakaian, dan biaya distribusi."
        },
        hints: [
          "Lihat tren, bukan hanya satu titik data.",
          "Bedakan korelasi dan kausalitas dengan membandingkan variabel waktu.",
          "Pilih kombinasi solusi dengan dampak dan biaya paling seimbang."
        ]
      },
      {
        id: "sampah-2",
        issue: "Sampah",
        title: "Dilema Plastik Sekolah",
        summary: "Bandingkan skenario kebijakan pengurangan plastik sekali pakai.",
        phases: {
          observe: "Kumpulkan data volume plastik, biaya operasional, dan perilaku kantin.",
          analyze: "Analisis trade-off: larangan total, insentif bawa wadah, atau kombinasi bertahap.",
          build: "Susun proposal kebijakan 2 fase dengan target kuantitatif dan risiko implementasi.",
          verify: "Nilai hasil lewat tingkat kepatuhan, pengurangan tonase, dan dampak biaya."
        },
        hints: [
          "Kebijakan paling ketat belum tentu paling efektif jika kepatuhan rendah.",
          "Gunakan target numerik agar evaluasi objektif.",
          "Siapkan mitigasi untuk resistensi pengguna sejak awal."
        ]
      },
      {
        id: "energi-2",
        issue: "Energi",
        title: "Transisi Energi Kampus Mini",
        summary: "Simulasikan skenario energi hemat emisi untuk lingkungan sekolah.",
        phases: {
          observe: "Baca baseline: konsumsi kWh, biaya, dan jejak emisi sumber listrik saat ini.",
          analyze: "Bandingkan opsi: efisiensi beban, panel surya atap, atau kombinasi hibrida.",
          build: "Rancang rencana implementasi bertahap dengan batas anggaran dan target emisi.",
          verify: "Uji skenario memakai KPI: payback period, emisi turun, dan stabilitas suplai."
        },
        hints: [
          "Mulai dari efisiensi karena dampaknya cepat dan murah.",
          "Skenario hibrida sering memberi keseimbangan biaya dan manfaat.",
          "Verifikasi perlu indikator ekonomi dan indikator lingkungan sekaligus."
        ]
      }
    ]
  }
};

const el = {
  modeKids: document.getElementById("modeKids"),
  modeTeen: document.getElementById("modeTeen"),
  modeDescription: document.getElementById("modeDescription"),
  difficultyChip: document.getElementById("difficultyChip"),
  missionList: document.getElementById("missionList"),
  missionTitle: document.getElementById("missionTitle"),
  issueBadge: document.getElementById("issueBadge"),
  missionBody: document.getElementById("missionBody"),
  phaseContent: document.getElementById("phaseContent"),
  phaseBtns: Array.from(document.querySelectorAll(".phase-btn")),
  hintBtn: document.getElementById("hintBtn"),
  hintText: document.getElementById("hintText"),
  sourceSlider: document.getElementById("sourceSlider"),
  sliderValue: document.getElementById("sliderValue"),
  impactText: document.getElementById("impactText"),
  xpValue: document.getElementById("xpValue"),
  streakValue: document.getElementById("streakValue"),
  badgeValue: document.getElementById("badgeValue"),
  skillValue: document.getElementById("skillValue")
};

const appState = {
  mode: "kids",
  missionIndex: 0,
  phase: "observe",
  hintStep: 0
};

const canvas = document.getElementById("scene3d");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 2.6, 8.8);

const ambient = new THREE.AmbientLight(0xa7ffe9, 0.9);
scene.add(ambient);

const keyLight = new THREE.DirectionalLight(0x8fdfff, 1.1);
keyLight.position.set(4, 8, 3);
scene.add(keyLight);

const rimLight = new THREE.DirectionalLight(0x6bffbf, 0.7);
rimLight.position.set(-5, 4, -2);
scene.add(rimLight);

const floorGeo = new THREE.CircleGeometry(10, 64);
const floorMat = new THREE.MeshPhongMaterial({
  color: 0x0a3037,
  shininess: 12,
  transparent: true,
  opacity: 0.78
});
const floor = new THREE.Mesh(floorGeo, floorMat);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -1.2;
scene.add(floor);

const orbGeo = new THREE.SphereGeometry(1.1, 42, 42);
const orbMat = new THREE.MeshPhysicalMaterial({
  color: 0x2cb3ba,
  roughness: 0.25,
  metalness: 0.2,
  clearcoat: 1,
  clearcoatRoughness: 0.15
});
const coreOrb = new THREE.Mesh(orbGeo, orbMat);
scene.add(coreOrb);

const ringGeo = new THREE.TorusGeometry(2, 0.06, 16, 120);
const ringMat = new THREE.MeshBasicMaterial({ color: 0x6ce9ff, transparent: true, opacity: 0.45 });
const ring = new THREE.Mesh(ringGeo, ringMat);
ring.rotation.x = Math.PI / 2;
scene.add(ring);

const starField = new THREE.Group();
for (let i = 0; i < 120; i += 1) {
  const dotGeo = new THREE.SphereGeometry(0.03, 8, 8);
  const dotMat = new THREE.MeshBasicMaterial({
    color: i % 2 === 0 ? 0xaef8ff : 0x7ed5ff,
    transparent: true,
    opacity: 0.85
  });
  const dot = new THREE.Mesh(dotGeo, dotMat);
  dot.position.set((Math.random() - 0.5) * 20, Math.random() * 8 - 2, (Math.random() - 0.5) * 20);
  starField.add(dot);
}
scene.add(starField);

const nodeGroup = new THREE.Group();
scene.add(nodeGroup);

const nodeConfigs = [
  { key: "Air", color: 0x5eceff, pos: new THREE.Vector3(-3.1, 0.6, 0.6) },
  { key: "Sampah", color: 0x8cf77f, pos: new THREE.Vector3(0.0, 1.2, -2.1) },
  { key: "Energi", color: 0xffd16b, pos: new THREE.Vector3(2.8, 0.4, 0.4) }
];

const nodeMeshes = nodeConfigs.map((node) => {
  const mat = new THREE.MeshPhongMaterial({ color: node.color, emissive: 0x11222a, shininess: 80 });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.45, 28, 28), mat);
  mesh.position.copy(node.pos);
  mesh.userData.issue = node.key;

  const halo = new THREE.Mesh(
    new THREE.SphereGeometry(0.55, 24, 24),
    new THREE.MeshBasicMaterial({ color: node.color, transparent: true, opacity: 0.18 })
  );
  mesh.add(halo);

  nodeGroup.add(mesh);
  return mesh;
});

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function updateHUDStats() {
  const stats = modes[appState.mode].stats;
  el.xpValue.textContent = String(stats.xp);
  el.streakValue.textContent = stats.streak;
  el.badgeValue.textContent = stats.badge;
  el.skillValue.textContent = stats.skill;
}

function getCurrentMission() {
  return modes[appState.mode].missions[appState.missionIndex];
}

function renderMissions() {
  const modeData = modes[appState.mode];
  el.modeDescription.textContent = modeData.description;
  el.difficultyChip.textContent = modeData.label;
  el.missionList.innerHTML = "";

  modeData.missions.forEach((mission, idx) => {
    const item = document.createElement("button");
    item.className = `mission-item ${idx === appState.missionIndex ? "active" : ""}`;
    item.innerHTML = `<h4>${mission.title}</h4><p>${mission.summary}</p>`;
    item.addEventListener("click", () => {
      appState.missionIndex = idx;
      appState.phase = "observe";
      appState.hintStep = 0;
      renderMissions();
      renderMissionDetail();
      updateNodeHighlight();
    });
    el.missionList.appendChild(item);
  });
}

function renderMissionDetail() {
  const mission = getCurrentMission();
  el.missionTitle.textContent = mission.title;
  el.issueBadge.textContent = mission.issue;
  el.missionBody.textContent = mission.summary;

  el.phaseBtns.forEach((btn) => {
    const isActive = btn.dataset.phase === appState.phase;
    btn.classList.toggle("active", isActive);
  });

  el.phaseContent.textContent = mission.phases[appState.phase];
  el.hintText.textContent = "Hint akan muncul bertahap agar kamu tetap berpikir sendiri.";
}

function updateNodeHighlight() {
  const activeIssue = getCurrentMission().issue;
  nodeMeshes.forEach((mesh) => {
    const active = mesh.userData.issue === activeIssue;
    mesh.scale.setScalar(active ? 1.24 : 1);
    mesh.material.emissive.setHex(active ? 0x1a5a57 : 0x11222a);
  });

  if (activeIssue === "Air") {
    orbMat.color.setHex(0x2cb3ba);
  } else if (activeIssue === "Sampah") {
    orbMat.color.setHex(0x43b973);
  } else {
    orbMat.color.setHex(0xb89743);
  }
}

function setMode(mode) {
  appState.mode = mode;
  appState.missionIndex = 0;
  appState.phase = "observe";
  appState.hintStep = 0;

  el.modeKids.classList.toggle("active", mode === "kids");
  el.modeTeen.classList.toggle("active", mode === "teen");

  updateHUDStats();
  renderMissions();
  renderMissionDetail();
  updateNodeHighlight();
}

el.modeKids.addEventListener("click", () => setMode("kids"));
el.modeTeen.addEventListener("click", () => setMode("teen"));

el.phaseBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    appState.phase = btn.dataset.phase;
    renderMissionDetail();
  });
});

el.hintBtn.addEventListener("click", () => {
  const mission = getCurrentMission();
  const hint = mission.hints[Math.min(appState.hintStep, mission.hints.length - 1)];
  el.hintText.textContent = hint;
  appState.hintStep += 1;
});

el.sourceSlider.addEventListener("input", (ev) => {
  const value = Number(ev.target.value);
  el.sliderValue.textContent = String(value);

  const quality = Math.round(38 + value * 0.52);
  const impact =
    quality < 50
      ? "Kualitas air masih rendah. Fokus dulu pada pengurangan sumber polusi terbesar."
      : quality < 75
      ? "Perbaikan terlihat. Tambahkan monitoring mingguan supaya efeknya konsisten."
      : "Dampak sangat baik. Lanjutkan verifikasi agar solusi tetap stabil dalam jangka panjang.";

  el.impactText.textContent = `${impact} (Indeks kualitas: ${quality}/100)`;

  orbMat.emissive.setRGB(0.05 + value / 600, 0.1 + value / 500, 0.12 + value / 500);
  ringMat.opacity = 0.2 + value / 140;
});

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

window.addEventListener("pointerdown", (event) => {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(nodeMeshes, false);
  if (!hits.length) return;

  const issue = hits[0].object.userData.issue;
  const idx = modes[appState.mode].missions.findIndex((mission) => mission.issue === issue);
  if (idx >= 0) {
    appState.missionIndex = idx;
    appState.phase = "observe";
    appState.hintStep = 0;
    renderMissions();
    renderMissionDetail();
    updateNodeHighlight();
  }
});

const clock = new THREE.Clock();

function animate() {
  const t = clock.getElapsedTime();

  coreOrb.rotation.y += 0.0022;
  ring.rotation.z += 0.002;
  starField.rotation.y += 0.00045;

  nodeMeshes.forEach((mesh, idx) => {
    mesh.position.y = nodeConfigs[idx].pos.y + Math.sin(t * 1.2 + idx * 1.4) * 0.14;
    mesh.rotation.y += 0.007;
  });

  camera.position.x = Math.sin(t * 0.18) * 0.72;
  camera.lookAt(0, 0.45, 0);

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

setMode("kids");
animate();
