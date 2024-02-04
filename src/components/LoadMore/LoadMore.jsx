import styles from "./LoadMore.module.css";

export const LoadMore = ({ handleLoadMore }) => {
  return (
    <div className={styles.btnCont}>
      <button className={styles.btn} onClick={handleLoadMore}>
        Load more
      </button>
    </div>
  );
};
