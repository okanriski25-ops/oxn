import React from 'react';
import { ShieldCheck, CheckCircle2, Clock, FileCheck2, AlertCircle, Wrench, ArrowRight, MessageSquare } from 'lucide-react';
import { CONTACT_DATA, getWaUrl } from '../data/landingData';

interface GuaranteeSectionProps {
  onOpenConsultationModal?: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onOpenConsultationModal }) => {
  const guaranteeItems = [
    {
      period: '12 BULAN',
      title: 'Garansi Struktur Utama',
      subtitle: 'Fondasi, Dak Beton & Kolom Balok',
      desc: 'Jaminan kekuatan struktur bangunan terhadap retak atau pergeseran. Jika terjadi kendala struktural, tim kami menuntaskan perbaikan menyeluruh tanpa biaya tambahan.',
      coverage: [
        'Fondasi tapak / cakar ayam',
        'Dak beton lantai 2 & 3',
        'Kolom penopang & balok gantung',
        'Struktur rangka atap baja ringan'
      ],
      icon: ShieldCheck,
      badgeColor: 'bg-emerald-500 text-white',
    },
    {
      period: '6 BULAN',
      title: 'Garansi Anti Bocor & Waterproofing',
      subtitle: 'Atap, Talang Air & Dinding Rembes',
      desc: 'Perlindungan maksimal dari kebocoran saat musim hujan. Pengerjaan waterproofing berlapis dengan uji tes genangan air sebelum serah terima pekerjaan.',
      coverage: [
        'Dak cor lantai jemuran & talang air',
        'Pergantian & pemasangan genteng',
        'Rembesan dinding samping & teras',
        'Pertemuan atap & dinding (flashing)'
      ],
      icon: Wrench,
      badgeColor: 'bg-[#8DB63F] text-white',
    },
    {
      period: '3 BULAN',
      title: 'Garansi Finishing & Instalasi',
      subtitle: 'Cat, Keramik/Granit & Sanitair',
      desc: 'Menjamin kerapihan estetika interior dan eksterior. Retensi perbaikan cepat untuk cat pudar/mengelupas, lantai granit kopong, dan instalasi pipa/listrik.',
      coverage: [
        'Cat dinding interior & eksterior',
        'Pemasangan keramik, granit & vinyl',
        'Kran air, shower & pipa sanitair',
        'Stop kontak, saklar & panel MCB'
      ],
      icon: CheckCircle2,
      badgeColor: 'bg-[#1E252B] text-white',
    },
    {
      period: 'RESMI',
      title: 'Kepastian Hukum SPK (Kontrak Resmi)',
      subtitle: 'Biaya Terkunci Tanpa Biaya Siluman',
      desc: 'Setiap proyek dilindungi Surat Perjanjian Kerja (SPK) bermaterai. Rincian anggaran biaya (RAB) mengikat, jadwal kerja on-time, dan sistem termin sesuai progres nyata.',
      coverage: [
        'RAB terperinci & harga terkunci',
        'Sistem termin pembayaran aman',
        'Jadwal waktu pengerjaan terikat',
        'Masa retensi pemeliharaan tertulis'
      ],
      icon: FileCheck2,
      badgeColor: 'bg-blue-600 text-white',
    },
  ];

  const waGuaranteeUrl = getWaUrl(
    'Halo CS OXN BUILD, saya ingin informasi lebih lanjut mengenai klausul Garansi Resmi dan SPK proyek renovasi / bangun rumah saya.'
  );

  return (
    <section id="garansi" className="py-16 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8DB63F]/10 border border-[#8DB63F]/25 text-xs font-bold text-[#6D8F2A] uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-[#8DB63F]" />
            <span>Transparansi Garansi Resmi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E252B] tracking-tight">
            Perlindungan Mutu Tertulis & Bebas Rasa Cemas
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">
            <strong className="text-[#1E252B]">Kami membangun kepercayaan Anda</strong> bukan sekadar janji lisan, melainkan jaminan garansi nyata yang tertuang resmi dalam Surat Perjanjian Kerja (SPK).
          </p>
        </div>

        {/* 4 Guarantee Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guaranteeItems.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div
                key={index}
                className="bg-[#F8F9FA] rounded-2xl p-6 border border-gray-200/80 hover:border-[#8DB63F] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-lg text-xs font-extrabold tracking-wider ${item.badgeColor} shadow-xs`}>
                      {item.period}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#8DB63F] group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-[#1E252B] group-hover:text-[#6D8F2A] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-gray-500 mt-1 mb-3">
                    {item.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  {/* Coverage Items List */}
                  <div className="pt-3 border-t border-gray-200/70 space-y-2">
                    <div className="text-[11px] font-bold text-gray-700 uppercase tracking-wider">
                      Cakupan Jaminan:
                    </div>
                    {item.coverage.map((cov, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8DB63F] shrink-0 mt-0.5" />
                        <span>{cov}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Assurance */}
                <div className="mt-5 pt-3 border-t border-gray-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Bebas Biaya Pengerjaan Ulang</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Trust Banner */}
        <div className="mt-10 bg-gradient-to-r from-[#1E252B] to-[#2E3A44] rounded-2xl p-6 sm:p-8 text-white shadow-md flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8DB63F]/20 text-xs font-bold text-[#8DB63F] border border-[#8DB63F]/30">
              <Clock className="w-3.5 h-3.5" />
              <span>Respon Cepat Layanan Garansi 24 Jam</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Klaim Garansi Mudah & Ditangani Langsung Mandor Ahli
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
              Jika ada perbaikan selama masa retensi, cukup laporkan ke CS WhatsApp kami. Tim teknis akan dijadwalkan datang memeriksa dan memperbaiki tanpa berbelit-belit.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <a
              href={waGuaranteeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#8DB63F] hover:bg-[#7CA233] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Tanya Ketentuan Garansi</span>
            </a>
            {onOpenConsultationModal && (
              <button
                onClick={onOpenConsultationModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm transition-all border border-white/20 active:scale-[0.98]"
              >
                <span>Mulai Survey Lokasi</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
