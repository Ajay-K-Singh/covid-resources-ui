import s from './app.module.scss';
import MainContainer from './components/Main';

function App() {
  return (
    <div className={s.app}>
      <h1>Covid Relief Resources</h1>
      <MainContainer />
    </div>
  );
}

export default App;
