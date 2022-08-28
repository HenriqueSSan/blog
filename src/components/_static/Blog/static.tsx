import { useMemo, useRef, useState } from 'react';
import './static.style.scss';
import BlogsData from '../../../data/blogs-data';

interface SetBlogsCardsProps {
  title: string;
  date: string;
  description: string;
  favorite: boolean;
}

interface BlogProps {
  state: {
    search: string;
    setSearch: any;
  };
}

export function Blog({ state }: BlogProps) {
  const { search, setSearch } = state;

  const [blogsCards, setBlogsCards] = useState<SetBlogsCardsProps[]>(BlogsData);

  const filterBlog = useMemo(() => {
    const searchLowerCase = search.toLowerCase();

    return blogsCards.filter((blog) => blog.title.toLowerCase().includes(searchLowerCase));
  }, [search]);

  return (
    <section>
      <div className="containers">
        {filterBlog.map((blogs, index) => {
          return (
            <div key={index} className="cards">
              <div className="cards-container">
                <div className="card-header">
                  <span>
                    {new Intl.DateTimeFormat('pt', {
                      day: 'numeric',
                      year: 'numeric',
                      month: 'short'
                    })
                      .format(new Date(blogs.date).setDate(2))
                      .toString()}
                  </span>
                  <div
                    className="box-icon"
                    onClick={() => {
                      blogsCards[index].favorite = !blogs.favorite;
                      setBlogsCards([...blogsCards]);
                    }}
                  >
                    <i
                      className={`icon ${
                        blogs.favorite === false
                          ? 'bx bx-heart fs-md'
                          : 'bx bxs-heart clr-red fs-lg'
                      }`}
                    ></i>
                  </div>
                </div>

                <article>
                  <h2>{blogs.title}</h2>
                  <p>{blogs.description}</p>
                </article>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
