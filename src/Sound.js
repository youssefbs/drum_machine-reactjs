import React, { Component } from 'react';
import KeyHandler, { KEYPRESS } from 'react-key-handler';

class Sound extends Component {
    constructor(props){
        super(props);
        this.audio=React.createRef();

    }

    playSound=(e)=>{
        this.audio.current.play();
        this.props.updateName(this.props.name);
    }

    


    render() {
        const {sound,name,text}=this.props
        return (
            <div className='drum-pad' id={name}  onClick={this.playSound} >
                    <KeyHandler
                            keyEventName={KEYPRESS}
                            keyValue={text}
                            onKeyHandle={this.playSound}
                   /> 
                    {text}
                    <audio src={sound} className='clip' id={text} ref={this.audio}/>
            </div>
        );
    }
}

export default Sound;