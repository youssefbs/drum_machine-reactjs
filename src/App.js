import React from 'react';
import Sound from './Sound'
import './App.css';

class App extends React.Component{
  state={
    sounds:[{
      keyTrigger: 'Q',
      name: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    }, {
      keyTrigger: 'W',
      name: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    }, {
      keyTrigger: 'E',
      name: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    }, {
      keyTrigger: 'A',
      name: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    }, {
      keyTrigger: 'S',
      name: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    }, {
      keyTrigger: 'D',
      name: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    }, {
      keyTrigger: 'Z',
      name: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    }, {
      keyTrigger: 'X',
      name: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    }, {
      keyTrigger: 'C',
      name: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    },
  ],
  currentSound:''
  }

  updateName=(name)=>{
    this.setState({
      currentSound:name
    })
  }

  render(){
    return(
      <div id='drum-machine'>
          <div>
            <div id='display'>
                <h2>Name of the sound:</h2>
                <p>{this.state.currentSound}</p>
            </div>
            <div className='pad'>
                {
                  this.state.sounds.map((sound,index)=>(
                      <Sound key={index} text={sound.keyTrigger} sound={sound.url} name={sound.name} updateName={this.updateName}/>
                  ))
                }
            </div>
          </div>
      </div> 
    )
  }
}

export default App;
