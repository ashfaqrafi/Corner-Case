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

// Accordion Panel function
function StyledAccordionPanel(props: any) {
  return <AccordionPanel style={{ padding: 10 }} {...props} />;
}

// Accordion Header function
function GroupedAccordionHeader({ children }) {
  return (
    <div
      style={{
        alignItems: "center",
        margin: "9px 0",
        display: "flex",
        justifyContent: "space-between",
        padding: "4px 10px",
      }}
    >
      <AccordionButton
        style={{
          appearance: "none",
          background: 0,
          border: 0,
          boxShadow: "none",
          color: "inherit",
          cursor: "pointer",
          display: "block",
          textAlign: "inherit",
          flexGrow: 1,
          flexShrink: 0,
          font: "inherit",
          fontWeight: "bold",
          margin: 0,
          padding: "10px 0",
        }}
      >
        {children}
      </AccordionButton>
    </div>
  );
}

export default function Radio() {
  // the selected Radio station is put into state
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
                //  radioStationData is the array of radio station data, it will not have to be changed if we use backend API call to GET Radio Lists.
                //  Just put the API response data in this variable.
                //  IRadioData is Radio Data model interface
                <div
                  key={radio?.id}
                  onClick={() => {
                    setSelectedRadio(radio);
                  }}
                  className={`${styles.radioItem} radio-item`}
                >
                  {/* Accordion starts */}
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
                  {/* Accordion ends */}
                </div>
              ))}
            </div>
          </div>
          {/* Footer starts */}
          <div className={`${styles.radioFooter} radio-footer`}>
            {/* sends selectedRadio data as props to the CurrentlyPlaying component to display currently playing radio name */}
            {selectedRadio && (
              <CurrentlyPlaying selectedRadio={selectedRadio} />
            )}
          </div>
          {/* Footer ends */}
        </>
      </div>
    </div>
  );
}
