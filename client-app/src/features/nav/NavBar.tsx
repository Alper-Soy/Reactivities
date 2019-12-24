import React, { useContext } from "react";
import {
  Menu,
  Container,
  MenuItem,
  Button,
  Image,
  Dropdown
} from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { NavLink, Link } from "react-router-dom";
import { RootStoreContext } from "../../app/stores/rootStore";

const NavBar: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const { logout, user } = rootStore.userStore;
  return (
    <Menu fixed='top' inverted>
      <Container>
        <MenuItem header as={NavLink} exact to='/'>
          <img
            src='/assets/logo.png'
            alt='logo'
            style={{ marginRight: "10px" }}
          />
          Reactivities
        </MenuItem>
        <Menu.Item name='Activities' as={NavLink} to='/activities' />
        <MenuItem>
          <Button
            as={NavLink}
            to='/createActivity'
            positive
            content='Create Activity'
          />
        </MenuItem>
        {user && (
          <Menu.Item position='right'>
            <Image
              avatar
              spaced='right'
              src={user.image || "/assets/user.png"}
            />
            <Dropdown pointing='top left' text={user.displayName}>
              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to={`/profile/username`}
                  text='My profile'
                  icon='user'
                />
                <Dropdown.Item onClick={logout} text='Logout' icon='power' />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        )}
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
