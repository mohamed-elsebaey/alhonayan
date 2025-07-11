import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import ImageMasonryGallery from "@/components/sections/ImageMasonryGallery";
import BackToButton from "@/components/sections/BackToButton";


interface PageProps {
  params: Promise<{
    projectType: string;
    projectName: string;
  }>;
  searchParams?: Promise<{ category: string; }>;
}
export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const projectTopic = decodeURIComponent((await params).projectName || "");
  const categoryRaw = (await searchParams)?.category ?? "";
  const category = categoryRaw ? decodeURIComponent(categoryRaw.replace(/\+/g, ' ')) : "";
  const title = projectTopic ? projectTopic : "Projects";
  const description = category ? `Explore ${category} projects` : `Explore projects.`;
  return {
    title,
    description,
  };
}

async function fetchProjectImages(category: string, projectTopic: string, projectName: string) {
  try {
    const url = `https://api.alhonayan.com/getProjectImages.php?category=${encodeURIComponent(category)}&projectTopic=${encodeURIComponent(projectTopic)}&projectName=${encodeURIComponent(projectName)}`;
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

  const projectName = (await params).projectName;
  const projectNameDecoded = decodeURIComponent(projectName);

  let category = "";
  if (searchParams && typeof (await searchParams).category === "string") {
    category = decodeURIComponent((await searchParams).category.replace(/\+/g, ' '));
  }

  if (!projectTopic) return notFound();

  const ProjectImages = await fetchProjectImages(category, projectTopicDecoded, projectNameDecoded);

  if (!ProjectImages || !category) {
    redirect("/projects");
  }

  return (
    <>
      <main className="min-h-screen content-width py-16">
        <BackToButton />
        <ImageMasonryGallery images={ProjectImages} />
      </main>
    </>
  );
}

export default page;
