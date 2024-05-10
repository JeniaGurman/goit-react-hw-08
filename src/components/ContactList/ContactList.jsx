import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import {
  selectContactsError,
  selectContactsLoading,
} from "../../redux/contacts/selectors";
import { selectVisibleContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const loading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  return (
    <>
      {loading && <Loader />}
      {error && <p>Oops, something went wrong, please reload the page!</p>}
      <ul className={css.list}>
        {filteredContacts.length === 0 && (
          <p className={css.text}>You have no added contacts yet!</p>
        )}
        {filteredContacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
