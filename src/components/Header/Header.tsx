import {
  Link,
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import SearchField from '../SearchField/SearchField';
import { FaOpencart } from 'react-icons/fa';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q');
  const [search, setSearch] = useState<string>('');

  const onSearchKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event?.key === 'Enter') {
      navigate({
        pathname: '/search',
        search: createSearchParams({
          q: search,
        }).toString(),
      });
    }
  };

  useEffect(() => {
    if (q) {
      setSearch(q);
    }
  }, []);

  return (
    <>
      <div className="bg-white border border-b-2 border-b-slate-300 flex justify-between items-center px-8 lg:px-32 xl:px-48 py-4">
        <div className="font-bold text-2xl">
          <Link to={`/`}>
            <div className="flex items-center justify-center space-x-2">
              <FaOpencart />
              <span>Product</span>
            </div>
          </Link>
        </div>
        <SearchField
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(event) => onSearchKeyDown(event)}
          value={search}
        />
        <ul className="flex space-x-10 font-medium">
          <li title="UI only">
            <Link to={'/'}>Bookmark</Link>
          </li>
          <li title="UI only">
            <Link to={'/'}>Wishlist</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
