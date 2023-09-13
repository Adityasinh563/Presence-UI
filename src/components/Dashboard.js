import React, { useState, useEffect, useRef } from 'react';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Chart } from 'primereact/chart';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';


const Dashboard = (props) => {
    const [date, setDate] = useState(null);
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                <Button label="Punch In" className="p-button-success" style={{ marginRight: '5px' }} />
                <Button label="Punch Out" className="p-button-success" />
            </div>
            <div className='col-12' style={{ display: 'flex', height: 250 }}>
                <div className='col-8'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <div>
                            <img style={{ height: 16 }} src='assets/layout/images/rectangle.svg' />
                            <span style={{ fontWeight: 700, fontSize: 15 }}>&nbsp;&nbsp;Employee Detail</span>
                        </div>
                        <select>
                            <option>This Year</option>
                        </select>
                    </div>
                    <div style={{ display: 'flex', marginBottom: 10 }}>
                        <img alt='User' style={{ height: 80, marginRight: 10 }} src='assets/layout/images/user.svg' />
                        <div style={{ marginRight: 10 }}>
                            <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 30 }}>Ayush R Varsani</div>
                            <div style={{ marginBottom: 10 }}>Role</div>
                            <div style={{ fontWeight: 600, fontSize: 13 }}>Project Manager</div>
                        </div>
                        <div style={{ marginRight: 10 }}>
                            <div style={{ marginTop: 52, marginBottom: 10 }}>Phone Number</div>
                            <div style={{ fontWeight: 600, fontSize: 13 }}>(+91) 9999999999</div>
                        </div>
                        <div>
                            <div style={{ marginTop: 52, marginBottom: 10 }}>Email</div>
                            <div style={{ fontWeight: 600, fontSize: 13 }}>xyz@gmail.com</div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginTop: 20 }}>
                        <div className='col-4 main' style={{ borderRadius: 5, padding: 10 }}>
                            <i style={{ fontSize: 23 }} className='pi pi-chart-bar'></i>
                            <span className='f600'> &nbsp;&nbsp;Total Attendance</span>
                        </div>
                        <div className='col-4 main' style={{ marginLeft: 5, borderRadius: 5, padding: 10 }}>
                            <i style={{ fontSize: 23 }} className='pi pi-arrow-down-left'></i>
                            <span className='f600'> &nbsp;&nbsp;Punch-In Time</span>
                        </div>
                        <div className='col-4 main' style={{ marginLeft: 5, borderRadius: 5, padding: 10 }}>
                            <i style={{ fontSize: 23 }} className='pi pi-arrow-up-left'></i>
                            <span className='f600'> &nbsp;&nbsp;Punch-Out Time</span>
                        </div>
                    </div>
                    <span style={{ display: 'flex' }}>
                        <span className='col-4 main' style={{ borderRadius: 5, padding: 7 }}>
                            22
                        </span>
                        <span className='col-4 main' style={{ marginLeft: 5, borderRadius: 5, padding: 10 }}>
                            00:00:00
                        </span>
                        <span className='col-4 main' style={{ marginLeft: 5, borderRadius: 5, padding: 10 }}>
                            00:00:00
                        </span>
                    </span>
                </div>
                <div className='col-4'>
                    <div style={{ marginBottom: 5 }}>
                        <img style={{ height: 16 }} src='assets/layout/images/rectangle.svg' />
                        <span style={{ fontWeight: 700, fontSize: 15 }}>&nbsp;&nbsp;Attendance Calendar - july 2023</span>
                    </div>
                    <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek />
                </div>
            </div>
            <div className='col-12' style={{ display: 'flex' }}>
                <div className='col-8'>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ marginBottom: 10 }}>
                            <img style={{ height: 16 }} src='assets/layout/images/rectangle.svg' />
                            <span style={{ fontWeight: 700, fontSize: 15 }}>&nbsp;&nbsp;Attendance History</span>
                        </div>
                        <div>
                            <i style={{ fontSize: 15, marginRight: 10 }} className='pi pi-sort-alt'></i>
                            <i style={{ fontSize: 15 }} className='pi pi-filter'></i>
                        </div>
                    </div>
                    <div className='history'>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span className='header'>March 08,2024</span>
                            <span className='ontime'>On Time</span>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <span style={{ marginLeft: 15 }}>Punch In Time</span>
                            <span style={{ marginLeft: 50 }}>Punch Out Time</span>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <span style={{ marginLeft: 15 }}>00:53</span>
                            <span style={{ marginLeft: 88 }}>00:00</span>
                        </div>
                    </div>
                    <div className='history'>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span className='header'>March 07,2024</span>
                            <span className='late'>Late</span>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <span style={{ marginLeft: 15 }}>Punch In Time</span>
                            <span style={{ marginLeft: 50 }}>Punch Out Time</span>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <span style={{ marginLeft: 15 }}>00:53</span>
                            <span style={{ marginLeft: 88 }}>00:00</span>
                        </div>
                    </div>
                </div>
                <div className='col-4' style={{ marginTop:33 }}>
                    <div style={{ display: 'flex' }}>
                        <img style={{ height: 16 }} src='assets/layout/images/rectangle.svg' />
                        <span style={{ fontWeight: 700, fontSize: 15 }}>&nbsp;&nbsp;Time Log - July 2023</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

const comparisonFn = function (prevProps, nextProps) {
    return (prevProps.location.pathname === nextProps.location.pathname) && (prevProps.colorMode === nextProps.colorMode);
};

export default React.memo(Dashboard, comparisonFn);
