const Footer = () => {
  return (
    <footer className="bg-gray-100 ">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} RafiQ. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
