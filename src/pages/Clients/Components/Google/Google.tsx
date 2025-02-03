import { Link } from "react-router-dom";
import { ClientInfo, ClientPage, ClientTitle } from "./styles";

function Google() {
  return (
    <ClientPage>
      <ClientTitle>Google</ClientTitle>
      <ClientInfo>Google</ClientInfo>
      <Link to="/clients">All Clients</Link>
    </ClientPage>
  );
}

export default Google;



