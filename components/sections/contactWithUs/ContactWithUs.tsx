import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ContactWithUs = () => {
  return (
    <>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-1 lg:py-14 lg:px-20 p-10 rounded-2xl flex items-center justify-between flex-col lg:flex-row">
            <div className="block text-center mb-5 lg:text-right lg:mb-0">
              <h2 className=" text-4xl text-white font-semibold mb-5 lg:mb-2">
                تواصل معنا
              </h2>
              <p className="text-xl text-indigo-100">
                تواصل معنا لأي استفسار أو فكرة.
              </p>
            </div>
            <Link href="/">
              <Button
                size="lg"
                className="font-semibold cursor-pointer"
              >
                تواصل معنا
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactWithUs;
