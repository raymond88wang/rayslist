// Import data

// Import components
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./sidebar"
import SearchBar from "./searchbar"
import Directory from "./directory"
import Gallery from "./gallery"

function App(){
  return (
    <div>
      <h1>rayslist</h1>
      <div className="App">
        <div class="left">
          <Sidebar />
        </div>
        <div class="right">
          <SearchBar />
          <Directory />
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default App;
