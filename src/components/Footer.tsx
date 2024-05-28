const Footer = () => {
    const year = new Date().getFullYear()
    return (
      <footer className="w-full p-5 bg-black/[0.96] text-white text-center">
        <p>&copy; {year} Priyesh Kumar Rai. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  