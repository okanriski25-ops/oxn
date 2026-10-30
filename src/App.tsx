/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyOxnSection } from './components/WhyOxnSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { WorkflowSection } from './components/WorkflowSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactCtaSection } from './components/ContactCtaSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { PamphletAdsModal } from './components/PamphletAdsModal';
import { OwnerAuthModal } from './components/OwnerAuthModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { WelcomeAudio } from './components/WelcomeAudio';

export default function App() {
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [isPamphletModalOpen, setIsPamphletModalOpen] = useState(false);
  const [isOwnerAuthModalOpen, setIsOwnerAuthModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  // Private Owner Detection: via ?admin=oxn or ?studio=iklan or saved session
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const hash = window.location.hash;
    const isOwnerParam =
      params.get('admin') === 'oxn' ||
      params.get('studio') === 'iklan' ||
      params.get('owner') === 'true' ||
      hash === '#studio-iklan';

    if (isOwnerParam) {
      sessionStorage.setItem('oxn_owner_auth', 'true');
      setIsPamphletModalOpen(true);
    }
  }, []);

  const handleOpenConsultModal = (serviceName?: string) => {
    setSelectedService(serviceName || '');
    setIsConsultModalOpen(true);
  };

  const handleOpenOwnerAccess = () => {
    if (sessionStorage.getItem('oxn_owner_auth') === 'true') {
      setIsPamphletModalOpen(true);
    } else {
      setIsOwnerAuthModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1E252B] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#8DB63F] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenConsultationModal={handleOpenConsultModal} />

      {/* Main Content Area - Aligned exactly with Wireframe */}
      <main id="landing-main-content">
        {/* 1. Hero Section: [LOGO OXN BUILD], KONSTRUKSI • RENOVASI • PERBAIKAN, [ KONSULTASI VIA WHATSAPP ] */}
        <Hero onOpenConsultationModal={() => handleOpenConsultModal()} />

        {/* 2. LAYANAN KAMI: 🏗️ Konstruksi, 🏠 Renovasi, 🔨 Perbaikan, 🛠️ Pekerjaan pendukung */}
        <ServicesSection onSelectService={handleOpenConsultModal} />

        {/* 3. MENGAPA OXN BUILD?: ✓ Konsultasi, ✓ Komunikasi jelas, ✓ Pekerjaan sesuai kebutuhan, ✓ Penawaran dapat dinegosiasikan */}
        <WhyOxnSection />

        {/* 4. PORTOFOLIO [ FOTO PROYEK ]: Before → Proses → After */}
        <PortfolioSection />

        {/* 5. AREA LAYANAN: Jakarta • Tangerang • Bekasi • Depok */}
        <ServiceAreaSection onOpenConsultationModal={handleOpenConsultModal} />

        {/* 6. CARA KERJA: 1. Konsultasi, 2. Kirim foto/lokasi, 3. Survey bila diperlukan, 4. Penawaran, 5. Kesepakatan, 6. Pengerjaan */}
        <WorkflowSection />

        {/* Garansi Resmi SPK & Standar Perlindungan */}
        <GuaranteeSection onOpenConsultationModal={() => handleOpenConsultModal()} />

        {/* Ulasan & Rating Pelanggan */}
        <TestimonialsSection />

        {/* Tanya Jawab (FAQ) */}
        <FaqSection />

        {/* 7. SIAP MEMULAI PROYEK? [ CHAT WHATSAPP SEKARANG ] */}
        <ContactCtaSection onOpenConsultationModal={() => handleOpenConsultModal()} />
      </main>

      {/* Footer with Discrete Owner Access */}
      <Footer onOpenOwnerAccess={handleOpenOwnerAccess} />

      {/* Floating Instant WhatsApp Live Contact Widget */}
      <FloatingWhatsApp />

      {/* Audio Welcome Greeting for Visitors */}
      <WelcomeAudio />

      {/* Free Survey & Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
        initialService={selectedService}
      />

      {/* Owner Auth PIN Modal (Akses Khusus Pemilik) */}
      <OwnerAuthModal
        isOpen={isOwnerAuthModalOpen}
        onClose={() => setIsOwnerAuthModalOpen(false)}
        onSuccess={() => {
          setIsOwnerAuthModalOpen(false);
          setIsPamphletModalOpen(true);
        }}
      />

      {/* Studio Pamflet & Materi Iklan Meta (HANYA DILIHAT OLEH PEMILIK) */}
      <PamphletAdsModal
        isOpen={isPamphletModalOpen}
        onClose={() => setIsPamphletModalOpen(false)}
      />
    </div>
  );
}
