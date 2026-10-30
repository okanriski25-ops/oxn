import React, { useState } from 'react';
import { CONTACT_DATA, getWaUrl } from '../data/landingData';
import { MessageSquare, Phone, Copy, Check, ShieldCheck, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ContactCtaSectionProps {
  onOpenConsultationModal: () => void;
}

export const ContactCtaSection: React.FC<ContactCtaSectionProps> = ({ onOpenConsultationModal }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const csWaUrl = getWaUrl(
    'Halo CS OXN BUILD, saya ingin berkonsultasi mengenai rencana proyek pembangunan/renovasi hunian.'
  );

  return (
    <section id="kontak" className="py-20 sm:py-28 bg-[#222930] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#8DB63F]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Exact Wireframe */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-[#8DB63F] uppercase tracking-wider mb-3">
            <span>Mulai Langkah Pertama Hunian Anda</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase">
            SIAP MEMULAI PROYEK?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            Diskusikan kebutuhan bangun, renovasi, atau perbaikan rumah Anda bersama tim ahli OXN BUILD. Kami siap memberikan solusi presisi dan penawaran terbaik.
          </p>
        </div>

        {/* Single Dedicated CS Contact Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-[#2A343D] rounded-3xl p-6 sm:p-8 border border-gray-700/80 shadow-2xl hover:border-[#8DB63F] transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-extrabold uppercase tracking-wider bg-[#8DB63F]/20 text-[#8DB63F] px-3.5 py-1.5 rounded-full border border-[#8DB63F]/30">
                Customer Service Siaga 24 Jam
              </span>
              <span className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Online Fast Response
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Konsultasi & Estimasi Biaya Gratis
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
              Kirimkan foto, denah, atau ceritakan kebutuhan rumah Anda. Tim kami segera membalas dengan saran teknis dan jadwal survey gratis.
            </p>

            {/* Phone Display Box with Copy */}
            <div className="bg-[#1E252B] p-4 sm:p-5 rounded-2xl flex items-center justify-between border border-gray-700 mb-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#8DB63F]/20 flex items-center justify-center text-[#8DB63F] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Nomor WhatsApp CS Resmi</div>
                  <div className="text-lg sm:text-2xl font-mono font-extrabold text-white tracking-wider">
                    {CONTACT_DATA.csPhone}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(CONTACT_DATA.csPhone)}
                className="p-2.5 text-gray-400 hover:text-white rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-1.5 text-xs"
                title="Salin nomor CS"
                aria-label="Salin nomor CS WhatsApp"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#8DB63F]" />
                    <span className="text-[#8DB63F] hidden sm:inline font-bold">Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="hidden sm:inline">Salin</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct WhatsApp Anchor Button - Exact Wireframe Text */}
            <div>
              <a
                id="contact-cta-wa-btn"
                href={csWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-[#8DB63F] hover:bg-[#7CA233] text-white font-extrabold text-base shadow-lg shadow-[#8DB63F]/25 transition-all active:scale-[0.98] uppercase tracking-wider"
              >
                <MessageSquare className="w-5 h-5" />
                <span>CHAT WHATSAPP SEKARANG</span>
              </a>
            </div>

            {/* Trust points inside card */}
            <div className="mt-6 pt-6 border-t border-gray-700/60 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8DB63F] shrink-0" />
                <span>Konsultasi 100% Gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8DB63F] shrink-0" />
                <span>Tanpa Komitmen Kontrak</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#8DB63F] shrink-0" />
                <span>Respon Cepat & Ramah</span>
              </div>
            </div>
          </div>
        </div>

        {/* Free Survey Form Banner */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#8DB63F] to-[#789C33] rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-extrabold">
                Ingin Tim Kami Datang Langsung ke Lokasi Anda?
              </h4>
              <p className="text-xs sm:text-sm text-white/90 mt-1">
                Jadwalkan survey gratis untuk pengukuran presisi dan konsultasi langsung dengan arsitek kami.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenConsultationModal}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-white text-[#1E252B] font-extrabold text-xs sm:text-sm shadow-lg hover:bg-gray-100 transition-all active:scale-95 flex items-center gap-2"
          >
            <span>Isi Form Survey Cepat</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
