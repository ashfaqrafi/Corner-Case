import styles from "./Radio.module.css";
import React from "react";
import Image from "next/image";
import { radioStationData } from "../modules/radioStationData";
import { IRadioData } from "../models/index";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion";
import { CurrentlyPlaying } from "./CurrentlyPlaying";

function StyledAccordionPanel(props: any) {
  return <AccordionPanel className={styles.accordionPanel} {...props} />;
}

function GroupedAccordionHeader({ children }) {
  return (
    <div className={styles.accordionWrapper}>
      <AccordionButton className={styles.accordionButton}>
        {children}
      </AccordionButton>
    </div>
  );
}

export default function Radio() {
  const [selectedRadio, setSelectedRadio] = React.useState<IRadioData | null>(
    null
  );

  return (
    <div className="radio-wrapper">
      <div className={styles.radioWrapper}>
        <>
          <div className={`${styles.radioHeader} radio-header`}>
            <div>
              <Image
                src="/back-arrow.png"
                alt="back"
                width="25"
                height="40"
                className="cursor-pointer"
              />
            </div>
            <div className="text-heading">STATIONS</div>
            <div>
              <Image
                src="/switch.png"
                alt="switch"
                width="35"
                height="40"
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className={`${styles.radioBody} radio-body`}>
            <div className={`${styles.radioList} radio-list`}>
              {radioStationData?.map((radio: IRadioData) => (
                <div
                  key={radio?.id}
                  onClick={() => {
                    setSelectedRadio(radio);
                  }}
                  className={`${styles.radioItem} radio-item`}
                >
                  <Accordion collapsible>
                    <AccordionItem>
                      <GroupedAccordionHeader>
                        <div className={styles.radioData}>
                          <div>{radio?.name}</div>
                          <div>{radio?.frequency}</div>
                        </div>
                      </GroupedAccordionHeader>
                      <StyledAccordionPanel>
                        <div className={styles.radioThumb}>
                          <div>
                            <Image
                              src="/minus.png"
                              alt="minus"
                              width="40"
                              height="40"
                              className="cursor-pointer"
                            />
                          </div>
                          <div>
                            <Image
                              src="/radio.jpeg"
                              alt="thumb"
                              width="200"
                              height="200"
                              className={styles.radioThumbnail}
                            />
                          </div>
                          <div>
                            <Image
                              src="/plus.png"
                              alt="plus"
                              width="40"
                              height="40"
                              className="cursor-pointer"
                            />
                          </div>
                        </div>
                      </StyledAccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
          <div className={`${styles.radioFooter} radio-footer`}>
            {selectedRadio && (
              <CurrentlyPlaying selectedRadio={selectedRadio} />
            )}
          </div>
        </>
      </div>
    </div>
  );
}
