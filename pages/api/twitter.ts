import { NextApiResponse } from "next";
import readOnlyTwitter from "../../services/twitter";

export default async function handler(_, res: NextApiResponse) {
  const userTimeline = await readOnlyTwitter.v1.userTimelineByUsername(
    "hourly_absurd"
  );

  return res.status(200).json({
    tweets: userTimeline.tweets,
  });
}
