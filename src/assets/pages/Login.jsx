import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from '../../../AuthProvider';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();
    const { setUser } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
            navigate('/'); // Redirect to home page after successful login
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                    Login
                </h2>

                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3D405B]"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3D405B]"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-full p-3 bg-indigo-800 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-[#3D405B] hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;