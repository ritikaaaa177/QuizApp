import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitFunc = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
      }
    );
  };

  return (
    <>
      <html class="h-full">
        <body class="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
          <main class="w-full max-w-md mx-auto p-6">
            <div class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div class="p-4 sm:p-7">
                <div class="text-center">
                  <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">
                    Sign Up Here
                  </h1>
                </div>

                <div class="mt-5">
                  <form>
                    <div class="grid gap-y-4">
                      <div>
                        <div class="relative">
                          <div class="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                            <svg
                              class="h-5 w-5 text-red-500"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              aria-hidden="true"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label
                          for="email"
                          class="block text-sm mb-2 dark:text-white"
                        >
                          Email address
                        </label>
                        <div class="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                            required
                            aria-describedby="email-error"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <div class="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                            <svg
                              class="h-5 w-5 text-red-500"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              aria-hidden="true"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                        </div>
                        <p
                          class="hidden text-xs text-red-600 mt-2"
                          id="email-error"
                        >
                          Please include a valid email address so we can get
                          back to you
                        </p>
                      </div>

                      <div>
                        <div class="flex justify-between items-center">
                          <label
                            for="password"
                            class="block text-sm mb-2 dark:text-white"
                          >
                            Password
                          </label>
                        </div>
                        <div class="relative">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                            required
                            aria-describedby="password-error"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <div class="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                            <svg
                              class="h-5 w-5 text-red-500"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              aria-hidden="true"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                        </div>
                        <p
                          class="hidden text-xs text-red-600 mt-2"
                          id="password-error"
                        >
                          8+ characters required
                        </p>
                      </div>

                      <div class="flex items-center">
                        <div class="flex">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          />
                        </div>
                        <div class="ms-3">
                          <label
                            for="remember-me"
                            class="text-sm dark:text-white"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>

                      <button
                        type="submit"
                        class="bg-gradient-to-tl from-blue-600 to-violet-600 text-white w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        onClick={onSubmitFunc}
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                  <p className="3 text-sm text-white text-center">
                    Already have an account?
                    <NavLink to="/login">
                      <span className=" font-bold  bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                        Sign in
                      </span>
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </main>
        </body>
      </html>
    </>
  );
}

export default SignUp;
