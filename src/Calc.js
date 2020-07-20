import React, { Component } from "react";
import { addToMemory } from "./action/action";
import { clear } from "./action/action";
import { addition } from "./action/action";
import { subtraction } from "./action/action";
import { multiplication } from "./action/action";
import { divide } from "./action/action";
import { calculation } from "./action/action";
import { connect } from "react-redux";
import style from "./style.scss";
//const getResult = store => store.result;

class Calc extends Component {
    render() {
        return (
            <div className="calculator">
                <div className="result">{this.props.result}</div>

                <button id="1" onClick={this.props.addToMemory}>
                    1
        </button>
                <button id="2" onClick={this.props.addToMemory}>
                    2
        </button>
                <button id="3" onClick={this.props.addToMemory}>
                    3
        </button>
                <button id="4" onClick={this.props.addToMemory}>
                    4
        </button>
                <button id="5" onClick={this.props.addToMemory}>
                    5
        </button>
                <button id="6" onClick={this.props.addToMemory}>
                    6
        </button>
                <button id="7" onClick={this.props.addToMemory}>
                    7
        </button>
                <button id="8" onClick={this.props.addToMemory}>
                    8
        </button>
                <button id="9" onClick={this.props.addToMemory}>
                    9
        </button>
                <button
                    id="0"
                    onClick={this.props.addToMemory}
                    disabled={!this.props.result ? true : false}
                >
                    0
        </button>
                <button id="." onClick={this.props.addToMemory}
                    disabled={this.props.dotted === 1 ? true : false}>
                    .
        </button>
                <button onClick={this.props.addition}>+</button>
                <button onClick={this.props.subtraction}>-</button>
                <button onClick={this.props.multiplication}>*</button>
                <button onClick={this.props.divide}>/</button>
                <button onClick={this.props.clear}>Clear</button>
                <button onClick={this.props.calculation}
                    disabled={this.props.disabled}>=</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addToMemory: result => dispatch(addToMemory(result)),
    clear: () => dispatch(clear()),
    addition: () => dispatch(addition()),
    subtraction: () => dispatch(subtraction()),
    multiplication: () => dispatch(multiplication()),
    divide: () => dispatch(divide()),
    calculation: () => dispatch(calculation())
});

const mapStateToProps = state => {
    return {
        result: state.result,
        prev: state.prev,
        dotted: state.dotted,
        disabled: state.disabled
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calc);
