import FillBox from "../fill-box";
import EmptyBox from "../empty-box";
import { useState } from "react";

const BoxContainer = () => {
    const [isFillBoxActive, updateActive] = useState(false);

    const changeActive = () => updateActive(!isFillBoxActive);

    return (
        <>
            <EmptyBox onHover={changeActive} onLeave={changeActive}></EmptyBox>
            <FillBox isActive={isFillBoxActive}></FillBox>
        </>
    )
}

export default BoxContainer;
