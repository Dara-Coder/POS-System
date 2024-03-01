import React from "react";
import AppRender from "./Route";

class MainBoard extends React.Component
{   
    render()
    {
        return(
            <div
                className="height-container-board p-3">
                <AppRender></AppRender>
            </div>
        );
    }
}

export default MainBoard;