import { useState } from "react";

export default function Navbar({ 
  title = "My Portfolio", 
  links = [], 
  showMobileMenu = true 
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Sort links by order if specified
  const sortedLinks = [...links].sort((a, b) => (a.order || 0) - (b.order || 0));
  
  // Filter links for mobile menu
  const mobileLinks = sortedLinks.filter(link => link.showOnMobile !== false);

  return (
    <nav className="fixed top-0 w-full z-50 text-white shadow-md" style={{ background: "#0f172a" }}>
      <div className="flex items-center justify-between py-4 px-6 md:px-12">
        {/* Logo */}
        <h1 className="text-lg sm:text-xl font-bold tracking-wide whitespace-nowrap">
          {title}
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium" style={{ paddingRight: "2rem" }}>
          {sortedLinks.map((link, idx) => (
            <li key={idx}>
              <a 
                href={link.href} 
                className="hover:text-purple-400 transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        {showMobileMenu && (
          <div className="md:hidden">
            <button 
              className="text-white focus:outline-none hover:text-purple-400 transition-colors duration-200"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700">
          <ul className="px-6 py-4 space-y-4">
            {mobileLinks.map((link, idx) => (
              <li key={idx}>
                <a 
                  href={link.href} 
                  className="block text-white hover:text-purple-400 transition-colors duration-200 py-2"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
