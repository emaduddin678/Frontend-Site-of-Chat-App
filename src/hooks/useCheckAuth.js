import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";

const useCheckAuth = () => {
  const { data, error, isFetching, isLoading, isPending, refetch } = useQuery({
    queryKey: ["authUser"],
    queryFn: () =>
      axiosInstance.get("/auth/check").then((res) => {
        return res.data.data;
      }),
    enabled: false,
    retry: 1,
    retryDelay: 1000,
  });
  console.log("Error in checking Auth", error);
  return { data, error, isFetching, isLoading, isPending, refetch };
};

export default useCheckAuth;
