import { Outlet,NavLink } from "react-router-dom";
import { TbDrone } from "react-icons/tb"; //Drone icon



export default function AdminNavbar() {

    const activeLink = ({ isActive }) =>
        isActive
          ? 'text-white '
          : 'text-[#727476] hover:text-white';

    return (

        <>

            <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex justify-center items-center gap-2.5 text-2xl font-bold text-white"><TbDrone className='text-4xl' /><p>OTHMAN STORE</p></div>
                    
                    <div class="hidden w-full md:block md:w-auto">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <NavLink to="products" className={activeLink}>
                                Products
                            </NavLink>
                            <NavLink to="clients" className={activeLink}>
                                Clients
                            </NavLink>
                            <NavLink to="orders" className={activeLink}>
                                Commandes
                            </NavLink>
                            <NavLink to="/login" className={activeLink}>
                                Logout
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet></Outlet>
        </>
    );

}