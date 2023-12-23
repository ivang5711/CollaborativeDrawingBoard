import { useState } from "react";

import "./index.css";

const RoomPage = () => {

    const [tool, setTool] = useState("pencil");
    const [color, setColor] = useState("black");

    return (
        <div className="row">
            <h1 className="text-center py-5">White Board Sharing App</h1>
            <div className="col-md-12 mx-auto mt-4 mb-5 d-flex align-items-center justify-content-center">
                <div className="d-flex col-md-2 justify-content-center gap-3">
                    <div className="d-flex gap-1 align-items-center">
                        <label htmlFor="pencil">Pencil</label>
                        <input type="radio" name="tool" value="pencil" id="pencil" onChange={(e) => setTool(e.target.value)} />
                    </div>
                    <div className="d-flex gap-1 align-items-center">
                        <label htmlFor="line">Line</label>
                        <input type="radio" name="tool" value="line" id="line" onChange={(e) => setTool(e.target.value)} />
                    </div>
                    <div className="d-flex gap-1 align-items-center">
                        <label htmlFor="rect">Rectangle</label>
                        <input type="radio" name="tool" value="rect" id="rect" onChange={(e) => setTool(e.target.value)} />
                    </div>
                    <div className="col-md-7">
                        <div className="d-flex align-items-center">
                            <label htmlFor="color">Select Color:</label>
                            <input type="color" id="color" className="mt-1 ms-2" value={color} onChange={(e) => setColor(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-md-8 d-flex gap-2">
                        <button className="btn btn-primary mt-1">Undo</button>
                        <button className="btn btn-outline-primary mt-1">Redo</button>
                    </div>
                    <div className="col-md-9">
                        <button className="btn btn-danger">Clear canvas</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomPage