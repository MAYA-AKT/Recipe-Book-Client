import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer className="w-12/12 bg-gray-900 text-white px-10">
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">


                    <div>
                        <h2 className="text-lg font-semibold mb-2"> Tasty Book</h2>
                        <p>Your favorite place to share and discover amazing recipes.</p>
                    </div>


                    <div>
                        <h3 className="text-md font-semibold mb-2">Contact Us</h3>
                        <p>Email: <a href="mailto:support@recipebook.com" className="text-orange-400">mayaakter@gmail.com</a></p>
                        <p>Phone: 01407533436</p>
                    </div>


                    <div>
                        <h3 className="text-md font-semibold mb-2">Follow Us</h3>
                        <div className="flex space-x-4 mt-2">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
                                <FaFacebook size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
                                <FaGithub size={20} />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="mt-6 text-center text-gray-400 text-xs">
                    © {new Date().getFullYear()} RecipeBook. All rights reserved.
                </div>
            </footer>
        </>
    );
};

export default Footer;
