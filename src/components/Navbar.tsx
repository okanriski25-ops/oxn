import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { CONTACT_DATA, getWaUrl } from '../data/landingData';
import { MessageSquare, Phone } from 'lucide-react';
import { NavigationDrawer } from './NavigationDrawer';

interface NavbarProps {
  onOpenConsultationModal: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultationModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Layanan', href: '#layanan' },
    { name: 'Mengapa Kami', href: '#mengapa-kami' },
    { name: 'Portofolio', href: '#portofolio' },
    { name: 'Area Layanan', href: '#area-layanan' },
    { name: 'Cara Kerja', href: '#cara-kerja' },
    { name: 'Garansi', href: '#garansi' },
    { name: 'FAQ', href: '#faq' },
  ];

  const waUrl = getWaUrl('Halo CS OXN BUILD, saya ingin berkonsultasi mengenai proyek renovasi / bangun baru melalui CS 24 Jam.');

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-2.5'
            : 'bg-white/90 backdrop-blur-sm border-b border-gray-100/60 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <a href="#" className="flex items-center gap-3 group focus:outline-none" aria-label="OXN BUILD Beranda">
              <Logo variant="compact" showTagline={false} className="scale-90 sm:scale-100 origin-left" />
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-gray-700 hover:text-[#8DB63F] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA Action Group & 3-Line Menu Button */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Direct WhatsApp CS 24h Link */}
              <a
                id="navbar-wa-direct-btn"
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold bg-[#F1F5F9] text-gray-800 hover:bg-[#E2E8F0] hover:text-[#8DB63F] transition-colors border border-gray-200"
                aria-label={`Chat WhatsApp CS 24 Jam ${CONTACT_DATA.csPhone}`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <MessageSquare className="w-3.5 h-3.5 text-[#8DB63F]" />
                <span>CS 24 Jam: {CONTACT_DATA.csPhone}</span>
              </a>

              {/* Primary CTA: Konsultasi Gratis */}
              <button
                id="navbar-primary-consult-btn"
                onClick={() => onOpenConsultationModal()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#8DB63F] hover:bg-[#7FA537] text-white shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Survey & Konsultasi Gratis</span>
              </button>

              {/* Bonafide 3-Line Menu (Hamburger) Button */}
              <button
                id="desktop-menu-toggle-btn"
                onClick={() => setIsDrawerOpen(true)}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-extrabold bg-[#1E252B] hover:bg-[#151A1F] text-white transition-all shadow-xs hover:shadow-md active:scale-95 cursor-pointer group"
                aria-label="Buka Menu Garis Tiga"
              >
                <div className="flex flex-col justify-center gap-1 w-4 h-3.5">
                  <span className="block h-0.5 w-4 bg-white rounded-full group-hover:bg-[#8DB63F] transition-colors" />
                  <span className="block h-0.5 w-3 bg-[#8DB63F] rounded-full group-hover:w-4 transition-all" />
                  <span className="block h-0.5 w-4 bg-white rounded-full group-hover:bg-[#8DB63F] transition-colors" />
                </div>
                <span className="tracking-wider">MENU</span>
              </button>
            </div>

            {/* Mobile Actions: WhatsApp Icon + 3-Line Menu Button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#8DB63F]/10 text-[#8DB63F] hover:bg-[#8DB63F]/20 transition-colors"
                aria-label="Direct WhatsApp CS 24 Jam"
              >
                <MessageSquare className="w-5 h-5" />
              </a>

              {/* Mobile 3-Line Hamburger Menu Button */}
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setIsDrawerOpen(true)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#1E252B] text-white hover:bg-[#151A1F] transition-colors cursor-pointer"
                aria-label="Buka Menu Navigasi"
              >
                <div className="flex flex-col justify-center gap-1 w-4 h-3.5">
                  <span className="block h-0.5 w-4 bg-white rounded-full" />
                  <span className="block h-0.5 w-2.5 bg-[#8DB63F] rounded-full" />
                  <span className="block h-0.5 w-4 bg-white rounded-full" />
                </div>
                <span className="text-[11px] font-extrabold tracking-wider">MENU</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Corporate Slide-Over Mega Drawer */}
      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpenConsultationModal={onOpenConsultationModal}
      />
    </>
  );
};
