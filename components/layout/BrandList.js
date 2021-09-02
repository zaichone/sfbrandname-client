import React from 'react'
import SymmetricalDiv from './SymmetricalDiv';

function BrandList() {
    return (
        <section className="brands">

            <div className="brand odd">
                <SymmetricalDiv className="d-flex flex-column align-items-center justify-content-center" style={{ width: '100%' }}>
                    <strong>A title</strong>
                    <span>A description</span>

                    <a href="#">A Link</a>
                </SymmetricalDiv>
            </div>
            <div className="brand even">
                <SymmetricalDiv className="d-flex flex-column align-items-center">
                    <strong>A title</strong>
                    <span>A description</span>

                    <a href="#">A Link</a>
                </SymmetricalDiv>
            </div>
            <div className="brand odd">
                <SymmetricalDiv className="d-flex flex-column align-items-center justify-content-center" style={{ width: '100%' }}>
                    <strong>A title</strong>
                    <span>A description</span>

                    <a href="#">A Link</a>
                </SymmetricalDiv>
            </div>
            <div className="brand even">
                <SymmetricalDiv className="d-flex flex-column align-items-center justify-content-center" style={{ width: '100%' }}>
                    <strong>A title</strong>
                    <span>A description</span>

                    <a href="#">A Link</a>
                </SymmetricalDiv>
            </div>
            <div className="brand odd">
                <SymmetricalDiv className="d-flex flex-column align-items-center justify-content-center" style={{ width: '100%' }}>
                    <strong>A title</strong>
                    <span>A description</span>

                    <a href="#">A Link</a>
                </SymmetricalDiv>
            </div>
            <div className="brand even">
                <SymmetricalDiv className="d-flex flex-column align-items-center justify-content-center" style={{ width: '100%' }}>
                    <strong>A title</strong>
                    <span>A description</span>

                    <a href="#">A Link</a>
                </SymmetricalDiv>
            </div>
            <div className="brand odd">
                <SymmetricalDiv className="d-flex flex-column align-items-center justify-content-center" style={{ width: '100%' }}>
                    <strong>A title</strong>
                    <span>A description</span>

                    <a href="#">A Link</a>
                </SymmetricalDiv>
            </div>
            <div className="brand even">
                <SymmetricalDiv className="d-flex flex-column align-items-center justify-content-center" style={{ width: '100%' }}>
                    <strong>A title</strong>
                    <span>A description</span>

                    <a href="#">A Link</a>
                </SymmetricalDiv>
            </div>
        </section>
    )
}

export default BrandList
