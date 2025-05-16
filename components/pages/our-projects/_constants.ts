export const projectsCategories = [
  { id: "all", label: "كافة المشاريع" },
  { id: "Interior Design", label: "التصميم الداخلي" },
  { id: "Exterior Design", label: "التصميم الخارجي" },
];

export type ProjectsCategory = Exclude<
  (typeof projectsCategories)[number]["id"],
  "all"
>;

export const interiorSubCategories = [
  "المجالس والصالات",
  "المطابخ وغرف الطعام",
  "غرف النوم الرئيسية",
  "المكاتب المنزلية",
  "التنسيق الداخلي",
  "الحمامات والمغاسل",
] as const;

export type InteriorSubCategory = (typeof interiorSubCategories)[number];

export const exteriorSubCategories = [
  "الفلل السكنية",
  "الفلل السكنية الدوبلكس",
  "المباني السكنية متعددة الطوابق",
  "المباني التجارية",
  "تنسيق الحدائق",
  "تجاري",
] as const;

export type ExteriorSubCategory = (typeof exteriorSubCategories)[number];

export interface ProjectImage {
  id: number;
  src: string;
  alt: string;
}

export interface ProjectsTopics {
  id: string;
  label: InteriorSubCategory | ExteriorSubCategory;
  image: ProjectImage;
  category: ProjectsCategory;
  description: string;
  link: `/${InteriorSubCategory | ExteriorSubCategory | string}`;
}

export interface Project {
  id: number;
  title: string;
  category: ProjectsCategory;
  subCategory: InteriorSubCategory | ExteriorSubCategory;
  description: string;
  images: ProjectImage[];
}

export const projectsTopics: ProjectsTopics[] = [
  {
    id: "villa",
    label: "الفلل السكنية",
    image: {
      id: 7,
      src: "/images/projects/topics/villa.jpg",
      alt: "الفلل السكنية",
    },
    category: "Exterior Design",
    description: "تصاميم الفلل السكنية الفاخرة.",
    link: "/villa",
  },
  {
    id: "villa-duplex",
    label: "الفلل السكنية الدوبلكس",
    image: {
      id: 8,
      src: "/images/projects/topics/villa-duplex.jpg",
      alt: "الفلل السكنية الدوبلكس",
    },
    category: "Exterior Design",
    description: "تصاميم الفلل الدوبلكس الحديثة.",
    link: "/villa-duplex",
  },
  {
    id: "building",
    label: "المباني السكنية متعددة الطوابق",
    image: {
      id: 9,
      src: "/images/projects/topics/building.jpg",
      alt: "المباني السكنية",
    },
    category: "Exterior Design",
    description: "تصاميم المباني السكنية متعددة الطوابق.",
    link: "/building",
  },
  {
    id: "commercial",
    label: "تجاري",
    image: {
      id: 10,
      src: "/images/projects/topics/commercial.jpg",
      alt: "تجاري",
    },
    category: "Exterior Design",
    description: "تصاميم المشاريع التجارية العصرية.",
    link: "/commercial",
  },
  {
    id: "exterior-landscape",
    label: "تنسيق الحدائق",
    image: {
      id: 11,
      src: "/images/projects/topics/exterior-landscape.jpg",
      alt: "تنسيق الحدائق",
    },
    category: "Exterior Design",
    description: "تصاميم اللاند سكيب الخارجية.",
    link: "/exterior-landscape",
  },
  {
    id: "majlis",
    label: "المجالس والصالات",
    image: {
      id: 1,
      src: "/images/projects/topics/majlis.jpg",
      alt: "المجالس والصالات",
    },
    category: "Interior Design",
    description: "تصاميم عصرية للمجالس والصالات بلمسات فاخرة ومريحة",
    link: "/majlis",
  },
  {
    id: "kitchen-dining",
    label: "المطابخ وغرف الطعام",
    image: {
      id: 2,
      src: "/images/projects/topics/kitchen-dining.jpg",
      alt: "المطابخ وغرف الطعام",
    },
    category: "Interior Design",
    description: "تصاميم مبتكرة للمطابخ العصرية وغرف الطعام الأنيقة",
    link: "/kitchen-dining",
  },
  {
    id: "bedroom",
    label: "غرف النوم الرئيسية",
    image: {
      id: 3,
      src: "/images/projects/topics/bedroom.jpg",
      alt: "غرف النوم الرئيسية",
    },
    category: "Interior Design",
    description: "تصاميم غرف النوم المريحة والمودرن.",
    link: "/bedroom",
  },
  {
    id: "office",
    label: "المكاتب المنزلية",
    image: {
      id: 4,
      src: "/images/projects/topics/office.jpg",
      alt: "المكاتب المنزلية",
    },
    category: "Interior Design",
    description: "تصاميم المكاتب العملية والأنيقة.",
    link: "/office",
  },
  {
    id: "interior-landscape",
    label: "التنسيق الداخلي",
    image: {
      id: 5,
      src: "/images/projects/topics/interior-landscape.jpg",
      alt: "التنسيق الداخلي",
    },
    category: "Interior Design",
    description: "تصاميم اللاند سكيب الداخلية.",
    link: "/interior-landscape",
  },
  {
    id: "bathroom",
    label: "الحمامات والمغاسل",
    image: {
      id: 6,
      src: "/images/projects/topics/bathroom.jpg",
      alt: "الحمامات والمغاسل",
    },
    category: "Interior Design",
    description: "تصاميم المغاسل والحمامات العصرية.",
    link: "/bathroom",
  },
];

