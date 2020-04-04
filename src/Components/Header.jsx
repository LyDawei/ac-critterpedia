import { Component } from 'react';
import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';



export default class Header extends Component {

    constructor(props) {
        super(props);
        this.getTime = this.getTime.bind(this);
    }

    componentDidMount() {
        setInterval(this.getTime, 1000);
    }

    getTime() {
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let ses = ' AM';
        if (h > 12) {
            h -= 12;
            ses = ' PM'
        }

        if (h === 0) {
            h = 12;
        }

        h = h < 10 ? `0${h}` : h;
        m = m < 10 ? `0${m}` : m;
        this.setState({ time: `${h}:${m}${ses}` });
    }



    render() {
        return (
            <div>
                <ButtonGroup>
                    <Button onClick={() => this.props.setType('insects')}>Insects</Button>
                    <Button onClick={() => this.props.setType('fish')}>Fish</Button>
                </ButtonGroup>
                    &nbsp;
                <ButtonGroup>
                    <Button onClick={() => this.props.setHemisphere('north')}>North</Button>
                    <Button onClick={() => this.props.setHemisphere('south')}>South</Button>
                </ButtonGroup>

                <div>
                    {this.state && this.state.time}
                </div>
            </div>
        );
    }

}