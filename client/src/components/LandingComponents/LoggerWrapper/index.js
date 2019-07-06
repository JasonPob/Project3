import React from 'react';
import LoggerBtns from '../LoggerButton';
import InputStylist from '../InputStylist';
import InputClient from '../InputClient';

class LoggerWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayInputStylist: false,
            displayInputClient: false,
        }
    };
    // on the button 
    HandleStylistLog = () => {
        alert('hi')
        this.setState({ displayInputStylist: true })
    };
    HandleClientLog = () => {
        alert('hello')
        this.setState({ displayInputClient: true })
    };

    render() {
        if (this.state.displayInputStylist) {
            alert('stylist');
            return (

                <InputStylist
                    HandleDisplayStylist={this.HandleDisplayStylist}
                />
            )
        } else if (this.state.displayInputClient) {
            alert('client');
            return (
                <InputClient
                    HandleDisplayCLient={this.HandleDisplayCLient}
                />
            )
        } else {
            return (
            <LoggerBtns
                HandleClientLog={this.HandleClientLog}
                HandleStylistLog={this.HandleStylistLog}
            />
            )
        }
    }
};
export default LoggerWrapper;



