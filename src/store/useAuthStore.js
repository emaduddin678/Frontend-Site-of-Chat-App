import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,

  isCheckingAuth: true,

  setAuthUser: (user) => {
    set({ authUser: user });
  }, // Method to update authUser
  setIsSigningUp: (status) => set({ isSigningUp: status }), // Method to update isSigningUp
  setIsLoggingIn: (status) => set({ isLoggingIn: status }), // Method to update isLoggingIn
  setIsUpdatingProfile: (status) => set({ isUpdatingProfile: status }), // Method to update isUpdatingProfile
  setIsCheckingAuth: (status) => set({ isCheckingAuth: status }), // Method to update isCheckingAuth
  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      console.log(res.data);
      set({ authUser: res.data });
      toast.success("Account created successfully");
      // get().connectSocket();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },
  // try {
  //   const res = await axiosInstance.get("/auth/check");
  //   console.log(res)
  //   set({ authUser: res.data });
  // } catch (error) {
  //     console.log("Error in checkAuth", error)
  //   set({ authUser: null });
  // } finally {
  //   set({ isCheckingAuth: false });
  // }
  //   checkAuth: () => {
  //     useQuery({
  //       queryKey: ["authUser"],
  //       queryFn: () =>
  //         axiosInstance.get("/auth/check").then((res) => console.log(res)),
  //     });
  //   },
}));

export default useAuthStore;
