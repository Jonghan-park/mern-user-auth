import React from "react";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          if (auth) return <Component {...props} />;
          if (!auth) return <Navigate replace to="/" />;
        }}
      />
    </div>
  );
};

export default ProtectedRoute;
