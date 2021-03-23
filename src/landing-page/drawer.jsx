import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  Typography,
  Box,
  ThemeProvider,
  Grid,
  createMuiTheme,
} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { IconButton } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { Link } from "react-router-dom";
// import { Link as scrollLink } from "react-scroll";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: "auto",
//   },
// });

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    height: "100%",
    maxWidth: 360,
    background: "#1b1b1b",
    // height: "auto",
  },
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});
// const marginValue = "10px";

// function FooterLink(props) {
//   return (
//     <Grid item style={{ paddingLeft: marginValue, paddingTop: marginValue }}>
//       <ScrollLink
//         activeClass="active"
//         to={props.id}
//         spy={true}
//         smooth={true}
//         duration={1000}
//         // className="secondary-button-text"
//       >
//         <Link style={{ textDecoration: "none", color: "#fafafa" }}>
//           {props.name}
//         </Link>
//       </ScrollLink>
//     </Grid>
//   );
// }

export default function NavDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.root, {
        [classes.root]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <List>
        <Typography variant="body">
          <ListItem button>
            <ListItemIcon>
              <PinDropRoundedIcon style={{ color: "#fafafa" }} />
            </ListItemIcon>
            <scrollLink
                        activeClass="active"
                        to="body"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        className="secondary-button-text"
                      >
              <ListItemText primary="What is GeoPicK?" />
            </scrollLink>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FeaturedPlayListRoundedIcon style={{ color: "#fafafa" }} />
            </ListItemIcon>
            <Link to="/about-us" style={{ textDecoration: "none" }}>
              <ListItemText primary="Features" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AccountTreeRoundedIcon style={{ color: "#fafafa" }} />
            </ListItemIcon>
            <Link to="/about-us" style={{ textDecoration: "none" }}>
              <ListItemText primary="Product roadmap" />
            </Link>
          </ListItem>
        </Typography>
      </List> */}
      {/* <Divider style={{ background: "#fafafa" }} /> */}
      <List>
        <Typography variant="body">
          <ListItem button>
            <ListItemIcon>
              <AppsRoundedIcon style={{ color: "#fafafa" }} />
            </ListItemIcon>
            <Link to="/application" style={{ textDecoration: "none" }}>
              <ListItemText primary="About the app" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InfoRoundedIcon style={{ color: "#fafafa" }} />
            </ListItemIcon>
            <Link to="/about-us" style={{ textDecoration: "none" }}>
              <ListItemText primary="About Us" />
            </Link>
          </ListItem>
        </Typography>
      </List>
    </div>
  );

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box m={-5} />
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Grid container direction="row" spacing={2}>
              <IconButton
                onClick={toggleDrawer(anchor, true)}
                style={{ color: "#fafafa" }}
              >
                <MenuRoundedIcon />
              </IconButton>
              {/* <FooterLink id="features" name="Features" />
              <FooterLink id="roadmap" name="Roadmap" /> */}
            </Grid>
            {/* <Typography variant="button">
              <Link to="/application" style={{ textDecoration: "none" }}>
                <IconButton
                  style={{ color: "#fafafa", justifyContent: "center" }}
                >
                  Application
                </IconButton>
              </Link>
              <Link to="/about-us" style={{ textDecoration: "none" }}>
                <IconButton
                  style={{ color: "#fafafa", justifyContent: "center" }}
                >
                  About us
                </IconButton>
              </Link>
            </Typography> */}
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </ThemeProvider>
    </div>
  );
}

// {
//   <Link
//     to="/application"
//     style={{
//       textDecoration: "none",
//       height: "auto",
//       width: "auto",
//     }}
//   >
//     <Button
//       variant="text"
//       style={{
//         // color: "#1b1b1b",
//         justifyContent: "center",
//       }}
//     >
//       Application
//     </Button>
//   </Link>
// }
