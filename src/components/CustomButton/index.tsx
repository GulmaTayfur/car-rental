import { ButtonProps } from "../../types";

const CustomButton = ({
  title,
  btnType,
  designs,
  rIcon,
  handleClick,
}: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      type={btnType || "button"}
      className={`custom-btn bg-[#2b59ff] rounded-full hover:bg-blue-800 transition text-white ${designs}`}
    >
      <span>{title}</span>
      {rIcon && (
        <div className="relative w-6 h-6">
          <img src={rIcon} alt="right-arrow" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
