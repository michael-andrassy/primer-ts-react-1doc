import { HashRouter, Route, Routes } from "react-router-dom";

import { NotFound } from "@pages/NotFound";
import { Home } from "@pages/Home";
import { About } from "@pages/About";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
