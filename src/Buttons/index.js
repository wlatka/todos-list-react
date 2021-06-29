import "./style.css";
import React, { Fragment } from "react";

const Buttons = ({ tasks, hideDoneTasks }) => (

    <div className="buttons">
        {tasks.length > 0 && (
            <Fragment>
        <button className="buttons__button">
            {hideDoneTasks ? "Pokaż" : "Ukryj"} zakończone
        </button>
        <button
            className="buttons__button"
            disabled={tasks.every(({ done }) => done)}
        >
            Zakończ wszystkie
        </button>
        </Fragment>
        )}
    </div>
)

export default Buttons;