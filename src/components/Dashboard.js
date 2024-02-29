import { Fragment } from "react";
import brand from '../images/icons/brand.svg';

const Dashboard = () => {
    return(
        <Fragment>
            <div
                className="row gy-3">
                {
                    [
                        {
                            title: 'Total',
                            icon: brand
                        },
                        {
                            title: 'Total'
                        },
                        {
                            title: 'Total'
                        },
                        {
                            title: 'Total'
                        }
                    ].map(((col, index) => (
                        <div
                            key={index}
                            className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                            <div
                                className={`d-flex shadow-sm p-3 rounded-3 bg-white border gap-2 animate__animated animate__fadeInRight animate__delay-${index+1}s`}>
                                <div
                                    className="d-flex">
                                    <img src={col.icon || ''} alt={col.title || ''} width={50} height={50}/>
                                </div>
                                <div
                                    className="d-flex flex-column justify-content-center gap-2">
                                    <span
                                        className="fw-semibold">
                                        {col.title || ''}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )))
                }
            </div>
        </Fragment>
    );
}

export default Dashboard;