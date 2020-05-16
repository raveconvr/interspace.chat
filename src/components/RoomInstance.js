import React, { useState, useContext } from "react";
import styled from "styled-components";

import { RoomURLs } from "../utils/constants";
import JitsiInstance from "./integrations/JitsiInstance";
import ChatInstance from "./integrations/ChatInstance";

const SERVICES = {
  jitsi: {
    title: "Videochat",
    component: JitsiInstance
  },
  chat: {
    title: "chat",
    component: ChatInstance
  }
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ChatButton = styled.button`
  min-height: 20px;
  max-width: 100px;
  color: black;
  align-self: flex-end;
  margin-top: 15px;
`;

const RoomInstance = ({ space }) => {
  const roomURLs = RoomURLs[space];
  const availableServiceNames = Object.keys(SERVICES).filter(serviceName =>
    Object.keys(roomURLs).includes(serviceName)
  );

  const [selectedServiceName] = useState(availableServiceNames[0]);

  if (availableServiceNames.length === 0) return <div>Unknown room</div>;

  const roomData = roomURLs[selectedServiceName];
  const selectedService = SERVICES[selectedServiceName];
  const RoomServiceComponent = selectedService.component;

  return (
    <Container>
      <RoomServiceComponent roomData={roomData} />
    </Container>
  );
};

export default RoomInstance;
