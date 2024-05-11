import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { apiDeleteContact } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onDeleteContact = (userId) => {
    dispatch(apiDeleteContact(userId));
  };

  return (
    <li className={css.item}>
      <p className={css.text}>👤 {name}</p>
      <p className={css.text}>📞 {number}</p>
      <button
        className={css.btn}
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
