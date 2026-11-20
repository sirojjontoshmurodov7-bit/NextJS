export default function ServicesPage() {
    return (
        <main className="mx-auto max-w-7xl px-6 py-16">
            <h1 className="text-3xl font-bold text-gray-900">My Services</h1>

            <p className="mt-3 text-gray-600">
                Here are the services I can provide.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl border p-6">
                    <h2 className="text-xl font-semibold">
                        Frontend Development
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Building responsive and modern user interfaces.
                    </p>
                </div>

                <div className="rounded-xl border p-6">
                    <h2 className="text-xl font-semibold">
                        Backend Development
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Developing APIs and server-side applications.
                    </p>
                </div>

                <div className="rounded-xl border p-6">
                    <h2 className="text-xl font-semibold">
                        FullStack Development
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Creating complete web applications.
                    </p>
                </div>
            </div>
        </main>
    );
}
