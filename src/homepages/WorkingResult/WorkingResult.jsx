import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const WorkingResult = () => {
  const {
    data: allWork,
    isFetching: ispending,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allWork"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5050/workprogress`);
      return res.data;
    },
  });
  console.log(allWork);
  return (
    <div>
      <h3 className="text-center text-5xl text-brand font-bold my-8">
        Working Progress
      </h3>
    </div>
  );
};

export default WorkingResult;
