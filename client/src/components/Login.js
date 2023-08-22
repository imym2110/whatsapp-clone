import React, { useRef } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

export default function Login({ onIdSubmit }) {
  const idRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  }
  function createNewId() {
    onIdSubmit(uuidV4());
  }
  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form onSubmit={handleSubmit} className="w-100">
        <FormGroup>
          <FormLabel style={{ fontWeight: 600 }}>Enter Your Id</FormLabel>
          <FormControl type="text" ref={idRef} required />
        </FormGroup>
        <Button type="submit" className="mt-3" style={{ marginRight: 8 }}>
          Login
        </Button>
        <Button onClick={createNewId} variant="secondary" className="mt-3">
          Create a new Id
        </Button>
      </Form>
    </Container>
  );
}
