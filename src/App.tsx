import styles from "./styles.module.scss";
import { Header } from "./components";
import { Panel } from "./components";

export const App = () => {
  return (
    <>
      <div className={styles.app}>
        <Header />
        <Panel />
      </div>
    </>
  );
};
