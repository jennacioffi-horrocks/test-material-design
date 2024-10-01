import './index.css';
import './App.css'; 

// Material Design
import '@material/web/button/filled-button.js';

const App = () => {
  return (
    <div className="container">
      <h1>Material Web with TypeScript</h1>

      {/* Use the Material Web Button */}
      <md-filled-button className="md-filled-button" label="Click Me">
        Click Me
      </md-filled-button>
    </div>
  );
};

export default App;
