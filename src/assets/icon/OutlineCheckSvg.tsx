interface OutlineCheckProps {
  onClick?: () => void;
}

const OutlineCheck = ({ onClick }: OutlineCheckProps) => {
  return (
    <div onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "100%",
          height: "100%",
          border: "inherit",
          borderRadius: "6px",
          boxSizing: "content-box",
        }}
      >
        <rect x="0.884277" width="24" height="24" rx="8" fill="white" />
        <rect
          x="1.38428"
          y="0.5"
          width="23"
          height="23"
          rx="7.5"
          stroke="black"
          strokeOpacity="0.1"
        />
        <g clipPath="url(#clip0_4664_1418)">
          <path
            d="M9.88425 16.17L5.71425 12L4.29425 13.41L9.88425 19L21.8843 7L20.4743 5.59L9.88425 16.17Z"
            fill="black"
            fillOpacity="0.1"
          />
        </g>
        <defs>
          <clipPath id="clip0_4664_1418">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0.884277)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default OutlineCheck;
