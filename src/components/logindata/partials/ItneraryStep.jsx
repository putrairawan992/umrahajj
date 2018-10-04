import React, { Component } from 'react';

class ItneraryStep extends Component {
    render() {
        return (
            <div>
                <b><img src={require("../../../images/Ellipse_70.png")} alt=""/> {this.props.itneraryTitle}</b>
                <p>{this.props.place}</p>
            </div>
        );
    }
}

export default ItneraryStep;
