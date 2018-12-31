import React from "react";
import LandingPage from "../src/components/LandingPage";
import getNavBar from "../src/js/getNavBar";

export default () => <LandingPage navigationBar={getNavBar(0, false)}/>