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
      {/* Public pages before login */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Auth pages */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Protected pages after login - example */}
      <Route element={<PrivateLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </RouterRoutes>
  );
};

export default Routes;
