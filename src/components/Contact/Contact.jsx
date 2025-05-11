import React, { useState } from "react";
import { BsFillFilePersonFill, BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css"; // стили
import { useDispatch } from "react-redux";
import { editContact } from "../../redux/contacts/operations";

export const Contact = ({ name, number, id, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing) {
      const updatedData = { name: newName, number: newNumber };
      dispatch(editContact({ id, updatedData }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={css.main}>
      <p className={css.item}>
        <BsFillFilePersonFill className={css.icon} />
        {isEditing ? (
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Name"
          />
        ) : (
          newName
        )}
      </p>
      <p className={css.item}>
        <BsFillTelephoneFill className={css.icon} />
        {isEditing ? (
          <input
            type="text"
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
            placeholder="Phone"
          />
        ) : (
          newNumber
        )}
      </p>
      <div className={css.buttonrow}>
        <button className={css.btn} onClick={() => onDelete(id)}>
          Delete
        </button>
        <button className={css.btn} onClick={handleEdit}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default Contact;
