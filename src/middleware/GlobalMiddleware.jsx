const GlobalMiddleware = ({ children }) => {
  const location = useLocation();

  // Middleware logic here
  useEffect(() => {
    // Example middleware tasks:
    // - Check user authentication
    // - Log analytics
    // - Redirect under certain conditions
    // - Show a loading spinner if needed
  }, [location]);

  return <>{children}</>;
};
export default GlobalMiddleware;
