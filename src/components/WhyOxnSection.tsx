import React from 'react';
import { WHY_US_POINTS, getWaUrl } from '../data/landingData';
import { Check, MessageSquare, ShieldCheck, FileCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const WhyOxnSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-[#8DB63F]" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-[#8DB63F]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-[#8DB63F]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#8DB63F]" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#8DB63F]" />;
    }
  };

  const consultWaUrl = getWaUrl(
    'Halo CS OXN BUILD, saya ingin berkonsultasi mengenai rencana renovasi / bangun baru.'
  );

  return (
    <section id="mengapa-kami" className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Exact Wireframe Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8DB63F]/10 border border-[#8DB63F]/20 text-xs font-extrabold text-[#6D8F2A] uppercase tracking-wider mb-3">
            <span>Nilai & Prinsip Kami</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E252B] tracking-tight uppercase">
            MENGAPA OXN BUILD?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Kami membangun kepercayaan Anda dengan integritas, transparansi, dan hasil pengerjaan yang rapi sesuai kebutuhan.
          </p>
        </div>

        {/* 4 Core Pillars Grid from Wireframe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {WHY_US_POINTS.map((item, idx) => (
            <div
              key={item.title}
              className="bg-[#F8F9FA] rounded-3xl p-7 border border-gray-200/80 hover:border-[#8DB63F] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon + Checkmark */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#8DB63F]/15 flex items-center justify-center group-hover:bg-[#8DB63F] group-hover:text-white transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-black text-[#6D8F2A] bg-[#8DB63F]/15 px-2.5 py-1 rounded-full">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Poin #{idx + 1}</span>
                  </span>
                </div>

                {/* Title with Checkmark style */}
                <h3 className="text-lg sm:text-xl font-extrabold text-[#1E252B] mb-2.5 flex items-center gap-2">
                  <span className="text-[#8DB63F] font-black">✓</span>
                  <span>{item.title}</span>
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center text-xs font-bold text-[#6D8F2A]">
                <span>Prinsip Kerja OXN BUILD</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Consultation Ribbon */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1E252B] to-[#2B353E] text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
          <div className="text-center sm:text-left">
            <div className="text-base sm:text-lg font-extrabold text-white">
              Ingin mendiskusikan kebutuhan hunian Anda?
            </div>
            <div className="text-xs sm:text-sm text-gray-300 mt-0.5">
              Konsultasi ramah dan survey lokasi tanpa dipungut biaya apa pun.
            </div>
          </div>
          <a
            href={consultWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#8DB63F] hover:bg-[#7CA233] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-[0.98] whitespace-nowrap cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Konsultasi Bebas Sekarang</span>
          </a>
        </div>
      </div>
    </section>
  );
};
