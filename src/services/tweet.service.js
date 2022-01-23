import { API, IS_MOCK } from "./base";

import TestTweetImg1 from "../assets/test/testTweetImg1.jpeg";
import TestTweetImg2 from "../assets/test/testTweetImg2.jpeg";

export const getTweet = (tweetId) => {
  if (IS_MOCK) {
    return Promise.resolve(
      tweetId
        ? {
            _id: "61e99a56632de4ee83e5df91",
            userId: "61e7f184836a9752ec57bb86",
            userName: "Jenifer Singh",
            profilePic: TestTweetImg1,
            asset: TestTweetImg2,
            like: ["61e7f184836a9752ec57bb86"],
            name: "Testing Tweet 1",
            comments: [
              {
                _id: "61e99a56632de4ee83e5df91",
                userId: "61e7f184836a9752ec57bb86",
                userName: "Jenifer Singh",
                profilePic: TestTweetImg1,
                asset: TestTweetImg2,
                like: ["61e7f184836a9752ec57bb86"],
                name: "Testing Tweet 1",
                __v: 0,
                retweet: ["61eb8d8bfa8370403f27e7fe"],
              },
              {
                _id: "61e99a56632de4ee83e5df91",
                userId: "61e7f184836a9752ec57bb86",
                userName: "Jenifer Singh",
                profilePic: TestTweetImg1,
                asset: TestTweetImg2,
                like: ["61e7f184836a9752ec57bb86"],
                name: "Testing Tweet 1",
                __v: 0,
                retweet: ["61eb8d8bfa8370403f27e7fe"],
              },
            ],
            __v: 0,
            retweet: ["61eb8d8bfa8370403f27e7fe"],
          }
        : {
            status: true,
            tweet: [
              {
                _id: "61e99a56632de4ee83e5df91",
                userId: "61e7f184836a9752ec57bb86",
                userName: "Jenifer Singh",
                profilePic: TestTweetImg1,
                asset: TestTweetImg2,
                like: ["61e7f184836a9752ec57bb86"],
                name: "Testing Tweet 1",
                commentIds: ["61eb8d8bfa8370403f27e7fe"],
                __v: 0,
                retweet: ["61eb8d8bfa8370403f27e7fe"],
              },
              {
                _id: "61ed0909a0268decc34171ff",
                userName: "Jenish Singh",
                profilePic: TestTweetImg2,
                asset: TestTweetImg1,
                userId: "61e7f184836a9752ec57bb86",
                like: [],
                name: "Testing Tweet 1",
                commentIds: [],
                retweet: [
                  "61eb8d8bfa8370403f27e7fe",
                  "61ed0909a0268decc34171ff",
                ],
                __v: 0,
              },
            ],
          }
    );
  }
  return fetch(
    `${API}/tweet/get-tweet${
      tweetId ? "?tweetId=61e998cebc7735066ef372b1" : ""
    }`,
    {
      method: "GET",
    }
  );
};
//9487020871

export const uploadImage = (formData) => {
  if (IS_MOCK) {
    return Promise.resolve({
      status: true,
      message: "File uploaded successfully.",
      image: "1642924237601-pass-by-reference-vs-pass-by-value-animation-1.jpg",
    });
  }

  return fetch(`/upload/image`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });
};

export const newTweet = (data) => {
  if (IS_MOCK) {
    return Promise.resolve({
      name: "This is a tweet",
    });
  }

  return fetch(`${API}/tweet/new`, {
    method: "POST",
    body: data,
  });
};
