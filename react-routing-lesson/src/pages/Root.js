import {Outlet} from 'react-router-dom';
import MainNavigation from '../MainNavigation/MainNavigation';
import './Root.css';
const Root = () => {
    return (
        <>
        <MainNavigation />
        <Outlet />
        </>
    )
}
export default Root;