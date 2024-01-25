import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div>
        <h3 className={styles.contact_title}>Let’s talk.</h3>
        <p className={styles.contact_text}>
          New projects, freelance inquiry or even a coffee.
        </p>
      </div>
      <div className={styles.contact_fields}>
        <div className={styles.field}>
          <label for="name" className={styles.field_title}>
            Name
          </label>
          <input className={styles.field_input} type="text" id="name" />
        </div>
        <div className={styles.field}>
          <label for="email" className={styles.field_title}>
            Email
          </label>
          <input className={styles.field_input} type="text" id="email" />
        </div>
        <div className={styles.field}>
          <label for="message" className={styles.field_title}>
            Message
          </label>
          <textarea className={styles.field_texterea}id="message"></textarea>
        </div>
      </div>
      <button className={styles.contact_btn}>Send Message</button>
    </div>
  );
};

export default Contact;
