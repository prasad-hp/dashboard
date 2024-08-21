import React, { useState } from "react";
import bell from "../../public/notifications.svg"
import chevron from '../../public/chevron_right.svg'
import account from '../../public/account.svg'
import SearchAppBar from "./SearchAppbar";

function Navbar(){
  const [search, setSearch] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }
  return (
    <div className="relative">
        <img src={chevron} alt="next Folder" />
        <SearchAppBar />
        <img src={bell} alt="Notifications" />
        <img src={account} alt="Profile" />
    </div>
  );
};

export default Navbar;
