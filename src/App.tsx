import { useState } from "react";
import classes from "./app.module.css";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <h1>Testing React App with Jest</h1>
        <div className={classes.total}>
          Total: <span>{count}</span>
        </div>
        <div className={classes.buttonWrapper}>
          <button
            className={classes.button}
            onClick={() => setCount((prev) => prev + 1)}
          >
            Add
          </button>
          <button
            className={classes.button}
            onClick={() => setCount((prev) => prev - 1)}
          >
            Sub
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
