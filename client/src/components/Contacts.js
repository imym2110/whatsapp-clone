import React from "react";
import { useContacts } from "../contexts/ContactsProvider";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function Contacts() {
  const { contacts } = useContacts();

  return (
    <ListGroup variant="flush">
      {contacts.map((contact) => (
        <ListGroupItem key={contact.id}>{contact.name}</ListGroupItem>
      ))}
    </ListGroup>
  );
}
