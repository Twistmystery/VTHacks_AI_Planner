import './App.css';
import Images from './components/images';
import TextInput from './components/TextInput';

function App() {
  return (
    <div className="App">
      <h1>Welcome, User, to ManAzure!</h1>
      <Images></Images>
      <div className='input-container'>
        <TextInput></TextInput>
        
      </div>
      
    </div>
  );
}

export default App;
