import http from "./httpService";
const apiEndPoint = "/advising/paces";

export const getPaces = async () => {
  const { data: paces } = await http.get(apiEndPoint);
  return paces;
};

const paceService = { getPaces };
export default paceService;
