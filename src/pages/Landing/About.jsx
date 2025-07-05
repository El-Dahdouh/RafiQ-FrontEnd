import "../../styles/about.css";

const About = () => {
  return (
    <div className="bg-white py-12 px-6 sm:px-10 md:px-20 lg:px-32 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-700">
        About Us
      </h1>

      <div className="space-y-12">
        <section className="space-y-4  shadow-lg p-5">
          <h2 className="text-2xl font-semibold text-gray-900">
            About Our Platform
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We believe every great idea deserves a team to bring it to life. Our
            platform connects developers with innovative project ideas and helps
            them find the right teammates with the skills needed to turn those
            ideas into reality.
          </p>
        </section>

        <section className="space-y-4 shadow-lg p-5">
          <h2 className="text-2xl font-semibold text-gray-900">
            What You Can Do Here
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Share your project ideas and required technologies and skills
            </li>
            <li>Search for other developers who are interested</li>
            <li>Form a team and build something amazing together</li>
            <li>Apply for a suitable project to work on</li>
          </ul>
        </section>

        <section className="space-y-4 shadow-lg p-5">
          <h2 className="text-2xl font-semibold text-gray-900">
            Why We Created This Platform
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Too often, developers have amazing ideas but no one to help them
            build them. We wanted to create a space where collaboration is easy,
            and developers can connect based on shared interests, skills, and
            goals.
          </p>
        </section>

        <section className="space-y-4 shadow-lg p-5">
          <h2 className="text-2xl font-semibold text-gray-900">
            Who Can Use This
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Whether you are a beginner looking for real-world experience, or an
            experienced developer searching for a team to work on your next big
            thing — this platform is for you.
          </p>
        </section>

        <section className="space-y-4 shadow-lg p-5">
          <h2 className="text-2xl font-semibold text-gray-900">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            We aim to become the go-to platform for developer collaboration — a
            place where every idea has the chance to grow, and every developer
            has the chance to contribute.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
