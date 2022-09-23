import LoginForm from "./components/LoginForm";
import { useState } from "react";

function App() {
  const userAdmin = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  function Login(details) {
    if (
      details.email === userAdmin.email &&
      details.password === userAdmin.password
    ) {
      setUser({ name: details.name, email: details.email });
    } else {
      console.log("Something Went Wrong");
      setError("Something Went Wrong");
    }
  }

  function Logout() {
    setUser({ email: "", password: "" });
    setError("")
  }

  return (
    <div className="App">
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome: <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Log Out</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
