import Link from "next/link";
import React from "react";
import Styles from "../styles/SocialIcons.module.css"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className="flex items-center mt-2">
      <h1 className="text-lg  mr-2 ">Share On:</h1>
      <Link target="_blank" href="https://www.facebook.com">
        <FaFacebookF className={Styles.SCLIcons} />
      </Link>
      <Link target="_blank" href="https://www.instagram.com">
        <FaInstagram className={Styles.SCLIcons} />
      </Link>
      <Link target="_blank" href="https://www.linkedin.com">
        <FaLinkedin className={Styles.SCLIcons} />
      </Link>
      <Link target="_blank" href="https://www.twitter.com">
        <FaTwitter className={Styles.SCLIcons} />
      </Link>
      <Link target="_blank" href="https://www.pinterest.com">
        <FaPinterestP className={Styles.SCLIcons} />
      </Link>
    </div>
  );
};

export default SocialIcons;
