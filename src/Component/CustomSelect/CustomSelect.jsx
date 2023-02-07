import React from "react";
import { Form } from "react-bootstrap";

const CustomSelect = ({ selectText, options }) => {
  return (
    <Form.Group className="mb-3 " controlId="">
      <Form.Select
        style={{
          height: "60px",
          borderRadius: "4px",
          border: "1px solid rgba(5, 62, 255, 1)",
          fontWeight: "600",
        }}
      >
        <option>{selectText}</option>
        {options.map((val, index) => (
          <option value={val} key={index}>
            {val}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default CustomSelect;
