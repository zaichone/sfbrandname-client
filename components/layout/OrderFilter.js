import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

function OrderFilter() {
    return (
        <div className="filter-bar">
            <div className="row">
                <div className="col-8 d-flex justify-content-start align-items-center">
                    <div className="form-check me-5">
                        <input className="form-check-input" type="checkbox" value="" id="authentic" />
                        <label className="form-check-label" htmlFor="authentic">Authentic</label>
                    </div>
                    <div className="form-check me-5">
                        <input className="form-check-input" type="checkbox" value="" id="counterfeit" />
                        <label className="form-check-label" htmlFor="counterfeit">Counterfeit</label>
                    </div>
                    <div className="form-check me-5">
                        <input className="form-check-input" type="checkbox" value="" id="inProgress" />
                        <label className="form-check-label" htmlFor="inProgress">In Progress</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="needAction" />
                        <label className="form-check-label" htmlFor="needAction">Need Action</label>
                    </div>
                </div>
                <div className="col-4">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="What are you Looking htmlFor?" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"><SearchIcon /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderFilter
