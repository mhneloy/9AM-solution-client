import About from "../../homepages/about/About";
import Accordion from "../../homepages/accordion/Accordion";
import Banner from "../../homepages/banner/Banner";
import Cards from "../../homepages/cards/Cards";
import Workflow from "../../homepages/my_workflow/Workflow";
import WorkingResult from "../../homepages/WorkingResult/WorkingResult";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <About />
      <Cards />
      <Workflow />
      <WorkingResult />
      <Accordion />
    </div>
  );
};

export default Home;
