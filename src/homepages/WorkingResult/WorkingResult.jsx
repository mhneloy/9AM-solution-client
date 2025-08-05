import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

const WorkingResult = () => {
  const {
    data: allWork,
    isFetching: ispending,
    refetch,
  } = useQuery({
    queryKey: ["allWork"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5050/workprogress`);
      return res.data;
    },
  });

  useEffect(() => {
    refetch();
    console.log(allWork);
  }, [refetch, allWork]);

  if (ispending) {
    return <span className="loading loading-spinner text-secondary"></span>;
  }

  return (
    <div>
      <h3 className="text-center text-5xl text-brand font-bold my-8">
        Working Progress
      </h3>
      <div>
        {allWork.map((work, idx) => {
          return (
            <div key={idx} className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img src={work.photo} alt={work.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{work.name}</h2>
                <p>{work.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkingResult;
