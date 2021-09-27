import { NextSeo, NextSeoProps } from "next-seo";

export const Seo: React.FC<NextSeoProps> = ({
  title,
  description,
}) => (
  <>
    <NextSeo
      title={title}
      description={description}
      canonical="https://devsahaaya.vercel.app/"
      defaultTitle="Dev Sahaaya"
    />
  </>
);
