import PropTypes from "prop-types";
import useCustomContext from "../sharecomponent/useCustomContext";
import { useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useCustomContext();
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (user && user?.email) {
    return children;
  }
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.element,
};
