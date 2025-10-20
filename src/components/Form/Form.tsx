import { useState } from "react";
import "./Form.scss";

export const Form = (props: { createNewToDo: Function }) => {
  const [text, setText] = useState<string>("");

  const formSubmint = () => {
    if (text) props.createNewToDo(text);
    setText("");
  };

  return (
    <div className="form-wrapper">
      <form action="#" onSubmit={formSubmint}>
        <label>
          <input
            value={text}
            type="text"
            onChange={(e) => setText(e.target.value)}
          />
          <button></button>
        </label>
      </form>
    </div>
  );
};
