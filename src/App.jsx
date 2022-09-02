import { useEffect, useState } from "react";

import Loader from "./Loader";
import Login from "./views/login/Login";
import Layout from "./layout/Layout";
import { AdminRouter } from "./router/AppRouter";
import { useCookies } from "react-cookie";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [cookie] = useCookies(["user"]);

  useEffect(() => {
    const user = cookie["user"];
    if (user) {
      if (user.loggedIn) {
        setIsLoggedIn(true);
      }
      setTimeout(() => setIsLoading(false), 1000);
      return;
    }

    setIsLoggedIn(false);
    setTimeout(() => setIsLoading(false), 1000);
  }, [cookie]);

  if (isLoading) return <Loader />;

  if (isLoggedIn) {
    return (
      <Layout>
        <AdminRouter />
      </Layout>
    );
  }

  return <Login />;
};

export default App;
