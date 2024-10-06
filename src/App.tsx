import "@/App.css";
import Layout from "$/layout";
import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const HomePageView = lazy(() => import("^/home/views/home"));
import AboutPageView from "^/about/views/about";
import ServicePageView from "^/services/views/service";
import Loading from "$/base/loading";
import ContactFormView from "^/contact/views/contactView";
import { Suspense } from "react";
import CountryInfoView from "^/home/views/countryInfo";

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
            <Route path="/:id" element={<CountryInfoView />}></Route>
            <Route path="/about" element={<AboutPageView />}></Route>
            <Route path="/services" element={<ServicePageView />}></Route>
            <Route path="/contact" element={<ContactFormView />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
