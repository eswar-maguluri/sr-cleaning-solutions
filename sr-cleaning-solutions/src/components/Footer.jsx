export default function Footer() {
  return (
    <footer className="bg-[#050b14] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white">
            SR Cleaning
            <span className="text-yellow-400">
              {" "}Solutions
            </span>
          </h3>
          <p className="text-slate-400 mt-4 max-w-md mx-auto">
            Premium residential cleaning with exceptional
            attention to detail and customer care.
          </p>
          <div className="mt-8 space-y-3">
            <a
              href="tel:+919494239260"
              className="block text-white"
            >
              📞 +91 9494239260
            </a>
            <a
              href="https://wa.me/919494239260"
              className="block text-white"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-slate-500">
          © 2026 SR Cleaning Solutions
        </div>
      </div>
    </footer>
  );
}