import "./timer-digits.component.style.scss";

const TimerDigits = (props) => {
  const { isMilliSeconds, updatedTime } = props;
  return (
    <div>
      {isMilliSeconds ? (
        <p className="timer-digits">
          {`${updatedTime}` < 10 ? "0" + `${updatedTime}` : `${updatedTime}`}
        </p>
      ) : (
        <p className="timer-digits">
          {`${updatedTime}` < 10 ? "0" + `${updatedTime}` : `${updatedTime}`}:
        </p>
      )}
    </div>
  );
};

export default TimerDigits;
