import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <div className="shadow-lg p-2">
          <Header />
        </div>
        <div className="p-2">
          <Body />
        </div>
      </div>
    </Provider>
  );
}

export default App;
