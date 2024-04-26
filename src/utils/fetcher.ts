const API_BASE_URL = "https://api.spacexdata.com/v3/";
async function getData(route: string) {
  const headers = {
    "Content-Type": "application/json",
  };

  const requestOptions = {
    headers: headers,
  };

  const response = await fetch(`${API_BASE_URL}${route}`, requestOptions);
  return response.json();
}
export { getData };
