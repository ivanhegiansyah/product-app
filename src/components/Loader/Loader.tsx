type Props = {
  className: string;
};

const Loader: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`bg-slate-200 w-full rounded-lg animate-pulse ${
        className ?? ''
      }`}
    />
  );
};

export default Loader;
