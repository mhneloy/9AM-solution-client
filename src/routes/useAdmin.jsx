import useCustomContext from "../sharecomponent/useCustomContext";

const useAdmin = () => {
  const { user, loading } = useCustomContext();
  console.log(user);
  return (
    <div>
      <h1>admin</h1>
    </div>
  );
};

export default useAdmin;
