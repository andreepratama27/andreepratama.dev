import "../../styles/main.css";

const Logo = () => {
  return (
    <div className="logo bg-zinc-50">
      <a href="/">andreepratama.dev</a>
    </div>
  )
}

const Navbar = () => {
  return (
    <nav className="w-full px-3 py-6 bg-zinc-50 fixed navbar-fixed">
      <div className="flex flex-wrap items-center justify-between max-w-2xl mx-auto layout nav-wrapper">
        <div className="brand font-semi">
          <Logo />
        </div>
        <div className="menu">
          <ul className="flex gap-6">
            <li>
              <a href="/blog" className="px-8 py-2 border border-b-4 border-black">.Blog</a>
            </li>
            <li>
              <a href="/about" className="px-8 py-2 border border-b-4 border-black">.AboutMe</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar