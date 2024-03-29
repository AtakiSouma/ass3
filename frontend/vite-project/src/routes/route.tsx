import { Suspense, lazy } from "react";
import Layout from "../components/layout/Layout";
import { Route, Routes, createBrowserRouter } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import RegisterPage from "../page/RegisterPage";
import PrivateRoute from "./privateRoute";
import Orchid from "../page/Orchid";
import Dashboard from "../page/dashbaord";
import DetaiLOrchid from "../page/DetailORchids";
import CreateOrchid from "../page/CreateOrchid";
import UpdateProfile from "../page/UpdateProfile";
import Forbidden from "../page/forbidden";

const HomePage = lazy(() => import("../page/HomePage"));
const ErrorPage = lazy(() => import("../page/404"));
const Categories = lazy(() => import("../page/Categories"));

export const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<></>}>
                <PrivateRoute inverted={false} requiredRoles={['admin']}>
                  <HomePage />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="/category"
            element={
              <Suspense fallback={<></>}>
                <PrivateRoute inverted={false} requiredRoles={['admin']}>
                  <Categories />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<></>}>
                <PrivateRoute inverted={false}>
                  <Dashboard />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="/orchid"
            element={
              <Suspense fallback={<></>}>
                <PrivateRoute inverted={false}>
                  <Orchid />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="/orchid/detail/:slug"
            element={
              <Suspense fallback={<></>}>
                <PrivateRoute inverted={false}>
                  <DetaiLOrchid />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="/create"
            element={
              <Suspense fallback={<></>}>
                <PrivateRoute inverted={false}>
                  <CreateOrchid />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="/update-profile"
            element={
              <Suspense fallback={<></>}>
                <PrivateRoute inverted={false}>
                  <UpdateProfile />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<></>}>
                <PrivateRoute inverted={false}>
                  <ErrorPage />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="/forbidden"
            element={
              <Suspense fallback={<></>}>
                <PrivateRoute inverted={false}>
                  <Forbidden />
                </PrivateRoute>
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <PrivateRoute inverted={true}>
        <LoginPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);
