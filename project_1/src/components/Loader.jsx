const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-slate-900 background-blur-md">
      <div className="p-3 animate-spin bg-linear-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-35 md:h-35 h-30 w-30 rounded-full">
        <div className="rounded-full h-full w-full bg-slate-900 background-blur-md" />
      </div>
    </div>
  );
};

export default Loader;
