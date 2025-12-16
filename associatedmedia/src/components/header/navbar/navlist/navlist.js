import Link from "next/link";
export default function navlist()
{ 
    const menuItems = [
    { name: "Home", path: "/HomeNew" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];
    return(
       <>
              <ul className="cs_nav_list">
                                {menuItems.map((item, index) => (
          <li className="" key={index}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}

                            </ul>
         </>    
    )
     
}