"use client";

import { useState } from "react";

export default function HomePage() {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (FORMSPREE_ENDPOINT.includes("your-form-id")) {
      setError("Replace the Formspree endpoint in app/page.js to activate email delivery.");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    setSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      form.reset();
      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong while sending your enquiry. Please call or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="site">
      <section className="hero">
        <img src="/images/hero.jpg" alt="Braidy Group site works" className="hero-bg" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <img src="/images/logo.png" alt="Braidy Group logo" className="hero-logo" />
          <p className="hero-kicker">Sydney NSW</p>
          <h1>Demolition, Bulk Excavation, Detail Excavation &amp; Shoring</h1>
          <p className="hero-text">
            Trusted early works specialists delivering safe, efficient and high-quality results across Sydney.
          </p>
          <a href="#quote-form" className="btn btn-primary">Request a Quote</a>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">What We Do</p>
            <h2>Our Services</h2>
            <p>
              We specialise in demolition, bulk excavation, detail excavation and shoring services across Sydney NSW,
              delivering precision, safety and efficiency on every project.
            </p>
          </div>

          <div className="cards three">
            <article className="card">
              <img src="/images/demolition.jpg" alt="Demolition works" className="card-image" />
              <div className="card-body">
                <h3>Demolition</h3>
                <p>Safe and efficient demolition solutions for residential, commercial and construction projects.</p>
              </div>
            </article>

            <article className="card">
              <img src="/images/excavation1.jpg" alt="Bulk excavation works" className="card-image" />
              <div className="card-body">
                <h3>Bulk Excavation</h3>
                <p>Reliable bulk earthworks for site cuts, foundations, basements and large-scale preparation.</p>
              </div>
            </article>

            <article className="card">
              <img src="/images/excavation2.jpg" alt="Detail excavation and shoring works" className="card-image" />
              <div className="card-body">
                <h3>Detail Excavation &amp; Shoring</h3>
                <p>Accurate excavation and shoring systems designed to prepare your site safely and efficiently.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-black">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Recent Projects</p>
            <h2>Our Work</h2>
          </div>

          <div className="gallery">
            <img src="/images/demolition.jpg" alt="Project gallery 1" />
            <img src="/images/excavation1.jpg" alt="Project gallery 2" />
            <img src="/images/excavation2.jpg" alt="Project gallery 3" />
            <img src="/images/excavation3.jpg" alt="Project gallery 4" />
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container narrow center">
          <p className="eyebrow">About Braidy Group</p>
          <h2>Built on Reliability</h2>
          <p className="lead">
            Braidy Group is a trusted construction business specialising in demolition, bulk excavation, detail
            excavation and shoring across Sydney NSW. We take pride in delivering dependable workmanship, strong site
            safety and efficient project execution.
          </p>
        </div>
      </section>

      <section id="quote-form" className="section section-dark">
        <div className="container form-wrap">
          <div className="section-heading center">
            <p className="eyebrow">Get Started</p>
            <h2>Request a Quote</h2>
            <p>Tell us about your project and our team will provide a tailored quote based on your site requirements.</p>
          </div>

          <div className="form-card">
            {submitted ? (
              <div className="thankyou">
                <h3>Thank you</h3>
                <p>Your enquiry has been received. We’ll be in touch shortly to discuss your project.</p>
              </div>
            ) : (
              <form className="quote-form" onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="fullName">Full Name</label>
                  <input id="fullName" name="fullName" type="text" placeholder="Your name" required />
                </div>

                <div className="field">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="tel" placeholder="Your phone number" required />
                </div>

                <div className="field">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" placeholder="Your email" required />
                </div>

                <div className="field">
                  <label htmlFor="projectLocation">Project Location</label>
                  <input id="projectLocation" name="projectLocation" type="text" placeholder="Sydney suburb or site address" required />
                </div>

                <div className="field full">
                  <label htmlFor="serviceRequired">Service Required</label>
                  <select id="serviceRequired" name="serviceRequired" required>
                    <option value="">Select a service</option>
                    <option>Demolition</option>
                    <option>Bulk Excavation</option>
                    <option>Detail Excavation</option>
                    <option>Shoring</option>
                    <option>Multiple Services</option>
                  </select>
                </div>

                <div className="field full">
                  <label htmlFor="projectDetails">Project Details</label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows="6"
                    placeholder="Tell us about the scope of works, site access, timeline, and anything else relevant"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="preferredStartTimeframe">Preferred Start Timeframe</label>
                  <select id="preferredStartTimeframe" name="preferredStartTimeframe">
                    <option>As soon as possible</option>
                    <option>Within 2 weeks</option>
                    <option>Within 1 month</option>
                    <option>Planning stage</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="siteInspectionRequired">Site Inspection Required?</label>
                  <select id="siteInspectionRequired" name="siteInspectionRequired">
                    <option>Yes</option>
                    <option>No</option>
                    <option>Unsure</option>
                  </select>
                </div>

                <input type="hidden" name="_subject" value="New quote request from Braidy Group website" />

                {error ? <p className="error full">{error}</p> : null}

                <div className="full button-row">
                  <button type="submit" className="btn btn-primary" disabled={submitting}>
                    {submitting ? "Sending..." : "Submit Quote Request"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="section section-black">
        <div className="container center">
          <p className="eyebrow">Contact</p>
          <h2>Get in Touch</h2>
          <p className="lead">Servicing all of Sydney NSW. Ready to start your project? Get in touch today.</p>
          <div className="contact-list">
            <p>Phone: <a href="tel:0280147015">02 8014 7015</a></p>
            <p>Email: <a href="mailto:Admin@braidygroup.com.au">Admin@braidygroup.com.au</a></p>
            <p>Instagram: <a href="https://www.instagram.com/braidygroup/" target="_blank" rel="noreferrer">@braidygroup</a></p>
          </div>
          <a href="#quote-form" className="btn btn-primary">Request a Quote</a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <img src="/images/logo.png" alt="Braidy Group logo" className="footer-logo" />
          <p>
            <a href="tel:0280147015">02 8014 7015</a>
            <span className="separator">|</span>
            <a href="mailto:Admin@braidygroup.com.au">Admin@braidygroup.com.au</a>
          </p>
          <p>© 2026 Braidy Group. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}