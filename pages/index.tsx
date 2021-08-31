import React, { FC } from "react";
import Head from "next/head";
import Radio from "../components/Radio";

const index: FC = () => (
  <>
    <Head>
      <title>Radio Stations</title>
    </Head>
    <div className="container">
      <Radio />
    </div>
  </>
);

export default index;
