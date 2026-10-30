import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Download,
  Copy,
  Check,
  Share2,
  Sparkles,
  Smartphone,
  Square,
  MessageSquare,
  ShieldCheck,
  MapPin,
  Clock,
  HardHat,
  Phone,
  Tag
} from 'lucide-react';
import { CONTACT_DATA, getWaUrl } from '../data/landingData';

interface PamphletAdsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PamphletAdsModal: React.FC<PamphletAdsModalProps> = ({ isOpen, onClose }) => {
  const [selectedFormat, setSelectedFormat] = useState<'feed' | 'story'>('feed');
  const [selectedTheme, setSelectedTheme] = useState<number>(0);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const flyerPreviewRef = useRef<HTMLDivElement>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const themes = [
    {
      id: 'promo-renovasi',
      name: 'Renovasi & Desain Modern',
      badge: 'PROMO KHUSUS BULAN INI',
      headline: 'RUMAH IMPIAN LEBIH NYAMAN & ESTETIK',
      subheadline: 'Renovasi Rapi, Biaya Transparan Tanpa Biaya Siluman',
      bgImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      points: [
        'Survey & Konsultasi Tata Ruang 100% GRATIS',
        'Garansi Struktur Resmi Hingga 12 Bulan',
        'RAB Fleksibel Disesuaikan Budget Anda',
        'Tim CS Siaga 24 Jam Fast Response'
      ],
      ctaText: 'SURVEY LOKASI GRATIS HARI INI',
      adCopy: {
        headline: 'Mau Renovasi Rumah Rapi & Bergaransi? Survey Gratis Se-Jabodetabek!',
        primaryText: `Mau renovasi rumah tapi takut biaya membengkak atau hasil kerja berantakan? 🏡✨

OXN BUILD hadir dengan komitmen: BUILD BETTER, LIVE BETTER!
Kami membangun kepercayaan Anda dengan standar pengerjaan presisi, material berkualitas, dan biaya transparan tanpa biaya siluman.

Keunggulan OXN BUILD:
✅ Survey Lokasi & Konsultasi Gambar 100% GRATIS
✅ Garansi Resmi Tertulis (Struktur 12 Bulan, Anti Bocor 6 Bulan)
✅ Sistem Pembayaran Termin Aman Sesuai Progres Riil SPK
✅ Tim CS Siaga 24 Jam Siap Melayani Kapan Saja
✅ Melayani Seluruh Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi)

Konsultasikan rencana hunian idaman Anda sekarang juga!
📲 WhatsApp CS 24 Jam: ${CONTACT_DATA.csPhone}
🌐 Website: oxnbuild.com`,
        suggestedInterest: 'Home improvement, Architecture, Interior design, Real estate, Renovation, Pemilik Rumah (Jabodetabek, Usia 27 - 55 tahun)'
      }
    },
    {
      id: 'bangun-baru-tingkat',
      name: 'Bangun Baru & Tingkat 2 Lantai',
      badge: 'SPESIALIS KONSTRUKSI JABODETABEK',
      headline: 'BANGUN RUMAH DARI NOL & DAK LANTAI 2',
      subheadline: 'Struktur Kokoh Tahan Gempa, Garansi Resmi 12 Bulan',
      bgImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80',
      points: [
        'Konstruksi Cakar Ayam & Pengecoran Padat Rapi',
        'Pengawasan Mandor & Laporan Progres Mingguan',
        'Kepastian Hukum Kontrak SPK Bermaterai',
        'Survey Langsung ke Lokasi Tanpa Biaya'
      ],
      ctaText: 'KONSULTASIKAN RENCANA BANGUN',
      adCopy: {
        headline: 'Bangun Rumah Impian & Tingkat 2 Lantai. Pasti Kokoh & Bergaransi!',
        primaryText: `Membangun rumah dari nol atau mau nambah dak lantai 2? Pastikan dikerjakan oleh kontraktor terpercaya! 🏗️🏠

OXN BUILD — Build Better, Live Better.
Kami mengutamakan kekuatan struktur fondasi, pembesian presisi, dan mutu material pilihan agar hunian Anda kokoh bertahan puluhan tahun.

Mengapa Memilih OXN BUILD?
🔹 Pengerjaan Rapi & Diawasi Mandor Berpengalaman
🔹 Laporan Progres Berkala via Foto & Video
🔹 Garansi Struktur Resmi 12 Bulan Tertulis di SPK
🔹 RAB Transparan & Terkunci — Bebas Biaya Tak Terduga
🔹 Layanan CS 24 Jam Siaga Melayani Anda

Jadwalkan survey lokasi gratis ke rumah Anda hari ini!
📲 WhatsApp CS 24 Jam: ${CONTACT_DATA.csPhone}
🌐 Informasi Lengkap: oxnbuild.com`,
        suggestedInterest: 'Construction, Civil engineering, House, Real estate investing, Villa (Jabodetabek, Usia 30 - 58 tahun)'
      }
    },
    {
      id: 'anti-bocor-waterproofing',
      name: 'Solusi Atap & Anti Bocor',
      badge: 'GARANSI ANTI BOCOR RESMI',
      headline: 'TUNTASKAN BOCOR ATAP & REMBES DINDING',
      subheadline: 'Waterproofing Berlapis & Perbaikan Rangka Atap',
      bgImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
      points: [
        'Garansi Kebocoran 6 Bulan Tertulis',
        'Tes Genangan Air Sebelum Serah Terima',
        'Perbaikan Dak Cor, Talang Jurai & Genteng',
        'Penanganan Cepat CS 24 Jam Setiap Hari'
      ],
      ctaText: 'ATUR JADWAL PENGECEKAN ATAP',
      adCopy: {
        headline: 'Atap Bocor & Dinding Rembes Bikin Pusing? Tuntaskan Sekarang Bergaransi!',
        primaryText: `Musim hujan tiba tapi rumah malah bocor dan dinding rembes? Jangan dibiarkan sampai merusak plafon dan kelistrikan! 🌧️🛠️

OXN BUILD memberikan solusi perbaikan kebocoran menyeluruh:
🛡️ Waterproofing membran & cor dak bermutu tinggi
🛡️ Perbaikan talang air jurai & pergantian genteng
🛡️ Tes genangan air langsung sebelum serah terima
🛡️ DILINDUNGI GARANSI RESMI 6 BULAN TERTULIS

Tim kami siap datang cek langsung ke lokasi rumah Anda se-Jabodetabek!
📲 Chat WhatsApp CS 24 Jam: ${CONTACT_DATA.csPhone}
🌐 Website: oxnbuild.com`,
        suggestedInterest: 'Home maintenance, Roofing, Waterproofing, Home repair (Jabodetabek, Usia 28 - 60 tahun)'
      }
    }
  ];

