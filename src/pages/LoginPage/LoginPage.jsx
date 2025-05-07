import React, { useEffect, useState } from "react";
// import { fetchMovies } from "../../services/api";
import s from "./LoginPage.module.css";
// import MoviesList from "../../components/MoviesList/MoviesList";
import toast, { Toaster } from "react-hot-toast";
import { LoginForm } from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  // const [movies, setMovies] = useState([]);
  // const [totalPages, setTotalPages] = useState(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const abortController = new AbortController();
  //   const getDate = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await fetchMovies(abortController.signal);
  //       setMovies((prev) => [...prev, ...data.results]);
  //       // setMovies(data.result);
  //       setTotalPages(data.total_pages);
  //     } catch (error) {
  //       if (error.message === "canceled") {
  //         console.log("Запит скасований користувачем");
  //         return;
  //       }
  //       toast.error("❌ Error fetching movies:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getDate();
  //   return () => {
  //     abortController.abort();
  //   };
  // }, []);

  return (
    <div>
      <Toaster />
      <LoginForm />
      {/* <h2 className={s.title}>Log In</h2> */}
    </div>
  );
};

export default LoginPage;
