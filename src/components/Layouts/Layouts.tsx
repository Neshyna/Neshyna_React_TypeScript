import { LayoutProps } from "./types";
import { Link } from "react-router-dom";

import {
  LayoutComponent,
  Header,
  NavContainer,
  LogoContainer,
  Main,
  Footer,
  StyledNavLink,
  
} from "./styles";
import { useNavigate } from "react-router-dom";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  return (
    <LayoutComponent>
      <Header>
        {/* 2 способ перехода на главную страницу при клике на логотип */}
        <LogoContainer onClick={() => navigate('/')}></LogoContainer>
        <NavContainer>
          <StyledNavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            to="/about"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            About
          </StyledNavLink>
          <StyledNavLink
            to="/users"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Users
          </StyledNavLink>
          <StyledNavLink
            to="/clients"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Clients
          </StyledNavLink>
          <StyledNavLink
            to='/lesson14'
            style={
              ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })
            }>
            Lesson 14
          </StyledNavLink>
          <StyledNavLink
            to='/HW14'
            style={
              ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })
            }>
            HW14
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
       {/* 1 способ перехода на главную страницу при клике на логотип */}
       <Link to='/'><LogoContainer></LogoContainer></Link>
      </Footer>
    </LayoutComponent>
  );
}
export default Layout;
