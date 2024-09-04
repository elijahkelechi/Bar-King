import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar";
import ThemeToggle from "../components/ThemeToggle";
// const checkOutletGlobalValue = "global checker";

const HomeLayout = () => {
  const navigation = useNavigation();
  const Loading = navigation.state === "loading";
  return (
    <div>
      <ThemeToggle />
      <NavBar />
      {Loading ? <div className="loading" /> : <Outlet />}
    </div>
  );
};

export default HomeLayout;
