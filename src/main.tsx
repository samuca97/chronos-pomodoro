import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import QualquerCoisa from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QualquerCoisa />
    <div>
      <h1>Olá mundo!</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum cumque
        Incidunt accusamus comodi quasi sit, doloribus in fugiat, repellat
        Laudantium voluptas praesentium labore dolore unde! Aliquam, dolorem! A,
        quia rerum!
      </p>
    </div>
  </StrictMode>,
);
