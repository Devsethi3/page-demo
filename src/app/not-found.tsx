import Link from "next/link"

export default function NotFound() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0a0f] via-[#121229] to-[#0a1a1f]">
            <div className="flex flex-col items-center justify-center gap-4 px-4 text-center">
                <h1 className="text-8xl font-bold leading-none text-white">
                    404
                </h1>
                <p className="text-xl text-gray-400">
                    Oops, the page you&apos;re looking for doesn&apos;t exist.
                </p>
                <Link
                    href="/"
                    className="mt-4 w-[280px] rounded bg-gray-800/60 px-4 py-3 text-center text-white transition-colors hover:bg-gray-800/80"
                >
                    Browse back
                </Link>
            </div>
        </div>
    )
}

