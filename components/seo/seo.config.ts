import { DefaultSeoProps } from "next-seo";

export const seoConfig: DefaultSeoProps = {
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://devsahaaya.vercel.app/",
    site_name: "Dev Sahaaya",
    description:
      "Resources for Javascript Developers",
    images: [
      {
        url: "https://res.cloudinary.com/devsahaaya/image/upload/v1632762512/images/devsahaaya.png",
        width: 800,
        height: 600,
        alt: "Dev sahaaya site",
      },
    ],
  },
  twitter: {
    handle: "Dev Sahaaya",
    site: "https://devsahaaya.vercel.app/",
    cardType: "summary_large_image",
  },
  robotsProps: {
    nosnippet: true,
    notranslate: true,
    noimageindex: true,
    noarchive: true,
    maxSnippet: -1,
    maxImagePreview: "none",
    maxVideoPreview: -1,
  },
};
