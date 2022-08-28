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
      <header className="l-header">
        <div className="l-header__container container" aria-label="header__container container">
          <div className="l-header__titles">
            <h1 className="l-header__title">Codelândia</h1>
            <h2 className="l-header__subtitle">Blog</h2>
          </div>
          <nav className="nav" aria-label="nav">
            <div aria-label="nav__search">
              {/* {<i className="bx bx-search"></i>} */}
              <input
                className="nav__input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Pesquisar no blog"
              />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
