import React, { useState } from 'react'
import './Controls.css'
interface Props  {
      time: Function
}

const Controls = (props: Props) => {
      const {time} = props;
      const [intervalId, setIntervalId] = useState<number>(0);
      const [click, setClick] = useState<boolean>(false);

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

      const handlePlayButtonState = () => {
            setClick(true);
            handlePlayButton();
      }

      const handleStopButtonState = () => {
            setClick(false);
            handleStopButton();
      }


      return (
            <div className="controls-container">
                  <button data-testid="btn-play" disabled={click} onClick={handlePlayButtonState}>Play</button>
                  <button data-testid="btn-stop" onClick={handleStopButtonState}>Stop</button>
                  <button data-testid="btn-reset" onClick={handleResetButton}>Reset</button>
            </div>
      )
}

export default Controls
