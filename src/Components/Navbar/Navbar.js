import React from 'react'
import { TabMenu } from 'primereact/tabmenu';


const items = [
    {label: 'Home', icon: 'pi pi-fw pi-home'},
    {label: 'General', icon: 'pi pi-fw pi-building'},
    {label: 'Health', icon: 'pi pi-fw pi-heart'},
    {label: 'Business', icon: 'pi pi-fw pi-briefcase'},
    {label: 'Settings', icon: 'pi pi-fw pi-cog'}
];
       

const Navbar = () => {
  return (
   <>
    <div className="card">
            <TabMenu model={items} />
        </div>
    </>
  )
}

export default Navbar
