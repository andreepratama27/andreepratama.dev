import "../../styles/main.css";

const Navbar = () => {
  return (
    <nav class="w-full bg-zinc-50 py-4 px-2">
      <div class="layout nav-wrapper flex flex-wrap justify-between items-center mx-auto">
        <div class="brand font-semi">
          <a href="/">andreepratama.dev</a>
        </div>
        <div class="menu">
          <ul class="flex gap-6">
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="#">Tentang Saya</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar