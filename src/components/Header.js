import React from 'react';
import styled from 'styled-components';
export default function Header() {
  return (
    <Navbar>
      <Logo src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" />
      <Menu role="navigation">
        <MenuItem>
          <a href="#"> Home</a>
        </MenuItem>
        <MenuItem>
          <a href="#"> TV</a>
        </MenuItem>
        <MenuItem>
          <a href="#"> Sports</a>
        </MenuItem>
        <MenuItem>
          <a href="#"> Disney+</a>
        </MenuItem>
        <MenuItem>
          <a href="#"> Kids</a>
        </MenuItem>
      </Menu>
      <Options>
        <SearchContainer placeholder="Search here" />
        <PremiumContainer>Upgrade</PremiumContainer>
        <UserAvatarButton src="https://p-sairam.web.app/static/media/default_profile.bc591cff.jpg" />
      </Options>
    </Navbar>
  );
}
const Navbar = styled.nav`
  display: flex;
  align-items: center;
  padding:10px 30px;
  color: var(--white);
  background:var(--theme);
  min-height: 70px;
`;
const Logo = styled.img`
   width: 115px;
   height: 45px;
   padding-bottom:10px;
`;
const Menu = styled.ul`
  display:flex;
  flex-direction:row;
  align-items: center;
  flex:1;
`;
const MenuItem = styled.li`
  display:flex;
   a {
     padding:0  20px;
     color:  var(--white);
   }
`;
const Options = styled.div`
  display: flex;
  align-items: center;
`;
const SearchContainer = styled.input`
  margin-right: 20px;
  border: none;
  background:none;
  border-bottom: 1px solid #ffffff;
  outline: none;
  color: var(--white);
  padding: 5px;

`;
const PremiumContainer = styled.button`
  margin-right: 20px;
  border:1px solid var(--white);
  padding: 10px;
  cursor: pointer;
  color: var(--white);
  background: none;
  outline: none;
  border-radius: 5px;
  width: 100px;
`;
const UserAvatarButton = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
`;
