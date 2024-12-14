import React from "react";
import { UserCircle2Icon } from "lucide-react";

const TestimonialGrid = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      avatar: "/women.jpg",
      review:
        "This service has completely transformed my business approach. The attention to detail and comprehensive support exceeded my wildest expectations. I've seen a significant improvement in efficiency and overall performance since implementing their solutions.",
      stars: 5,
      position: "CEO, Tech Innovations Inc.",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "/testi-1.jpg",
      review:
        "From the moment I first engaged with their team, I knew this was going to be different. The personalized approach, cutting-edge strategies, and unwavering commitment to client success make them stand out in a crowded market.",
      stars: 4,
      position: "Marketing Director, Global Brands",
    },
    {
      id: 3,
      name: "Michael Brown",
      avatar: "/avatar@2x.jpg",
      review:
        "Absolutely phenomenal service! The design team's creativity and technical expertise are second to none. They didn't just meet my expectations; they completely redefined what I thought was possible in our industry.",
      stars: 5,
      position: "Founder, Creative Solutions",
    },
    {
      id: 4,
      name: "Emily White",
      avatar: "/testi-3.jpg",
      review:
        "I've worked with many service providers, but none come close to the level of professionalism and results delivered by this team. Their support is responsive, their insights are invaluable, and their execution is flawless.",
      stars: 4,
      position: "Operations Manager, Enterprise Solutions",
    },
    {
      id: 5,
      name: "David Wilson",
      avatar: "/testi-2.jpg",
      review:
        "An extraordinary experience that went far beyond my initial requirements. Their innovative approach, deep understanding of our challenges, and commitment to excellence have been truly game-changing for our organization.",
      stars: 5,
      position: "Strategy Consultant, Global Ventures",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`
              bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 
              transform transition-all duration-300 hover:scale-105
              ${index === 0 ? "md:col-span-2" : ""}
            `}
          >
            <div className="flex items-start space-x-4 mb-4">
              {/* Avatar */}
              {testimonial.avatar ? (
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              ) : (
                <UserCircle2Icon className="w-16 h-16 text-gray-300" />
              )}

              {/* Name and Position */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.position}
                </p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={i < testimonial.stars ? "#FFD700" : "#E0E0E0"}
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-600 dark:text-gray-300 italic mb-4">
              "{testimonial.review}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialGrid;
