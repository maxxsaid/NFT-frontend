import "./styles.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home></Home>
    </div>
  );
}

export default App;
