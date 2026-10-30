import React, { useState } from 'react';
import { getWaUrl, BEFORE_AFTER_PROJECTS, CONSTRUCTION_DESIGNS } from '../data/landingData';
import { BeforeAfterProject, DesignShowcaseItem } from '../types';
import {
  Sparkles,
  CheckCircle2,
  Eye,
  ArrowRight,
  ChevronRight,
  MessageSquare,
  Compass,
  Layers,
  MapPin,
  Calendar,
  Check
} from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(BEFORE_AFTER_PROJECTS[0].id);
  const [currentStage, setCurrentStage] = useState<'before' | 'process' | 'after'>('after');
  const [activeModalDesign, setActiveModalDesign] = useState<DesignShowcaseItem | null>(null);

  const selectedProject = BEFORE_AFTER_PROJECTS.find(p => p.id === selectedProjectId) || BEFORE_AFTER_PROJECTS[0];

  const consultWaUrl = getWaUrl(
    `Halo CS OXN BUILD, saya tertarik melihat portofolio proyek "${selectedProject.title}". Mohon info estimasi biaya untuk proyek serupa dan jadwal survey gratis.`
  );

  const getStageImage = () => {
    switch (currentStage) {
      case 'before':
        return selectedProject.beforeImage;
      case 'process':
        return selectedProject.processImage;
      case 'after':
        return selectedProject.afterImage;
      default:
        return selectedProject.afterImage;
    }
  };

  const getStageTitle = () => {
    switch (currentStage) {
      case 'before':
        return 'Kondisi Awal (Sebelum Renovasi)';
      case 'process':
        return 'Proses Pengerjaan di Lapangan';
      case 'after':
        return 'Hasil Jadi Selesai 100%';
      default:
        return 'Hasil Jadi';
    }
  };

  const getStageBadgeColor = () => {
    switch (currentStage) {
      case 'before':
        return 'bg-amber-500 text-white';
      case 'process':
        return 'bg-blue-600 text-white';
      case 'after':
        return 'bg-[#8DB63F] text-white';
    }
  };

  return (
    <section id="portofolio" className="py-20 sm:py-28 bg-[#F1F3F5]/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Exact Wireframe Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8DB63F]/15 border border-[#8DB63F]/30 text-xs font-extrabold text-[#6D8F2A] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dokumentasi Nyata Lapangan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E252B] tracking-tight uppercase">
            PORTOFOLIO [ FOTO PROYEK ]
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">
            Transparansi hasil kerja OXN BUILD dari kondisi awal, tahap proses konstruksi, hingga hasil akhir yang kokoh dan estetik.
          </p>
        </div>

        {/* ======================================================== */}
        {/* FEATURED: BEFORE → PROSES → AFTER SHOWCASE               */}
        {/* ======================================================== */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200/90 shadow-xl mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gray-100 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#6D8F2A] bg-[#8DB63F]/10 px-3 py-1 rounded-full mb-2">
                <span>Transformasi Nyata</span>
                <span>•</span>
                <span>Before → Proses → After</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E252B]">
                {selectedProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1.5 mt-1">
                <MapPin className="w-3.5 h-3.5 text-[#8DB63F]" />
                <span>{selectedProject.location}</span>
                <span className="text-gray-300">|</span>
                <span className="font-semibold text-gray-700">{selectedProject.category}</span>
              </p>
            </div>

            {/* Project Selector Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {BEFORE_AFTER_PROJECTS.map((proj) => {
                const isActive = proj.id === selectedProjectId;
                return (
                  <button
                    key={proj.id}
                    onClick={() => {
                      setSelectedProjectId(proj.id);
                      setCurrentStage('after');
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#1E252B] text-white shadow-sm'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {proj.category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive 3-Stage Viewer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Main Stage Photo Display */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              {/* Stepper Buttons: Before -> Proses -> After */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 p-1.5 bg-[#F8F9FA] rounded-2xl border border-gray-200">
                <button
                  onClick={() => setCurrentStage('before')}
                  className={`py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5 cursor-pointer ${
                    currentStage === 'before'
                      ? 'bg-amber-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-black hover:bg-white/80'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-white sm:inline-block hidden" />
                  <span>1. BEFORE</span>
                  <span className="text-[10px] opacity-80 hidden sm:inline">(Awal)</span>
                </button>

                <button
                  onClick={() => setCurrentStage('process')}
                  className={`py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5 cursor-pointer ${
                    currentStage === 'process'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-black hover:bg-white/80'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-white sm:inline-block hidden" />
                  <span>2. PROSES</span>
                  <span className="text-[10px] opacity-80 hidden sm:inline">(Pengerjaan)</span>
                </button>

                <button
                  onClick={() => setCurrentStage('after')}
                  className={`py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5 cursor-pointer ${
                    currentStage === 'after'
                      ? 'bg-[#8DB63F] text-white shadow-md ring-2 ring-[#8DB63F]/30'
                      : 'text-gray-600 hover:text-black hover:bg-white/80'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-white sm:inline-block hidden" />
                  <span>3. AFTER</span>
                  <span className="text-[10px] opacity-80 hidden sm:inline">(Hasil Jadi)</span>
                </button>
              </div>

              {/* Main Photo Card */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-gray-200 group bg-gray-900">
                <img
                  src={getStageImage()}
                  alt={`${selectedProject.title} - ${getStageTitle()}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className={`text-xs font-black uppercase px-3 py-1 rounded-lg shadow-sm ${getStageBadgeColor()}`}>
                    {currentStage.toUpperCase()}
                  </span>
                  <span className="text-xs font-bold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20">
                    {getStageTitle()}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-300">Proyek: {selectedProject.category}</div>
                    <div className="text-sm sm:text-base font-bold text-white">{selectedProject.title}</div>
                  </div>
                  <div className="text-xs font-semibold text-[#8DB63F] bg-black/60 px-2.5 py-1 rounded-lg border border-white/10 hidden sm:block">
                    Klik tab di atas untuk beralih fase
                  </div>
                </div>
              </div>

              {/* 3 Thumbnails Side-by-Side (Quick Click) */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setCurrentStage('before')}
                  className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    currentStage === 'before' ? 'border-amber-500 shadow-md scale-[1.02]' : 'border-gray-200 opacity-75 hover:opacity-100'
                  }`}
                >
                  <img src={selectedProject.beforeImage} alt="Before" className="w-full h-full object-cover" />
                  <span className="absolute bottom-1 left-1 bg-black/75 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded">
                    Before
                  </span>
                </button>

                <button
                  onClick={() => setCurrentStage('process')}
                  className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    currentStage === 'process' ? 'border-blue-600 shadow-md scale-[1.02]' : 'border-gray-200 opacity-75 hover:opacity-100'
                  }`}
                >
                  <img src={selectedProject.processImage} alt="Process" className="w-full h-full object-cover" />
                  <span className="absolute bottom-1 left-1 bg-black/75 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded">
                    Proses
                  </span>
                </button>

                <button
                  onClick={() => setCurrentStage('after')}
                  className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    currentStage === 'after' ? 'border-[#8DB63F] shadow-md scale-[1.02]' : 'border-gray-200 opacity-75 hover:opacity-100'
                  }`}
                >
                  <img src={selectedProject.afterImage} alt="After" className="w-full h-full object-cover" />
                  <span className="absolute bottom-1 left-1 bg-[#8DB63F] text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded">
                    After ✓
                  </span>
                </button>
              </div>
            </div>

            {/* Right: Project Details & Scope */}
            <div className="lg:col-span-4 bg-[#F8F9FA] rounded-2xl p-6 border border-gray-200/80 flex flex-col justify-between h-full">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#6D8F2A]">
                  Rincian Transformasi
                </span>
                <h4 className="text-lg font-extrabold text-[#1E252B] mt-1 mb-3">
                  Deskripsi Pengerjaan:
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Scope items */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    Cakupan Pekerjaan:
                  </div>
                  {selectedProject.scope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                      <span className="w-4 h-4 rounded-full bg-[#8DB63F]/20 text-[#6D8F2A] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                        ✓
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation CTA Card */}
              <div className="pt-5 border-t border-gray-200">
                <div className="text-xs font-bold text-gray-800 mb-1">
                  Punya rumah dengan kondisi serupa?
                </div>
                <div className="text-[11px] text-gray-500 mb-3">
                  Dapatkan analisa perbaikan & estimasi biaya gratis dari tim kami.
                </div>
                <a
                  href={consultWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#8DB63F] hover:bg-[#7CA233] text-white text-xs font-extrabold shadow-md transition-all active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Tanya Proyek Ini via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid of Additional Project Inspirations */}
        <div className="pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E252B]">
                Galeri Konsep & Desain Tambahan
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                Pilihan konsep arsitektur, interior presisi, dan kekuatan struktur.
              </p>
            </div>
            <a
              href={getWaUrl('Halo CS OXN BUILD, saya ingin melihat katalog portofolio lengkap dan konsultasi rencana proyek.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6D8F2A] hover:text-[#5B7922] transition-colors"
            >
              <span>Minta Katalog PDF Lengkap via WA</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONSTRUCTION_DESIGNS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#1E252B]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-sm font-bold text-white line-clamp-1">{item.title}</div>
                    <div className="text-[11px] text-[#8DB63F] font-semibold">{item.subtitle}</div>
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-1">
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <a
                    href={getWaUrl(`Halo CS OXN BUILD, saya tertarik dengan portofolio "${item.title}". Mohon info estimasi biaya.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between text-xs font-bold text-[#1E252B] hover:text-[#8DB63F] pt-3 border-t border-gray-100 transition-colors"
                  >
                    <span>Konsultasi Konsep Ini</span>
                    <ChevronRight className="w-4 h-4 text-[#8DB63F]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
