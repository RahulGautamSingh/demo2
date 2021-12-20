import { useContext, useRef, useState } from "react";
import ContactContext from "./Context";

export default function InputArea(props) {
  let contextData = useContext(ContactContext);
  let nameRef = useRef("");
  let ageRef = useRef("");
  let [check, setCheck] = useState(true);

  function updateData() {
    let currID;
    if (nameRef.current.value !== "" && ageRef.current.value !== "") {
      if (contextData.contactState.arr.length === 0) currID = 1;
      else
        currID =
          contextData.contactState.arr[contextData.contactState.arr.length - 1]
            .id + 1;

      contextData.dispatch([
        "ADD",
        {
          id: currID,
          name: nameRef.current.value,
          age: ageRef.current.value,
        },
      ]);
    }
    nameRef.current.value = "";
    ageRef.current.value = "";
    setCheck(true);
  }
  return (
    <div className="input-container">
      <form action="" className="form-container">
        <input
          type="text"
          ref={nameRef}
          className="contact-name"
          placeholder="Enter name"
        />
        <input
          type="number"
          ref={ageRef}
          className="contact-age"
          placeholder="Enter Age"
          onChange={(e) => {
            if (e.target.reportValidity() && nameRef.current.value !== "")
              setCheck(false);
          }}
        />
        <button
          className="add-btn"
          onClick={(e) => {
            e.preventDefault();

            updateData();
          }}
          type="submit"
          disabled={check}
        >
          New Contact
        </button>
      </form>
    </div>
  );
}
