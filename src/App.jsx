import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import HomeLayout from "./layouts/HomeLayout";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import { useEffect } from "react";
import useAuthStore from "./store/useAuthStore";
import useCheckAuth from "./hooks/useCheckAuth";
import "ldrs/lineSpinner";

function App() {
  const { authUser, setAuthUser, isCheckingAuth, setIsCheckingAuth } =
    useAuthStore();

  const { data, isFetching, isLoading, isPending, refetch } = useCheckAuth();

  useEffect(() => {
    refetch();
    // data && setAuthUser(data[0]);
    setIsCheckingAuth(isLoading);
  }, [data]);

  if (isCheckingAuth && !authUser) {
    return (
      <div className=" h-screen w-full flex justify-center items-center">
        <l-line-spinner
          size="180"
          stroke="6"
          speed=".8"
          color="red"
        ></l-line-spinner>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route
          index
          element={authUser ? <HomePage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
        />
        <Route path="/settings" element={<SettingsPage />} />
        <Route
          path="/profile"
          element={authUser ? <ProfilePage /> : <Navigate to={"/login"} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
