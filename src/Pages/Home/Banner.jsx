import img from "../../assets/img/maldives-island.png"

const Banner = () => {
    return (
        <div className="relative w-full h-[92vh] overflow-hidden">
            {/* Background Image - Full width */}
            <img
                src={img || "/placeholder.svg"}
                alt="Maldives Island"
                fill
                priority
                className="object-cover w-full h-full"
                sizes="100vw"
            />

            {/* Content Container */}
            <div className="absolute inset-0 w-full h-full flex items-center">
                <div className="relative bg-[url('/path-to-your-image.jpg')] bg-cover bg-center">
                    <div className="backdrop-blur-sm bg-white/30 ml-30 mt-20 rounded-xl">
                        <div className="container mx-auto px-6 md:px-12 py-16">
                            <div className="max-w-xl">
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                    How Does <span className="text-blue-600">VacanzaMyCost.It</span> Work?
                                </h1>

                                <p className="mt-4 text-gray-800 text-lg">
                                    Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
                                    Since The 1500s,
                                </p>

                                <button className="mt-8 bg-[#3C76DC] hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md transition-colors text-[20px]">
                                    Create Request
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Banner
