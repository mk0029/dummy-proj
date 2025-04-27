// src/app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 px-6 py-12 text-center text-white">
      <h1 className="text-6xl font-bold tracking-tight sm:text-8xl">404</h1>
      <p className="mt-4 text-xl sm:text-2xl">Oops! Page not found.</p>
      <p className="mt-2 text-gray-400">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-2xl bg-indigo-600 px-6 py-3 text-base font-medium text-white transition hover:bg-indigo-500">
        Go Back Home
      </Link>
    </div>
  );
}
