import "./button.component.style.scss";

const Button = ({ children, onClickFunction }) => {
  return (
    <button className="button" onClick={onClickFunction}>
      {children}
    </button>
  );
};

export default Button;
