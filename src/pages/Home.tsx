import { Link } from "react-router-dom";

import ProjectLogo from "@components/ProjectLogo";
import ComponentA from "@components/ComponentA";
import ListOfRecords from "@components/ListOfRecords";
import { BuildTimestamp, ETimeStampFormat } from "@components/BuildTimestamp";

function Home() {
  return (
    <>
      <ProjectLogo className="logo" width="100px" />
      <h1>Home</h1>
      <Link to="/about">About</Link>
      <ComponentA />
      <ListOfRecords />
      <BuildTimestamp format={ETimeStampFormat.AUTO} />
    </>
  );
}

export { Home };
