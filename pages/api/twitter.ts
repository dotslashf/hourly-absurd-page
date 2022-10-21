import { NextApiRequest, NextApiResponse } from "next";
import readOnlyTwitter from "../../services/twitter";

const tweetToDisplayCount = 21;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userTimeline = await readOnlyTwitter.v1.userTimelineByUsername(
    "hourly_absurd",
    {
      count: tweetToDisplayCount,
    }
  );

  if (req.query.nextPage === "true") {
    const maxIdQuery = req.query.maxId as string;
    const maxId =
      maxIdQuery !== "undefined"
        ? maxIdQuery
        : userTimeline.tweets[tweetToDisplayCount - 1].id_str;
    const nextPage = await readOnlyTwitter.v1.userTimelineByUsername(
      "hourly_absurd",
      {
        count: tweetToDisplayCount,
        max_id: maxId,
      }
    );
    const nextPageNew = [...nextPage.tweets];
    nextPageNew.pop();
    return res.status(200).json({
      tweets: nextPageNew,
      maxId: nextPage.tweets[tweetToDisplayCount - 1].id_str,
    });
  }

  const firstPage = userTimeline.tweets;
  firstPage.pop();
  return res.status(200).json({
    tweets: firstPage,
    firstId: userTimeline.tweets[0].id_str,
  });
}
