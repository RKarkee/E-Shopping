import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProductListContainer from "./components/ProductListContainer";
import store from "./redux/Store";
import "antd/dist/antd.css";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route exact path="/" element={<ProductListContainer />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
