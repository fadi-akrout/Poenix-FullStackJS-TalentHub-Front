import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'
import HeaderClient from '../ClientComponent/Dashboard/HeaderClient';
const DashLayout = () => {
    return (
        <>
           {/*  <DashHeader /> */}

           <HeaderClient/>
           <section className="upcoming-meetings" id="meetings">

          
                <Outlet />
                </section>
           
           {/*  <DashFooter /> */}
        </>
    )
}
export default DashLayout