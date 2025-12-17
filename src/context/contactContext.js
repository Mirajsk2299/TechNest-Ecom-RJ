import { createContext, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  // ===== STATES =====
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  // ===== HANDLERS =====
  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleContact = (e) => setContact(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  // ===== SAVE TO FIRESTORE =====
  const sendMessage = async () => {
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        contact,
        message,
        createdAt: serverTimestamp(),
      });

      alert("Message sent successfully!");

      // reset fields
      setName("");
      setEmail("");
      setContact("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <ContactContext.Provider
      value={{
        name,
        email,
        contact,
        message,
        handleName,
        handleEmail,
        handleContact,
        handleMessage,
        sendMessage,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
