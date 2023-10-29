"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import "../../globals.css";
let key;

export const Form = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      const keyObject = await response.json();
      if (typeof window !== "undefined") {
        localStorage.setItem("key", keyObject.key);
      }
      key = keyObject.key;
      router.push("/dashboard");
    } else {
      const errorData = await response.json();
      console.error(errorData.message);
      setShowAlert(true);
    }
    fetchData();
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1/auth/user/", {
        method: "GET",
        headers: {
          // "Content-Type": "application/json",
          Authorization: "Token " + key,
        },
      });
      if (response.ok) {
        const id = await response.json();
        typeof window !== "undefined"
          ? localStorage.setItem("id", id.pk)
          : null;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-12 w-full sm:w-[550px]">
      <div className="grid w-full items-center mt-9">
        <label htmlFor="email"></label>
        <input
          className="w-full py-3 rounded-lg pl-5"
          required
          value={email}
          placeholder="Адресс электронной почты"
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
        />
      </div>
      <div className="grid w-full items-center">
        <label htmlFor="password"></label>
        <input
          className="w-full py-3 rounded-lg pl-5"
          placeholder="Введите пароль"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
        />
      </div>
      {showAlert && (
        <div className="p-2 mt-5 rounded bg-red-200">Invalid Credentials</div>
      )}
      <div className="float-right pt-16">
        <Button type="submit">Войти</Button>
      </div>
    </form>
  );
};
