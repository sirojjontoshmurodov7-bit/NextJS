export default function ContactPage() {
    return (
        <main className="mx-auto max-w-7xl px-6 py-16">
            <h1 className="text-3xl font-bold text-gray-900">Contact Me</h1>

            <p className="mt-3 text-gray-600">
                Feel free to contact me through the following channels.
            </p>

            <div className="mt-8 space-y-5 rounded-xl border p-8">
                <div>
                    <h2 className="text-sm font-medium text-gray-500">
                        Phone Number
                    </h2>

                    <p className="mt-1 text-lg font-semibold text-gray-900">
                        +998 90 288 12 92
                    </p>
                </div>

                <div>
                    <h2 className="text-sm font-medium text-gray-500">
                        Telegram
                    </h2>

                    <a
                        href="https://t.me/ToshmurodovSirojjon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-lg font-semibold text-blue-600 hover:underline"
                    >
                        @ToshmurodovSirojjon
                    </a>
                </div>
            </div>
        </main>
    );
}
