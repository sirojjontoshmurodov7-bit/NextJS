import Link from "next/link";

export default function Home() {
    return (
        <main className="mx-auto min-h-[70vh] max-w-7xl px-6 py-20">
            <h1 className="text-4xl font-bold text-gray-900">
                Welcome to My Website!
            </h1>

            <p className="mt-4 text-lg text-gray-600">
                Hello! My name is Sirojjon. I am a FullStack Developer.
            </p>

            <div className="mt-8 flex gap-4">
                <Link
                    href="/about"
                    className="rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
                >
                    About Me
                </Link>

                <Link
                    href="/contact"
                    className="rounded-lg border border-gray-300 px-5 py-3 text-gray-700 transition hover:bg-gray-100"
                >
                    Contact
                </Link>
            </div>
        </main>
    );
}
