import React from 'react';
import { WORKFLOW_6_STEPS, getWaUrl } from '../data/landingData';
import { ArrowRight, MessageSquare, PhoneCall, ShieldCheck } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const stepWaUrl = getWaUrl(
    'Halo CS OXN BUILD, saya ingin mulai dari Langkah 1: Konsultasi mengenai rencana bangun / renovasi properti saya.'
  );

  return (
    <section id="cara-kerja" className="py-20 sm:py-28 bg-[#1E252B] text-white relative overflow-hidden">
      {/* Subtle architectural background line graphics */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8DB63F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8DB63F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Exact Wireframe Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-[#8DB63F] uppercase tracking-wider mb-3">
            <span>Alur Pengerjaan Terstruktur</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase">
            CARA KERJA
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300">
            6 langkah praktis dan transparan dari konsultasi awal hingga pengerjaan selesai rapi dan bergaransi.
          </p>
        </div>

        {/* 6 Steps Grid from Wireframe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-14">
          {WORKFLOW_6_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="bg-[#29323A] rounded-3xl p-7 border border-gray-700/60 flex flex-col justify-between relative group hover:border-[#8DB63F] transition-all hover:bg-[#2F3942]"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#8DB63F]/20 text-[#8DB63F] border border-[#8DB63F]/40 flex items-center justify-center font-black text-xl font-mono">
                    {item.step}
                  </div>
                  <span className="text-xs uppercase font-extrabold text-gray-400 bg-black/30 px-3 py-1 rounded-full">
                    Langkah ke-{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2 leading-snug">
                  {item.step}. {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-700/50 flex items-center justify-between text-xs font-bold text-[#8DB63F]">
                <span>Tahap {idx + 1} of 6</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Direct CTA Inside Cara Kerja */}
        <div className="bg-[#222930] rounded-3xl p-6 sm:p-8 border border-gray-700/80 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-center sm:text-left">
            <div className="text-lg font-extrabold text-white">
              Siap memulai dari Langkah 1?
            </div>
            <div className="text-xs sm:text-sm text-gray-400 mt-0.5">
              Konsultasi via WhatsApp & jadwalkan survey lokasi gratis se-Jabodetabek.
            </div>
          </div>

          <a
            href={stepWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#8DB63F] hover:bg-[#7CA233] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all active:scale-[0.98] whitespace-nowrap cursor-pointer uppercase tracking-wider"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Mulai Konsultasi (Langkah 1)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
