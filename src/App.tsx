import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import Add from "./pages/Add";
import Signin from "./pages/Signin";
import NotFound from "./pages/NotFound";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./pages/Error";

// ErrorBoundary : 에러가 발생하면 에러페이지로 callback 시켜줌
function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/book/:id" element={<Detail />} />
          <Route path="/add" element={<Add />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
