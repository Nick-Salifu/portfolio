import Link from "next/link"
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: ""},
    {icon: <FaLinkedin />, path: ""},
    {icon: <FaTwitter />, path: ""},
    {icon: <FaFacebook />, path: ""},
]

export default function Socials({containerStyles, iconStyles}) {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link href={item.path} key={index} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}