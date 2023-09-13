import React  from 'react';
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';

export const AppTopbar = (props) => {

    return (
        <div className="layout-topbar">
            <Link to="/" className="layout-topbar-logo">
                <img src={props.layoutColorMode === 'light' ? 'assets/layout/images/logo.svg' : 'assets/layout/images/logo.svg'} alt="logo"/>
            </Link>

            <div className="col-12 md:col-3">
                <div className='p-inputgroup'>
                    <span className='p-inputgroup-addon'>
                    <i className='pi pi-search' /> 
                    </span>
                    <InputText placeholder='search' id='search' type='text'/>
                </div>
            </div>

            <div style={{ marginLeft : '580px' }}>
                <i className="pi pi-bell p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge value="2" ></Badge></i>
            </div>
        </div>
    );
}
