import { Title, ClientsPage } from "./styles";
import { Link } from "react-router-dom";

function Clients() {
  return (
    <ClientsPage>
      <Title>Select client</Title>

      <Link to="amazon">Amazon</Link>
      <Link to="google">Google</Link>
      <Link to="spacex">SpaceX</Link>
      
    </ClientsPage>

  );
}

export default Clients;
