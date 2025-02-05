import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store/store";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <div className="shadow-lg p-2">
          <Header />
        </div>
        <div className="p-2">
          <RouterProvider router={appRouter} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
