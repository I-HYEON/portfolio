import { useNavigate } from "react-router-dom";

export const RedirectTo = (path) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(path)
  }

  return handleClick();
}

export default RedirectTo;