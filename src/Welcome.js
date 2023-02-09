import MoonlightDance from "./assets/Moonlight Dance.mp3";
import {PrimaryButton, Text} from "./StyledComponents";
import {useState, useEffect} from "react";




export default function Welcome() {
    const [value, setValue] = useState(0);
    const song = new Audio(MoonlightDance);
    useEffect(() => {
      if (value === 1) {
        play();
      } else if (value === 2) {
        pause();
      }
    }, [value]);
    function play() {
      song.play();
    }
    function pause() {
      song.pause();
    }
    return (
      <>
        <div className = "wrapper">
          <div className="animation-wrapper">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
          </div>
          <div className = "welcome-flex">
            <img src={require('./assets/KD.png')} className = "avatar" alt = 'right-facing-me' />
              <div className = "welcome-content">
                <Text
                  sx = {{
                    fontSize: "44px"
                  }}
                >
                  Welcome to my React Website
                </Text>
                <PrimaryButton 
                  variant = 'contained'
                  sx = {{
                    fontWeight: "700",
                    padding: "20px 0",
                    width: "60%",
                    fontSize: "28px"
                  }}
                >
                  ENTER
                </PrimaryButton>
              </div>
            <img src = {require('./assets/KD_Left.png')} className = "avatar avatar-right" alt = 'left-facing-me'/>
          </div>
          <PrimaryButton 
                  variant = 'contained'
                  onClick = { value === 0 || value === 2 ? () => setValue(1) : () => setValue(2)}
                  sx = {{
                    
                  }}
                >
                  PLAY
          </PrimaryButton>
        </div>
      </>
    );
  }
  