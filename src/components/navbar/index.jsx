const Navbar = () => {
  return (
    <nav class="w-full py-4 px-10 bg-zinc-50">
      <div class="nav-wrapper flex items-center justify-between">
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