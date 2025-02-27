import Link from "next/link";

export default function Navbar() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <div className="flex-shrink-0">
          <Link href="#" className="flex items-center">
            <span className="text-yellow-400 font-bold text-2xl">AMERA</span>
          </Link>
        </div>

       

        <div className="md:hidden">
          <button
            type="button"
            className="mobile-menu-button text-gray-200 hover:text-yellow-400"
            aria-label="Toggle menu"
            aria-expanded="false"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
