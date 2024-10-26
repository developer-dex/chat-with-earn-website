import { CSSProperties, ReactNode } from "react";

interface Button {
  title?: string;
  className?: string;
  type: "submit" | "reset" | "button" | undefined;
  loading?: boolean;
  disabled?: boolean;
  style?: CSSProperties | undefined;
  onClick?: () => void;
  children?: ReactNode;
}

const CustomButton = ({
  title = "",
  className = "",
  type = "button",
  children,
  loading = false,
  disabled = false,
  onClick = () => {},
  style,
}: // ...props
Button) => {
  return (
    <button
      title={title ? title : ""}
      className={className}
      onClick={onClick}
      type={type}
      style={style}
      disabled={disabled || loading}
      // {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
