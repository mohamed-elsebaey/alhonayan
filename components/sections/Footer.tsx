import { navigationLinks, socialMedia } from "@/constants";
import logo from "@/public/logo/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="py-4 md:py-8 bg-gradient-3">
      <div className="p-6">
        <Link href="/" aria-label="go home" className="mx-auto block size-fit">
          <Image src={logo.src} alt="logo" width={130} height={130} />
        </Link>

        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {navigationLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-primary block duration-150"
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {socialMedia.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="text-muted-foreground hover:text-primary block"
            >
              <span dangerouslySetInnerHTML={{ __html: link.svg }} />
            </Link>
          ))}
        </div>
        <span className="text-muted-foreground block text-center text-sm">
          جميع الحقوق محفوظة لموقع, دار الحنيان © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
