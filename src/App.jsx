import './App.css';
import { EmptyText } from './components/EmptyText';
import { MedalForm } from './components/MedalForm';
import { MedalList } from './components/MedalList';

function App() {
  return (
    <>
      <MedalForm />
      <EmptyText />
      <MedalList />
    </>
  );
}

export default App;
