import type { NextApiRequest, NextApiResponse } from "next";
import { fetchGithubBasics } from "utils";
import { Basics } from "types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Basics[]>
) {
  const basics = await fetchGithubBasics();
  res.status(200).json(basics);
}
