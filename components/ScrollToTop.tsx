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
              className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 relative cursor-pointer"
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
                    <MessageCircle size={16} className="text-green-500" />
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
