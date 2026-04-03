import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import RootLayout from "./Components/RootLayout";
import ErrorComponent from "./Components/ErrorComponent";
import Dashboard from "./Components/Dashborad/Dashboard";
import SharedContextProvider from "./Context/SharedContextProvider";
const Transaction = lazy(() => import("./Components/Transactions/Transaction"));
const Insight = lazy(() => import("./Components/Insights/Insight"));
import Loading from "./Components/Loading";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorComponent />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "/transaction",
          element: (
            <Suspense fallback={<Loading />}>
              <Transaction />
            </Suspense>
          ),
        },
        {
          path: "/insight",
          element: (
            <Suspense fallback={<Loading />}>
              <Insight />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return (
    <SharedContextProvider>
      <RouterProvider router={router} />
    </SharedContextProvider>
  );
}
