import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavgate();

  const logout = async () => {
    try {
      const res = await fetch("/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (res.status === 401 || !res) {
        window.alert("Please Logout later");
      } else {
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Logout();
  }, []);

  return <div></div>;
}

export default Logout;
