import React, { useState } from "react";
import { Button } from "../button";

import styles from "./createTweet.module.css";

import { ReactComponent as ImageIcon } from "../../assets/createTweet/image.svg";
import { ReactComponent as SmileIcon } from "../../assets/createTweet/smile.svg";
import { ReactComponent as AvatarIcon } from "../../assets/profile/profileAvatar.svg";
import { newTweet, uploadImage } from "../../services/tweet.service";

export const CreateTweet = ({ placeholder = "What's Happening" }) => {
  const [uploadedData, setUplodedData] = useState("");

  const [tweetMsg, setTweetMsg] = useState("");

  function openFileDialog(accept, callback) {
    var inputElement = document.createElement("input");

    inputElement.type = "file";

    inputElement.accept = accept;

    inputElement.addEventListener("change", callback);

    inputElement.dispatchEvent(new MouseEvent("click"));

    console.log(inputElement.files);
  }

  const onFileChange = (e) => {
    let file = e.path[0].files[0];
    setUplodedData(URL.createObjectURL(file));
  };

  const onUploadedImageClose = () => {
    setUplodedData("");
  };

  const handleTweetChange = (e) => {
    setTweetMsg(e.target.value);
  };

  const onTweet = (file, tweetMsg) => {
    uploadImage(file).then((data) => {
      newTweet({
        name: tweetMsg,
        asset: data.image,
      });
    });
  };

  return (
    <div className={styles.createTweetContainer}>
      <div className={styles.profileCont}>
        <div>
          <AvatarIcon />
        </div>
      </div>
      <div className={styles.dataCont}>
        <div className={styles.createTweetInputCont}>
          <input
            value={tweetMsg}
            onChange={handleTweetChange}
            className={styles.newTweetInput}
            type="text"
            placeholder={placeholder}
          />
        </div>
        {uploadedData && (
          <div className={styles.uploadedDataCont}>
            <div
              onClick={onUploadedImageClose}
              className={styles.uploadedImageCancel}
            >
              X
            </div>
            <img className={styles.uploadedImg} src={uploadedData} alt="" />
          </div>
        )}

        <div className={styles.footer}>
          <div
            className={styles.iconContainer}
            onClick={() => openFileDialog(".svg,.png,.jpg,.jpeg", onFileChange)}
          >
            <ImageIcon />
          </div>
          <div className={styles.iconContainer}>
            <SmileIcon />
          </div>
          <div className={styles.empty} />
          <div className={styles.tweetButton}>
            <Button
              onClick={() => onTweet(uploadedData, tweetMsg)}
              disabled={!(uploadedData || tweetMsg)}
            >
              Tweet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
