import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import "./assets/css/banner.css";
import Banner from "./components/banner";
import Sections from "./components/section";
import "./assets/css/section.css";
import Footer from "./components/footer";
import Section2 from "./components/section2";
import ProfileTeam from "./components/team";

function App() {
  return (
    <div>
      <div className="App bg-dark">
        <div className="banner_img">
          <Header />
          <Banner />
        </div>
        <div className="bg-dark">
          <div className="main_sec2">
            <Sections />
          </div>
        </div>
      </div>
      <Section2 />
<div>
{/* <ProfileTeam /> */}

</div>
      <Footer />
    </div>
  );
}

export default App;
