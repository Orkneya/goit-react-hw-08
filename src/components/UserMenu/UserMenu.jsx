import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const handleLogout = () => {
    dispatch(logoutThunk());
    navigate("/");
  };
  return (
    <div className={css.wrapper}>
      <button onClick={handleLogout}>LogOut</button>
      {/* <button onClick={() => dispatch(logoutThunk())}> LogOut</button> */}
      <h3> Welcome, {user.name} ! </h3>
    </div>
  );
};

export default UserMenu;
