import React from "react";
import { Menu, Container, MenuItem, Button } from "semantic-ui-react";

export const NavBar = () => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <MenuItem header>
          <img
            src='/assets/logo.png'
            alt='logo'
            style={{ marginRight: "10px" }}
          />
          Reactivities
        </MenuItem>
        <Menu.Item name='Activities' />
        <MenuItem>
          <Button positive content='Create Activity' />
        </MenuItem>
      </Container>
    </Menu>
  );
};
