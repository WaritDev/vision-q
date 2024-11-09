import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 fixed top-0 z-50 shadow-sm">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">
          ElderVision
        </Link>
      </div>
      <div className="navbar-end">
        <Link href="#concept" className="btn btn-ghost">
          Concept
        </Link>
      </div>
    </div>
  );
};

export default Navbar;