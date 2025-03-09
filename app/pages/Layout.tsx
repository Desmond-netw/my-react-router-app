import { Outlet, Link } from "react-router-dom"


const Layout = () => {
    return (
        <main>
            <div className="stick w-full h-8 flex flex-row justify-between items-center px-16 bg-slate-400 shadow-slate-400">
                <div className="w-4 bg-slate-50 ">
                    <h3>My-React-Router</h3>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="./Blogs">Blogs</Link>
                        </li>
                        <li>
                            <Link to="./Contact">Contacts</Link>
                        </li>
                        <li>
                            <Link to="./Service">Services</Link>
                        </li>
                    </ul>
                </nav>

             </div>
          {/* ========== outlet will be here */}
          <div className="w-1/2 md:w-full py-8 px-12 mx:auto " >
            <div className="w-full overflow-hidden aspect-square mx-0 bg-slate-400">
                <Outlet/>
            </div>
          </div>
        </main>
        
        
    )
}

export default Layout;