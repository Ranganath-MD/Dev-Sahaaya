interface IResources {
  name: string;
  image: string;
  slug: string;
  content: string;
}

type Section = {
  link: string;
  name: string
}

interface IFrontmatter extends Partial<IResources> {
  sections: {
    name: string;
    link: string;
  }[]
}