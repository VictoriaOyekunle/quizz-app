import React from 'react'
import { useNavigate } from 'react-router-dom';

const SetTimer = ({minSecs}) => {
   let navigate = useNavigate()
    const {minutes = 0, seconds = 60 } = minSecs;
    const [[mins, secs], setTime] = React.useState([minutes, seconds]);
    

    const tick = () => {
   
        if (mins === 0 && secs === 0) {
            alert("Time up, your set time for the quiz has lapsed")
            navigate('/end')
        }
            // reset()
        else if (mins === 0 && secs === 0) {
            setTime([59, 59]);
        } else if (secs === 0) {
            setTime([mins - 1, 59]);
        } else {
            setTime([mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(minutes), parseInt(seconds)]);

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div>
            <p>{`${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
        </div>
    );
}

export default SetTimer;