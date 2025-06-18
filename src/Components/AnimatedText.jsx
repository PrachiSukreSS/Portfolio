const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="animate-slideUp">{text}</div>
    </div>
  );
};

export default AnimatedText;
