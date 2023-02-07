import React from "react";
import Form from "react-bootstrap/Form";

const CusttomInput = ({ type, placeholder, onChange }) => {
  return (
    <Form.Group className="mb-3 " controlId="">
      <Form.Control
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        style={{
          height: "60px",
          borderRadius: "4px",
          border: "1px solid rgba(5, 62, 255, 1)",
          fontWeight: "600",
        }}
      />
    </Form.Group>
  );
};

export default CusttomInput;
