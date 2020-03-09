import React, { Component } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import './style2.css'
class AdminLanding extends Component {

  constructor(props) {
    super(props);
    this.HandleClick = this.HandleClick.bind(this);
  }


  HandleClick(props) {
    // let history = useHistory();
    // history.push("/createHierarchy")
    this.props.history.push("/createHierarchy");
  }

  render() {


    return (
      <React.Fragment>
        <div className="row">
          <div className="col">

            <div class="card">
              <div class="card-body">
              <p className = "metadata-upload">Create Hierarchy</p>
                <button className="btn btn-primary btn-create-hierarchy" onClick={this.HandleClick}>Create </button>
              </div>
            </div>

          </div>
        </div>

        <br />

        <div className="row">
          <div className="col">

            <div class="card">
              <div class="card-body">
                <p className = "metadata-upload">Update Hierarchy</p>
                <p className = "select-hierarchy">Select Hierarchy </p>
                <button type="button" class="btn btn-outline-secondary" disabled="true">Select Hierarchy</button>
                <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span class="sr-only">Toggle Dropdown</span>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>

                  

                </div>
              </div>
            </div>

          </div>
        </div>

        <br />

        <div className="row">
          <div className="col">

            <div class="card">
              <div class="card-body">
                <p className = "metadata-upload">Metadata Upload</p>
                <p className = "select-hierarchy">Select Hierarchy </p>
                <button type="button" class="btn btn-outline-secondary" disabled="true">Select Hierarchy</button>
                <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span class="sr-only">Toggle Dropdown</span>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>

                </div>
            </div>
            </div>

          </div>
        </div>

        <br />

      </React.Fragment>
    )
  }
}

export default AdminLanding;