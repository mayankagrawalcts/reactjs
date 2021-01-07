import './App.css';
import FirstComponent from "./components/parts/FirstComponent";
import SecondComponent from "./components/parts/SecondComponent";
import Counter from "./components/parts/Counter";

function App() {
    return (
        <div className="App">
            Lear React
            <FirstComponent>Demo</FirstComponent>
            <SecondComponent></SecondComponent>
            <Counter by={5} name={"counter+5"}></Counter>
            <Counter by={2} name={"counter+2"}></Counter>
            <Counter by={1} name={"counter+1"}></Counter>
        </div>
    );
}

export default App;
