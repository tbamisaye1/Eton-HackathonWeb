import apiClient from "./client";

const baseEndPoint = "/cashadv/";

const listOfCashAdvanceRequestByUser = (value) => {
  return apiClient.post(
    baseEndPoint + "JSON_ListofCashRequestByUser_FK",
    value
  );
};

const listOfActionableProjectByUser = (value) => {
  //console.log("listOfActionableProjectByUser_VALUE", value);
  return apiClient.post(
    baseEndPoint + "JSON_Select_MyActionableProject_Details_ByUserFK",
    value
  );
};

const listOfCurrency = (value) => {
  return apiClient.post(baseEndPoint + "JSON_GetPortalCurrencyRate", value);
};

const submitCashRequest = (value) => {
  return apiClient.post(baseEndPoint + "JSON_SubmitCashRequest", value);
};

//Approvals
const listOfPendingApproval = (value) => {
  return apiClient.post(baseEndPoint + "JSON_GetPendingCashApprovals", value);
};

const submitApprovalDecision = (value) => {
  return apiClient.post(baseEndPoint + "JSON_SubmitCashApproval", value);
};

export default {
  listOfActionableProjectByUser,
  listOfCashAdvanceRequestByUser,
  listOfPendingApproval,
  listOfCurrency,
  submitApprovalDecision,
  submitCashRequest,
};
