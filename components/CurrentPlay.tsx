import styles from "./CurrentPlay.module.css";
import React from "react";
import { IRadioData } from "../models/index";

export const CurrentPlay = ({
  selectedRadio,
}: {
  selectedRadio: IRadioData | null;
}): JSX.Element => {
  return (
    <div>
      <div className={styles.radioPlay}>CURRENTLY PLAYING</div>
      <div className={styles.radioName}>{selectedRadio?.name}</div>
    </div>
  );
};
