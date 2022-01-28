import './App.css';
import './components/Header'
import Header from './components/Header';
import Form from './components/Form';
import SaveForm from './components/SaveForm';
import UglyThingList from './components/UglyThingList';
import { UglyThingsProvider } from './components/UglyThingsContext';

function App() {
  return (
    <UglyThingsProvider>
      <div className="App">
        <Header title="UGLY THINGS" />
        <Form />
        <SaveForm />
        <UglyThingList />
      </div>
    </UglyThingsProvider>
  );
}

export default App;
