import { Toolbar } from "@mui/material";
import BottomNav from "../components/BottomNav";
import NavBar from "../components/NavBar";

import DrawerLeft from "../components/DrawerLeft";
import DrawerRight from "../components/DrawerRight";
import Body from "../components/Body";

const Homepage = () => {
  return (
    <div>
      <NavBar />
      <Toolbar />
      <div style={{ display: "flex", gap: "10px" }}>
        <div style={{}}>
          <DrawerLeft />
        </div>
        <div
          style={{
            // paddingLeft: "10px",
            paddingTop: "10px",
            // paddingRight: "10px",
            // flexGrow: "1",
            // flexShrink: 1,
            overflowX: "hidden",
          }}
        >
          <Body />
        </div>
        <div>
          <DrawerRight />
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Homepage;
