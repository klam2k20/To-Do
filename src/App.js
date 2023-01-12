import "./styles/App.css";
import AppHeader from "./components/AppHeader";
import PageTitle from "./components/PageTitle";

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>TODO LIST</PageTitle>
        <div className="app">
          <AppHeader />
        </div>
      </div>
    </>
  );
}

export default App;
