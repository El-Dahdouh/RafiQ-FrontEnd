import teamPhoto from "../../../public/assets/imgs/StudentsCollaborating.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[700px] overflow-hidden">
        {/* Background Image with lazy loading */}
        <img
          src={teamPhoto}
          alt="Students collaborating"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-4">
            Where Student Ideas Come to Life
          </h1>
          <p className="text-xl text-white mb-6 max-w-2xl">
            Rafiq is a collaborative space for students to turn their ideas into
            real-world projects through teamwork and creativity.
          </p>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Start Exploring Projects
          </Link>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-5xl font-bold text-center mb-8">
          Power in Collaboration
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">500+</h3>
            <p className="text-gray-600 font-semibold">
              New project ideas shared daily
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">10,000+</h3>
            <p className="text-gray-600 font-semibold">
              Active users building together
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">1,200+</h3>
            <p className="text-gray-600 font-semibold">
              Projects successfully completed
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <ProjectsSection />
    </div>
  );
};

export default Home;
