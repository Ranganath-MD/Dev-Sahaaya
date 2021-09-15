import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string,
  image: string,
  value: string,
};
const resources = [
  {
    name: "Javascript",
    image: "javascript.svg",
    value: "javascript",
  },
  {
    name: "React",
    image: "react.svg",
    value: "react",
  },
  {
    name: "Next",
    image: "nextjs.svg",
    value: "nextjs",
  },
  {
    name: "Node",
    image: "nodejs.svg",
    value: "node",
  },
  {
    name: "GraphQL",
    image: "graphql.svg",
    value: "graphql",
  },
  // {
  //   name: "Libraries",
  //   image: "",
  //   value: "libraries",
  // },

  {
    name: "Database",
    image: "databases.svg",
    value: "database",
  },
  {
    name: "API",
    image: "api2.png",
    value: "api",
  },
  {
    name: "Design",
    image: "dev-design.png",
    value: "design",
  },
  {
    name: "VSCode Extension",
    image: "vscode.svg",
    value: "vscode-extension",
  },
];

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(resources);
}
