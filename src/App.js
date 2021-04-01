// import logo from './logo.svg';
import "./App.css";
import { Landing } from "./landing-page/landing";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import {Box} from '@material-ui/core';
import { Body } from "./body/body";
import { TeamMembers } from "./body/teamMembers";
// import { Features } from "./body/features";
import Features from "./body/featuresV2";
import { Footer } from "./landing-page/footer";
import RoadMap from "./body/roadmap";
import PrototypeReview from "./body/review";
import AppStats from "./body/appStats";
import Header from "./landing-page/drawer";
import AppNews from "./body/appNews";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TitleHeader from "./landing-page/titleHeader";
import AboutApp from "./body/aboutApp";
import { Box, Typography } from "@material-ui/core";
import Trailer from "./body/trailer";
// import Background from "./image-assets/background-geoPick.png"
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="App">
              <div className="App-header">
                <Header />
                <Landing />
              </div>
              <div className="body-theme">
                <Body />
              </div>
              <div className="features-theme">
                <Typography
                  variant="h2"
                  style={{ fontWeight: "600", color: "#1b1b1b" }}
                >
                  Features
                </Typography>
                <Box m={-2} />
                <Typography
                  variant="body"
                  style={{
                    fontWeight: "normal",
                    fontSize: "18px",
                    color: "#1b1b1b",
                  }}
                >
                  Click on the arrows to transition👇{" "}
                </Typography>
                <Features />
              </div>
              <div style={{ background: "#1b1b1b" }}>
                <RoadMap />
              </div>
              <div className="footer-theme">
                <Footer />
              </div>
            </div>
          </Route>
          <Route exact path="/application">
            <div className="App">
              <TitleHeader />
              <div>
                <Trailer />
                <AppStats />
                <AppNews />
              </div>
              <div>
                <PrototypeReview />
              </div>
            </div>
          </Route>
          <Route exact path="/about-us">
            <div className="App">
              <TitleHeader />
              <div className="team-members-theme">
                <AboutApp />
                <TeamMembers />
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
