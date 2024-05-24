import { HTMLAttributes } from "react";

interface BackArrowProps extends HTMLAttributes<SVGSVGElement> {}

const BackArrow = ({ onClick }: BackArrowProps) => {
  return (
    <svg
      onClick={onClick}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.58331 16L4.41201 15.063L3.66238 16L4.41201 16.9371L5.58331 16ZM26.4166 17.5C27.2451 17.5 27.9166 16.8285 27.9166 16C27.9166 15.1716 27.2451 14.5 26.4166 14.5V17.5ZM12.7453 4.64633L4.41201 15.063L6.75462 16.9371L15.0879 6.52042L12.7453 4.64633ZM4.41201 16.9371L12.7453 27.3538L15.0879 25.4797L6.75462 15.063L4.41201 16.9371ZM5.58331 17.5H26.4166V14.5H5.58331V17.5Z"
        fill="white"
      />
    </svg>
  );
};

export default BackArrow;
