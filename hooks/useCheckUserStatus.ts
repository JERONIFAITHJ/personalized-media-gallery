import useSWR from "swr";
import { sendApiCall } from "../utils/apiService";

const useCheckUserStatus = () => {
  return useSWR("/status", async () => {
    const response = await sendApiCall({ url: "/auth/status" });
    return response;
  });
};

export default useCheckUserStatus;
