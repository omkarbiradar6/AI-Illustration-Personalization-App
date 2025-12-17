import UploadCard from "./components/UploadCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>AI Illustration Personalization</h1>
      <p className="subtitle">
        Upload a photo and generate a personalized illustration
      </p>
      <UploadCard />
    </div>
  );
}

export default App;
