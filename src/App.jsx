import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contacts/operations";
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
// import Navigation from "./components/Navigation/Navigation";
import Layout from "./components/Layout/Layout";
// import ContactsPage from "./pages/ContactsPage/ContactsPage";
import { refreshThunk } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
// import Button from "@mui/material/Button";

// function App() {
//   return <Button variant="contained">Нажми меня</Button>;
// }

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshThunk());
    dispatch(fetchContacts());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      <Suspense fallback={<Loader />}>
        {/* <Navigation /> */}
        <Routes className={css.main}>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* <Button variant="contained">Нажми меня</Button> */}
      </Suspense>
    </div>
  );
}

export default App;
