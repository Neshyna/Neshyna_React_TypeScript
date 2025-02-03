import Button from "components/Button/Button"
import { Title, UsersPage } from "./styles"
import {Link} from "react-router-dom"


function Users() {

  return (
    <UsersPage>
      <Title>Select user</Title>
      {/* <Link to='/users/user'>Go to User page</Link> */}
      <Link to='user'>Go to Users page</Link>
      <Button name="Go to About Page" type='button' onClick={()=>{}} />
    </UsersPage>
  )
}

export default Users