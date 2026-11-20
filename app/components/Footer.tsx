import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t bg-gray-50">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
                <p className="text-sm text-gray-500">
                    © 2026 My Website. All rights reserved.
                </p>

                <div className="flex gap-5 text-sm text-gray-600">
                    <Link href="/" className="hover:text-blue-600">
                        Home
                    </Link>

                    <Link href="/about" className="hover:text-blue-600">
                        About
                    </Link>

                    <Link href="/contact" className="hover:text-blue-600">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
}