export const projects: Project[] = [
  // Interior Design Projects
  {
    id: 1,
    title: "مشروع مجلس 1",
    category: "Interior Design",
    subCategory: "المجالس والصالات",
    description: "مشروع تصميم مجلس فاخر مع تفاصيل عربية.",
    images: [
      {
        id: 1,
        src: "/images/projects/interior/majlis/project1/1.jpg",
        alt: "مجلس مشروع 1 - صورة 1",
      },
      {
        id: 2,
        src: "/images/projects/interior/majlis/project1/2.jpg",
        alt: "مجلس مشروع 1 - صورة 2",
      },
    ],
  },
  {
    id: 2,
    title: "مشروع مجلس 2",
    category: "Interior Design",
    subCategory: "المجالس والصالات",
    description: "مشروع تصميم مجلس عصري بلمسات فاخرة.",
    images: [
      {
        id: 1,
        src: "/images/projects/interior/majlis/project2/1.jpg",
        alt: "مجلس مشروع 2 - صورة 1",
      },
      {
        id: 2,
        src: "/images/projects/interior/majlis/project2/2.jpg",
        alt: "مجلس مشروع 2 - صورة 2",
      },
    ],
  },
  {
    id: 3,
    title: "مشروع مطبخ وصالة طعام",
    category: "Interior Design",
    subCategory: "المطابخ وغرف الطعام",
    description: "مشروع تصميم مطبخ وصالة طعام بتصميم حديث.",
    images: [
      {
        id: 1,
        src: "/images/projects/interior/kitchen/project1/1.jpg",
        alt: "مطبخ مشروع 1 - صورة 1",
      },
      {
        id: 2,
        src: "/images/projects/interior/kitchen/project1/2.jpg",
        alt: "مطبخ مشروع 1 - صورة 2",
      },
    ],
  },
  {
    id: 4,
    title: "مشروع غرفة نوم 1",
    category: "Interior Design",
    subCategory: "غرف النوم الرئيسية",
    description: "مشروع تصميم غرفة نوم مودرن.",
    images: [
      {
        id: 1,
        src: "/images/projects/interior/bedroom/project1/1.jpg",
        alt: "غرفة نوم مشروع 1 - صورة 1",
      },
      {
        id: 2,
        src: "/images/projects/interior/bedroom/project1/2.jpg",
        alt: "غرفة نوم مشروع 1 - صورة 2",
      },
    ],
  },

  // Exterior Design Projects
  {
    id: 4,
    title: "فيلا سكنية دوبلكس",
    category: "Exterior Design",
    subCategory: "الفلل السكنية الدوبلكس",
    description: "تصميم خارجي لفيلا سكنية فاخرة بطراز حديث",
    images: [
      {
        id: 1,
        src: "/images/projects/exterior/villa-duplex/1.jpg",
        alt: "فيلا 1",
      },
      {
        id: 2,
        src: "/images/projects/exterior/villa-duplex/2.jpg",
        alt: "فيلا 2",
      },
    ],
  },
  {
    id: 6,
    title: "مجمع تجاري",
    category: "Exterior Design",
    subCategory: "تجاري",
    description: "تصميم مجمع تجاري عصري متعدد الاستخدامات",
    images: [
      {
        id: 1,
        src: "/images/projects/exterior/commercial/1.jpg",
        alt: "مجمع تجاري 1",
      },
      {
        id: 2,
        src: "/images/projects/exterior/commercial/2.jpg",
        alt: "مجمع تجاري 2",
      },
    ],
  },
];
