import { NavContainer, NavList } from './NavbarStyles';
import { NavItems, Logo } from '..';

const Navbar = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItems
          items={[
            { id: 1, item: 'men' },
            { id: 2, item: 'women' },
            { id: 3, item: 'new arrival' },
          ]}
        />
      </NavList>
      <Logo />
      <NavList>
        <NavItems
          items={[
            { id: 1, item: 'men' },
            { id: 2, item: 'women' },
          ]}
        />
      </NavList>
    </NavContainer>
  );
};

export default Navbar;
