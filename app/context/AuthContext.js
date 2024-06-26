import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        `http:/192.168.1.3:3000/api/v1/userRouter/login`,
        {
          email,
          password,
        }
      );

      setUserToken(response.data.token);
      setIsLoading(false);
      return null;
    } catch (error) {
      setError(error.response.data.message);
      setIsLoading(false);
      return error.response.data.message;
    }
  };

  const signUp = (
    name,
    email,
    password,
    passwordConfirm,
    phonenumber,
    Gender
  ) => {
    setIsLoading(true);
    axios
      .post(`http:/192.168.1.3:3000/api/v1/userRouter/signup`, {
        name,
        email,
        password,
        passwordConfirm,
        phonenumber,
        Gender,
      })
      .then((res) => {
        setUserToken(res.data.token);
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
    // AsyncStorage.setItem("userToken", userToken);
    setIsLoading("false");
  };

  const logout = () => {
    setIsLoading(true);

    setUserToken(null);
    // AsyncStorage.removeItem("userToken");

    setIsLoading(false);
  };

  // const isLoggedIn = async () => {
  //   try {
  //     setIsLoading(true);
  //     let userToken = AsyncStorage.getItem("userToken");
  //     setUserToken(userToken);
  //     setIsLoading(false);
  //   } catch (e) {
  //     console.log("saad");
  //   }
  // };
  // useEffect(() => {
  //   isLoggedIn();
  // }, []);
  return (
    <AuthContext.Provider
      value={{ login, signUp, logout, isLoading, userToken, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};
