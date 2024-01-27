interface XY {
  X: string | number;
  Y: string | number;
}

interface GitInfoProp {
  name: string;
  description: string;
  topics: string[];
  readmedata: string[];
  topics: string[];
  html_url: string;
  homepage: string;
}

interface ProjectsImageTemplateProp {
  image: StaticImageData;
  lposition: Variants;
  rposition: Variants;
  variant1: Variant;
  z: number;
}

type Pages = "home" | "education" | "skills" | "projects" | "contact";
