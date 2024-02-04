import styles from "./Card.module.css";

export const Card = ({ item, openModal }) => {
  return (
    <li className={styles.listItem} onClick={() => openModal(item)}>
      <div className={styles.imgCont}>
        <img
          className={styles.img}
          src={item.urls.small}
          alt={item.alt_description}
        />
      </div>
    </li>
  );
};
