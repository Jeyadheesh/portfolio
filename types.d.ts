interface XY {
  X: string | number;
  Y: string | number;
}

interface GitInfoProp {
  name: string;
  description: string;
  topics: string[];
  readmedata?: string[];
  topics: string[];
  html_url: string;
  homepage: string;
}

interface ProjectsImageTemplateProp {
  image: StaticImageData;
  lposition: Variants;
  rposition: Variants;
  rinitial: Variants;
  varient1: {
    linitial1: Variants;
    linitial2: Variants;
  };
  lanimate: Variants;
  ranimate: Variants;
  z: number;
}
