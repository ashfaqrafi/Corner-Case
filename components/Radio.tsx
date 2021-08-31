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
import { CurrentPlay } from "./CurrentPlay";

function StyledAccordionPanel(props: any) {
  return <AccordionPanel style={{ padding: 10 }} {...props} />;
}

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
  const [selectedRadio, setSelectedRadio] = React.useState<IRadioData | null>(
    null
  );

  return (
    <div>
      <div className={styles.radioWrapper}>
        <>
          <div className={styles.radioHeader}>
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
          <div className={styles.radioBody}>
            <div className={styles.radioList}>
              {radioStationData?.map((radio: IRadioData) => (
                <div
                  key={radio?.id}
                  onClick={() => {
                    setSelectedRadio(radio);
                  }}
                  className={styles.radioItem}
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
          <div className={styles.radioFooter}>
            {selectedRadio && <CurrentPlay selectedRadio={selectedRadio} />}
          </div>
        </>
      </div>
    </div>
  );
}
