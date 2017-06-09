/**
 * Created by esterlingaccime on 6/8/17.
 */
var React = require("react");

class Search extends React.Component{
    constructor(){
        super();

    }

    render(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Search</h3>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Topic</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Topic..." />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Start Year</label>
                            <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Start Year..." />
                        </div>


                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Search</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Search..." />
                        </div>

                        <button type="submit" className="btn btn-default">Search</button>
                    </form>


                </div>
            </div>
        )
    }
};

module.exports = Search;