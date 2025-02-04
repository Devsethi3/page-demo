import Image from 'next/image';

const FeatureSection = () => {
    return (
        <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-6 text-center">
                    <h2 className="text-3xl max-w-2xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                        Good-bye to traditional.
                    </h2>
                    <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Say farewell.
                    </p>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-b from-pink-50 to-gray-50 p-6">
                        <div className="mb-4">
                            <Image src="/feature-icon1.png" alt='feature icon' width={45} height={45} />
                        </div>
                        <h3 className="mb-2 text-xl font-bold">Optimize your daily operations</h3>
                        <p className="text-gray-500">
                            Our software.
                        </p>
                    </div>
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-b from-blue-50 to-gray-50 p-6">
                        <div className="mb-4">
                            <Image src="/feature-icon2.png" alt='feature icon' width={45} height={45} />
                        </div>
                        <h3 className="mb-2 text-xl font-bold">Make informed</h3>
                        <p className="text-gray-500">
                            Our software provides.
                        </p>
                    </div>
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-b from-yellow-50 to-gray-50 p-6">
                        <div className="mb-4">
                            <Image src="/feature-icon3.png" alt='feature icon' width={45} height={45} />
                        </div>
                        <h3 className="mb-2 text-xl font-bold">Scale your startup</h3>
                        <p className="text-gray-500">
                            Our software.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureSection;
