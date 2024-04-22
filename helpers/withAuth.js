import { useRouter } from "next/router";
import { useEffect } from "react";
import Cookies from "js-cookie";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = Cookies.get("token");
      if (!token) {
        // Redirect to login page if token is not present
        router.push("/login");
      } else {
        router.push("/dashboard");
      }
    }, []);

    // If authenticated, render the wrapped component
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
