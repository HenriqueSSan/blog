import './static-style.scss';

interface NavbarProps {
  state: {
    search: string;
    setSearch: any;
  };
}

export function Navbar({ state }: NavbarProps) {
  const { search, setSearch } = state;

  return (
    <>
      <header>
        <div className="container" aria-label="header__container container">
          <div className="group" aria-label="titles__group">
            <h1>Codelândia</h1>
            <h2>Blog</h2>
          </div>
          <nav className="navigation" aria-label="nav">
            <div aria-label="nav__search">
              <i className="bx bx-search"></i>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Pesquisar no blog"
                aria-label="nav__input"
              />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
