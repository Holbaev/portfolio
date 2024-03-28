import React, { useState } from "react";
import styles from "./Contact.module.scss";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";


const Contact = () => {
  // states
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [required, setRequired] = useState(false);
  const [loading, setLoading] = useState(false);


  // functions
  const sendEmail = async () => {
    const serviceId = "service_90xjcsj";
    const templateId = "template_ql99af8";
    const publicKey = "WOHXWWQ3wOpvF-0uy";
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Aiba",
        message: message,
      },
    };
    if (name === "" || email === "" || message === "") {
      setRequired(true);
      toast.warning("Fill in all required fields.");
    } else {
      try {
        setLoading(true);
        const res = await axios.post(
          "https://api.emailjs.com/api/v1.0/email/send",
          data
        );
        toast.success("Message sent successfully.");
        setEmail("");
        setMessage("");
        setName("");
        setRequired(false)
      } catch (err) {
        console.log(err);
      }finally{
        setLoading(false);
      }
    }
  };
  const setState = (value , setState) =>{
    setState(value);
  }
  return (
    <>
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
            <input
              className={styles.field_input}
              type="text"
              style={{
                borderColor:
                  required && name === ""
                    ? "#990011"
                    : "silver",
              }}
              value={name}
              onChange={(e) => setState(e.target.value , setName)}
            />
          </div>
          <div className={styles.field}>
            <label for="email" className={styles.field_title}>
              Email
            </label>
            <input className={styles.field_input} type="email" 
             style={{
              borderColor:
                required && email === ""
                  ? "#990011"
                  : "silver",
            }}
            value={email}
            onChange={(e) => setState(e.target.value , setEmail)}
            />
          </div>
          <div className={styles.field}>
            <label for="message" className={styles.field_title}>
              Message
            </label>
            <textarea
              className={styles.field_texterea}
              rows="5"
              cols="33"
              value={message}
              style={{
                borderColor:
                  required && message === ""
                    ? "#990011"
                    : "silver",
              }}
              onChange={(e) => setState(e.target.value , setMessage)}
            ></textarea>
          </div>
        </div>
              {!loading ? (
              <button className={styles.contact_btn} onClick={sendEmail}>Send Message</button>
            ) : (
              <button className={styles.contact_btn}>
                <ClipLoader
                  color="#fff"
                  loading={true}
                  size={20}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </button>
            )}
      </div>
    </>
  );
};

export default Contact;
