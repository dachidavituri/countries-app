import "@/App.css";
import Layout from "$/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageView from "^/home/views/home";
import AboutPageView from "^/about/views/about";
import ServicePageView from "^/services/views/service";
import Loading from "$/base/loading";
import { Suspense } from "react";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loading />}>
                  <HomePageView />
                </Suspense>
              }
            />
            <Route path="/about" element={<AboutPageView />}></Route>
            <Route path="/services" element={<ServicePageView />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};


export default App;
