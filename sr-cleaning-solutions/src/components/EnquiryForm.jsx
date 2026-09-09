"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "919494239260";
const WEB3FORMS_ACCESS_KEY = "a3a33b44-39bb-423d-92e4-b390830a2132";

export default function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const whatsappMessage =
      `Hello SR Cleaning Solutions,\n\n` +
      `I would like to enquire about your cleaning services.\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Enquiry: ${form.message}`;

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(whatsappMessage);

    const formData = new FormData();

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Cleaning Service Enquiry");
    formData.append("from_name", "SR Cleaning Solutions Website");
    formData.append("name", form.name);
    formData.append("phone", form.phone);
    formData.append("message", form.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus(
          "Thank you! Your enquiry has been submitted. WhatsApp will open next."
        );

        setForm({
          name: "",
          phone: "",
          message: "",
        });

        window.open(whatsappUrl, "_blank");
      } else {
        setStatus(
          "We could not submit your enquiry. Please try again or contact us on WhatsApp."
        );
      }
    } catch (error) {
      console.error("Enquiry submission error:", error);

      setStatus(
        "Something went wrong. Please try again or contact us on WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="enquiry"
      className="bg-[#eef8ff] px-5 py-16 sm:px-6 md:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <div className="rounded-[28px] border border-[#d8e8f8] bg-white p-6 shadow-[0_18px_45px_rgba(3,27,96,0.10)] sm:p-8 md:p-10">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#00A3E0]">
              Enquiry
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#031B60] sm:text-4xl">
              Enquire About Our Cleaning Services
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#506482] sm:text-base">
              Send us your details and enquiry. We will receive your enquiry
              by email, and WhatsApp will open with your message ready to send.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="enquiry-name"
                className="mb-2 block text-sm font-semibold text-[#031B60]"
              >
                Name
              </label>

              <input
                id="enquiry-name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full rounded-xl border border-[#cfe1f0] bg-white px-4 py-3.5 text-sm text-[#031B60] outline-none transition focus:border-[#00A3E0] focus:ring-2 focus:ring-[#00A3E0]/15"
              />
            </div>

            <div>
              <label
                htmlFor="enquiry-phone"
                className="mb-2 block text-sm font-semibold text-[#031B60]"
              >
                Phone Number
              </label>

              <input
                id="enquiry-phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="Your Phone Number"
                className="w-full rounded-xl border border-[#cfe1f0] bg-white px-4 py-3.5 text-sm text-[#031B60] outline-none transition focus:border-[#00A3E0] focus:ring-2 focus:ring-[#00A3E0]/15"
              />
            </div>

            <div>
              <label
                htmlFor="enquiry-message"
                className="mb-2 block text-sm font-semibold text-[#031B60]"
              >
                Message
              </label>

              <textarea
                id="enquiry-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us about the cleaning service you need..."
                className="w-full resize-none rounded-xl border border-[#cfe1f0] bg-white px-4 py-3.5 text-sm text-[#031B60] outline-none transition focus:border-[#00A3E0] focus:ring-2 focus:ring-[#00A3E0]/15"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex min-h-[52px] w-full items-center justify-center rounded-full bg-[#031B60] px-6 py-4 text-sm font-bold text-white shadow-[0_10px_25px_rgba(3,27,96,0.15)] transition-all duration-300 hover:bg-[#00A3E0] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>
          </form>

          {status && (
            <p
              className="mt-5 rounded-xl bg-[#f4faff] px-4 py-3 text-center text-sm font-medium text-[#031B60]"
              role="status"
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}