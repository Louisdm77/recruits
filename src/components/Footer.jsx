export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-xl font-bold">
              Apex Career Partners
            </h3>

            <p className="mt-4 text-gray-300">
              Connecting top talent with leading
              employers worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2">
              <li>Home</li>
              <li>Jobs</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Contact
            </h4>

            <p>info@apexrecruiters.com</p>
            <p>+1 (555) 123-4567</p>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-8 pt-6 text-center">
          © 2026 Apex Career Partners
        </div>

      </div>
    </footer>
  );
}