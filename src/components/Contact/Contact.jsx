import { FaUserAlt } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import css from "./Contact.module.css";
export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.contenar}>
      <div className={css.contData}>
        <p className={css.page}>
          <FaUserAlt className={css.iconUser} size="20" />
          {name}
        </p>
        <p className={css.page}>
          <ImPhone className={css.iconPhone} size="20" />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
