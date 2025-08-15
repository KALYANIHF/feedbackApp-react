import "./App.css";
import Header from "./components/Header";
import FeedbackFrom from "./components/FeedbackFrom";
import Footer from "./components/Footer";
import Wrapper from "./resources/Wrapper";
import FeedbackSearch from "./components/FeedbackSearch";
import AllFeedback from "./components/AllFeedback";
import FeedbackStat from "./components/FeedbackStat";
import feedbacklist from "./_data/feedback";

function App() {
  console.log(feedbacklist);
  return (
    <>
      <Header />
      <Wrapper>
        <div>
          <FeedbackFrom />
          <FeedbackSearch />
        </div>
        <div>
          <FeedbackStat />
          <AllFeedback />
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
