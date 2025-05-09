import css from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contacts/operations";
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Navigation from "./components/Navigation/Navigation";
import Layout from "./components/Layout/Layout";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
// import Button from "@mui/material/Button";

// function App() {
//   return <Button variant="contained">Нажми меня</Button>;
// }

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <Suspense fallback={<Loader />}>
        {/* <Navigation /> */}
        <Routes className={css.main}>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/tasks" element={<ContactsPage />} />
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
