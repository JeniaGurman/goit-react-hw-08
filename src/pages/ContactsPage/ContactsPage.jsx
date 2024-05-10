import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import css from "./ContactsPage.module.css";
import { Helmet } from "react-helmet-async";

const ContactsPage = () => {
  return (
    <div className={css.wrapper}>
      <Helmet>
        <title>Contacts Page</title>
      </Helmet>
      <h2 className={css.heading}>Add new contact</h2>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
