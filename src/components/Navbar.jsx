import { Stack } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center", zIndex: 10,}}>
      <i className="fa fa-youtube-play" style={{color: "#ebcc00"}}></i> <h1 style={{ color: "#fff", FontFace: ""}}>YouTube-Clone</h1>
    </Link>
    
    <SearchBar />
  </Stack>
);

export default Navbar;
