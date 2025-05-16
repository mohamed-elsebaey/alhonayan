"use client";
import Image from "next/image";
import React, { Suspense, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { projectsTopics, projectsCategories } from "./_constants";

const OurProjectsPage = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category: string) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="section-margin mb-20 min-h-screen">
        <div className="content-width">
          <div className="mx-auto mb-[60px] max-w-xl text-center">
            <span className="text-primary mb-2 block text-lg font-semibold">
              مشاريعنا
            </span>
            <h2 className="mb-3 text-2xl leading-[1.208] font-bold sm:text-3xl md:text-[40px]">
              احدث المشاريع
            </h2>
            <p>
              استعرض مشاريع دار الحنيان للاستشارات الهندسية التي تعكس التميز
              والابتكار في تقديم الحلول الهندسية المتكاملة.
            </p>
          </div>

          <div className="w-full flex flex-wrap justify-center">
            <ul className="flex flex-wrap justify-center mb-12 space-x-1">
              {projectsCategories.map((category) => (
                <li key={category.id} className="mb-1">
                  <Button
                    onClick={() => handleProject(category.id)}
                    variant={showCard === category.id ? "secondary" : "outline"}
                    size={"lg"}
                  >
                    {category.label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsTopics.map((project) => (
              <Suspense
                key={`${project.category} - ${project.id}`}
                fallback={
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-gray-100 rounded-lg p-4 animate-pulse"
                      >
                        <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    ))}
                  </div>
                }
              >
                <ProjectCard
                  ImageSrc={project.image.src}
                  category={project.category}
                  title={project.label}
                  button="عرض التفاصيل"
                  buttonHref={`/projects/${project.link}`}
                  showCard={showCard}
                />
              </Suspense>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProjectsPage;

const ProjectCard = ({
  showCard,
  category,
  ImageSrc,
  title,
  button,
  buttonHref,
}: {
  showCard: string;
  category: string;
  ImageSrc: string;
  title: string;
  button: string;
  buttonHref: string;
}) => {
  return (
    <>
      <div
        className={`w-[380px] ${
          showCard === "all" || showCard === category ? "block" : "hidden"
        }`}
      >
        <div className="rounded-xl w-full overflow-hidden relative h-[430px]">
          <Image
            width={1000}
            height={1000}
            src={ImageSrc}
            alt={title}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
        <div className="relative z-10 mx-7 -mt-20 rounded-2xl bg-white py-6 px-3 text-center shadow-lg">
          <span className="text-primary mb-2 block text-sm font-medium">
            {category}
          </span>
          <h3 className="mb-5 text-xl font-bold">{title}</h3>
          <Link
            href={buttonHref}
            className="hover:header-gradient inline-block rounded-md border py-[8px] px-7 text-sm font-medium transition"
          >
            {button}
          </Link>
        </div>
      </div>
    </>
  );
};
