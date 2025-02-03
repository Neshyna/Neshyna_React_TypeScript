import { Link } from "react-router-dom";
import { ClientInfo, ClientPage, ClientTitle } from "./styles";

function Amazon() {
  return (
    <ClientPage>
      <ClientTitle>Amazon</ClientTitle>
      <ClientInfo>Amazon</ClientInfo>
      <Link to="/clients">All Clients</Link>
    </ClientPage>
  );
}

export default Amazon;
