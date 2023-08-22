import React, { useState } from "react";
import {
  Button,
  Modal,
  Nav,
  NavItem,
  NavLink,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";
import Conversations from "./Conversations";
import Contacts from "./Contacts";
import NewConversationModal from "./NewConversationModal";
import NewContactModal from "./NewContactModal";

const CONVERSATIONS_KEY = "conversations";
const CONTACTS_KEY = "contacts";

export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
  const [modalOpen, setModalOpen] = useState(false);
  const conversationsOpen = activeKey === CONVERSATIONS_KEY;

  function closeModal() {
    setModalOpen(false);
  }
  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <TabContainer activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <NavItem>
            <NavLink eventKey={CONVERSATIONS_KEY}>Conversations</NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey={CONTACTS_KEY}>Contacts</NavLink>
          </NavItem>
        </Nav>
        <TabContent
          className="overflow-auto flex-grow-1"
          style={{ borderRight: "1px solid #dee2e6" }}
        >
          <TabPane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </TabPane>
          <TabPane eventKey={CONTACTS_KEY}>
            <Contacts />
          </TabPane>
        </TabContent>
        <div
          className="p-2 border-top small"
          style={{ borderRight: "1px solid #dee2e6" }}
        >
          Your Id : <span className="text-muted">{id}</span>
        </div>
        <Button onClick={() => setModalOpen(true)} className="rounded-0">
          New {conversationsOpen ? "conversation" : "contact"}
        </Button>
      </TabContainer>

      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ? (
          <NewConversationModal closeModal={closeModal} />
        ) : (
          <NewContactModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
}
