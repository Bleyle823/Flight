import { useHuddle01Web } from "@huddle01/react/hooks";

interface Props {
  children: string | JSX.Element | React.ReactNode;
  className?: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ children, className, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`glassButton h-10 w-auto flex items-center justify-center text-sm rounded-xl font-bold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
