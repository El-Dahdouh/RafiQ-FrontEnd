import teamPhoto from "../../../public/assets/imgs/StudentsCollaborating.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${teamPhoto})`,
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay to darken the image */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-4">
            Where Student Ideas Come to Life
          </h1>
          <p className="text-xl text-white mb-6 max-w-2xl">
            Rafiq is a collaborative space for students to turn their ideas into
            real-world projects through teamwork and creativity.
          </p>
          <a
            href="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Start Exploring Projects
          </a>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Power in Collaboration
        </h2>
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
    </div>
  );
};

export default Home;
