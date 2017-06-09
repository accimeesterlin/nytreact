/**
 * Created by esterlingaccime on 6/8/17.
 */
var React = require("react");

class Result extends React.Component{
    constructor(){
        super();

    }

    render(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Result</h3>
                </div>
                <div className="panel-body">
                    <div className="info">
                        <p>Alien Invade Paris</p>
                        <button className="btn btn-default">Save</button>
                    </div>

                    <div className="info">
                        <p>Obama Gives Commencement</p>
                        <button className="btn btn-default">Save</button>
                    </div>

                    <div className="info">
                        <p>Trump Steals Nuclear Codes</p>
                        <button className="btn btn-default">Save</button>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Result;