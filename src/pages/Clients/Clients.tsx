import { Title, ClientsPage } from "./styles";
import { Link } from "react-router-dom";

function Clients() {
  return (
    <ClientsPage>
      <Title>Select client</Title>

      <Link to="/clients/components/amazon">Amazon</Link>
      <Link to="/clients/components/google">Google</Link>
      <Link to="/clients/components/spacex">SpaceX</Link>
      
    </ClientsPage>

  );
}

export default Clients;
