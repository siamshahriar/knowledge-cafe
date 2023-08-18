import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./components/Header/Header";
import FullContent from "./components/content/FullContent/FullContent";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <FullContent></FullContent>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
