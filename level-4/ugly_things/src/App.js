import './App.css';
import './components/Header'
import Header from './components/Header';
import Form from './components/Form';
import UglyThingList from './components/UglyThingList';
import { UglyThingsProvider } from './components/UglyThingsContext';

function App() {
  return (
    <UglyThingsProvider>
      <div className="App">
        <Header title="UGLY THINGS" />
        <Form />
        <UglyThingList />
      </div>
    </UglyThingsProvider>
  );
}

export default App;
