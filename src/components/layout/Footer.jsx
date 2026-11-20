import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import logoImg from '../../assets/logo.jpeg';

// Dedicated brand SVG icons
function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.31a1.63 1.63 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12Z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const renderSocialIcon = (platform) => {
    switch (platform) {
      case 'linkedin':
        return <LinkedInIcon />;
      case 'facebook':
        return <FacebookIcon />;
      case 'instagram':
        return <InstagramIcon />;
      case 'x':
      default:
        return <XIcon />;
    }
  };

  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-navy-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* Column 1: Brand & Logo (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-4">
            {/* Logo on a white rounded card so it stays clearly visible on dark navy */}
            <Link
              to="/"
              className="bg-white rounded-brand p-3 inline-block shadow-soft transition-transform hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-primary outline-none"
              aria-label={`${siteConfig.brand.name} - Home`}
            >
              <img
                src={logoImg}
                alt={`${siteConfig.brand.name} - ${siteConfig.brand.subtitle}`}
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Tagline */}
            <p className="text-white font-heading font-medium text-base tracking-tight leading-snug">
              {siteConfig.brand.tagline}
            </p>

            {/* Short line */}
            <p className="text-navy-muted text-sm leading-relaxed max-w-sm">
              {siteConfig.brand.mission}
            </p>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="sr-only">Connect with us on social media</span>
              <div className="flex items-center gap-2.5">
                {siteConfig.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.name} page`}
                    className="w-9 h-9 rounded-brand bg-navy-light/70 hover:bg-primary text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-primary outline-none"
                  >
                    {renderSocialIcon(social.platform)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-heading font-semibold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm" role="list">
              {siteConfig.footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-navy-muted hover:text-primary transition-colors duration-200 inline-flex items-center gap-1.5 py-0.5 group focus-visible:ring-1 focus-visible:ring-primary rounded outline-none"
                  >
                    <span className="w-1 h-1 rounded-full bg-navy-border group-hover:bg-primary transition-colors" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-heading font-semibold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal" />
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm" role="list">
              {siteConfig.services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={service.href}
                    className="text-navy-muted hover:text-white transition-colors duration-200 flex items-start gap-2 py-0.5 group focus-visible:ring-1 focus-visible:ring-primary rounded outline-none"
                  >
                    <span className="text-primary text-xs font-semibold shrink-0 group-hover:translate-x-0.5 transition-transform">
                      {service.number}.
                    </span>
                    <span className="group-hover:text-primary transition-colors">
                      {service.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h3 className="text-white font-heading font-semibold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Contact Us
              </h3>
              <ul className="space-y-3 text-sm text-navy-muted" role="list">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" aria-hidden="true" />
                  <span className="leading-snug">{siteConfig.contact.address.display}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                    className="hover:text-white transition-colors"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-white transition-colors break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-xs text-navy-muted/80">
                  <Clock className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <span>{siteConfig.contact.hours}</span>
                </li>
              </ul>
            </div>

            {/* Book a Consultation Button */}
            <div className="mt-6 pt-4 border-t border-navy-border/50">
              <Link
                to={siteConfig.cta.href}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-hover active:bg-primary-dark rounded-brand shadow-soft transition-all duration-200 group focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-navy outline-none"
              >
                <span>{siteConfig.cta.label}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Promises Strip Above the Bottom Bar */}
        <div className="border-t border-b border-navy-border py-5 my-6">
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm font-medium text-white/90 text-center">
            {siteConfig.promises.map((promise, index) => (
              <React.Fragment key={promise}>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0" aria-hidden="true" />
                  <span>{promise}</span>
                </span>
                {index < siteConfig.promises.length - 1 && (
                  <span className="hidden sm:inline text-primary font-bold" aria-hidden="true">
                    •
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Disclaimer Line (from Slide 11) */}
        <div className="my-6">
          <p className="text-navy-muted/80 text-xs leading-relaxed text-center max-w-4xl mx-auto px-4">
            <span className="font-semibold text-white/70">Important Notice: </span>
            {siteConfig.disclaimer}
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 border-t border-navy-border/60 flex flex-col sm:flex-row items-center justify-between text-xs text-navy-muted gap-3">
          <p className="text-center sm:text-left">
            &copy; {currentYear} {siteConfig.brand.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {siteConfig.legalLinks.map((legal, index) => (
              <React.Fragment key={legal.label}>
                <Link
                  to={legal.href}
                  className="hover:text-primary transition-colors focus-visible:ring-1 focus-visible:ring-primary rounded outline-none"
                >
                  {legal.label}
                </Link>
                {index < siteConfig.legalLinks.length - 1 && (
                  <span className="text-navy-border">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
