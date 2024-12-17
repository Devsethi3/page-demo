import Image from "next/image";
import { Badge } from "./ui/badge";

const FeatureShowcase = () => {
    return (
        <div className="w-full bg-white">
            <div className="container mx-auto px-4 py-16">
                <div className="flex items-center justify-center flex-col">
                    <Badge variant="secondary" className="bg-zinc-900 font-thin py-1 text-white hover:bg-zinc-800">
                        FEATURES
                    </Badge>

                    <h2 className="mt-6 text-3xl md:text-4xl lg:text-6xl mb-6 lg:max-w-5xl text-center leading-tight tracking-tight text-zinc-900">
                        Unlock Your Full Potential with our cutting-edge features
                    </h2>
                    <p className="mb-12 text-center text-lg text-gray-600 md:text-xl lg:max-w-4xl">
                        From intuitive task management to advanced data analytics, our software equips
                        you with the tools you need to thrive in today&apos;s competitive business landscape.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid gap-12 md:grid-cols-2">
                    {/* Left Feature */}
                    <div className="relative flex justify-center">
                        <div className="mb-8 w-full overflow-hidden rounded-2xl bg-amber-100 p-8">
                            <Image
                                src="/image-3.avif"
                                alt="features"
                                width={500}
                                height={500}
                                className="mx-auto"
                            />
                            <h3 className="mb-3 text-2xl font-bold mt-8 text-gray-900">
                                Make website without any coding
                            </h3>
                            <p className="text-gray-600">
                                Go paperless. Back up important to all devices, & keep the information not the clutter,
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>

                    {/* Right Feature */}
                    <div className="relative flex justify-center">
                        <div className="mb-8 w-full overflow-hidden rounded-2xl bg-blue-50 p-8">
                            <Image
                                src="/image.avif"
                                alt="features"
                                width={500}
                                height={500}
                                className="mx-auto"
                            />
                            <h3 className="mb-3 text-2xl font-bold text-gray-900">
                                Smart widget for you
                            </h3>
                            <p className="text-gray-600">
                                The intuitive and flexible drag & drop editor saves time on development with great speed, great sapped
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bento Grid */}

                <div className="flex items-center lg:gap-12 gap-8 lg:flex-row flex-col">
                    <div className="relative lg:w-[45%] w-full flex justify-center">
                        <div className="mb-8 w-full overflow-hidden rounded-2xl bg-amber-100 p-8">
                            <Image
                                src="/image-1.avif"
                                alt="features"
                                width={350}
                                height={350}
                                className="mx-auto"
                            />
                            <h3 className="mb-3 text-2xl font-bold mt-8 text-gray-900">
                                Application Integrate
                            </h3>
                            <p className="text-gray-600">
                                Share content across apps. Evernote connects with the productivity tools you already use, so you can work your way.
                            </p>
                        </div>
                    </div>

                    <div className="relative lg:w-[65%] w-full flex justify-center gap-12">
                        <div className="flex items-center lg:gap-12 flex-col lg:flex-row gap-8">
                            <div className="flex lg:w-[50%] w-full items-start flex-col">
                                <Image
                                    src="/secure.png"
                                    alt="features"
                                    width={400}
                                    height={400}
                                    className="mx-auto -mt-10"
                                />
                                <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">
                                    Secure and reliable
                                </h3>
                                <p className="text-gray-600">
                                    For anyone to start building their real estate portfolio, no matter the size of <br /> your wallet.
                                </p>
                            </div>
                            <div className="flex lg:w-[50%] w-full items-center flex-col gap-10">
                                <div className="flex items-start gap-5 flex-col">

                                    <Image
                                        src="/integrated.png"
                                        alt="features"
                                        width={400}
                                        height={400}
                                        className="mx-auto -mt-8 rounded-xl"
                                    />
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        100% integrated
                                    </h3>
                                    <p className="text-gray-600">
                                        For anyone to start building their real estate portfolio, no matter the size of <br /> your wallet.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeatureShowcase;

{/* <div className="mb-8 w-full overflow-hidden rounded-2xl bg-blue-50 p-8">
                            <Image
                                src="/image.avif"
                                alt="features"
                                width={500}
                                height={500}
                                className="mx-auto"
                            />
                            <h3 className="mb-3 text-2xl font-bold text-gray-900">
                                Smart widget for you
                            </h3>
                            <p className="text-gray-600">
                                The intuitive and flexible drag & drop editor saves time on development with great speed, great sapped
                            </p>
                        </div> */}
