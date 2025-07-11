import OurProjectsPage from "@/components/pages/our-projects/OurProjectsPage";
import type { Metadata } from "next";

// Fetch categories from API
async function fetchProjects() {
  try {
    const res = await fetch("https://api.alhonayan.com/getProjectsCategoriesAndTopics", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 }, // يحدث البيانات كل 60 ثانية
      // cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch categories");
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const metadata: Metadata = {
  title: "مشاريعنا",
  description:
    "استعرض مشاريع دار الحنيان للاستشارات الهندسية التي تعكس التميز والابتكار في تقديم الحلول الهندسية المتكاملة.",
};

// You can use this in a Server Component or call in useEffect for Client Component
async function Page() {
  const categories = await fetchProjects();
  const projectsCategories = categories?.projectsCategories || [];
  const projectsTopics = categories?.projectsTopics || [];
  
  return (
    <>
      <OurProjectsPage projectsCategories={projectsCategories} projectsTopics={projectsTopics} />
    </>
  );
}

export default Page;
