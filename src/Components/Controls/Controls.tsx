import React, { useState } from 'react'
import './Controls.css'
interface Props  {
      time: Function
}

const Controls = (props: Props) => {
      const {time} = props;
      const [intervalId, setIntervalId] = useState<number>(0);


      const handlePlayButton = () => {
            let interval: any = setInterval(() => {
                  time((prev:number) => (prev+1))
            },1000);

            setIntervalId(interval);
      }

      const handleStopButton = () => {
            clearInterval(intervalId);
      }

      const handleResetButton = () => {
            clearInterval(intervalId);
            time(0);
      }


      return (
            <div className="controls-container">
                  <button onClick={handlePlayButton}>Play</button>
                  <button onClick={handleStopButton}>Stop</button>
                  <button onClick={handleResetButton}>Reset</button>
            </div>
      )
}

export default Controls
