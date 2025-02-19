import { Link } from "react-router";
import { AlertTriangle } from "lucide-react";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <AlertTriangle className="w-16 h-16 text-red-500" />
      <h1 className="text-5xl font-bold mt-4">404</h1>
      <p className="text-lg mt-2">Oops! The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
