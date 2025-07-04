
const Home = () => {
  const samplePosts = [
    { id: 1, title: "AI Study Group", description: "Looking for 3 members to build an AI-powered chatbot." },
    { id: 2, title: "Web Dev Team", description: "Need frontend and backend devs for an e-commerce app." },
    { id: 3, title: "Mobile App Idea", description: "Building a fitness tracker in React Native." },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
      <div className="grid gap-4">
        {samplePosts.map((post) => (
          <div key={post.id} className="border rounded-xl p-4 shadow-md bg-white">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-gray-600">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
