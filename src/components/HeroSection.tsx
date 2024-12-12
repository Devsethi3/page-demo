import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Bell } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

const HeroSection = () => {
    const logos = [
        '/OpenAI.png',
        '/Splice.png',
        '/Framer.png',
        '/Tesla.png',
        '/Todoist.png',
        '/Spotify.png',
        '/Splice.png',
    ];
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-amber-100 via-white to-blue-200">
            <div className="container py-24">
                <div className="grid gap-12 items-center lg:grid-cols-2 lg:gap-24">
                    {/* Left Column */}
                    <div className="flex flex-col justify-center">
                        <Badge variant="secondary" className="w-fit bg-zinc-900 text-white hover:bg-zinc-900">
                            UPDATE
                        </Badge>

                        <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight text-zinc-900 lg:text-6xl">
                            Design website without Coding Experience
                        </h1>

                        <p className="mt-6 text-lg text-zinc-600">
                            What kind of website would you like to create? Let&apos;s Get started, our software equips you with the tools
                            you need to thrive in today&apos;s competitive business landscape.
                        </p>

                        <div className="mt-8 flex items-center gap-4">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white">
                                        <Image
                                            src={`/stack-${i}.avif`}
                                            alt={`User ${i}`}
                                            width={32}
                                            height={32}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <svg
                                        key={i}
                                        className="h-5 w-5 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column */}
                    <div className="relative">
                        <Image src="/image-4.avif" alt="bg" width={300} height={300} className="absolute top-0 rotate-[125deg]" />
                        {/* Decorative Shapes */}
                        {/* <div className="absolute -left-4 top-1/4 h-12 w-12 rounded-full bg-blue-500" />
                        <div className="absolute -right-8 bottom-1/4 h-24 w-24 rotate-45 transform bg-orange-400" />
                        <div className="absolute left-1/4 top-0 h-16 w-16 rotate-45 transform bg-green-400" /> */}

                        {/* Form Card */}

                        <Image src="/14.webp" alt="bg" width={90} height={90} className="absolute z-10 -top-6 right-8 rotate-[90deg]" />

                        <div className="relative mx-auto max-w-md rounded-xl bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100
 p-8 shadow-xl">


                            <div className="mb-6 tracking-tight">
                                <h2 className="text-2xl text-center font-semibold text-zinc-900">Secure your spot now</h2>
                                <p className="mt-2 text-center text-zinc-800">
                                    Be the first to know when the product launches and other not-to-miss updates.
                                </p>
                            </div>

                            <form className="space-y-6">
                                <div>
                                    <Input
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full rounded-lg border border-zinc-200 px-4 py-3"
                                    />
                                </div>
                                <div>

                                    <Input
                                        type="email"
                                        placeholder="Your email"
                                        className="w-full rounded-lg border border-zinc-200 px-4 py-3"
                                    />
                                </div>
                                <Button className="w-full rounded-lg bg-violet-600 py-3 font-medium text-white hover:bg-violet-700">
                                    Join the waitlist
                                </Button>
                                <p className="text-center text-xs text-zinc-500">
                                    By subscribing you agree with our{" "}
                                    <Link href="#" className="text-violet-600 hover:underline">
                                        Terms Of License
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <div className="py-6 mx-auto max-w-7xl flex-col gap-10 flex items-center justify-center">
                <h3 className="text-zinc-600">Join other tech leaders:</h3>
                <div className='flex items-center flex-wrap gap-16'>
                    {logos.map((logo, index) => (
                        <Image src={logo} alt={logo || "logo"} key={index} width={100} height={100} />
                    ))}
                </div>
            </div>
        </div>
    )
}


export default HeroSection;