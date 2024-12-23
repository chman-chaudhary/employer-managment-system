import React from "react";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="rounded-xl border-2 border-green-400/70  flex flex-col items-center p-20"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="bg-transparent placeholder:text-white/70 w-72 rounded-full px-4 py-3 border-2 border-green-400/70 focus:ring-1 focus:ring-green-400/70 outline-none mb-4"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="bg-transparent placeholder:text-white/70 w-72 rounded-full px-4 py-3 border-2 border-green-400/70 focus:ring-1 focus:ring-green-400/70 outline-none mb-8"
        />
        <button
          type="submit"
          className="bg-green-400/70 text-white border-2 border-green-400/70 w-full rounded-full px-4 py-2 hover:bg-green-700 "
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
