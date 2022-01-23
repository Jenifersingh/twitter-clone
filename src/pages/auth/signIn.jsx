import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";

import styles from "./auth.module.css";

export const SignIn = () => {
  const navigate = useNavigate();

  const onClose = () => {
    navigate(-1);
  };

  return (
    <Modal enable={true} onClose={onClose}>
      <div className={styles.authContaienr}>
        <div className={styles.signInText}>Sign In</div>
        <div>
          <input type="text" className={styles.textBox} placeholder="Email" />
        </div>
        <div>
          <input
            type="password"
            className={styles.textBox}
            placeholder="Password"
          />
        </div>
        <div className={styles.buttonContainer}>
          <Button>SignIn</Button>
        </div>
      </div>
    </Modal>
  );
};
