import { Badge } from "@/components/ui/badge";
import TestimonialGrid from "./TestimonialGrid";

const Testimonials = () => {
    const stats = [
        {
            value: "35%",
            label: "Years Of Experience",
        },
        {
            value: "4,000+",
            label: "Companies Trust Us",
        },
        {
            value: "100%",
            label: "Results Guaranteed",
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-amber-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center text-center">
                    <Badge variant="secondary" className="bg-zinc-900 text-white mb-6 hover:bg-zinc-800">
                        BRAND WORK
                    </Badge>

                    <h2 className="text-4xl md:text-5xl font-bold mb-16">Our Commitment</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center w-full max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col items-center"
                                style={{
                                    paddingRight: index < stats.length - 1 ? "2rem" : "0",
                                }}
                            >
                                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-amber-600 mb-2">
                                    {stat.value}
                                </span>
                                <span className="text-gray-600">{stat.label}</span>
                                {index < stats.length - 1 && (
                                    <div className="hidden md:block absolute right-0 top-1/2 w-px h-24 bg-amber-600 -translate-y-1/2" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container pt-20">
                <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold text-center">What Our Clients Says</h2>
                <TestimonialGrid />
            </div>
        </section>
    );
};

export default Testimonials;