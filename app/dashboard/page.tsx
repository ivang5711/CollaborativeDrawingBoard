'use client';
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css';
import { io } from 'socket.io-client';

import { FC, useEffect, useState } from 'react'
const socket = io('http://localhost:3001')

let roomsQ = 0;
let boardsCount = roomsQ;

function addRoom() {
    roomsQ++;
    boardsCount++;
    interactWithServerCounter();


};


function interactWithServerCounter() {
    socket.emit("howdy", roomsQ);

    socket.on("hello", (arg) => {
        console.log(arg);
        roomsQ = arg;
        boardsCount = arg;
        const paragraph = document.getElementById("my-paragraph");
        if (paragraph) {
            let text = "Boards to explore:";
            paragraph.textContent = text.concat(" ", boardsCount.toString());
        }

    });


};


export default function Page() {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
        interactWithServerCounter();
    }, [boardsCount])

    


    return (
        <div >
            <div >
                <nav className="navbar bg-body-tertiary">
                    <div className="container justify-content-around">
                        <div className='col-flex justify-content-center'>
                            <button onClick={() => addRoom()} type='button' className="btn btn-outline" data-bs-toggle="tooltip" data-bs-placement="bottom" title="create new board">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                </svg>
                            </button>
                        </div>
                        <div className='col-flex justify-content-center'>
                            <span id="my-paragraph" className="" data-bs-toggle="tooltip" data-bs-placement="bottom" title="boards total">
                            {isClient ? 'Boards to explore: ' : ''}  
                            </span>
                        </div>
                        <div className='col-flex justify-content-center'>
                            <a className="btn btn-outline" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="help">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-question-square" viewBox="0 0 16 16">
                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="container text-center  pt-5">
                <div className="row px-6 pb-5 gap-5 justify-content-around">
                    <div className="col">
                        <div className="card">
                            <canvas className="card-img-top"></canvas>
                            <div className="card-body">
                                <h5 className="card-title">Board 1</h5>
                                <Link href="/" className="btn btn-primary">Join</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <canvas className="card-img-top"></canvas>
                            <div className="card-body">
                                <h5 className="card-title">Board 2</h5>
                                <Link href="/" className="btn btn-primary">Join</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <canvas className="card-img-top"></canvas>
                            <div className="card-body">
                                <h5 className="card-title">Board 3</h5>
                                <Link href="/" className="btn btn-primary">Join</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row px-6 gap-5 pt-3 ">
                    <div className="col">
                        <div className="card">
                            <canvas className="card-img-top"></canvas>
                            <div className="card-body">
                                <h5 className="card-title">Board 4</h5>
                                <Link href="/" className="btn btn-primary">Join</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <canvas className="card-img-top"></canvas>
                            <div className="card-body">
                                <h5 className="card-title">Board 5</h5>
                                <Link href="/" className="btn btn-primary">Join</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <canvas className="card-img-top"></canvas>
                            <div className="card-body">
                                <h5 className="card-title">Board 6</h5>
                                <Link href="/" className="btn btn-primary">Join</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}