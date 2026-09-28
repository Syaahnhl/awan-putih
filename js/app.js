/**
 * Awan Putih Foundation - Main Application Logic
 * Integrasi Sistem Informasi & Manajemen Donasi Terpadu
 */

// Initial Mock Data Store
const AppData = {
  stats: {
    totalDana: 284500000,
    totalPaketBarang: 1420,
    totalDonatur: 3850,
    tingkatAudit: "100% WTP"
  },
  
  campaigns: [
    {
      id: 1,
      title: "Tanggap Darurat Sembako & Pangan Jawa Tengah",
      category: "Bencana",
      categoryBadge: "bg-red-100 text-red-700",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      target: 50000000,
      collected: 38500000,
      donorsCount: 412,
      daysLeft: 12,
      description: "Distribusi beras, minyak goreng, dan makanan siap santap untuk warga terdampak bencana banjir rob dan longsor di wilayah pesisir dan dataran tinggi Jawa Tengah."
    },
    {
      id: 2,
      title: "Beasiswa Perlengkapan Belajar Anak Yatim Piatu",
      category: "Pendidikan",
      categoryBadge: "bg-blue-100 text-blue-700",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      target: 75000000,
      collected: 52300000,
      donorsCount: 580,
      daysLeft: 18,
      description: "Penyediaan seragam, tas sekolah, buku tulis, serta bantuan SPP bulanan bagi 150 anak yatim dhuafa di Kabupaten Semarang dan sekitarnya."
    },
    {
      id: 3,
      title: "Layanan Medis Keliling & Paket Nutrisi Lansia Dhuafa",
      category: "Kesehatan",
      categoryBadge: "bg-emerald-100 text-emerald-700",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
      target: 30000000,
      collected: 26800000,
      donorsCount: 295,
      daysLeft: 5,
      description: "Pemeriksaan kesehatan gratis door-to-door, obat-obatan esensial, vitamin, dan paket susu nutrisi khusus lansia tidak mampu di pedesaan."
    },
    {
      id: 4,
      title: "Pembangunan Sumur Bor Air Bersih Warga Kekeringan",
      category: "Infrastruktur",
      categoryBadge: "bg-amber-100 text-amber-700",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80",
      target: 45000000,
      collected: 41200000,
      donorsCount: 340,
      daysLeft: 3,
      description: "Pengeboran sumber mata air tanah sedalam 65 meter dan tandon penampungan umum untuk mengatasi krisis kekeringan tahunan."
    }
  ],

  // Logistic & In-Kind Tracking Database
  trackings: {
    "AWP-LOG-8821": {
      token: "AWP-LOG-8821",
      donorName: "Budi Santoso",
      type: "Barang / Logistik",
      category: "Sembako (Beras & Minyak)",
      quantity: "50 Kg Beras + 20 Liter Minyak",
      origin: "Drop-off Gudang Utama Ungaran",
      destination: "Dapur Umum Banjir Rob Sayung, Demak",
      currentStep: 3, // 1: Diterima, 2: Sortir, 3: Ekspedisi, 4: Selesai
      statusLabel: "Dalam Pengiriman Armada Relawan",
      statusColor: "text-amber-600 bg-amber-50 border-amber-200",
      timeline: [
        {
          title: "Donasi Diterima di Gudang",
          time: "26 Sep 2026, 09:15 WIB",
          desc: "Paket fisik diterima staf gudang cabang Kab. Semarang. Dokumen serah terima diverifikasi.",
          done: true
        },
        {
          title: "Sortir Kualitas & Pengemasan Ulang",
          time: "26 Sep 2026, 14:30 WIB",
          desc: "Kondisi kemasan utuh, masa kedaluwarsa aman (>18 bulan). Dikemas ke dalam 25 tas bantuan darurat.",
          done: true
        },
        {
          title: "Pemberangkatan Armada Ekspedisi Relawan",
          time: "27 Sep 2026, 08:00 WIB",
          desc: "Dimuat ke Mobil Rescue Awan Putih (Plat H 8921 AW) menuju titik posko pengungsian terdekat.",
          done: true
        },
        {
          title: "Serah Terima Penerima Manfaat",
          time: "Estimasi Hari Ini, 16:00 WIB",
          desc: "Penyaluran langsung kepada 25 kepala keluarga oleh tim relawan lapangan dengan tanda tangan BAST.",
          done: false
        }
      ]
    },
    "AWP-FIN-4512": {
      token: "AWP-FIN-4512",
      donorName: "Siti Nurhaliza (Hamba Allah)",
      type: "Donasi Finansial",
      category: "Beasiswa Pendidikan Yatim",
      quantity: "Rp 500.000",
      origin: "BCA Virtual Account (Otomatis)",
      destination: "Penyaluran SPP & Buku Semester Gasal",
      currentStep: 4,
      statusLabel: "Telah Disalurkan 100%",
      statusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      timeline: [
        {
          title: "Donasi Masuk & Terverifikasi Webhook",
          time: "24 Sep 2026, 11:20 WIB",
          desc: "Pembayaran terverifikasi otomatis oleh gateway bank. E-Receipt resmi diterbitkan.",
          done: true
        },
        {
          title: "Alokasi ke Kas Program Pendidikan",
          time: "24 Sep 2026, 13:00 WIB",
          desc: "Dana dibukukan ke rekening giro amanah beasiswa yatim dhuafa yayasan.",
          done: true
        },
        {
          title: "Pengadaan Alat Tulis & Seragam",
          time: "25 Sep 2026, 10:15 WIB",
          desc: "Pembelian seragam sekolah dan paket buku tulis standar kurikulum merdeka.",
          done: true
        },
        {
          title: "Diserahkan ke Siswa Binaan",
          time: "26 Sep 2026, 15:30 WIB",
          desc: "Serah terima di Panti Asuhan Bina Siwi dengan dokumentasi tanda tangan pendamping.",
          done: true
        }
      ]
    }
  },

  // Recent Transactions Log
  transactions: [
    { id: "TRX-2026-901", name: "Ahmad Fauzi", campaign: "Tanggap Darurat Sembako", amount: 150000, method: "QRIS", status: "Berhasil", time: "10 menit lalu" },
    { id: "TRX-2026-902", name: "Hamba Allah", campaign: "Beasiswa Perlengkapan Belajar", amount: 500000, method: "BCA VA", status: "Berhasil", time: "25 menit lalu" },
    { id: "TRX-2026-903", name: "Rina Wijaya", campaign: "Sumur Bor Air Bersih", amount: 1000000, method: "Mandiri VA", status: "Berhasil", time: "1 jam lalu" },
    { id: "TRX-2026-904", name: "Dedi Kurniawan", campaign: "Layanan Medis Keliling", amount: 75000, method: "GoPay", status: "Berhasil", time: "2 jam lalu" },
    { id: "TRX-2026-905", name: "Hamba Allah", campaign: "Tanggap Darurat Sembako", amount: 250000, method: "ShopeePay", status: "Berhasil", time: "3 jam lalu" }
  ]
};

