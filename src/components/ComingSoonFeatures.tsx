import { ThumbsUp, Target, Shield, Brain } from 'lucide-react'

const ComingSoonFeatures = () => {
    const features = [
        {
            icon: <ThumbsUp className="w-8 h-8 text-blue-600" />,
            title: "AI-powered editor",
            description: "Assign tasks, set priorities, and track progress effortlessly",
        },
        {
            icon: <Shield className="w-8 h-8 text-blue-600" />,
            title: "Tools integrations",
            description: "Visualize trends and monitor key performances",
        },
        {
            icon: <Brain className="w-8 h-8 text-blue-600" />,
            title: "Data analytics",
            description: "Customize workflows, add integrations, and adapt features",
        },
        {
            icon: <Target className="w-8 h-8 text-blue-600" />,
            title: "Intuitive Task Management",
            description: "Assign tasks, set priorities, and track progress effortlessly",
        },
        {
            icon: <Brain className="w-8 h-8 text-blue-600" />,
            title: "Advanced Data Analytics",
            description: "Visualize trends and monitor key performances",
        },
        {
            icon: <ThumbsUp className="w-8 h-8 text-blue-600" />,
            title: "Scalability and Customization",
            description: "Customize workflows, add integrations, and adapt features",
        },
    ]

    return (
        <section className="py-10 md:py-24 bg-white" >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-semibold text-center mb-16">
                    And more is coming
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 p-6 rounded-xl transition-all duration-300 hover:bg-gray-50"
                        >
                            <div className="flex-shrink-0 p-2 rounded-lg bg-blue-50">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default ComingSoonFeatures