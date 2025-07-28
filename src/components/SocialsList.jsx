import { Github, Instagram, Linkedin } from "lucide-react";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function SocialsList() {
  return (
    <div className="flex space-x-4 justify-center">
      <a
        href="https://www.linkedin.com/in/sahar-javadi/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-forground hover:text-primary transition-colors duration-300"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://t.me/aurora_eros"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-forground hover:text-primary transition-colors duration-300"
      >
        <FaTelegramPlane />
      </a>

      <a
        href="https://wa.me/989122602818"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-forground hover:text-primary transition-colors duration-300"
      >
        <FaWhatsapp />
      </a>
      <a
        href="https://github.com/auroraEros"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-forground hover:text-primary transition-colors duration-300"
      >
        <FaGithub />
      </a>
    </div>
  );
}

export default SocialsList;
