import React from 'react';
import { SERVICES_DATA, getWaUrl } from '../data/landingData';
import { Check, MessageSquare, ArrowRight, Sparkles, Hammer, Building2, Wrench, Home, Layers } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'construction':
        return <Building2 className="w-5 h-5 text-[#8DB63F]" />;
      case 'renovation':
        return <Home className="w-5 h-5 text-[#8DB63F]" />;
      case 'maintenance':
        return <Wrench className="w-5 h-5 text-[#8DB63F]" />;
      case 'supporting':
        return <Hammer className="w-5 h-5 text-[#8DB63F]" />;
      default:
        return <Layers className="w-5 h-5 text-[#8DB63F]" />;
    }
  };

  const getEmoji = (category: string) => {
    switch (category) {
      case 'construction':
        return '🏗️';
      case 'renovation':
        return '🏠';
      case 'maintenance':
        return '🔨';
      case 'supporting':
        return '🛠️';
      default:
        return '✨';
    }
  };

  return (
    <section id="layanan" className="py-20 sm:py-28 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8DB63F]/10 border border-[#8DB63F]/20 text-xs font-bold text-[#6D8F2A] tracking-wider uppercase mb-3">
            <span>Katalog Pekerjaan Terpercaya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E252B] tracking-tight uppercase">
            LAYANAN KAMI
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Dari pembangunan rumah baru dari nol, peremajaan bangunan, perbaikan tuntas, hingga pekerjaan pendukung interior dan eksterior.
          </p>
        </div>

        {/* Services Cards Grid (4 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className={`rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-xl ${
                service.popular
                  ? 'border-[#8DB63F] shadow-md relative ring-2 ring-[#8DB63F]/20'
                  : 'border-gray-200/80 shadow-xs hover:border-gray-300'
              }`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 z-10 bg-[#8DB63F] text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Favorit Pilihan</span>
                </div>
              )}

              {/* Service Cover Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-white">
                  <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-base">
                    <span>{getEmoji(service.category)}</span>
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase text-white">
                    {service.category === 'construction'
                      ? 'Konstruksi Baru'
                      : service.category === 'renovation'
                      ? 'Renovasi Rumah'
                      : service.category === 'maintenance'
                      ? 'Perbaikan Praktis'
                      : 'Pekerjaan Pendukung'}
                  </span>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{getEmoji(service.category)}</span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#1E252B] tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-1 text-[11px] font-bold text-[#6E902B] uppercase tracking-wide">
                    {service.tagline}
                  </p>
                  <p className="mt-2.5 text-xs text-gray-600 leading-relaxed line-clamp-3 hover:line-clamp-none transition-all">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2.5">
                      Cakupan Pekerjaan:
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="w-3.5 h-3.5 rounded-full bg-[#8DB63F]/15 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-[#6E902B]" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Service Card CTA Buttons */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col gap-2">
                  <a
                    href={getWaUrl(
                      `Halo CS OXN BUILD, saya tertarik berkonsultasi mengenai layanan "${service.title}". Mohon informasi konsultasi & jadwal survey lokasi.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold bg-[#8DB63F] hover:bg-[#7CA233] text-white transition-all shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Konsultasi WA CS</span>
                  </a>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                  >
                    <span>Minta Survey Lokasi</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value Guarantee Banner: CS 24 Jam & Harga Ramah Dompet */}
        <div className="mt-14 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#8DB63F]/15 flex items-center justify-center text-[#8DB63F] shrink-0">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#8DB63F]/10 text-[11px] font-bold text-[#6D8F2A] uppercase tracking-wider mb-1">
                Kami Membangun Kepercayaan Anda
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1E252B]">
                RAB Fleksibel, Terukur & Transparan Sesuai Budget
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-gray-600 max-w-2xl leading-relaxed">
                Rencana bangun dan renovasi disesuaikan dengan anggaran Anda dengan mutu pengerjaan prima bergaransi.
              </p>
            </div>
          </div>

          <a
            href={getWaUrl(
              'Halo CS OXN BUILD, saya ingin konsultasi estimasi biaya sesuai budget yang ramah di kantong dan info CS 24 jam.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#8DB63F] hover:bg-[#7CA233] text-white shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Konsultasi CS 24 Jam (Gratis)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
