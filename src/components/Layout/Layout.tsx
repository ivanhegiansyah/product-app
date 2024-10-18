import Header from '../Header/Header';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="sticky top-0 z-10">
        <Header />
      </div>
      <div
        className={` 'w-full h-full xl:w-[1200px] px-4 xl:px-0 mx-auto mt-5'
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
