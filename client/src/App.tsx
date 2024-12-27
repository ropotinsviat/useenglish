import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./constants/routes";
import Layout from "./components/layout/Layout";
import Loading from "./components/common/Loading";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            {routes.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
