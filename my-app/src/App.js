import './App.css';
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";

function App() {
  return (
      <>
          <div className="wrapper">
            <Header/>
          </div>
          <div className="page">
            <Aside/>

              <Main/>
          </div>
      </>
  );
}

export default App;
