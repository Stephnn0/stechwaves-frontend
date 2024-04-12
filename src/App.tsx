import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ComingSoon from "./components/ComingSoon";
import HomePage from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        {/* <Route index element={<ComingSoon />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
