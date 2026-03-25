"use client";

import React, { useState } from "react";

export default function BraidyGroupWebsite() {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#111", color: "#fff" }}>

      <div style={{ textAlign: "center", padding: "50px" }}>
        <img src="/images/logo.png" style={{ width: "200px" }} />
        <h2>Demolition, Excavation & Shoring | Sydney NSW</h2>
      </div>

      <div style={{ padding: "40px" }}>
        <h2>Our Services</h2>
        <p>Demolition, Bulk Excavation, Detail Excavation & Shoring</p>
      </div>

      <div style={{ padding: "40px" }}>
        <h2>Request a Quote</h2>

        {submitted ? (
          <p>Thanks — we’ll contact you shortly.</p>
        ) : (
          <form
            action={FORMSPREE_ENDPOINT}
            method="POST"
            onSubmit={() => setSubmitted(true)}
          >
            <input name="name" placeholder="Name" required /><br /><br />
            <input name="phone" placeholder="Phone" required /><br /><br />
            <input name="email" placeholder="Email" required /><br /><br />
            <textarea name="details" placeholder="Project details" required /><br /><br />

            <button type="submit">Send</button>
          </form>
        )}
      </div>

      <div style={{ padding: "40px" }}>
        <h2>Contact</h2>
        <p>Phone: <a href="tel:0280147015">02 8014 7015</a></p>
        <p>Email: <a href="mailto:Admin@braidygroup.com.au">Admin@braidygroup.com.au</a></p>
        <p>Instagram: <a href="https://www.instagram.com/braidygroup/" target="_blank">@braidygroup</a></p>
      </div>

    </div>
  );
}
