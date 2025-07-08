import About from "../../homepages/about/About";
import Accordion from "../../homepages/accordion/Accordion";
import Banner from "../../homepages/banner/Banner";
import Cards from "../../homepages/cards/Cards";
import Workflow from "../../homepages/my_workflow/Workflow";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <About />
      <Cards />
      <Workflow />
      <Accordion />
    </div>
  );
};

export default Home;
