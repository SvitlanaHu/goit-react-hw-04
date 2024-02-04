import styles from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { IoSearch } from "react-icons/io5";

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.elements.query.value.trim() === "") {
      toast.error("EMPTY STRING!");
      return;
    }
    onSearch(e.target.elements.query.value);
    e.target.reset();
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.container}>
          <input
            className={styles.input}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={styles.btn} type="submit">
            <IoSearch className={styles.icon} />
          </button>
        </div>
      </form>
    </header>
  );
};
