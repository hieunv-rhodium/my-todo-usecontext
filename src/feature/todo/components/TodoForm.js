import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// contexts
import { useStateTodo } from "../context/TodoContext";

// redux
import { TODO_SUBMIT } from "../redux/TodoForm/constant";

export const TodoForm = () => {
  const [, dispatch] = useStateTodo();
  const [value, setValue] = useState("");

  const handleOnChange = func => event => {
    const { value } = event.target;
    func(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: TODO_SUBMIT,
      payload: {
        id: `${Date.now()}-${Math.random()}`,
        title: value,
        completed: false,
        createAt: Date.now()
      }
    });
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={handleOnChange(setValue)}
        value={value}
      />
      <br />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};
