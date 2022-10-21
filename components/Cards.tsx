import { useEffect, useState } from "react";
import { TweetV1TimelineResult } from "twitter-api-v2";
import Card from "./Card";

const Cards = () => {
  const [data, setData] = useState<TweetV1TimelineResult>([]);
  const [maxId, setMaxId] = useState<string | undefined>(undefined);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/twitter")
      .then((res) => res.json())
      .then((data) => {
        setData(data.tweets);
        setLoading(false);
      });
  }, []);

  function loadNextTweets() {
    fetch(`/api/twitter?nextPage=true&maxId=${maxId}`)
      .then((res) => res.json())
      .then((newData) => {
        setMaxId(newData.maxId);
        setData([...data, ...newData.tweets]);
      });
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>No data</p>;
  }

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-6">
        {data.map((tweet, index) => {
          return (
            <Card
              key={index}
              imageSrc={tweet.entities.media![0].media_url_https}
              retweet={tweet.retweet_count}
              fav={tweet.favorite_count}
              date={tweet.created_at}
            />
          );
        })}
      </div>
      <button onClick={loadNextTweets}>Next Page</button>
    </>
  );
};

export default Cards;
