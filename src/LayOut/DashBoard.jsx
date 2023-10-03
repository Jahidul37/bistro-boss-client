import { FaBook, FaCalendar, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const DashBoard = () => {
    const [cart] = useCart();
    // console.log(cart);

    // load data from  the server to have dynamic isAdmin based on data
    const isAdmin = true;

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservation"><FaUtensils></FaUtensils> Add Items</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Booking</NavLink> </li>
                            <li><NavLink to="/dashboard/users"><FaUsers></FaUsers> All Users</NavLink> </li>



                        </> : <>

                            <li><NavLink to="/dashboard/home"><FaHome></FaHome>Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar>Reservation</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>Payment History</NavLink> </li>
                            <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>Mycart
                                <div className="badge badge-secondary">+{cart?.length || 0}</div>
                            </NavLink></li>
                            <div className="divider"></div>
                            <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                            <li><NavLink to="/menu">Our Menu</NavLink></li>
                            <li><NavLink to="/order/salad">Order Food</NavLink></li>

                        </>
                    }


                </ul>

            </div>
        </div>
    );
};

export default DashBoard;