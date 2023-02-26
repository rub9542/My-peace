const baseUrl = "https://sukoon-backend.onrender.com/api/";

const headerConfig = {
  Authorization:
    "Bearer 46371ba45aebbfa6b8dcc2383cbabaf050ccb25204aeb3e9e90d2fc782082bfe06cee6640ff1fb4c873331dcb7a42d20184b4fbc452a2985da4132be7d29fb789c82e69959bc2be0e49a7566890b562708b6aea0dd53fa313d9ae0aedb510f3e0050535cacf99bdb2fd9f295fa4dff6f1801734eec3865f19f1db677fb30552c",
  "Content-Type": "application/json",
};
export const apiRequest = async (url, data, method) => {
  try {
    const response = await fetch(`${baseUrl + url}`, {
      method: method,
      headers: headerConfig,
      body: JSON.stringify(data),
    });
    const responseDatas = response
      .json()
      .then((data) => ({ status: response.status, body: data }));
    return responseDatas;
  } catch (error) {
    return error;
  }
};
export const getapiRequest = async (url, data, method) => {
  try {
    const response = await fetch(`${baseUrl + url}`, {
      method: method,
      headers: headerConfig,
      // body: JSON.stringify(data),
    });
    const responseDatas = response
      .json()
      .then((data) => ({ status: response.status, body: data }));
    return responseDatas;
  } catch (error) {
    return error;
  }
};

export const postMethod = async (url, data) => {
  return await apiRequest(url, data, "POST");
};

export const getMediaDatas = async (params) => {
  return await getapiRequest(params, {}, "GET");
};
