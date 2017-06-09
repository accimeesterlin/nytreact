/**
 * Created by esterlingaccime on 6/8/17.
 */

var React = require("react");


var Search = require("./Search");
var Result = require("./Result");
var Saved = require("./Saved");

class Main extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <div className="jumbotron">
                    <h1>New York Times Article Scrubber</h1>
                    <hr/>
                    <p>Search for and annotate articles of interest!</p>
                </div>

                <Search />
                <Result />
                <Saved />

            </div>
        );
    }
}


module.exports = Main;