import './App.css';
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import RecommendedVideos from "./RecommendedVideos.js";

function App() {
  return (
    <div className="App">  
     <Header />
     <div className="app-page">
      <Sidebar /> 
      <RecommendedVideos />
     </div>
    </div>
  );
}

export default App;
