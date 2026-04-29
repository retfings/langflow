const MiniMaxSVG = (props) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    {...props}
  >
    <g fill={props.isDark ? "#ffffff" : "#00d4aa"} stroke="none">
      <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" />
      <path
        d="M50 25 L75 37 L75 63 L50 75 L25 63 L25 37 Z"
        fill={props.isDark ? "#00d4aa" : "#ffffff"}
      />
      <path d="M50 35 L65 42 L65 58 L50 65 L35 58 L35 42 Z" />
    </g>
  </svg>
);

export default MiniMaxSVG;
