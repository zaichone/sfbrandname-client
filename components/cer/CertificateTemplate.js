import React, { Component } from 'react'
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import QRCode from 'qrcode.react';
import SymmetricalDiv from "../layout/SymmetricalDiv";

export class CertificateTemplate extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="cer-template text-center p-5">
                <h1>SUPER AUTHENTICATE</h1>
                <h2>CERTIFY <CheckBoxIcon /> AUTHENTIC</h2>
                <h2 className="text-uppercase">{this.props.data.name}- {this.props.data.brand}</h2>
                <div className="row mt-5">
                    <div className="col">
                        <h3>CLIENT</h3>
                        <p className="text-uppercase">{this.props.data.clientName}</p>
                        <SymmetricalDiv
                          className="d-flex flex-column align-items-center justify-content-center cer-box"
                          style={{
                            width: 250,
                            height:250,
                            background: `url('${
                                this.props.data.featured
                            }')center center no-repeat`,
                            border: "1px solid black",
                          }}
                        ></SymmetricalDiv>
                        
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                        LOGO HERE
                    </div>
                    <div className="col">
                        <h3>CERTIFICATE NUMBER</h3>
                        <p>{this.props.data.customId.toUpperCase()}</p>
                        {this.props.data && <QRCode value={this.props.data.cerUrl} size={230} />}
                    </div>
                </div>

            </div>
        )
    }
}

export default CertificateTemplate
