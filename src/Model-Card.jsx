import react from "@vitejs/plugin-react-swc";
import MyThree from "./Three";
import { div } from "three/examples/jsm/nodes/Nodes.js";

let ModelCard = (pops) => {
    return(
        <div>
            <MyThree path={pops.path}></MyThree>
            <h2>{pops.name}</h2>
            <h4>{pops.price}</h4>
        </div>
    )
}