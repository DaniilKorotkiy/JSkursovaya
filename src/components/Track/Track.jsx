import { useContext } from "react";
import { AudioContext } from "../../context/AudioContext";
import style from "./track.module.scss";
import { IconButton, iconButton  } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import secondsToMMSS from "../../utils/secondsToMMSS";

const Track = (track) => {
    const {id, src, preview, title, artists, duration } = track;

    const { handleToggleAudio } = useContext(AudioContext);

    const formattedDuration = secondsToMMSS(duration);
    
    return (
     <div className={style.track}>
        <IconButton>
            <PlayArrow />
        </IconButton>
        <img className={style.previev} src={previev} alt="" />
        <div className={style.credits}>
            <b>{title}</b>
            <p>{artists}</p>
        </div>
        <p>{formattedDuration}</p>
    </div>
    );
};

export default Track;