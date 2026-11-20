import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Phone,
  Mail,
  Clock,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import logoImg from '../../assets/logo.jpeg';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const location = useLocation();

  // Listen to scroll to shrink header and apply subtle shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle keyboard events (ESC key closes dropdown and mobile drawer)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsServicesOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Dropdown hover helpers with slight delay to prevent abrupt flicker
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const isServicesActive = location.pathname.startsWith('/services');

  // Accent color badge mapper for services dropdown
  const getAccentBadgeClass = (accent) => {
    switch (accent) {
      case 'teal':
        return 'bg-teal-light text-teal';
      case 'magenta':
        return 'bg-magenta-light text-magenta';
      case 'blue':
        return 'bg-blue-light text-blue';
      case 'green':
        return 'bg-green-light text-green';
      case 'primary':
      default:
        return 'bg-primary-light text-primary';
    }
  };

  return (
    <>
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-brand focus:shadow-soft font-medium text-sm outline-none"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 w-full bg-white transition-all duration-300">
        {/* Optional thin top bar (navy) */}
        <div
          className={`bg-navy text-white text-xs border-b border-navy-border overflow-hidden transition-all duration-300 ${
            isScrolled ? 'max-h-0 opacity-0 py-0 border-none' : 'max-h-12 opacity-100 py-2'
          }`}
          aria-label="Top contact and working hours bar"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
            {/* Left: Contact Info */}
            <div className="flex items-center flex-wrap gap-4 sm:gap-6 text-navy-muted">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors duration-200 focus-visible:ring-1 focus-visible:ring-primary rounded px-1 outline-none"
                aria-label={`Call us at ${siteConfig.contact.phoneDisplay}`}
              >
                <Phone className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
                <span className="text-white font-medium">{siteConfig.contact.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors duration-200 focus-visible:ring-1 focus-visible:ring-primary rounded px-1 outline-none"
                aria-label={`Email us at ${siteConfig.contact.email}`}
              >
                <Mail className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>

            {/* Right: Working Hours & Tagline */}
            <div className="flex items-center gap-4 text-navy-muted">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
                <span>{siteConfig.contact.hours}</span>
              </div>
              <span className="hidden md:inline text-navy-border">•</span>
              <span className="hidden md:inline font-medium text-white/90">
                {siteConfig.brand.businessLine}
              </span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={`w-full bg-white transition-all duration-300 ${
            isScrolled
              ? 'py-2.5 shadow-header border-b border-warm-border/60'
              : 'py-4 border-b border-warm-border/40'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Brand Logo on the left */}
              <Link
                to="/"
                className="flex items-center gap-3 shrink-0 rounded-brand focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 outline-none py-1 group"
                aria-label={`${siteConfig.brand.name} - Home`}
              >
                <img
                  src={logoImg}
                  alt={`${siteConfig.brand.name} - ${siteConfig.brand.subtitle}`}
                  className={`w-auto object-contain transition-all duration-300 ${
                    isScrolled ? 'h-9 md:h-11' : 'h-10 md:h-12'
                  }`}
                />
              </Link>

              {/* Desktop Navigation Menu */}
              <nav
                className="hidden lg:flex items-center gap-7 xl:gap-8"
                aria-label="Main Navigation"
              >
                {siteConfig.navLinks.map((link) => {
                  if (link.isDropdown) {
                    return (
                      <div
                        key={link.label}
                        ref={dropdownRef}
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <button
                          type="button"
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          aria-expanded={isServicesOpen}
                          aria-haspopup="true"
                          className={`group relative inline-flex items-center gap-1 py-1 text-sm font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-brand ${
                            isServicesActive
                              ? 'text-primary font-semibold'
                              : 'text-navy hover:text-primary'
                          }`}
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isServicesOpen ? 'rotate-180 text-primary' : 'text-navy-muted group-hover:text-primary'
                            }`}
                            aria-hidden="true"
                          />
                          {/* Animated underline */}
                          <span
                            className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ease-out ${
                              isServicesActive ? 'w-full' : 'w-0 group-hover:w-full'
                            }`}
                          />
                        </button>

                        {/* Services Dropdown Panel */}
                        {isServicesOpen && (
                          <div
                            className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[560px] z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                            role="menu"
                            aria-orientation="vertical"
                            aria-label="HR Services Submenu"
                          >
                            <div className="bg-white rounded-brand-lg shadow-dropdown border border-warm-border p-4 bg-white/95 backdrop-blur-md">
                              {/* Dropdown Header */}
                              <div className="flex items-center justify-between pb-3 mb-3 border-b border-warm-border px-2">
                                <div>
                                  <span className="text-xs font-semibold tracking-wider uppercase text-primary">
                                    Our Modular Services
                                  </span>
                                  <p className="text-xs text-navy-muted">
                                    Tailored HR compliance, audit and advisory solutions
                                  </p>
                                </div>
                                <Link
                                  to="/services"
                                  onClick={() => setIsServicesOpen(false)}
                                  className="text-xs font-semibold text-primary hover:text-primary-hover flex items-center gap-1 transition-colors"
                                >
                                  View all
                                  <ArrowRight className="w-3 h-3" />
                                </Link>
                              </div>

                              {/* 6 Services Grid (2 Columns) */}
                              <div className="grid grid-cols-2 gap-2">
                                {siteConfig.services.map((service) => (
                                  <Link
                                    key={service.id}
                                    to={service.href}
                                    role="menuitem"
                                    onClick={() => setIsServicesOpen(false)}
                                    className="p-2.5 rounded-brand hover:bg-warm-grey transition-all duration-200 group flex items-start gap-3 text-left focus-visible:ring-2 focus-visible:ring-primary outline-none"
                                  >
                                    <div
                                      className={`w-7 h-7 rounded-brand-sm flex items-center justify-center font-bold text-xs shrink-0 transition-transform group-hover:scale-105 ${getAccentBadgeClass(
                                        service.accent
                                      )}`}
                                    >
                                      {service.number}
                                    </div>
                                    <div className="min-w-0">
                                      <p className="text-sm font-medium text-navy group-hover:text-primary transition-colors leading-snug">
                                        {service.title}
                                      </p>
                                      <p className="text-xs text-navy-muted line-clamp-2 mt-0.5 leading-relaxed">
                                        {service.description}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>

                              {/* Dropdown Footer banner */}
                              <div className="mt-3 pt-3 border-t border-warm-border px-2 flex items-center justify-between text-xs text-navy-muted">
                                <span className="flex items-center gap-1.5">
                                  <ShieldCheck className="w-3.5 h-3.5 text-teal" />
                                  Evidence-led &amp; risk-prioritised
                                </span>
                                <Link
                                  to="/engagement-options"
                                  onClick={() => setIsServicesOpen(false)}
                                  className="text-navy hover:text-primary transition-colors font-medium"
                                >
                                  See Engagement Models &rarr;
                                </Link>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <NavLink
                      key={link.label}
                      to={link.href}
                      className={({ isActive }) =>
                        `group relative py-1 text-sm font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-brand ${
                          isActive
                            ? 'text-primary font-semibold'
                            : 'text-navy hover:text-primary'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span>{link.label}</span>
                          {/* Animated orange underline */}
                          <span
                            className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ease-out ${
                              isActive ? 'w-full' : 'w-0 group-hover:w-full'
                            }`}
                          />
                        </>
                      )}
                    </NavLink>
                  );
                })}
              </nav>

              {/* Desktop CTA Button */}
              <div className="hidden lg:flex items-center gap-4">
                <Link
                  to={siteConfig.cta.href}
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-hover active:bg-primary-dark rounded-brand shadow-soft hover:shadow-soft-md transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 outline-none group"
                >
                  <span>{siteConfig.cta.label}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* Mobile Hamburger Button */}
              <div className="flex items-center lg:hidden">
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="p-2 rounded-brand text-navy hover:text-primary hover:bg-warm-grey transition-colors focus-visible:ring-2 focus-visible:ring-primary outline-none"
                  aria-label="Open mobile navigation menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <Menu className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer with Backdrop */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-navy/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 max-w-full w-full sm:w-[380px] bg-white shadow-soft-lg flex flex-col z-50">
            {/* Drawer Header */}
            <div className="p-4 flex items-center justify-between border-b border-warm-border">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center"
                aria-label="Geniebag Solutions - Home"
              >
                <img
                  src={logoImg}
                  alt={siteConfig.brand.name}
                  className="h-9 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-brand text-navy hover:text-primary hover:bg-warm-grey transition-colors focus-visible:ring-2 focus-visible:ring-primary outline-none"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Drawer Body / Navigation list */}
            <div className="flex-1 overflow-y-auto px-4 py-5 space-y-1">
              {siteConfig.navLinks.map((link) => {
                if (link.isDropdown) {
                  return (
                    <div key={link.label} className="border-b border-warm-border/60 pb-2">
                      <button
                        type="button"
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        aria-expanded={isMobileServicesOpen}
                        className="w-full flex items-center justify-between py-2.5 px-3 text-base font-medium text-navy hover:text-primary rounded-brand hover:bg-warm-grey transition-colors"
                      >
                        <span className={isServicesActive ? 'text-primary font-semibold' : ''}>
                          {link.label}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isMobileServicesOpen ? 'rotate-180 text-primary' : 'text-navy-muted'
                          }`}
                        />
                      </button>

                      {/* Accordion for Services */}
                      {isMobileServicesOpen && (
                        <div className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-primary/30 ml-4 my-1">
                          <Link
                            to="/services"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 px-3 text-xs font-semibold uppercase tracking-wider text-primary hover:bg-warm-grey rounded-brand"
                          >
                            All Services Overview &rarr;
                          </Link>
                          {siteConfig.services.map((service) => (
                            <Link
                              key={service.id}
                              to={service.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-2 px-3 text-sm text-navy hover:text-primary hover:bg-warm-grey rounded-brand transition-colors"
                            >
                              <div className="flex items-center gap-2">
                                <span
                                  className={`w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center shrink-0 ${getAccentBadgeClass(
                                    service.accent
                                  )}`}
                                >
                                  {service.number}
                                </span>
                                <span className="font-medium">{service.title}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-2.5 px-3 text-base rounded-brand transition-colors ${
                        isActive
                          ? 'text-primary font-semibold bg-primary-light/40'
                          : 'text-navy hover:text-primary hover:bg-warm-grey font-medium'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                );
              })}
            </div>

            {/* Drawer Footer with CTA & Contact Info */}
            <div className="p-4 border-t border-warm-border bg-warm-grey space-y-4">
              <Link
                to={siteConfig.cta.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-primary hover:bg-primary-hover active:bg-primary-dark rounded-brand shadow-soft transition-all duration-200"
              >
                <span>{siteConfig.cta.label}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <div className="space-y-1.5 text-xs text-navy-muted pt-2 border-t border-warm-border">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                    className="hover:text-primary transition-colors text-navy font-medium"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-navy-muted">
                  <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{siteConfig.contact.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
