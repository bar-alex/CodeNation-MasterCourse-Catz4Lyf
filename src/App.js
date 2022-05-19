
import './App.css';
import DisplayList from './DisplayList'
import DisplayHeader from './DisplayHeader'
import DisplayFooter from './DisplayFooter'



function App() {



  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

      <DisplayHeader />
      
      <DisplayList />

      <DisplayFooter />

    </div>
  );
}

export default App;
