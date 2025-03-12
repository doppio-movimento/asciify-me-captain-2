import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import SideNavigator from "../features/navigation/SideNavigator";
import Header from "../features/header/Header";

const Root = (props) => {
  var location = useLocation();

  return (
    <div className="flex flex-col h-screen min-h-screen bg-emerald-950 p-5">
      <Header title={"asciify me captain"} colors={[[255,0,255],[0,255,0],[255,255,0]]}/>
      <div className="flex bg-emerald-800 p-5 gap-5 rounded h-7/9">
        <SideNavigator />
        <div className="flex justify-center place-items-center rounded bg-emerald-600 w-2/3 p-2">
          <Outlet />
        </div>
      </div>
      <div className="flex h-1/9 justify-center place-items-center mt-2 bg-emerald-800 rounded">
        LINKS
      </div>
    </div>
  );
};

export default Root;
