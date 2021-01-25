// import logo from './logo.svg';
import './App.css';
import { Landing } from "./landing-page/landing";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Body } from "./body/body";
import { TeamMembers } from "./body/teamMembers";
import {Features} from "./body/features";
import {Footer} from "./landing-page/footer";
import RoadMap from "./body/roadmap"
import PrototypeReview from "./body/review"
// import Background from "./image-assets/background-geoPick.png"
const theme = createMuiTheme({
  typography: {
    fontFamily: [ 
      'Poppins',
      'sans-serif',
    ].join(','),
  },});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <div className="App-header">
        <Landing />
      </div>
      <div className="body-theme">
      <Body/>
      </div>
      <div className="features-theme">
        <Features />
      </div>
      <div style={{background:"#1b1b1b"}}>
      <RoadMap/>
      </div>
      <div>
        <PrototypeReview/>
      </div>
      <div className="team-members-theme">
        <TeamMembers />
      </div>
      <div className="footer-theme">
      <Footer/>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
