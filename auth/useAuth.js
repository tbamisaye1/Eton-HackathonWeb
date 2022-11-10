import React, { useContext } from "react";

import appSettings from "../config/appSettings";
import AuthContext from "./authContext";
import HomeDataContext from "./homeDataContext";
import authStorage from "./authStorage";
import secureStore from "../utilities/secureStore";
import asyncStoreWithDefaultValue from "../utilities/asyncStoreWithDefaultValue";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  // const { homePageData, setHomePageData } = useContext(AuthContext);
  // const { homePageData, setHomePageData } = useContext(HomeDataContext);

  const logIn = async (user) => {
    setUser(user);
    // setHomePageData(user);
    await authStorage.storeAuthUser(user);
    //await authStorage.storeHomePageData(user);
  };

  const logOut = async () => {
    // console.log("LOG OUT PROCESS STARTED");

    setUser(null);
    //  setHomePageData(null);

    //Clear the MOBILE_APP_ACTION_ITEM_KEY for the user
    await asyncStoreWithDefaultValue.removeDataWithKey(
      appSettings.MOBILE_APP_ACTION_ITEM_KEY
    );

    //Clear the The Password Field of Prefilled Stuff

    await authStorage.removeAuthUser();
    // authStorage.removeHomePageData();
    await secureStore.store("LOGGED_IN_PASSWORD", "");
    //await secureStore.store(LOGGED_IN_PASSWORD, userInfo.password);
    //  console.log("LOG OUT PROCESS ENDED");
  };

  const updateHomePageData = (user) => {
    // console.log("updateHomePageData_useAuth", user);
    //setHomePageData(user);
  };

  return { logIn, logOut, user, setUser };
};
