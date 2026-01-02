

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 z-[-1]">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-tertiary animate-gradient-x" />
      <div className="absolute inset-0 bg-[url('/src/assets/noise.svg')] opacity-10" />
    </div>
  );
};

export default AnimatedBackground;
