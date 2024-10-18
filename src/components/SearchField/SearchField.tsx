import { FaSearch } from 'react-icons/fa';

type Props = {
  placeholder: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value: string;
};

const SearchField: React.FC<Props> = ({
  placeholder,
  className,
  onChange,
  onKeyDown,
  value,
}) => {
  return (
    <div className="relative items-center w-1/3 h-10 text-black rounded-[8px] px-3 leading-tight hidden md:flex bg-white border border-slate-400">
      <div className="w-full h-full">
        <input
          name="search"
          className={`w-full h-full focus:outline-none bg-transparent placeholder:text-[#8F95B2] text-sm ${className}`}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={value}
        />
      </div>
      <div className="flex items-center justify-center right-0 pl-2">
        <FaSearch className="text-slate-400" />
      </div>
    </div>
  );
};

export default SearchField;
