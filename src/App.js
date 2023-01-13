import "./styles/App.css";
import PageTitle from "./components/PageTitle";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>TODO LIST</PageTitle>
        <div className="app">
          <AppHeader />
          <AppContent />
        </div>
      </div>
    </>
  );
}

export default App;
