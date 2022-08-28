import './styles/Global.scss';
import { Navbar } from '../components/_static/Navbar/static';
import { Blog } from '../components/_static/Blog/static';
import { useState } from 'react';

export function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="window">
      <Navbar state={{ search, setSearch }} />
      <main>
        <Blog state={{ search, setSearch }} />
      </main>
    </div>
  );
}
