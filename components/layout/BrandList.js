import React from 'react'
import SymmetricalDiv from './SymmetricalDiv';

function BrandList() {
    return (
        <section className="brands">

            <div className="brand odd">
                <SymmetricalDiv className="d-flex flex-column align-items-center justify-content-center" style={{ width: '100%' }}>
                    <strong>3.1 PHILLIP LIM</strong>
                </SymmetricalDiv>
            </div>
            <div className="brand even">
                <SymmetricalDiv className="d-flex flex-column align-items-center">
                    <strong>ALAIA</strong>

                </SymmetricalDiv>
            </div>
            <div className="brand odd">
                <SymmetricalDiv className="d-flex flex-column align-items-center justify-content-center" style={{ width: '100%' }}>
                    <strong>ALEXANDER<br />
                        MCQUEEN</strong>

                </SymmetricalDiv>
            </div>
            <div className="brand even">
                <SymmetricalDiv className="d-flex flex-column align-items-center justify-content-center" style={{ width: '100%' }}>
                    <strong>ALEXANDER<br />
                        WANG</strong>

                </SymmetricalDiv>
            </div>
            <div className="brand odd">
                <SymmetricalDiv className="d-flex flex-column align-items-center justify-content-center" style={{ width: '100%' }}>
                    <strong>ALICE & OLIVIA</strong>

                </SymmetricalDiv>
            </div>
            <div className="brand even">
                <SymmetricalDiv className="d-flex flex-column align-items-center justify-content-center" style={{ width: '100%' }}>
                    <strong>AMIRI</strong>

                </SymmetricalDiv>
            </div>
            <div className="brand odd">
                <SymmetricalDiv className="d-flex flex-column align-items-center justify-content-center" style={{ width: '100%' }}>
                    <strong>AQUAZZURA</strong>

                </SymmetricalDiv>
            </div>
            <div className="brand even">
                <SymmetricalDiv className="d-flex flex-column align-items-center justify-content-center" style={{ width: '100%' }}>
                    <strong>AUDEMARS<br />
                        PIGUET</strong>

                </SymmetricalDiv>
            </div>
        </section>
    )
}

export default BrandList
