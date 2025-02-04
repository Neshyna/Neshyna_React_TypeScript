import Button from "components/Button/Button"
import { Title, UsersPage } from "./styles"
import { Link, useNavigate } from "react-router-dom"

function Users() {
 //useNavigate - возвращает функцию, при вызове которой мы можем перенаправить 
  // пользователя на другой url
  const navigate = useNavigate();

  const goToAboutPage = () => {
    navigate('/about')
  }
  return (
    <UsersPage>
      <Title>Select user</Title>
      {/* <Link to='/users/user'>Go to User page</Link> */}
      <Link to='user'>Go to Users page</Link>
      <Button name="Go to About Page" type='button' onClick={goToAboutPage} />
    </UsersPage>
  )
}

export default Users