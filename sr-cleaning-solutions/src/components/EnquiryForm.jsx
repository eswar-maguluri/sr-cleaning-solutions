"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const WHATSAPP_NUMBER = "919494239260";

// KEEP YOUR EXISTING WORKING WEB3FORMS ACCESS KEY HERE.
const WEB3FORMS_ACCESS_KEY =
  "a3a33b44-39bb-423d-92e4-b390830a2132";

export default function EnquiryForm({
  isOpen,
  onClose,
  selectedService = "",
}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  /* =========================================================
     ESCAPE KEY + BACKGROUND SCROLL CONTROL
  ========================================================= */

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  /* =========================================================
     RESET STATUS WHEN SERVICE CHANGES
  ========================================================= */

  useEffect(() => {
    if (isOpen) {
      setStatus("");
    }
  }, [isOpen, selectedService]);

  /* =========================================================
     INPUT CHANGE
  ========================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================================================
     FORM SUBMISSION
  ========================================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const serviceName =
      selectedService || "General Enquiry";

    const whatsappMessage =
      `Hello SR Cleaning Solutions,\n\n` +
      `I would like to enquire about your cleaning services.\n\n` +
      `Service: ${serviceName}\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Enquiry: ${form.message}`;

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(whatsappMessage);

    const formData = new FormData();

    formData.append(
      "access_key",
      WEB3FORMS_ACCESS_KEY
    );

    formData.append(
      "subject",
      `New Cleaning Service Enquiry - ${serviceName}`
    );

    formData.append(
      "from_name",
      "SR Cleaning Solutions Website"
    );

    formData.append(
      "service",
      serviceName
    );

    formData.append(
      "name",
      form.name
    );

    formData.append(
      "phone",
      form.phone
    );

    formData.append(
      "message",
      form.message
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

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

        window.open(
          whatsappUrl,
          "_blank"
        );
      } else {
        setStatus(
          "We could not submit your enquiry. Please try again or contact us on WhatsApp."
        );
      }
    } catch (error) {
      console.error(
        "Enquiry submission error:",
        error
      );

      setStatus(
        "Something went wrong. Please try again or contact us on WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  /* =========================================================
     MODAL CLOSED
  ========================================================= */

  if (!isOpen) {
    return null;
  }

  /* =========================================================
     MODAL
  ========================================================= */

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-[#031B60]/60
        px-4
        py-6
        backdrop-blur-sm
      "
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="
          relative
          max-h-[92vh]
          w-full
          max-w-2xl
          overflow-y-auto
          rounded-[28px]
          border
          border-[#d8e8f8]
          bg-white
          p-6
          shadow-[0_25px_80px_rgba(3,27,96,0.25)]
          sm:p-8
          md:p-10
        "
      >
        {/* ===================================================
            CLOSE BUTTON
        ==================================================== */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close enquiry form"
          className="
            absolute
            right-4
            top-4
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-[#d8e8f8]
            bg-white
            text-[#031B60]
            transition-all
            duration-200
            hover:border-[#00A3E0]
            hover:bg-[#eef8ff]
            hover:text-[#00A3E0]
          "
        >
          <X size={20} />
        </button>

        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="pr-10 text-center">
          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#00A3E0]
            "
          >
            Enquiry
          </p>

          <h2
            id="enquiry-modal-title"
            className="
              mt-3
              text-2xl
              font-extrabold
              tracking-tight
              text-[#031B60]
              sm:text-3xl
            "
          >
            Enquire About Our Cleaning Services
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-[#506482]
            "
          >
            Send us your details and enquiry. We will
            receive your enquiry by email, and WhatsApp
            will open with your message ready to send.
          </p>
        </div>

        {/* ===================================================
            FORM
        ==================================================== */}

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          {/* NAME */}

          <div>
            <label
              htmlFor="enquiry-name"
              className="
                mb-2
                block
                text-sm
                font-semibold
                text-[#031B60]
              "
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
              className="
                w-full
                rounded-xl
                border
                border-[#cfe1f0]
                bg-white
                px-4
                py-3.5
                text-sm
                text-[#031B60]
                outline-none
                transition
                focus:border-[#00A3E0]
                focus:ring-2
                focus:ring-[#00A3E0]/15
              "
            />
          </div>

          {/* PHONE */}

          <div>
            <label
              htmlFor="enquiry-phone"
              className="
                mb-2
                block
                text-sm
                font-semibold
                text-[#031B60]
              "
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
              className="
                w-full
                rounded-xl
                border
                border-[#cfe1f0]
                bg-white
                px-4
                py-3.5
                text-sm
                text-[#031B60]
                outline-none
                transition
                focus:border-[#00A3E0]
                focus:ring-2
                focus:ring-[#00A3E0]/15
              "
            />
          </div>

          {/* SELECTED SERVICE */}

          <div>
            <label
              htmlFor="enquiry-service"
              className="
                mb-2
                block
                text-sm
                font-semibold
                text-[#031B60]
              "
            >
              Service
            </label>

            <input
              id="enquiry-service"
              type="text"
              value={
                selectedService ||
                "General Enquiry"
              }
              readOnly
              className="
                w-full
                rounded-xl
                border
                border-[#cfe1f0]
                bg-[#f4faff]
                px-4
                py-3.5
                text-sm
                font-semibold
                text-[#031B60]
                outline-none
              "
            />
          </div>

          {/* MESSAGE */}

          <div>
            <label
              htmlFor="enquiry-message"
              className="
                mb-2
                block
                text-sm
                font-semibold
                text-[#031B60]
              "
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
              className="
                w-full
                resize-none
                rounded-xl
                border
                border-[#cfe1f0]
                bg-white
                px-4
                py-3.5
                text-sm
                text-[#031B60]
                outline-none
                transition
                focus:border-[#00A3E0]
                focus:ring-2
                focus:ring-[#00A3E0]/15
              "
            />
          </div>

          {/* SUBMIT */}

          <button
            type="submit"
            disabled={loading}
            className="
              flex
              min-h-[52px]
              w-full
              items-center
              justify-center
              rounded-full
              bg-[#031B60]
              px-6
              py-4
              text-sm
              font-bold
              text-white
              shadow-[0_10px_25px_rgba(3,27,96,0.15)]
              transition-all
              duration-300
              hover:bg-[#00A3E0]
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {loading
              ? "Sending..."
              : "Submit Enquiry"}
          </button>
        </form>

        {/* ===================================================
            STATUS
        ==================================================== */}

        {status && (
          <p
            className="
              mt-5
              rounded-xl
              bg-[#f4faff]
              px-4
              py-3
              text-center
              text-sm
              font-medium
              text-[#031B60]
            "
            role="status"
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
}