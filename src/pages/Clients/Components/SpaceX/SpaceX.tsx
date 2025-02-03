import { Link } from "react-router-dom";
import { ClientInfo, ClientPage, ClientTitle } from "./styles";

function SpaceX() {
  return (
    <ClientPage>
      <ClientTitle>SpaceX</ClientTitle>
      <ClientInfo>SpaceX</ClientInfo>
      <Link to="/clients">All Clients</Link>
    </ClientPage>
  );
}

export default SpaceX;