// State Controllers
let currentSelectedCampaign = null;
let currentDonationAmount = 100000;
let currentPaymentMethod = "QRIS";
let transparencyChartInstance = null;

// Helper: Format Rupiah
function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(number);
}

// Switch Active Section (SPA Navigation)
function navigateTo(sectionId) {
  const sections = ['section-home', 'section-campaigns', 'section-in-kind', 'section-tracking', 'section-transparency', 'section-admin'];
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (id === sectionId) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update active state in nav
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('data-target') === sectionId) {
      link.classList.add('text-sky-600', 'font-semibold');
      link.classList.remove('text-slate-600');
    } else {
      link.classList.remove('text-sky-600', 'font-semibold');
      link.classList.add('text-slate-600');
    }
  });

  // Render chart if navigating to transparency
  if (sectionId === 'section-transparency') {
    setTimeout(initTransparencyChart, 100);
  }
}

// Render Campaigns Cards
function renderCampaigns(filterCategory = 'Semua') {
  const container = document.getElementById('campaigns-grid');
  const homeContainer = document.getElementById('home-campaigns-grid');
  if (!container && !homeContainer) return;

  const filtered = filterCategory === 'Semua' 
    ? AppData.campaigns 
    : AppData.campaigns.filter(c => c.category.toLowerCase() === filterCategory.toLowerCase());

  const generateCardHtml = (c) => {
    const percentage = Math.min(100, Math.round((c.collected / c.target) * 100));
    return `
      <div class="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-soft shadow-card-hover flex flex-col h-full">
        <div class="relative h-48 w-full overflow-hidden">
          <img src="${c.image}" alt="${c.title}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy">
          <span class="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${c.categoryBadge}">
            ${c.category}
          </span>
          <span class="absolute bottom-3 right-3 text-xs font-medium px-2 py-0.5 rounded bg-slate-900/75 text-white backdrop-blur-sm">
            ${c.daysLeft} hari lagi
          </span>
        </div>
        
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="font-bold text-slate-800 text-lg line-clamp-2 hover:text-sky-600 transition-colors mb-2">
              ${c.title}
            </h3>
            <p class="text-xs text-slate-500 line-clamp-2 mb-4">
              ${c.description}
            </p>
          </div>

          <div>
            <div class="space-y-1.5 mb-4">
              <div class="flex justify-between text-xs font-medium">
                <span class="text-slate-500">Terkumpul</span>
                <span class="font-bold text-sky-600">${percentage}%</span>
              </div>
              <div class="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div class="bg-sky-600 h-2 rounded-full transition-all duration-500" style="width: ${percentage}%"></div>
              </div>
              <div class="flex justify-between items-center text-xs pt-1">
                <span class="font-bold text-slate-800">${formatRupiah(c.collected)}</span>
                <span class="text-slate-400">Target: ${formatRupiah(c.target)}</span>
              </div>
            </div>

            <div class="flex items-center justify-between pt-2 border-t border-slate-100">
              <span class="text-xs text-slate-500 flex items-center gap-1">
                <i data-lucide="users" class="w-3.5 h-3.5 text-slate-400"></i> ${c.donorsCount} Donatur
              </span>
              <button onclick="openDonationModal(${c.id})" class="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold rounded-xl shadow-sm transition-all flex items-center gap-1.5">
                <span>Donasi</span>
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  if (container) {
    container.innerHTML = filtered.map(generateCardHtml).join('');
  }
  if (homeContainer) {
    homeContainer.innerHTML = AppData.campaigns.slice(0, 3).map(generateCardHtml).join('');
  }

  // Refresh icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Donation Modal Flow
function openDonationModal(campaignId = null) {
  const modal = document.getElementById('donation-modal');
  if (!modal) return;

  const campaign = campaignId 
    ? AppData.campaigns.find(c => c.id === campaignId) 
    : AppData.campaigns[0];
  
  currentSelectedCampaign = campaign;
  document.getElementById('modal-campaign-title').textContent = campaign.title;
  document.getElementById('modal-campaign-category').textContent = campaign.category;
  
  // Reset steps
  showModalStep(1);
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeDonationModal() {
  const modal = document.getElementById('donation-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

function showModalStep(stepNumber) {
  document.querySelectorAll('.modal-step').forEach(el => el.classList.add('hidden'));
  const targetStep = document.getElementById(`modal-step-${stepNumber}`);
  if (targetStep) {
    targetStep.classList.remove('hidden');
  }
}

function selectNominal(amount) {
  currentDonationAmount = amount;
  document.querySelectorAll('.nominal-btn').forEach(btn => {
    if (parseInt(btn.getAttribute('data-amount')) === amount) {
      btn.classList.add('border-sky-600', 'bg-sky-50', 'text-sky-700', 'font-bold');
      btn.classList.remove('border-slate-200', 'text-slate-700');
    } else {
      btn.classList.remove('border-sky-600', 'bg-sky-50', 'text-sky-700', 'font-bold');
      btn.classList.add('border-slate-200', 'text-slate-700');
    }
  });

  const customInput = document.getElementById('custom-nominal-input');
  if (customInput) customInput.value = '';
}

function handleCustomNominal(val) {
  const cleanVal = parseInt(val.replace(/\D/g, '')) || 0;
  currentDonationAmount = cleanVal;
  document.querySelectorAll('.nominal-btn').forEach(btn => {
    btn.classList.remove('border-sky-600', 'bg-sky-50', 'text-sky-700', 'font-bold');
    btn.classList.add('border-slate-200', 'text-slate-700');
  });
}

function selectPaymentMethod(methodName) {
  currentPaymentMethod = methodName;
  document.querySelectorAll('.payment-method-card').forEach(card => {
    if (card.getAttribute('data-method') === methodName) {
      card.classList.add('border-sky-600', 'bg-sky-50/50', 'ring-2', 'ring-sky-500/20');
      card.classList.remove('border-slate-200');
    } else {
      card.classList.remove('border-sky-600', 'bg-sky-50/50', 'ring-2', 'ring-sky-500/20');
      card.classList.add('border-slate-200');
    }
  });
}

// Proceed to payment confirmation
function proceedToPayment() {
  if (currentDonationAmount < 10000) {
    alert("Minimal donasi adalah Rp 10.000");
    return;
  }

  const isAnon = document.getElementById('donor-anon-check')?.checked;
  const donorName = isAnon ? "Hamba Allah" : (document.getElementById('donor-name-input')?.value.trim() || "Donatur Baik");
  const donorPhone = document.getElementById('donor-phone-input')?.value.trim() || "-";
  const donorPrayer = document.getElementById('donor-prayer-input')?.value.trim() || "Semoga bermanfaat dan berkah.";

  // Update Step 2 views
  document.getElementById('pay-summary-amount').textContent = formatRupiah(currentDonationAmount);
  document.getElementById('pay-summary-method').textContent = currentPaymentMethod;
  document.getElementById('pay-summary-donor').textContent = donorName;
  document.getElementById('pay-summary-campaign').textContent = currentSelectedCampaign.title;

  showModalStep(2);
}

// Simulate Payment Completion
function executePaymentSimulation() {
  const isAnon = document.getElementById('donor-anon-check')?.checked;
  const donorName = isAnon ? "Hamba Allah" : (document.getElementById('donor-name-input')?.value.trim() || "Donatur Baik");
  const trxId = "AWP-PAY-" + Math.floor(100000 + Math.random() * 900000);
  const now = new Date();
  const dateStr = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) + " WIB";

  // Update Campaign Data
  currentSelectedCampaign.collected += currentDonationAmount;
  currentSelectedCampaign.donorsCount += 1;
  AppData.stats.totalDana += currentDonationAmount;
  AppData.stats.totalDonatur += 1;

  // Add to transactions log
  AppData.transactions.unshift({
    id: trxId,
    name: donorName,
    campaign: currentSelectedCampaign.title,
    amount: currentDonationAmount,
    method: currentPaymentMethod,
    status: "Berhasil",
    time: "Baru saja"
  });

  // Re-render
  renderCampaigns();
  updateHomeStats();
  renderAdminTable();

  // Populate Step 3 (Receipt)
  document.getElementById('receipt-trx-id').textContent = trxId;
  document.getElementById('receipt-date').textContent = dateStr;
  document.getElementById('receipt-donor').textContent = donorName;
  document.getElementById('receipt-campaign').textContent = currentSelectedCampaign.title;
  document.getElementById('receipt-method').textContent = currentPaymentMethod;
  document.getElementById('receipt-amount').textContent = formatRupiah(currentDonationAmount);

  showModalStep(3);

  // Trigger celebration confetti
  if (window.confetti) {
    window.confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

// Update Home Statistics
function updateHomeStats() {
  const danaEl = document.getElementById('stat-total-dana');
  const barangEl = document.getElementById('stat-total-barang');
  const donaturEl = document.getElementById('stat-total-donatur');

  if (danaEl) danaEl.textContent = formatRupiah(AppData.stats.totalDana);
  if (barangEl) barangEl.textContent = AppData.stats.totalPaketBarang.toLocaleString('id-ID') + " Paket";
  if (donaturEl) donaturEl.textContent = AppData.stats.totalDonatur.toLocaleString('id-ID') + " Orang";
}

// In-Kind (Barang) Donation Submission
function submitInKindDonation(e) {
  e.preventDefault();
  
  const donorName = document.getElementById('inkind-name').value.trim();
  const donorPhone = document.getElementById('inkind-phone').value.trim();
  const category = document.getElementById('inkind-category').value;
  const quantity = document.getElementById('inkind-quantity').value.trim();
  const deliveryType = document.querySelector('input[name="delivery-method"]:checked')?.value || "Drop-off Gudang";
  const notes = document.getElementById('inkind-notes').value.trim() || "-";

  // Generate Token
  const token = "AWP-BRG-" + Math.floor(1000 + Math.random() * 9000);
  const now = new Date();
  const dateStr = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) + " WIB";

  // Save to Tracking Database
  AppData.trackings[token] = {
    token: token,
    donorName: donorName,
    type: "Barang / Logistik",
    category: category,
    quantity: quantity,
    origin: deliveryType,
    destination: "Posko Penyaluran Bantuan Yayasan",
    currentStep: 1,
    statusLabel: "Terdaftar - Menunggu Penyerahan Barang",
    statusColor: "text-sky-700 bg-sky-50 border-sky-200",
    timeline: [
      {
        title: "Pengajuan Donasi Barang Didaftarkan",
        time: dateStr,
        desc: `Pengajuan diterima online. Metode: ${deliveryType}. Menunggu konfirmasi kedatangan logistik.`,
        done: true
      },
      {
        title: "Pemeriksaan Fisik & Sortir di Gudang",
        time: "Menunggu Jadwal",
        desc: "Pengecekan kualitas, kebersihan, serta masa kedaluwarsa oleh staf logistik.",
        done: false
      },
      {
        title: "Pengemasan & Penjadwalan Ekspedisi",
        time: "Menunggu Jadwal",
        desc: "Pemberian label paket dan pemuatan ke armada distribusi relawan.",
        done: false
      },
      {
        title: "Penyerahan kepada Penerima Manfaat",
        time: "Menunggu Jadwal",
        desc: "Distribusi langsung ke warga dengan dokumentasi BAST.",
        done: false
      }
    ]
  };

  AppData.stats.totalPaketBarang += 1;
  updateHomeStats();
  renderAdminInKindTable();

  // Show Success Result inside Tracking
  document.getElementById('inkind-form').reset();
  alert(`Permohonan donasi logistik berhasil dibuat!\n\nNomor Token Resi Anda: ${token}\nSilakan simpan token ini untuk melacak status bantuan Anda.`);
  
  // Directly search tracking
  document.getElementById('tracking-input').value = token;
  navigateTo('section-tracking');
  executeTrackingSearch(token);
}

// Tracking Search Logic
function executeTrackingSearch(tokenOverride = null) {
  const input = tokenOverride || document.getElementById('tracking-input')?.value.trim();
  const resultCard = document.getElementById('tracking-result-card');
  const emptyState = document.getElementById('tracking-empty-state');
  
  if (!input) {
    alert("Masukkan nomor token resi donasi Anda.");
    return;
  }

  const tracking = AppData.trackings[input.toUpperCase()];

  if (!tracking) {
    if (resultCard) resultCard.classList.add('hidden');
    if (emptyState) {
      emptyState.classList.remove('hidden');
      emptyState.innerHTML = `
        <div class="text-center py-12 px-4 bg-white rounded-2xl border border-slate-200 shadow-soft">
          <i data-lucide="alert-circle" class="w-12 h-12 text-slate-400 mx-auto mb-3"></i>
          <h4 class="font-bold text-slate-800 text-base mb-1">Nomor Token Resi Tidak Ditemukan</h4>
          <p class="text-xs text-slate-500 max-w-sm mx-auto mb-4">Pastikan Anda memasukkan nomor resi yang sesuai, contoh: <code class="bg-slate-100 px-1.5 py-0.5 rounded text-sky-600 font-mono">AWP-LOG-8821</code> atau <code class="bg-slate-100 px-1.5 py-0.5 rounded text-sky-600 font-mono">AWP-FIN-4512</code></p>
          <button onclick="executeTrackingSearch('AWP-LOG-8821')" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-all">
            Coba Token Contoh (AWP-LOG-8821)
          </button>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
    }
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (resultCard) {
    resultCard.classList.remove('hidden');
    
    // Fill Meta
    document.getElementById('res-token').textContent = tracking.token;
    document.getElementById('res-donor').textContent = tracking.donorName;
    document.getElementById('res-type').textContent = tracking.type;
    document.getElementById('res-category').textContent = tracking.category;
    document.getElementById('res-quantity').textContent = tracking.quantity;
    document.getElementById('res-dest').textContent = tracking.destination;
    
    const badge = document.getElementById('res-status-badge');
    badge.textContent = tracking.statusLabel;
    badge.className = `inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${tracking.statusColor}`;

    // Render Timeline
    const timelineEl = document.getElementById('res-timeline-container');
    timelineEl.innerHTML = tracking.timeline.map((step, idx) => {
      const isDone = step.done;
      const dotBg = isDone ? 'bg-emerald-500 text-white shadow-sm' : 'bg-slate-200 text-slate-400';
      const textTitle = isDone ? 'text-slate-800 font-bold' : 'text-slate-400 font-medium';
      const textDesc = isDone ? 'text-slate-600' : 'text-slate-400';

      return `
        <div class="relative pl-10 pb-8 timeline-item">
          <div class="absolute left-2.5 top-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${dotBg}">
            ${isDone ? '✓' : (idx + 1)}
          </div>
          <div>
            <div class="flex items-center justify-between">
              <h5 class="text-sm ${textTitle}">${step.title}</h5>
              <span class="text-xs text-slate-400">${step.time}</span>
            </div>
            <p class="text-xs ${textDesc} mt-1">${step.desc}</p>
          </div>
        </div>
      `;
    }).join('');
  }
}

