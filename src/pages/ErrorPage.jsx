import React from 'react';
import { Link } from 'react-router';



const ErrorPage = () => {
    return (
      
        <div>

            <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
                <h1 className="text-7xl font-extrabold text-gray-800 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
                <p className="text-gray-500 text-center max-w-md mb-6">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="px-6 py-2 rounded-md bg-orange-600 text-white font-medium hover:bg-orange-700 transition"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;