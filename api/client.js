import { create } from "apisauce";

const apiClient = create({
  //baseURLX: "http://192.168.0.14:9000/api",
  //https://api.tomscube.com
  // baseURL: "http://192.168.1.104/OfficeManagerTeamD/api",
  baseURL: "https://api.tomscube.com/api",
});

export default apiClient;