// Chart.js Transparency Analytics
function initTransparencyChart() {
  const canvas = document.getElementById('transparencyChart');
  if (!canvas) return;

  if (transparencyChartInstance) {
    transparencyChartInstance.destroy();
  }

  transparencyChartInstance = new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: ['Bantuan Langsung (Pangan/Sembako)', 'Beasiswa & Sarana Pendidikan', 'Layanan Medis & Kesehatan', 'Infrastruktur Air Bersih', 'Operasional & Logistik'],
      datasets: [{
        data: [42, 25, 15, 12, 6],
        backgroundColor: [
          '#0284c7', // Sky
          '#3b82f6', // Blue
          '#10b981', // Emerald
          '#f59e0b', // Amber
          '#64748b'  // Slate
        ],
        borderWidth: 2,
        borderColor: '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            boxWidth: 12,
            font: { family: 'Plus Jakarta Sans', size: 11 }
          }
        }
      },
      cutout: '70%'
    }
  });
}

// Admin Table Renderers
function renderAdminTable() {
  const tbody = document.getElementById('admin-transactions-table');
  if (!tbody) return;

  tbody.innerHTML = AppData.transactions.map(t => `
    <tr class="border-b border-slate-100 hover:bg-slate-50/75 transition-colors">
      <td class="py-3 px-4 text-xs font-mono font-semibold text-slate-700">${t.id}</td>
      <td class="py-3 px-4 text-xs font-semibold text-slate-800">${t.name}</td>
      <td class="py-3 px-4 text-xs text-slate-600">${t.campaign}</td>
      <td class="py-3 px-4 text-xs font-bold text-slate-800">${formatRupiah(t.amount)}</td>
      <td class="py-3 px-4 text-xs text-slate-500">${t.method}</td>
      <td class="py-3 px-4 text-xs">
        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-700">
          ${t.status}
        </span>
      </td>
      <td class="py-3 px-4 text-xs text-slate-400">${t.time}</td>
    </tr>
  `).join('');
}

