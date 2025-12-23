const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-slate-900 background-blur-md">
      <div className="p-3 animate-spin bg-linear-to-bl from-pink-400 via-purple-400 to-indigo-600 h-25 w-25 rounded-full">
        <div className="rounded-full h-full w-full bg-slate-900 background-blur-md" />
      </div>
    </div>
  );
};

export default Loader;
