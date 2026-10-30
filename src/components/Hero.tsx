import React from 'react';
import { Logo } from './Logo';
import { CONTACT_DATA, getWaUrl } from '../data/landingData';
import { MessageSquare, PhoneCall, ShieldCheck, CheckCircle2, Clock, Sparkles, Compass, HardHat, Eye, Share2 } from 'lucide-react';

interface HeroProps {
  onOpenConsultationModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultationModal }) => {
  const heroWaUrl = getWaUrl(
    'Halo CS OXN BUILD, saya ingin konsultasi mengenai bangun / renovasi properti sesuai kebutuhan saya.'
  );

  return (
    <section
      id="hero-section"
      className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#F3F6F8] via-[#F8F9FA] to-white"
    >
      {/* Decorative architectural grid background pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#222930 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Brand, Headline, Trust Points, Dual CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tagline Pill from wireframe: KONSTRUKSI • RENOVASI • PERBAIKAN */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#8DB63F]/40 shadow-xs mb-5 text-xs font-bold text-[#1E252B] hover:border-[#8DB63F] transition-colors">
              <span className="flex h-2 w-2 rounded-full bg-[#8DB63F] animate-pulse" />
              <span className="tracking-wider text-[#6D8F2A] font-extrabold">KONSTRUKSI</span>
              <span className="text-gray-300">•</span>
              <span className="tracking-wider text-[#6D8F2A] font-extrabold">RENOVASI</span>
              <span className="text-gray-300">•</span>
              <span className="tracking-wider text-[#6D8F2A] font-extrabold">PERBAIKAN</span>
            </div>

            {/* Display Headline from wireframe */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-extrabold text-[#1E252B] tracking-tight leading-[1.18] sm:leading-[1.15]">
              Bangun dan renovasi properti{' '}
              <span className="relative inline-block text-[#1E252B]">
                sesuai kebutuhan Anda.
                <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#8DB63F]/25 -z-10 rounded-sm" />
              </span>
            </h1>

            {/* Sub-headline / Brand Promise */}
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
              Mulai dari bangun baru, renovasi fasad dan tata ruang, hingga perbaikan tuntas. Dikerjakan dengan <strong className="text-[#1E252B] font-bold">komunikasi jelas</strong>, mutu terjamin, dan <strong className="text-[#1E252B] font-bold">penawaran yang dapat dinegosiasikan</strong>.
            </p>

            {/* 4 Core Highlights List */}
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-2xl">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 bg-white/80 backdrop-blur-xs p-2.5 rounded-xl border border-gray-100 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#8DB63F] shrink-0" />
                <span>Konsultasi Bebas</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 bg-white/80 backdrop-blur-xs p-2.5 rounded-xl border border-gray-100 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#8DB63F] shrink-0" />
                <span>Komunikasi Jelas</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 bg-white/80 backdrop-blur-xs p-2.5 rounded-xl border border-gray-100 shadow-2xs">
                <Clock className="w-4 h-4 text-[#8DB63F] shrink-0" />
                <span>Sesuai Kebutuhan</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 bg-white/80 backdrop-blur-xs p-2.5 rounded-xl border border-gray-100 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#8DB63F] shrink-0" />
                <span>Dapat Dinegosiasi</span>
              </div>
            </div>

            {/* Primary Action Buttons: KONSULTASI VIA WHATSAPP */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              {/* WhatsApp Single CS CTA */}
              <a
                id="hero-wa-btn"
                href={heroWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm sm:text-base font-extrabold bg-[#8DB63F] hover:bg-[#7CA233] text-white shadow-md hover:shadow-lg shadow-[#8DB63F]/25 transition-all duration-200 active:scale-[0.98] uppercase tracking-wider"
              >
                <MessageSquare className="w-5 h-5" />
                <span>KONSULTASI VIA WHATSAPP</span>
              </a>

              {/* Consultation / Survey CTA */}
              <button
                id="hero-consult-btn"
                onClick={onOpenConsultationModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm sm:text-base font-bold bg-[#222930] hover:bg-[#151A1F] text-white shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98]"
              >
                <PhoneCall className="w-4 h-4 text-[#8DB63F]" />
                <span>Jadwalkan Survey Gratis</span>
              </button>
            </div>

            {/* CS Contact Info Sub-note */}
            <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Layanan CS Siaga 24 Jam: <strong className="text-gray-800 font-bold">{CONTACT_DATA.csPhone}</strong> (Survey Gratis Jabodetabek)</span>
            </div>
          </div>

          {/* Right Column: Professional Architectural & Construction Photo Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Architectural Showcase Card */}
              <div className="relative rounded-3xl bg-white p-3 sm:p-4 shadow-2xl border border-gray-200/80 overflow-hidden">
                {/* Main Hero Photo: Modern Architecture & Luxury Facade */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-inner group">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                    alt="Desain Konstruksi Rumah Mewah Modern dan Tropis OXN BUILD"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Overlay for Crisp Text Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-between p-4 sm:p-5 text-white">
                    {/* Top Bar Badges */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-white border border-white/20 shadow-xs">
                        <Compass className="w-3.5 h-3.5 text-[#8DB63F]" />
                        Desain Arsitektur Modern
                      </span>
                      <span className="bg-[#8DB63F] text-white text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider shadow-xs">
                        Build Better, Live Better
                      </span>
                    </div>

                    {/* Bottom Title & Specs */}
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-[11px] text-[#8DB63F] font-extrabold uppercase tracking-wider mb-1">
                        <Sparkles className="w-3 h-3" />
                        Kami Membangun Kepercayaan Anda
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug">
                        Desain & Konstruksi Presisi
                      </h3>
                      <p className="mt-1 text-xs text-gray-200 line-clamp-2 leading-relaxed">
                        Arsitektur modern, mutu struktur kokoh, serta biaya transparan sesuai kebutuhan Anda.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sub Photo Collage: Real Construction & Modern Interior */}
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {/* Photo 1: Struktur Konstruksi & Pembesian Berkualitas */}
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] group border border-gray-200">
                    <img
                      src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=500&q=80"
                      alt="Pengerjaan Struktur Konstruksi Besi dan Beton Berkualitas"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2.5">
                      <div className="text-left">
                        <span className="flex items-center gap-1 text-[10px] font-extrabold text-[#8DB63F]">
                          <HardHat className="w-3 h-3" /> Struktur Kokoh & Rapi
                        </span>
                        <div className="text-xs font-bold text-white leading-tight">
                          Konstruksi Presisi
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Photo 2: Desain Interior Mewah & Drop Ceiling */}
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] group border border-gray-200">
                    <img
                      src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=500&q=80"
                      alt="Desain Interior Rumah Mewah Minimalis Elegan"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2.5">
                      <div className="text-left">
                        <span className="flex items-center gap-1 text-[10px] font-extrabold text-[#8DB63F]">
                          <Sparkles className="w-3 h-3" /> Interior Elegan
                        </span>
                        <div className="text-xs font-bold text-white leading-tight">
                          Finishing Halus Rapi
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Logo & Bottom Summary Inside Hero Frame */}
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <Logo variant="compact" showTagline={false} />
                  <a
                    href="#portofolio"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#8DB63F] hover:underline"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Lihat Inspirasi Desain</span>
                  </a>
                </div>

                {/* Floating Metric Badge on Top Right */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-2.5 sm:p-3 flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#8DB63F]/15 flex items-center justify-center text-[#8DB63F] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 font-semibold">Garansi Struktur</div>
                    <div className="text-xs sm:text-sm font-extrabold text-gray-900">Hingga 12 Bulan</div>
                  </div>
                </div>

                {/* Floating Metric Badge on Bottom Left */}
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-[#222930] text-white rounded-2xl shadow-xl p-2.5 sm:p-3 flex items-center gap-2.5 border border-gray-800">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                  <div>
                    <div className="text-xs font-extrabold text-white">CS 24 Jam Nonstop</div>
                    <div className="text-[10px] text-gray-300">Konsultasi Bebas Kapan Saja</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