function renderAdminInKindTable() {
  const tbody = document.getElementById('admin-inkind-table');
  if (!tbody) return;

  tbody.innerHTML = Object.values(AppData.trackings).map(trk => `
    <tr class="border-b border-slate-100 hover:bg-slate-50/75 transition-colors">
      <td class="py-3 px-4 text-xs font-mono font-bold text-sky-600">${trk.token}</td>
      <td class="py-3 px-4 text-xs font-semibold text-slate-800">${trk.donorName}</td>
      <td class="py-3 px-4 text-xs text-slate-600">${trk.category}</td>
      <td class="py-3 px-4 text-xs text-slate-600">${trk.quantity}</td>
      <td class="py-3 px-4 text-xs">
        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${trk.statusColor}">
          ${trk.statusLabel}
        </span>
      </td>
      <td class="py-3 px-4 text-xs">
        <button onclick="advanceTrackingStep('${trk.token}')" class="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-[11px] rounded-lg transition-colors">
          Update Tahap
        </button>
      </td>
    </tr>
  `).join('');
}

function advanceTrackingStep(token) {
  const trk = AppData.trackings[token];
  if (!trk) return;

  if (trk.currentStep < 4) {
    trk.currentStep += 1;
    trk.timeline[trk.currentStep - 1].done = true;
    trk.timeline[trk.currentStep - 1].time = "Baru saja diperbarui";
    
    if (trk.currentStep === 2) {
      trk.statusLabel = "Tahap Sortir & Pengecekan Mutu";
      trk.statusColor = "text-blue-700 bg-blue-50 border-blue-200";
    } else if (trk.currentStep === 3) {
      trk.statusLabel = "Dalam Perjalanan Distribusi";
      trk.statusColor = "text-amber-700 bg-amber-50 border-amber-200";
    } else if (trk.currentStep === 4) {
      trk.statusLabel = "Selesai Disalurkan ke Penerima";
      trk.statusColor = "text-emerald-700 bg-emerald-50 border-emerald-200";
    }

    renderAdminInKindTable();
    alert(`Status resi ${token} berhasil dinaikkan ke Tahap ${trk.currentStep}: ${trk.statusLabel}`);
  } else {
    alert(`Status resi ${token} sudah mencapai tahap akhir (100% Selesai Disalurkan).`);
  }
}

// Export Simulated Report
function exportReport(format) {
  alert(`Mengunduh Rekapitulasi Laporan Donasi & Penyaluran Awan Putih Foundation (Format: ${format.toUpperCase()}).\nFile siap dikomparasikan untuk akuntabilitas publik.`);
}

// DOM Ready Init
document.addEventListener('DOMContentLoaded', () => {
  renderCampaigns();
  updateHomeStats();
  renderAdminTable();
  renderAdminInKindTable();

  // Attach in-kind form listener
  const inKindForm = document.getElementById('inkind-form');
  if (inKindForm) {
    inKindForm.addEventListener('submit', submitInKindDonation);
  }

  // Pre-load tracking search for default sample
  const trackingInput = document.getElementById('tracking-input');
  if (trackingInput && trackingInput.value) {
    executeTrackingSearch(trackingInput.value);
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
});
