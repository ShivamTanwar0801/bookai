import ButtonSvg from "../assets/ButtonSvg";

const Button = ({ className, href, children, onClick, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-n-3 ${
    className || ""
  } ${px || "px-7"} ${white ? "text-n-2" : "text-n-1"}`;

  const spanClasses = `relative z-[10]`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
