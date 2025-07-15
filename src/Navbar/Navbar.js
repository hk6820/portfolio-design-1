export default function Navbar({ title = "My Portfolio", links = [] }) {
  return (
    <nav className="fixed top-0 w-full z-50 text-white shadow-md" style={{ background: "#0f172a" }}>
      <div className="flex items-center justify-between py-4 px-6 md:px-12">
        {/* Logo */}
        <h1 className="text-lg sm:text-xl font-bold tracking-wide whitespace-nowrap">
          {title}
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium" style={{ paddingRight: "2rem" }}>
          {links.map((link, idx) => (
            <li key={idx}>
              <a href={link.href} className="hover:text-purple-400">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button Placeholder */}
        {/* <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div> */}
      </div>
    </nav>
  );
}
