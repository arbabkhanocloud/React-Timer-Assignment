import "./App.css";
import Timer from "./component/timer/timer.component";
const App = () => {
  return (
    <div className="App">
      <div className="app-title">
        <p className="timer-title">Timer Watch</p>
      </div>
      <Timer />
    </div>
  );
};

export default App;
