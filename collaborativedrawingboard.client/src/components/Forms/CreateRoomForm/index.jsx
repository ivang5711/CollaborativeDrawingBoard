import { useState } from "react";

const CreateRoomForm = ({ uuid }) => {

    const [roomId, setRoomId] = useState(uuid());
    const [name, setName] = useState("");

    const handleCreateRoom = (e) => {
        e.preventDefault();
        // {name, roomId, userId, host, presenter}

        const roomData = {
            name,
            roomId,
            userId: uuid(),
            host: true,
            presenter: true,
        };

        console.log(roomData);
    };

    return (
        <form className="form col-md-12 mt-5">
            <div className="form-group">
                <input
                    type="text"
                    className="form-control my-2"
                    placeholder="Enter your name"
                    value={name}
                    onChange={ (e) => setName(e.target.value) }
                />
            </div>
            <div className="form-group border rounded-2 p-1">
                <div className="input-group d-flex align-items-center justify-content-center">
                    <input type="text" className="form-control my-2 border-0 me-1" value={ roomId } disabled placeholder="Generate room code" />
                    <div className="input-group-append">
                        <button className="btn btn-primary btn-sm me-1" type="button" onClick={() => setRoomId(uuid)}   >
                            generate
                        </button>
                        <button className="btn btn-outline-danger btn-sm me-2" type="button">
                            Copy
                        </button>
                    </div>
                </div>
            </div>
            <button
                type="submit"
                className="mt-4 btn btn-primary btn-block form-control"
                onClick={ handleCreateRoom }
            >
                Generate room
            </button>
        </form>
    );
};

export default CreateRoomForm;