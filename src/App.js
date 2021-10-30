import './App.css';
import Styles from './style.module.css';
import InputBox from './components/InputBox';
import AddButton from './components/AddButton';
import List from './components/TodoList';

function App() {
  return (
    <div className={Styles.contentWrapper}>
      <div className={Styles.container}>
        <h1>To-Do-App!</h1>
        <h3>Add new To-Do</h3>
        <div className={Styles.todoSection}>
        <div className={Styles.addSection}>
          <List/>
          <InputBox/>
          <AddButton/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
