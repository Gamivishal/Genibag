import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

/**
 * Main Layout wrapper containing sticky Header, dynamic routed page content, and Footer
 */
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-warm-grey text-navy font-body">
      <Header />
      <main id="main-content" className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
