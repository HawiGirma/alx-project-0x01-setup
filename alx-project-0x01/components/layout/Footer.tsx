const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Daily Contents. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
