import React, { useContext } from "react";
import { Menu, Container, MenuItem, Button } from "semantic-ui-react";
import ActivityStore from "../../app/stores/activityStore";
import { observer } from "mobx-react-lite";
import { Link, NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  const activityStore = useContext(ActivityStore);

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
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
