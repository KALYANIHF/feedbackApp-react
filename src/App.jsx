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
import { ToastContainer } from "react-toastify";

function App() {
  const Bounce = {
    enter: "bounceIn",
    exit: "bounceOut",
  };
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </GlobalContextProvider>
  );
}

export default App;
