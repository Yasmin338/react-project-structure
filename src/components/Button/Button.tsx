interface ButtonProps {
  text: string;
  onClick: () => void;
  variant: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

function Button({ text, onClick, variant, disabled = false }: ButtonProps) {
  return (
    <button
      className={`button button-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
