import React from "react";
import "./Phonetics.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
    return (
        <div className="Phonetic">
            <span className="player">
                <ReactAudioPlayer
          src={props.phonetic.audio}
          onPlay
          controls
          volume={0.5}
        />
            </span>
            <br />
            <span>{props.phonetic.text}</span>
            
        </div>
    );
}