import logo from './logo.svg';
import './App.css';
import FirstComponent from "./components/parts/FirstComponent";
import SecondComponent from "./components/parts/SecondComponent";
import Counter from "./components/parts/Counter";

function App() {
  return (
    <div className="App">
      Lear React
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
      <Counter></Counter>
    </div>
  );
}

export default App;
