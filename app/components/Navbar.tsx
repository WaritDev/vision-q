import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 fixed top-0 z-50 shadow-sm">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">
          KHAI-TOM
        </Link>
      </div>
      <div className="navbar-end">
        <Link href="#concept" className="btn btn-ghost">
          Concept
        </Link>
        <Link href="#map" className="btn btn-ghost">
          Map
        </Link>
        <Link href="#apis" className="btn btn-ghost">
          APIs
        </Link>
      </div>
    </div>
  );
};

export default Navbar;