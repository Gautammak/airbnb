import * as React from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MenuRounded } from "@material-ui/icons";

import { AccountCircleRounded } from "@material-ui/icons";
import "./Profilemenu.css";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="profile-menu-flex"
      >
        <MenuRounded />
        <AccountCircleRounded />
      </div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        className="container"
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          ".MuiPaper-root": {
            borderRadius: " 10px",
            marginTop: "20px",
            minWidth: "250px",
            boxShadow: " 2px ",
          },
        }}
      >
        <MenuItem className="menu-items" onClick={handleClose}>
          Signup
        </MenuItem>
        <MenuItem onClick={handleClose} className="menu-items">
          Login
        </MenuItem>
        <div
          style={{
            height: "5px",
            width: "100%",
            borderBottom: "1px solid grey",
            paddingRight: "10%",
          }}
        ></div>

        <MenuItem onClick={handleClose} className="menu-items">
          Airbnb Your Home
        </MenuItem>

        <MenuItem onClick={handleClose} className="menu-items">
          Help
        </MenuItem>
      </Menu>
    </div>
  );
}
