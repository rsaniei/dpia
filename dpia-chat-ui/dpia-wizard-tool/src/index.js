import ReactDOM from 'react-dom';

import MainForm from './components/MainForm';

import './styles.css';

function App() {
  return <MainForm />;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
