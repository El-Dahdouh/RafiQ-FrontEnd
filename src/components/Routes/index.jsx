// import { useEffect } from "react";
import { Navigate, Route, Routes as RouterRoutes } from "react-router-dom";
// import { setupInterceptors } from "@/server/api";

// const ProtectedRoute = ({ children, userRole, redirectTo = "/" }) => {
//   const { token, user } = useAppStore();
//   const isAuthenticated = !!token;
//   const allowedRoles = user?.roles;

//   if (!isAuthenticated) return <Navigate to={redirectTo} replace />;
//   if (userRole && !allowedRoles?.includes("SuperAdmin")) {
//     if (!allowedRoles?.includes(userRole)) return <Navigate to="/" replace />;
//   }

//   return <>{children}</>;
// };

const Routes = () => {
  // For Handling Errors in API requests
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     setupInterceptors(navigate);
  //   }, [navigate]);

  return (
    <RouterRoutes>
      {/* Default Route */}

      {/* Pages with header or fooeter */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>

      {/* Pages without header or fooeter */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </RouterRoutes>
  );
};

export default Routes;
