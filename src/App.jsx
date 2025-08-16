import "./App.css";
import Header from "./components/Header";
import FeedbackFrom from "./components/FeedbackFrom";
import Footer from "./components/Footer";
import Wrapper from "./resources/Wrapper";
import FeedbackSearch from "./components/FeedbackSearch";
import AllFeedback from "./components/AllFeedback";
import FeedbackStat from "./components/FeedbackStat";
import feedbacklist from "./_data/feedback";
import { GlobalContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
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
    </GlobalContextProvider>
  );
}

export default App;
