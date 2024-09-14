import logo from './logo.svg';
import './App.css';
import Images from './components/images';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <div className="App">
      <h1>Welcome, User, to ManAzure!</h1>
      <Images></Images>
      <div>
      <TextField id="filled-basic" label="Filled" variant="filled" />
      </div>
      <p>Suggested prompts</p>
      <p>"I have a stats test next week"</p>
      <p>"Remind me to study for my bio exam tomorrow"</p>
    </div>
  );
}

export default App;
