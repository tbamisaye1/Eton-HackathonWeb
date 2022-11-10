import secureStore from "../utilities/secureStore";
import asyncStoreWithDefaultValue from "../utilities/asyncStoreWithDefaultValue";

const key = "authUser";
const homePageDataKey = "homePageData";

const getAuthUser = async () => {
  try {
    //console.log("key_get", key);

    const user = await secureStore.get(key);
    const currentUser = await JSON.parse(user);

    return currentUser;
  } catch (error) {
    console.log(error);
  }
};

const storeAuthUser = async (user) => {
  try {
    await secureStore.store(key, JSON.stringify(user));

    await asyncStoreWithDefaultValue.storeDataWithKey(
      "LOGGED_IN_USER_BASIC_DETAILS",
      user
    );
  } catch (error) {
    console.log(error);
  }
};

const storeHomePageData = async (user) => {
  try {
    await secureStore.store(homePageDataKey, JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
};

const removeAuthUser = async () => {
  try {
    await secureStore.remove(key);
  } catch (error) {
    console.log(error);
  }
};

const removeHomePageData = async () => {
  try {
    await secureStore.remove(homePageDataKey);
  } catch (error) {
    console.log(error);
  }
};

export default {
  getAuthUser,
  storeAuthUser,
  storeHomePageData,
  removeAuthUser,
  removeHomePageData,
};
