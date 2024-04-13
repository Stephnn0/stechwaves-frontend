import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/Home";
import ComingSoon from "./components/ComingSoon";
import NotFoundPage from "./pages/NotFoundPage";
import TermsOfService from "./pages/TermsOfService";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="consulting" element={<ComingSoon />} />
        <Route path="terms" element={<TermsOfService />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
