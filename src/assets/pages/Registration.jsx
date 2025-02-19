import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';  // Import useNavigate
import { AuthContext } from '../../../AuthProvider';
import { updateProfile } from "firebase/auth";

const Registration = () => {
  const { registerUser, setUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();  // Initialize the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photoURL = form.get("photoURL");

    try {
      const result = await registerUser(email, password);
      const user = result.user;

      // Update the user's profile with name and photo URL
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });

      // Update the user state
      setUser({ ...user, displayName: name, photoURL });
      console.log("User created and profile updated:", user);
    } catch (error) {
      console.error("Error creating user:", error.message, error.code);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      console.log("Logged in with Google successfully!");
      navigate('/');  // Redirect to the home page after successful login
    } catch (error) {
      console.error("Google login error:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Register
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Field */}
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3D405B]"
            required
          />
          
          {/* Email Field */}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3D405B]"
            required
          />

          {/* Password Field */}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3D405B]"
            required
          />

          {/* Photo URL Field */}
          <input
            type="url"
            name="photoURL"
            id="photoURL"
            placeholder="Photo URL (Optional)"
            className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3D405B]"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-indigo-800 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
          >
            Register
          </button>
        </form>

        <div className="mt-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full p-3 border border-gray-300 rounded-md flex items-center justify-center hover:border-gray-400 focus:outline-none"
          >
            <span className="text-gray-700 font-medium">Sign in with Google</span>
          </button>
        </div>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-[#3D405B] hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
