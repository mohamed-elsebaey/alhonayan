import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { services } from "./_constants";
import { Metadata } from "next";

type Props = {
  params: Promise<{
    service: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> { 
  const resolvedParams = (await params).service;
  const serviceObj = services[resolvedParams as keyof typeof services];


  if (!serviceObj) {
    return {
      title: "",
      description: "",
    };
  }

  return {
    title: serviceObj.title
      ? typeof serviceObj.title === "string"
        ? serviceObj.title
        : serviceObj.title.ar
      : "",
    description: serviceObj.description
      ? typeof serviceObj.description === "string"
        ? serviceObj.description
        : serviceObj.description.ar
      : "",
    alternates: {
      canonical: `https://www.alhonayan.com/services/${resolvedParams}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = (await params).service;
  const service = services[resolvedParams as keyof typeof services];

  // Handle invalid service URLs
  if (!service) {
    notFound();
  }

  return (
    <div className="section-margin mb-28">
      <div className="content-width flex flex-col gap-12">
        <div className="border-r-[5px] border-primary pr-5">
          <h1 className="text-3xl font-bold text-secondary mb-4">
            {service.description.ar}
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2 max-h-[550px]">
            <Image
              src={service.image}
              alt="service"
              width={1000}
              height={1000}
              priority={true}
              className="w-full h-full max-h-[550px]"
            />
          </div>
          <div className="lg:w-1/2 w-full text-start">
            <ol className="space-y-4 text-lg font-medium">
              {service.listItems.map((text, index) => (
                <ListItem key={index} count={index + 1} text={text.ar} />
              ))}
            </ol>
          </div>
        </div>
        <Link href="/design-request" className="text-center">
          <Button
            variant="default"
            size="lg"
            className="font-semibold cursor-pointer"
          >
            أطلب خدمتك الأن
          </Button>
        </Link>
      </div>
    </div>
  );
}

const ListItem = ({ count, text }: { count: number; text: string }) => {
  return (
    <li className="flex gap-2">
      <span className="header-gradient flex h-[26px] w-full max-w-[26px] items-center justify-center rounded">
        {count}
      </span>
      {text}
    </li>
  );
};
