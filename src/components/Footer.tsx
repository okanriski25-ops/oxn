import React from 'react';
import { Logo } from './Logo';
import { CONTACT_DATA, getWaUrl } from '../data/landingData';
import { MessageSquare, Clock, ShieldCheck, Lock } from 'lucide-react';

interface FooterProps {
  onOpenOwnerAccess?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOwnerAccess }) => {
  const csWaUrl = getWaUrl('Halo CS OXN BUILD, saya ingin berkonsultasi mengenai proyek.');

  return (
    <footer id="main-footer" className="bg-[#171C20] text-gray-400 text-xs sm:text-sm pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" showTagline={true} className="items-start" />
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm pt-3">
              OXN BUILD — Build Better, Live Better. Kami membangun kepercayaan Anda dengan hasil kerja presisi, material berkualitas pilihan, dan garansi resmi tertulis.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Garansi Konstruksi & Pemeliharaan Tertulis</span>
            </div>
          </div>

          {/* Col 3: Layanan Kami */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Layanan Utama
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#layanan" className="hover:text-[#8DB63F] transition-colors">
                  Renovasi Rumah & Fasad
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-[#8DB63F] transition-colors">
                  Konstruksi Bangun Baru
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-[#8DB63F] transition-colors">
                  Interior & Kitchen Set Custom
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-[#8DB63F] transition-colors">
                  Perbaikan Ringan & Pipa Air (Plumbing)
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-[#8DB63F] transition-colors">
                  Perbaikan Kebocoran & Waterproofing
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Navigasi Cepat */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Navigasi Cepat
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero-section" className="hover:text-[#8DB63F] transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#portofolio" className="hover:text-[#8DB63F] transition-colors">
                  Portofolio [Foto Proyek]
                </a>
              </li>
              <li>
                <a href="#mengapa-kami" className="hover:text-[#8DB63F] transition-colors">
                  Mengapa OXN BUILD
                </a>
              </li>
              <li>
                <a href="#cara-kerja" className="hover:text-[#8DB63F] transition-colors">
                  Cara Kerja (6 Langkah)
                </a>
              </li>
              <li>
                <a href="#area-layanan" className="hover:text-[#8DB63F] transition-colors">
                  Area Layanan Jabodetabek
                </a>
              </li>
              <li>
                <a href="#garansi" className="hover:text-[#8DB63F] transition-colors">
                  Garansi Resmi (SPK)
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-[#8DB63F] transition-colors">
                  Ulasan & Rating Klien
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#8DB63F] transition-colors">
                  Tanya Jawab (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Kontak Customer Service */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Customer Service Resmi
            </div>
            <div className="space-y-2.5 text-xs">
              <a
                href={csWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left p-3 rounded-xl bg-gray-800/80 hover:bg-[#8DB63F]/20 hover:text-[#8DB63F] transition-all flex items-center gap-2.5 group border border-gray-700/60"
              >
                <div className="w-8 h-8 rounded-lg bg-[#8DB63F]/20 flex items-center justify-center text-[#8DB63F] shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white group-hover:text-[#8DB63F]">WhatsApp CS Resmi</div>
                  <div className="text-xs text-gray-300 font-mono">{CONTACT_DATA.csPhone}</div>
                </div>
              </a>

              <div className="flex items-start gap-2 pt-2 text-[11px] text-gray-400">
                <Clock className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                <span>{CONTACT_DATA.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Discrete Owner Access */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} <strong>OXN BUILD</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <div className="tracking-widest uppercase font-semibold text-[10px] text-gray-400">
              BUILD BETTER. LIVE BETTER.
            </div>

            {/* Discrete Owner Access (Hidden from public eye) */}
            {onOpenOwnerAccess && (
              <button
                onClick={onOpenOwnerAccess}
                className="text-gray-600 hover:text-gray-400 transition-colors inline-flex items-center gap-1 text-[11px] cursor-pointer"
                title="Akses Khusus Pemilik (Studio Iklan)"
              >
                <Lock className="w-3 h-3" />
                <span>Akses Pemilik</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
