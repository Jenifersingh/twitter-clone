import React, { useContext, useEffect, useState } from "react";
import { TweetCard } from "../../components/tweetCard";

import styles from "./profile.module.css";

import TestImg from "../../assets/test/testBg.jpeg";
import TestProfilePic from "../../assets/test/testProfilePic.jpg";

import { ReactComponent as BackArrow } from "../../assets/common/backArrow.svg";
import { ImageOverlay } from "../../components/imageOverlay";
import { getUser } from "../../services/user.services";
import { Context } from "../../store/store";
import { ADD_ACTIVE_TWEET } from "../../store/action.types";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const [viewImage, setViewImage] = useState(false);

  const [user, setUser] = useState({});

  const [overlayImage, setOverlayImage] = useState("");

  const { state, dispatch } = useContext(Context);

  const navigate = useNavigate();

  useEffect(() => {
    getUser().then((data) => {
      setUser(data);
    });
  }, []);

  const onViewImage = (image) => {
    setViewImage(true);
    setOverlayImage(image);
  };

  const onCloseImage = () => {
    setViewImage(false);
  };

  const onTweetClick = (tweetId) => {
    dispatch({
      type: ADD_ACTIVE_TWEET,
      payload: tweetId,
    });
    navigate("/viewTweet");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={styles.profileContainer}>
        <div className={styles.pageHeadContainer}>
          <span
            onClick={goBack}
            className={`${styles.iconContainer} ${styles.backArrow}`}
          >
            <BackArrow />
          </span>
          <span className={styles.pageName}>{user.userName}</span>
        </div>
        <div
          className={styles.profileBackground}
          onClick={() => onViewImage(user.backgroundImage)}
        >
          <img className={styles.profileBg} src={user.backgroundImage} alt="" />
        </div>
        <div
          className={styles.profilePic}
          onClick={() => onViewImage(user.profilePic)}
        >
          <img className={styles.profileImg} src={user.profilePic} alt="" />
        </div>

        <div className={styles.userName}>{user.userName}</div>
        <div className={styles.followBox}>
          <div>
            <span className={styles.followNumber}>{user.following}</span>
            <span>Following</span>
          </div>
          <div>
            <span className={styles.followNumber}>{user.followers}</span>
            <span>Followers</span>
          </div>
        </div>
        <div className={styles.profileTweetHead}>Tweets</div>
        <div>
          {user.tweet?.map((value) => (
            <TweetCard
              userName={value.userName}
              tweetMsg={value.name}
              commentLength={value.commentIds?.length}
              likeLength={value.like?.length}
              retweetCount={value.retweet?.length}
              profilePic={value.profilePic}
              onTweetClick={() => onTweetClick(value._id)}
              tweetAsset={value.asset}
              key={value._id}
            />
          ))}
        </div>
      </div>
      <ImageOverlay onClose={onCloseImage} enable={viewImage}>
        <img className src={overlayImage} alt="" />
      </ImageOverlay>
    </>
  );
};
