import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
      <div>
        <h1 className={styles.title}>테스트</h1>
        <Button text={"버튼"} />
      </div>
  );
}

export default App;
