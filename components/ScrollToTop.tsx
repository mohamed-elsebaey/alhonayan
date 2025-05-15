"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappContacts } from "@/constants";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div
        className={cn(
          "flex flex-col gap-3 transition-all duration-300",
          "motion-safe:transition-all motion-safe:duration-300"
        )}
      >
        <div
          className={cn(
            "relative transform transition-all duration-300",
            isVisible ? "translate-y-[-60px]" : "translate-y-0"
          )}
        >
          <div className="group relative">
            <button
              className="hidden lg:block bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 relative cursor-pointer"
              aria-label="Contact on WhatsApp"
            >
              <MessageCircle size={20} />
            </button>

            <div
              className={cn(
                "absolute bottom-0 right-full mr-2 bg-white rounded-lg shadow-lg p-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
              )}
            >
                {whatsappContacts.map((contact, index) => (
                <a
                  key={index}
                  href={`https://wa.me/${contact.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
                >
                  <div className="flex items-center gap-2">
                  {/* Replace MessageCircle with WhatsApp icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-green-500"
                  >
                    <path
                    fill="currentColor"
                    d="M12.04 2.003c-5.52 0-9.997 4.477-9.997 9.997 0 1.762.464 3.482 1.345 4.997L2 22l5.145-1.34A9.96 9.96 0 0 0 12.04 22c5.52 0 9.997-4.477 9.997-9.997s-4.477-9.997-9.997-9.997zm0 17.994a7.96 7.96 0 0 1-4.07-1.17l-.29-.17-3.05.795.815-2.97-.19-.3A7.96 7.96 0 0 1 4.04 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.43-5.61c-.24-.12-1.41-.7-1.63-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.12-.12.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.28-.22.22-.84.82-.84 2 0 1.18.86 2.33.98 2.49.12.16 1.7 2.6 4.12 3.54.58.2 1.03.32 1.38.41.58.15 1.1.13 1.52.08.46-.07 1.41-.58 1.61-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"
                    />
                  </svg>
                  <span className="text-gray-700 font-semibold text-sm">
                    {contact.label}
                  </span>
                  </div>
                  <span className="text-gray-500 text-xs mr-6">
                  {contact.address}
                  </span>
                </a>
                ))}
            </div>
          </div>
        </div>

        <div
          className={cn(
            "absolute bottom-0 right-0 transform transition-all duration-300",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          )}
        >
          <button
            onClick={scrollToTop}
            className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/80 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScrollToTop;
