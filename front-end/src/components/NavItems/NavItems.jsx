import { Item } from './NavItemsStyles';

const NavItems = ({ items }) => {
  return (
    <>
      {items.map(({ id, item }) => (
        <Item key={id}>{item}</Item>
      ))}
    </>
  );
};

export default NavItems;
