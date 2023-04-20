import PropTypes from 'prop-types';
import css from './ContactForm.module.css'

const ContactForm = ({onSubmit}) => {
    return <form onSubmit={onSubmit} className={css.contactForm}>
    <label className={css.contactInputData}>
        Name
    <input
        type="text"
        name="name" 
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        className={css.contactInputItem}
        required
        />
    </label>
    <label className={css.contactInputData}>
        Number
    <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" 
        className={css.contactInputItem}
        required
    />
    </label>
    <button type="submit" className={css.submitNewContact}>Add contact</button>
    </form>
}

export default ContactForm;

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

