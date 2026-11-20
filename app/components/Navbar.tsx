import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md">
            <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                <Link
                    href="/"
                    className="text-2xl font-bold tracking-tight text-gray-900"
                >
                    TST<span className="text-blue-600">website</span>
                </Link>

                <ul className="flex flex-wrap items-center gap-2 sm:gap-6">
                    <li>
                        <Link
                            href="/"
                            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/about"
                            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                        >
                            About
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/services"
                            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                        >
                            Services
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/contact"
                            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
