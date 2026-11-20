import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import PlaceholderPage from './pages/PlaceholderPage';
import { siteConfig } from './data/siteConfig';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home Route */}
          <Route index element={<Home />} />

          {/* Navigation Routes */}
          <Route
            path="about"
            element={
              <PlaceholderPage
                badge="About Geniebag"
                title="About Geniebag Solutions"
                description="Learn about our HR compliance and audit philosophy, team, and mission to deliver practical, proportionate and people-aware HR governance."
              />
            }
          />
          <Route
            path="approach"
            element={
              <PlaceholderPage
                badge="Our 6-Step Method"
                title="Our Approach"
                description="From Discovery and Collection to Review, Prioritisation, Reporting, and Action Support. A structured engagement that minimizes disruption."
              />
            }
          />
          <Route
            path="engagement-options"
            element={
              <PlaceholderPage
                badge="Engagement Models"
                title="Flexible Engagement Options"
                description="Focused Health Checks, Comprehensive Audits, and Hands-on Implementation Support tailored to your business scale."
              />
            }
          />
          <Route
            path="contact"
            element={
              <PlaceholderPage
                badge="Let's Talk HR"
                title="Contact & Consultation Booking"
                description="Start with a conversation about your people, processes and priorities. Book your initial scoping discussion."
              />
            }
          />

          {/* Services Overview & Individual Service Routes */}
          <Route
            path="services"
            element={
              <PlaceholderPage
                badge="Modular Offering"
                title="All HR Services Overview"
                description="Explore our complete suite of 6 modular HR compliance, audit, and advisory services."
              />
            }
          />
          {siteConfig.services.map((service) => (
            <Route
              key={service.id}
              path={`services/${service.id}`}
              element={
                <PlaceholderPage
                  badge={`Service ${service.number}`}
                  title={service.title}
                  description={service.description}
                />
              }
            />
          ))}

          {/* Legal / Policy Routes */}
          <Route
            path="privacy-policy"
            element={
              <PlaceholderPage
                badge="Legal"
                title="Privacy Policy"
                description="Our commitment to confidential handling of employee and corporate information."
              />
            }
          />
          <Route
            path="terms-of-use"
            element={
              <PlaceholderPage
                badge="Legal"
                title="Terms of Use"
                description="Terms, consultancy scope boundaries, and regulatory advisory conditions."
              />
            }
          />

          {/* Fallback Catch-all Route */}
          <Route
            path="*"
            element={
              <PlaceholderPage
                badge="404"
                title="Page Not Found"
                description="The page you are looking for does not exist or has been moved."
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