  const currentTheme = themes[selectedTheme];

  const handleCopyText = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => {
      setCopiedSection(null);
    }, 2500);
  };

  // High-Resolution Canvas Download Generator
  const handleDownloadPamphlet = () => {
    setIsGenerating(true);
    const canvas = document.createElement('canvas');
    const width = 1080;
    const height = selectedFormat === 'feed' ? 1080 : 1920;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      setIsGenerating(false);
      return;
    }

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      drawCanvasContent(img);
    };
    img.onerror = () => {
      // If CORS or offline, draw elegant architectural gradient background
      drawCanvasContent(null);
    };
    img.src = currentTheme.bgImage;

    function drawCanvasContent(loadedImg: HTMLImageElement | null) {
      if (!ctx) return;

      // 1. Draw Background
      if (loadedImg) {
        ctx.drawImage(loadedImg, 0, 0, width, height);
      } else {
        const bgGrad = ctx.createLinearGradient(0, 0, width, height);
        bgGrad.addColorStop(0, '#1E252B');
        bgGrad.addColorStop(1, '#111827');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // 2. High-contrast dark aesthetic overlay
      const overlayGrad = ctx.createLinearGradient(0, 0, 0, height);
      overlayGrad.addColorStop(0, 'rgba(15, 23, 42, 0.82)');
      overlayGrad.addColorStop(0.45, 'rgba(15, 23, 42, 0.70)');
      overlayGrad.addColorStop(0.85, 'rgba(15, 23, 42, 0.95)');
      overlayGrad.addColorStop(1, 'rgba(10, 15, 25, 0.98)');
      ctx.fillStyle = overlayGrad;
      ctx.fillRect(0, 0, width, height);

      // 3. Top Decorative Brand Accent Line
      ctx.fillStyle = '#8DB63F';
      ctx.fillRect(0, 0, width, 14);

      // 4. Header Brand Area
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 44px sans-serif';
      ctx.fillText('OXN BUILD', 60, 95);

      ctx.fillStyle = '#8DB63F';
      ctx.font = 'bold 20px sans-serif';
      ctx.fillText('BUILD BETTER, LIVE BETTER', 60, 130);

      // Top Right CS Badge
      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.beginPath();
      ctx.roundRect(width - 340, 60, 280, 70, 16);
      ctx.fill();

      ctx.fillStyle = '#8DB63F';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText('⚡ CS SIAGA 24 JAM', width - 315, 90);

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 22px sans-serif';
      ctx.fillText(CONTACT_DATA.csPhone, width - 315, 116);

      // 5. Promotional Badge Pill
      ctx.fillStyle = '#8DB63F';
      ctx.beginPath();
      ctx.roundRect(60, 180, 420, 48, 24);
      ctx.fill();

      ctx.fillStyle = '#1E252B';
      ctx.font = '900 18px sans-serif';
      ctx.fillText(`★  ${currentTheme.badge}`, 85, 211);

      // 6. Main Headlines
      ctx.fillStyle = '#FFFFFF';
      ctx.font = selectedFormat === 'feed' ? '900 52px sans-serif' : '900 60px sans-serif';
      
      const headlineWords = currentTheme.headline.split(' ');
      let line1 = '';
      let line2 = '';
      if (headlineWords.length > 3) {
        line1 = headlineWords.slice(0, 3).join(' ');
        line2 = headlineWords.slice(3).join(' ');
      } else {
        line1 = currentTheme.headline;
      }

      ctx.fillText(line1, 60, selectedFormat === 'feed' ? 290 : 330);
      if (line2) {
        ctx.fillStyle = '#8DB63F';
        ctx.fillText(line2, 60, selectedFormat === 'feed' ? 355 : 405);
      }

      // Sub-headline
      ctx.fillStyle = '#E2E8F0';
      ctx.font = '500 24px sans-serif';
      ctx.fillText(currentTheme.subheadline, 60, selectedFormat === 'feed' ? 415 : 475);

      // 7. Value Offer Box
      const boxY = selectedFormat === 'feed' ? 465 : 540;
      const boxHeight = selectedFormat === 'feed' ? 340 : 460;

      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.strokeStyle = 'rgba(141, 182, 63, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(60, boxY, width - 120, boxHeight, 24);
      ctx.fill();
      ctx.stroke();

      // Points Title
      ctx.fillStyle = '#8DB63F';
      ctx.font = 'bold 22px sans-serif';
      ctx.fillText('KEUNGGULAN UTAMA OXN BUILD:', 95, boxY + 50);

      // Points items
      currentTheme.points.forEach((pt, pIdx) => {
        const itemY = boxY + 105 + pIdx * (selectedFormat === 'feed' ? 55 : 75);
        ctx.fillStyle = '#8DB63F';
        ctx.font = 'bold 28px sans-serif';
        ctx.fillText('✓', 95, itemY);

        ctx.fillStyle = '#FFFFFF';
        ctx.font = '600 22px sans-serif';
        ctx.fillText(pt, 135, itemY);
      });

      // 8. Bottom CTA Banner
      const ctaY = selectedFormat === 'feed' ? 840 : 1660;

      ctx.fillStyle = '#8DB63F';
      ctx.beginPath();
      ctx.roundRect(60, ctaY, width - 120, 110, 20);
      ctx.fill();

      ctx.fillStyle = '#1E252B';
      ctx.font = '900 32px sans-serif';
      ctx.fillText(`💬  HUBUNGI WHATSAPP: ${CONTACT_DATA.csPhone}`, 120, ctaY + 68);

      // Footer disclaimer
      ctx.fillStyle = '#94A3B8';
      ctx.font = '500 18px sans-serif';
      ctx.fillText('OXN BUILD • Jasa Bangun & Renovasi Terpercaya Se-Jabodetabek • Garansi Resmi SPK', 140, height - 40);

      // Export canvas to download
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `oxn-build-pamflet-${currentTheme.id}-${selectedFormat}.png`;
      link.href = dataUrl;
      link.click();
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#1E252B] border border-gray-700/80 rounded-3xl w-full max-w-5xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        {/* Modal Top Header */}
        <div className="p-4 sm:p-6 border-b border-gray-700 flex items-center justify-between bg-[#171D22]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#8DB63F]/20 text-[#8DB63F] flex items-center justify-center">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Studio Pamflet & Materi Iklan Meta (FB & IG Ads)
                </h3>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-[#8DB63F] text-[#1E252B] font-extrabold text-[10px] uppercase">
                  Siap Pakai
                </span>
              </div>
              <p className="text-xs text-gray-400">
                Download pamflet resolusi tinggi & salin copywriting iklan siap posting ke Meta Ads Manager, Feed, dan Story.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Tutup Studio Pamflet"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: 2 Columns Layout */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Visual Flyer Preview & Controls (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {/* Format & Theme Selection Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-black/40 p-3 rounded-2xl border border-gray-700/60">
              {/* Format Switcher */}
              <div className="flex items-center gap-1.5 bg-[#252D34] p-1 rounded-xl">
                <button
                  onClick={() => setSelectedFormat('feed')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedFormat === 'feed'
                      ? 'bg-[#8DB63F] text-[#1E252B] shadow-xs'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Square className="w-3.5 h-3.5" />
                  <span>Feed (1:1)</span>
                </button>
                <button
                  onClick={() => setSelectedFormat('story')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedFormat === 'story'
                      ? 'bg-[#8DB63F] text-[#1E252B] shadow-xs'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Story (9:16)</span>
                </button>
              </div>

              {/* Theme Picker */}
              <div className="flex items-center gap-1.5 overflow-x-auto">
                {themes.map((theme, tIdx) => (
                  <button
                    key={theme.id}
                    onClick={() => setSelectedTheme(tIdx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer truncate max-w-[140px] sm:max-w-none ${
                      selectedTheme === tIdx
                        ? 'bg-white text-[#1E252B]'
                        : 'bg-[#252D34] text-gray-400 hover:text-white'
                    }`}
                  >
                    {theme.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Visual Digital Pamphlet Card (Live HTML Render) */}
            <div className="flex justify-center items-center py-2">
              <div
                ref={flyerPreviewRef}
                className={`relative rounded-2xl overflow-hidden border-2 border-[#8DB63F]/50 shadow-2xl w-full max-w-[420px] transition-all duration-300 flex flex-col justify-between ${
                  selectedFormat === 'feed' ? 'aspect-square p-5 sm:p-6' : 'aspect-[9/16] p-6 sm:p-7'
                }`}
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.98)), url(${currentTheme.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Top Bar on Flyer */}
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/15">
                    <div>
                      <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                        OXN BUILD
                      </span>
                      <div className="text-[10px] sm:text-xs font-bold text-[#8DB63F] uppercase tracking-wider">
                        Build Better, Live Better
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2 py-0.5 rounded-md bg-[#8DB63F] text-[#1E252B] font-extrabold text-[10px]">
                        CS 24 JAM
                      </span>
                      <div className="text-[11px] font-bold text-white mt-0.5">
                        {CONTACT_DATA.csPhone}
                      </div>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="mt-3.5 inline-block px-3 py-1 rounded-full bg-[#8DB63F] text-[#1E252B] font-black text-[10px] sm:text-xs tracking-wider uppercase">
                    ★ {currentTheme.badge}
                  </div>

                  {/* Headlines */}
                  <h4 className="mt-2.5 text-lg sm:text-xl font-black text-white leading-tight">
                    {currentTheme.headline}
                  </h4>
                  <p className="mt-1 text-xs text-gray-300 leading-snug">
                    {currentTheme.subheadline}
                  </p>
                </div>

                {/* Center Points */}
                <div className="my-3 p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/20">
                  <div className="text-[11px] font-bold text-[#8DB63F] uppercase tracking-wider mb-2">
                    Keunggulan Nyata:
                  </div>
                  <div className="space-y-1.5 text-xs text-white">
                    {currentTheme.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#8DB63F] shrink-0 mt-0.5" />
                        <span className="leading-tight text-[11px] sm:text-xs">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA on Flyer */}
                <div>
                  <div className="p-2.5 sm:p-3 rounded-xl bg-[#8DB63F] text-[#1E252B] text-center font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg">
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp: {CONTACT_DATA.csPhone}</span>
                  </div>
                  <div className="text-center text-[10px] text-gray-400 mt-2">
                    Kami Membangun Kepercayaan Anda • Garansi Resmi SPK
                  </div>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={handleDownloadPamphlet}
              disabled={isGenerating}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#8DB63F] hover:bg-[#7CA233] text-[#1E252B] font-extrabold text-sm shadow-lg transition-all active:scale-[0.98] cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{isGenerating ? 'Menyiapkan Gambar...' : `Download Pamflet PNG (${selectedFormat.toUpperCase()})`}</span>
            </button>
          </div>

          {/* Right Column: Meta Ads Copywriting Kit (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="bg-[#171D22] p-4 sm:p-5 rounded-2xl border border-gray-700/80">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Sparkles className="w-4 h-4 text-[#8DB63F]" />
                  <span>Copywriting Iklan Meta (FB & IG)</span>
                </div>
                <button
                  onClick={() => handleCopyText(currentTheme.adCopy.primaryText, 'all-copy')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
                >
                  {copiedSection === 'all-copy' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#8DB63F]" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Semua Teks</span>
                    </>
                  )}
                </button>
              </div>

              {/* Headline Field */}
              <div className="mb-4">
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>Judul Iklan (Headline FB/IG):</span>
                  <button
                    onClick={() => handleCopyText(currentTheme.adCopy.headline, 'headline')}
                    className="text-[#8DB63F] hover:underline cursor-pointer text-[10px]"
                  >
                    {copiedSection === 'headline' ? 'Tersalin' : 'Salin'}
                  </button>
                </div>
                <div className="p-2.5 rounded-xl bg-black/40 text-xs text-white border border-gray-700 font-medium">
                  {currentTheme.adCopy.headline}
                </div>
              </div>

              {/* Primary Text Field */}
              <div className="mb-4">
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>Teks Utama (Caption Iklan):</span>
                  <button
                    onClick={() => handleCopyText(currentTheme.adCopy.primaryText, 'caption')}
                    className="text-[#8DB63F] hover:underline cursor-pointer text-[10px]"
                  >
                    {copiedSection === 'caption' ? 'Tersalin' : 'Salin'}
                  </button>
                </div>
                <div className="p-3 rounded-xl bg-black/40 text-xs text-gray-200 border border-gray-700 font-mono whitespace-pre-line leading-relaxed max-h-56 overflow-y-auto">
                  {currentTheme.adCopy.primaryText}
                </div>
              </div>

              {/* Target Audience Recommendation */}
              <div className="p-3 rounded-xl bg-[#252D34] border border-gray-600/50">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#8DB63F] mb-1">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Rekomendasi Target Audiens Meta Ads:</span>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  {currentTheme.adCopy.suggestedInterest}
                </p>
              </div>
            </div>

            {/* Quick Share to WhatsApp / Direct Preview */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#8DB63F]/15 to-transparent border border-[#8DB63F]/30 flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-white">Butuh bantuan setup iklan Meta?</div>
                <div className="text-[11px] text-gray-400 mt-0.5">
                  Tim CS 24 Jam siap membantu kirim materi dan foto proyek tambahan.
                </div>
              </div>
              <a
                href={getWaUrl('Halo CS OXN BUILD, saya ingin materi foto proyek dan pamflet promosi untuk pasang iklan Meta / WhatsApp status.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-[#8DB63F] hover:bg-[#7CA233] text-[#1E252B] font-bold text-xs shrink-0 flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Chat CS</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
