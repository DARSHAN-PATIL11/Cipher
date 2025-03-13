import { FaDiscord, FaGithub, FaLinkedin, FaMastodon } from "react-icons/fa";
import { FaBluesky, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { href: "https://discord.gg/ZTYuRWwF", icon: <FaDiscord /> },
  { href: "https://x.com/D4rsh69", icon: <FaXTwitter /> },
  { href: "https://bsky.app/profile/d4rsh.bsky.social", icon: <FaBluesky /> },
  { href: "https://www.linkedin.com/in/darshan-patil-8b15aa230/", icon: <FaLinkedin /> },
  { href: "https://mastodon.social/@darshan11", icon: <FaMastodon /> },
  { href: "https://github.com/DARSHAN-PATIL11", icon: <FaGithub /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          Copyright &copy; {new Date().getFullYear()}. All rights reserved.
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;