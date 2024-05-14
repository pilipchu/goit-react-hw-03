import css from "./SearchBox.module.css";
export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.conte}>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
