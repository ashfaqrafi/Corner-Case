import styles from "./CurrentlyPlaying.module.css";
import React from "react";
import { IRadioData } from "../models/index";

export const CurrentlyPlaying = ({
  selectedRadio,
}: {
  selectedRadio: IRadioData | null;
}): JSX.Element => {
  return (
    <div>
      <div className={styles.radioPlay}>CURRENTLY PLAYING</div>
      <div className={`${styles.radioName} radio-name`}>
        {selectedRadio?.name}
      </div>
    </div>
  );
};
