import { useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { NavLink, useNavigate } from "@remix-run/react";
import Logo from "~/images/Logo.jpg";


const DrawerContent = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigate = useNavigate();
  const { open } = props;

  useEffect(() => {
    if (selectedIndex === null) setSelectedIndex(0);
    navigate("/internal/home");
  }, []);

  const handlePageTitle = (title, index) => setSelectedIndex(index);

  const listItems = [
    {
      path: "/home",
      title: "Home",
      index: 0,
      icon: <IoHomeOutline />,
    },
    {
      path: "/office",
      title: "Office",
      index: 1,
      icon: <HiOutlineBuildingOffice2 />,
    },
  ];

  return (
    <div className="flex flex-col place-items-center">
      <div className="flex justify-center cursor-pointer">
        <img
          src={`${Logo}`}
          className={`${
            open ? "h-24 mb-5" : "h-8 mb-2"
          } w-4/5 rounded-lg object-contain bg-inherit`}
          alt="Logo"
          height={"100%"}
          width={"100%"}
        />
      </div>
      <li className="flex flex-col justify-center p-0 text-white overflow-y-auto">
        {listItems.map((list, index) => {
          return (
            <NavLink
              to={`/internal${list.path}`}
              className="no-underline my-1 mx-0"
              key={`ListItemContainer-${index}`}
              end
            >
              <div className="flex justify-center">
                <button
                  onClick={(e) => {
                    handlePageTitle(list.title, index);
                  }}
                  className={`flex items-center min-h-5 p-1 rounded-3xl text-white
                    ${
                      list.index == selectedIndex
                        ? "bg-orangeHighted"
                        : "hover:bg-orangeHoverHighted"
                    }
                    ${open ? 'min-w-36' : 'min-w-5'}  
                    `}
                >
                  <span
                    className={`flex items-center min-w-5 min-h-5 p-1 rounded-3xl text-white
                    ${
                      list.index == selectedIndex
                        ? "bg-orangeHighted"
                        : "hover:bg-orangeHoverHighted"
                    }  
                    `}
                  >
                    {list.icon}
                  </span>
                  <span className={`${open ? "pl-4" : "hidden"} text-sm font-semibold text-white`}>
                  {list.title}
                  </span>
                </button>
              </div>
            </NavLink>
          );
        })}
      </li>
    </div>
  );
};

export default DrawerContent;
