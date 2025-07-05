import About from "../../homepages/about/About";
import Banner from "../../homepages/banner/Banner";
import Workflow from "../../homepages/my_workflow/Workflow";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <About />
      <Workflow />
    </div>
  );
};

export default Home;
