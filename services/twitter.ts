import { TwitterApi } from "twitter-api-v2";

const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;
const twitterClient = new TwitterApi(BEARER_TOKEN!);

const readOnlyTwitter = twitterClient.readOnly;

export default readOnlyTwitter;
