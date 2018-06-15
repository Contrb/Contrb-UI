import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from "@material-ui/core/es/IconButton/IconButton";

class CreateMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton color="inherit"
                    aria-label="Create"
                    aria-owns={anchorEl ? 'create-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
        >
          <CreateIcon />
        </IconButton>

        <Menu
          id="create-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>New Project</MenuItem>
          <MenuItem onClick={this.handleClose}>Import Project</MenuItem>
          <MenuItem onClick={this.handleClose}>New Group</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default CreateMenu;