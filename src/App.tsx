import "@/App.css";
import Layout from "$/layout";
import { lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const HomePageView = lazy(() => import("^/home/views/home"));
import AboutPageView from "^/about/views/about";
import ServicePageView from "^/services/views/service";
import Loading from "$/base/loading";
import ContactFormView from "^/contact/views/contactView";
import { Suspense } from "react";
import CountryInfoView from "^/home/views/countryInfo";
import NotFoundVIew from "^/notFound/views/notFoundView";
import OtpView from "^/otp/views/otp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/:lang" element={<Layout />}>
              <Route
                path="home"
                element={
                  <Suspense fallback={<Loading />}>
                    <HomePageView />
                  </Suspense>
                }
              />

              <Route path="country/:id" element={<CountryInfoView />}></Route>
              <Route path="about" element={<AboutPageView />}></Route>
              <Route path="services" element={<ServicePageView />}></Route>
              <Route path="contact" element={<ContactFormView />}></Route>
              <Route path="otp" element={<OtpView />}></Route>
            </Route>
            <Route path="/" element={<Navigate to="/ka/home" />} />
            <Route path="*" element={<NotFoundVIew />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
};

export default App;
