
import { ProjectCard, ProjectsTopics } from "@/components/pages/our-projects/OurProjectsPage";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";


interface PageProps {
  params: Promise<{
    projectType: string;
  }>;
  searchParams?: Promise<{ category: string; }>;
}
// Dynamic metadata generator
export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const projectTopic = decodeURIComponent((await params).projectType || "");
  const categoryRaw = (await searchParams)?.category ?? "";
  const category = categoryRaw ? decodeURIComponent(categoryRaw.replace(/\+/g, ' ')) : "";
  const title = projectTopic ? projectTopic : "Projects";
  const description = category ? `Explore ${category} projects` : `Explore projects.`;
  return {
    title,
    description,
  };
}

// Helper to fetch sub-project topics
async function fetchSubProjectsTopics(category: string, projectTopic: string) {
  try {
    const url = `https://api.alhonayan.com/getSubProjectsTopics?category=${encodeURIComponent(category)}&projectTopic=${encodeURIComponent(projectTopic)}`;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // next: { revalidate: 60 }, // Uncomment if using Next.js caching
    });
    if (!res.ok)
      return false;
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}





async function page({ params, searchParams }: PageProps) {
  const projectTopic = (await params).projectType;
  const projectTopicDecoded = decodeURIComponent(projectTopic);

  let category = "";
  if (searchParams && typeof (await searchParams).category === "string") {
    category = decodeURIComponent((await searchParams).category.replace(/\+/g, ' '));
  }

  if (!projectTopic) return notFound();

  const { subProjectsTopics } = await fetchSubProjectsTopics(category, projectTopicDecoded);

  if (!subProjectsTopics || !category) {
    redirect("/projects");
  }

  return (
    <div className="min-h-screen section-margin mb-20">
      <div className="content-width grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {subProjectsTopics.map((project: ProjectsTopics) => (
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
              // category={project.category}
              title={project.label}
              button="عرض التفاصيل"
              buttonHref={`/projects/${projectTopicDecoded}/${project.label}?category=${category}`}
              showCard='all'
            />
          </Suspense>
        ))}
      </div>
    </div>
  );
}

export default page;
