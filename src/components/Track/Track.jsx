import { useContext } from "react";
import { AudioContext } from "../../context/AudioContext";
import style from "./track.module.scss";
import { IconButton } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import secondsToMMSS from "../../utils/secondsToMMSS";
import cn from "classnames";

const Track = (track) => {
    const {id, src, preview, title, artists, duration } = track;

    const { handleToggleAudio, currentTrack } = useContext(AudioContext);

    const isCurrentTrack = currentTrack.id === id;

    const formattedDuration = secondsToMMSS(duration);
    
    return (
     <div className={cn(style.track, isCurrentTrack && style.playing)}>
        <IconButton onClick={() => handleToggleAudio(track)}>
          <PlayArrow />
        </IconButton>
        <img className={style.preview} src={preview} alt="" />
        <div className={style.credits}>
            <b>{title}</b>
            <p>{artists}</p>
        </div>
        <p>{formattedDuration}</p>
    </div>
    );
};

export default Track;