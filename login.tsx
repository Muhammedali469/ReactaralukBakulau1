import React, { useState, useEffect } from "react";
import "./Home.css";

const App = () => {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

// localStorage сақтап алады
  const register = () => {
    const newUser = { name, email, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

// сақталған даныды тексереді
  const login = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      setUser(storedUser);
    } else {
      alert("Неверный email или пароль");
    }
  };

  const logout = () => {
    setUser();
  };

  const deleteAccount = () => {
    localStorage.removeItem("user");
    setUser();
  };

  const guestLogin = () => {
    setUser({ name: "Guest" });
  };

  return (
    <div>
      {!user ? (
        <div className="logincard">
          <h2>Регистрация</h2>
          <div>
            <input
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={register}>Зарегистрироваться</button>
          <h2>Вход</h2>
          <button onClick={login}>Войти</button>
          <button onClick={guestLogin}>Войти как гость</button>
        </div>
      ) : (
        <div className="logincard">
          <h2>Привет, {user.name}</h2>
          <button onClick={logout}>Выйти</button>
          {user.name !== "Guest" && (
            <button onClick={deleteAccount}>Удалить аккаунт</button>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
