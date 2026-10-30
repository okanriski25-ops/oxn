import React, { useState } from 'react';
import { MapPin, CheckCircle2, Car, Calendar, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { CONTACT_DATA, getWaUrl, openWhatsApp } from '../data/landingData';

interface ServiceAreaSectionProps {
  onOpenConsultationModal?: (service?: string) => void;
}

export const ServiceAreaSection: React.FC<ServiceAreaSectionProps> = ({ onOpenConsultationModal }) => {
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);

  const serviceAreas = [
    {
      city: 'DKI Jakarta',
      tagline: 'Seluruh Wilayah Ibu Kota',
      districts: [
        'Jakarta Selatan (Kebayoran Baru, Cilandak, Jagakarsa, Tebet, Pasar Minggu)',
        'Jakarta Barat (Puri Indah, Kebon Jeruk, Kembangan, Meruya, Cengkareng)',
        'Jakarta Timur (Rawamangun, Duren Sawit, Pondok Kelapa, Ciracas, Cakung)',
        'Jakarta Pusat (Menteng, Kemayoran, Cempaka Putih, Tanah Abang)',
        'Jakarta Utara (Kelapa Gading, Sunter, Pluit, Pantai Indah Kapuk)'
      ],
      highlight: 'Survey gratis H+1 setelah reservasi',
      activeProjects: '15+ Proyek Aktif & Selesai'
    },
    {
      city: 'Tangerang & Tangsel',
      tagline: 'Kawasan Residensial & Mandiri',
      districts: [
        'BSD City & Serpong',
        'Bintaro Jaya & Pondok Aren',
        'Alam Sutera & Gading Serpong',
        'Ciputat, Pamulang & Cinere Raya',
        'Karawaci & Kota Tangerang'
      ],
      highlight: 'Akses cepat tim estimator harian',
      activeProjects: '20+ Proyek Aktif & Selesai'
    },
    {
      city: 'Depok & Sekitarnya',
      tagline: 'Hunian Keluarga & Perluasan Lantai',
      districts: [
        'Margonda & Beji',
        'Cinere, Limo & Gandul',
        'Sawangan & Bojongsari',
        'Cimanggis, Tapos & Sukmajaya',
        'Kawasan Cibubur & sekitarnya'
      ],
      highlight: 'Spesialis dak lantai 2 & renovasi total',
      activeProjects: '12+ Proyek Aktif & Selesai'
    },
    {
      city: 'Bekasi & Cikarang',
      tagline: 'Area Perumahan & Modern Cluster',
      districts: [
        'Bekasi Selatan (Grand Galaxy & Pekayon)',
        'Bekasi Barat & Summarecon Bekasi',
        'Jatiasih & Pondok Gede',
        'Harapan Indah & Tarumajaya',
        'Cikarang & sekitarnya'
      ],
      highlight: 'RAB efisien & material berkualitas',
      activeProjects: '14+ Proyek Aktif & Selesai'
    },
    {
      city: 'Bogor & Sentul',
      tagline: 'Kawasan Asri & Villa Hunian',
      districts: [
        'Sentul City & Babakan Madang',
        'Bogor Kota (Pajajaran, Baranangsiang)',
        'Cibinong & Bojonggede',
        'Gunung Putri & Cileungsi',
        'Parung & sekitarnya'
      ],
      highlight: 'Desain tropis modern & struktur lereng kokoh',
      activeProjects: '8+ Proyek Aktif & Selesai'
    },
  ];

  const handleAreaWhatsApp = (areaName: string) => {
    const text = `Halo CS OXN BUILD, saya ingin menjadwalkan survey lokasi gratis untuk proyek renovasi / bangun rumah di area ${areaName}. Mohon info ketersediaan jadwal tim.`;
    openWhatsApp(text);
  };

  return (
    <section id="area-layanan" className="py-16 sm:py-20 bg-[#F8F9FA] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8DB63F]/10 border border-[#8DB63F]/25 text-xs font-extrabold text-[#6D8F2A] uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4 text-[#8DB63F]" />
            <span>Wilayah Operasional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E252B] tracking-tight uppercase">
            AREA LAYANAN
          </h2>
          <div className="mt-2 text-lg sm:text-xl font-bold text-[#6D8F2A] flex items-center justify-center flex-wrap gap-2">
            <span>Jakarta</span>
            <span className="text-gray-300">•</span>
            <span>Tangerang</span>
            <span className="text-gray-300">•</span>
            <span>Bekasi</span>
            <span className="text-gray-300">•</span>
            <span>Depok</span>
            <span className="text-xs font-semibold text-gray-500 bg-gray-200/80 px-2 py-0.5 rounded-md">[dan sekitarnya]</span>
          </div>
          <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">
            Tim estimator dan mandor OXN BUILD siap hadir langsung ke lokasi hunian Anda di seluruh kawasan Jabodetabek. <strong className="text-[#1E252B]">Survey lokasi dan konsultasi awal 100% Bebas Biaya!</strong>
          </p>
        </div>

        {/* 3 Quick Value Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#8DB63F]/15 text-[#8DB63F] flex items-center justify-center shrink-0">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-900">Survey Langsung ke Rumah</div>
              <div className="text-[11px] text-gray-500">Estimator berpengalaman cek fisik & struktur</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#8DB63F]/15 text-[#8DB63F] flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-900">Jadwal Fleksibel Setiap Hari</div>
              <div className="text-[11px] text-gray-500">Termasuk hari Sabtu & Minggu (Weekend)</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#8DB63F]/15 text-[#8DB63F] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-900">100% Gratis Tanpa Komitmen</div>
              <div className="text-[11px] text-gray-500">Dapatkan rincian estimasi RAB awal</div>
            </div>
          </div>
        </div>

        {/* City Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {serviceAreas.map((area, index) => {
            const isActive = selectedCityIndex === index;
            return (
              <button
                key={area.city}
                onClick={() => setSelectedCityIndex(index)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#1E252B] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isActive ? 'text-[#8DB63F]' : 'text-gray-400'}`} />
                <span>{area.city}</span>
              </button>
            );
          })}
        </div>

        {/* Selected City Detail Card */}
        {(() => {
          const current = serviceAreas[selectedCityIndex];
          return (
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200 shadow-sm max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#8DB63F] bg-[#8DB63F]/15 px-2.5 py-0.5 rounded-md">
                      Area Terlayani
                    </span>
                    <span className="text-xs font-semibold text-gray-500">
                      {current.activeProjects}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E252B] mt-1">
                    {current.city}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                    {current.tagline} • <span className="text-emerald-700 font-semibold">{current.highlight}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => handleAreaWhatsApp(current.city)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#8DB63F] hover:bg-[#7CA233] text-white text-xs sm:text-sm font-bold shadow-xs transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Survey di {current.city}</span>
                  </button>
                </div>
              </div>

              {/* District List Grid */}
              <div className="mt-6">
                <div className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-4">
                  Kecamatan & Kawasan yang Tercakup:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {current.districts.map((district, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-3.5 rounded-xl bg-[#F8F9FA] hover:bg-[#F1F5F9] border border-gray-100 flex items-start gap-3 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#8DB63F] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                        {district}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Quick Help Banner */}
              <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#F1F5F9] to-white border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <div className="text-xs font-bold text-gray-900">
                    Lokasi rumah Anda berada di perbatasan atau kawasan khusus?
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    Jangan ragu bertanya, CS 24 Jam kami segera mengonfirmasi jadwal estimator terdekat.
                  </div>
                </div>
                <button
                  onClick={() => {
                    if (onOpenConsultationModal) {
                      onOpenConsultationModal(`Survey Wilayah ${current.city}`);
                    } else {
                      handleAreaWhatsApp(current.city);
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6D8F2A] hover:text-[#5B7922] cursor-pointer shrink-0"
                >
                  <span>Atur Jadwal Survey Online</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
