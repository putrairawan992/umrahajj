import React, { Component } from 'react';
import ItneraryStep from './ItneraryStep';

class ItneraryCard extends Component {
    createItneraryStep() {
        var list = [];
        var self = this;

        for (var i = 0; i < this.props.itneraryStep.length; i++) {
            list.push(<ItneraryStep
              key={i}
              itneraryTitle={self.props.itneraryStep[i]}
              place="-"
            />);
        }

        return list;
    }

    render() {
        return (
            <div className="inerary1">

                <div className="inerary">
                  <h3 dangerouslySetInnerHTML={{__html: this.props.name}}/>
                </div>

                {this.createItneraryStep()}

            </div>

        );
    }
}

export default ItneraryCard;
