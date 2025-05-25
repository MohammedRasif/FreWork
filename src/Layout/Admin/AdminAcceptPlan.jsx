export default function AdminAcceptPlan() {
  // Array of 15 tour objects
  const tours = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1741443127/samples/coffee.jpg",
      dateRange: "12 July, 2025 - 22 July, 2025",
      title: "Tour to Bangkok",
      description:
        "Different people have different taste, and various types of music, Zimbali Coastal Resort. Enjoy a vibrant city adventure with cultural experiences and bustling markets.",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1741443119/samples/landscapes/nature-mountains.jpg",
      dateRange: "15 August, 2025 - 25 August, 2025",
      title: "Tour to Phuket",
      description:
        "Explore the beautiful beaches and vibrant culture of Phuket with friends and family. Perfect for relaxation and water activities.",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1741443124/samples/smile.jpg",
      dateRange: "10 September, 2025 - 20 September, 2025",
      title: "Tour to Chiang Mai",
      description:
        "Experience the serene temples and lush mountains of Chiang Mai on this adventure. Ideal for nature lovers and cultural enthusiasts.",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1741443127/samples/man-portrait.jpg",
      dateRange: "5 October, 2025 - 15 October, 2025",
      title: "Tour to Pattaya",
      description:
        "Enjoy the nightlife and stunning beaches of Pattaya in this exciting tour. A mix of adventure and leisure awaits.",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1741443119/samples/landscapes/nature-mountains.jpg",
      dateRange: "1 November, 2025 - 11 November, 2025",
      title: "Tour to Krabi",
      description:
        "Discover the limestone cliffs and crystal-clear waters of Krabi on this trip. Perfect for snorkeling and island hopping.",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1741443127/samples/coffee.jpg",
      dateRange: "20 November, 2025 - 30 November, 2025",
      title: "Tour to Ayutthaya",
      description:
        "Step back in time with a visit to the historical ruins and temples of Ayutthaya, a UNESCO World Heritage site.",
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1741443119/samples/landscapes/nature-mountains.jpg",
      dateRange: "5 December, 2025 - 15 December, 2025",
      title: "Tour to Koh Samui",
      description:
        "Relax on the pristine beaches of Koh Samui and enjoy its luxurious resorts and vibrant nightlife.",
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1741443124/samples/smile.jpg",
      dateRange: "10 January, 2026 - 20 January, 2026",
      title: "Tour to Hua Hin",
      description:
        "Experience the charm of Hua Hin with its beautiful beaches, golf courses, and night markets.",
    },
    {
      id: 9,
      image:
        "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1741443127/samples/man-portrait.jpg",
      dateRange: "15 February, 2026 - 25 February, 2026",
      title: "Tour to Chiang Rai",
      description:
        "Explore the unique temples and natural beauty of Chiang Rai, including the famous White Temple.",
    },
    {
      id: 10,
      image:
        "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1741443119/samples/landscapes/nature-mountains.jpg",
      dateRange: "1 March, 2026 - 11 March, 2026",
      title: "Tour to Koh Phi Phi",
      description:
        "Dive into the turquoise waters of Koh Phi Phi and explore its stunning beaches and marine life.",
    },
    {
      id: 11,
      image:
        "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1741443127/samples/coffee.jpg",
      dateRange: "15 April, 2026 - 25 April, 2026",
      title: "Tour to Sukhothai",
      description:
        "Discover the ancient ruins of Sukhothai, another UNESCO World Heritage site, filled with historical wonders.",
    },
    {
      id: 12,
      image:
        "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1741443119/samples/landscapes/nature-mountains.jpg",
      dateRange: "1 May, 2026 - 11 May, 2026",
      title: "Tour to Koh Lanta",
      description:
        "Enjoy the laid-back vibes and pristine beaches of Koh Lanta, perfect for a relaxing getaway.",
    },
    {
      id: 13,
      image:
        "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1741443124/samples/smile.jpg",
      dateRange: "15 June, 2026 - 25 June, 2026",
      title: "Tour to Kanchanaburi",
      description:
        "Visit the historic Bridge over the River Kwai and explore the natural beauty of Kanchanaburi.",
    },
    {
      id: 14,
      image:
        "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1741443127/samples/man-portrait.jpg",
      dateRange: "1 July, 2026 - 11 July, 2026",
      title: "Tour to Pai",
      description:
        "Experience the bohemian charm of Pai with its hot springs, waterfalls, and relaxed atmosphere.",
    },
    {
      id: 15,
      image:
        "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1741443119/samples/landscapes/nature-mountains.jpg",
      dateRange: "15 August, 2026 - 25 August, 2026",
      title: "Tour to Koh Chang",
      description:
        "Explore the lush jungles and pristine beaches of Koh Chang, perfect for nature and adventure enthusiasts.",
    },
  ];

  return (
    <div className="">
      {/* Grid layout for tour cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* Map through tours to render each tour card */}
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
            style={{ minHeight: "400px" }} // Ensure consistent card height
          >
            {/* Tour Image */}
            <div className="relative p-3">
              <img
                src={tour.image}
                alt="Tour destination"
                className="w-full h-44 rounded-md object-cover"
              />
            </div>

            {/* Card Content */}
            <div className="p-4 flex flex-col flex-grow">
              {/* Date Range */}
              <div className="text-sm text-gray-600 mb-2">{tour.dateRange}</div>

              {/* Tour Title */}
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                {tour.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed font-medium mb-3 flex-grow">
                {tour.description}
              </p>

              {/* View Button - Fixed at the bottom */}
              <div className="mt-auto">
                <button className=" py-[5px] px-5 border-2 border-gray-400 text-blue-500  font-medium rounded-md hover:bg-blue-50 transition-colors text-[14px]">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
