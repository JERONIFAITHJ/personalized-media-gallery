import useSWR from "swr";
import { sendApiCall } from "../utils/apiService";

const useUser = () => {
  return useSWR("/user", async () => {
    const response = await sendApiCall({ url: "/user/profile" });
    return response;
  });
};

export default useUser;
