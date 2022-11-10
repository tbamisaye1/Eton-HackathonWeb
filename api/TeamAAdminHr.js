import apiClient from "./client";

const baseEndPoint = "/taadminhr/";

const getUserList = () => apiClient.get(baseEndPoint + "GetUserList");

const calculateSalaryByUser = (value) => {
  return apiClient.post(
    baseEndPoint + "JSON_GetStaffCurrentSalaryCalculator",
    value
  );
};

const getStaffSalarySummary = (value) => {
  return apiClient.post(baseEndPoint + "JSON_GetStaffSalarySummary", value);
};

const getTCEmails = (value) => {
  return apiClient.post(baseEndPoint + "JSON_GetTC_Email", value);
};

const getMobileAppIntroData = (value) => {
  return apiClient.post(baseEndPoint + "JSON_Get_MobileAppIntroData", value);
};

const getOCSReportData = (value) => {
  return apiClient.post(baseEndPoint + "JSON_OCS_ReportData", value);
};

const getCurrentEvents = (value) => {
  return apiClient.post(baseEndPoint + "JSON_GetCurrentEvents", value);
};

const verifyProximityToOffice = (value) => {
  return apiClient.post(
    baseEndPoint + "JSON_ATTENDANCE_CheckMyAttendanceRecord",
    value
  );
};

const removeTCEmailFromMobile = (value) => {
  return apiClient.post(baseEndPoint + "JSON_RemoveTC_EmailFromMobile", value);
};

const submitSignInOrSignOut = (value) => {
  return apiClient.post(
    baseEndPoint + "JSON_ATTENDANCE_SignMyAttendanceRecord",
    value
  );
};

export default {
  calculateSalaryByUser,
  getCurrentEvents,
  getStaffSalarySummary,
  getMobileAppIntroData,
  getOCSReportData,
  getTCEmails,
  removeTCEmailFromMobile,
  submitSignInOrSignOut,
  verifyProximityToOffice,
};
