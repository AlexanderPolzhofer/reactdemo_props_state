import './App.css';
import Vote from "./components/Vote";

function App() {
  return (
    <div class="wrapper">
      <div class="App-header">
        <div class="heading">
          <h1>props and state</h1>
        </div>
      </div>

      <div class="app-container">
        <Vote candidate="X" country="Italy" />
        <Vote candidate="Y" country="Austria" />
        <Vote candidate="Z" country="Switzerland" />
      </div>
    </div>
  )
}

export default App;
