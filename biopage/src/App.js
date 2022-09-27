import BioInformation from "./components/BioInformation";
import './App.css'
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <h1>Bio Information</h1>
        <BioInformation></BioInformation>
      </Provider>
    </>
  );
}

export default App;
