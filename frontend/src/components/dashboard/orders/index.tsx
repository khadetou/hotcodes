import DeleteIcon from "@/icons/delete-icon";
import EditIcon from "@/icons/edit-icon";
import { AiOutlineFilePdf } from "react-icons/ai";
import React, { useEffect } from "react";
import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypeSelector";

const Actions = () => {
  return (
    <div className="flex items-center list-user-action">
      <a
        className="inline-block p-1 text-sm font-normal text-center text-white bg-green-500 border rounded-lg "
        href="#"
      >
        <span className="btn-inner">
          <AiOutlineFilePdf size="22" />
        </span>
      </a>
      <a
        className="inline-block p-1 ml-1 mr-1 text-sm font-normal text-center text-white bg-orange-500 border rounded-lg"
        data-toggle="tooltip"
        data-placement="top"
        title=""
        data-original-title="Edit"
        href="#"
      >
        <span className="btn-inner">
          <EditIcon />
        </span>
      </a>
      <a
        className="inline-block p-1 text-sm font-normal text-center text-white bg-red-500 border rounded-lg"
        data-toggle="tooltip"
        data-placement="top"
        title=""
        data-original-title="Delete"
        href="#"
      >
        <span className="btn-inner">
          <DeleteIcon />
        </span>
      </a>
    </div>
  );
};

const Status = () => {
  return (
    <span className="ml-4 inline-block whitespace-nowrap px-2 py-0.5 text-xs text-center font-bold leading-none text-white bg-blue-500 rounded">
      Active
    </span>
  );
};

const TableHeader = [
  {
    title: "Service",
  },
  {
    title: "Platefrom",
  },
  {
    title: "TypeApp",
  },
  {
    title: "Status",
  },

  {
    title: "Actions",
  },
];

const Orders = () => {
  const {
    GetAllOrdersWeb,
    GetAllOrdersDesign,
    GetAllOrdersMobile,
    GetMyOrdersDesign,
    GetMyOrdersMobile,
    GetMyOrdersWeb,
  } = useActions();
  const { user } = useTypedSelector((state) => state.authReducer);
  const { orderWeb, orderDesign, orderMobile } = useTypedSelector(
    (state) => state.orderReducer
  );
  useEffect(() => {
    if (user?.roles.includes("admin")) {
      GetAllOrdersWeb();
      GetAllOrdersDesign();
      GetAllOrdersMobile();
    } else {
      GetMyOrdersDesign();
      GetMyOrdersMobile();
      GetMyOrdersWeb();
    }
  }, [user]);

  const TableBody = [
    {
      title: "Dev web",
    },
    {
      title: "Web",
    },
    {
      title: "E-commerce",
    },
    {
      title: <Status />,
    },

    {
      title: <Actions />,
    },
  ];

  console.log(orderWeb);
  return (
    <div className="flex flex-wrap">
      <div className="flex-auto w-full">
        <div className="relative flex flex-col mb-8 text-gray-600 bg-white shadow-shadow rounded-xl">
          <div className="flex justify-between flex-auto p-6 pb-0">
            <div className="header-title">
              <h4 className="text-2xl font-medium text-dark">User List</h4>
            </div>
          </div>
          <div className="p-6 px-0">
            <div className="overflow-x-auto">
              <div className="flex flex-wrap items-center">
                <div className="md:w-2/4 pt-4">
                  <div className="pl-6">
                    <label>
                      Show
                      <select className="inline-block outline-none mx-2 !w-20 py-1 pl-4 pr-0 text-sm border bg-white rounded-lg">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>{" "}
                      entries
                    </label>
                  </div>
                </div>
                <div className="md:w-2/4 pt-4">
                  <div className="pr-6 pl-6 lg:pl-0 lg:block flex text-right">
                    <label>Search:</label>
                    <input
                      type="text"
                      className="py-1 ml-2 text-base border outline-none rounded-md focus:border-blue-400 focus:shadow hover:border-blue-500"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 overflow-x-auto">
                <table className="min-w-full overflow-hidden divide-y divide-gray-200">
                  <thead className="bg-light-gray text-dark">
                    <tr className="bg-gray-100 border-b border-light-gray">
                      {TableHeader.map(({ title }, index) => (
                        <th
                          key={index}
                          className="px-6 py-4 text-left text-gray-500 uppercase whitespace-nowrap"
                        >
                          {title}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200">
                    {orderWeb.length !== 0 &&
                      orderWeb.map(({ platform, typeapp }, index) => (
                        <tr key={index} className="border-b border-light-gray">
                          <td className="px-6 py-4 whitespace-nowrap font-bold">
                            Web Dev
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {platform}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {typeapp}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Status />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Actions />
                          </td>
                        </tr>
                      ))}
                    {orderDesign.length !== 0 &&
                      orderDesign.map(({ platform, typeapp }, index) => (
                        <tr key={index} className="border-b border-light-gray">
                          <td className="px-6 py-4 whitespace-nowrap font-bold">
                            Ui/Ux Design
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {platform}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {typeapp}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Status />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Actions />
                          </td>
                        </tr>
                      ))}
                    {orderMobile.length !== 0 &&
                      orderMobile.map(({ platform, typeapp }, index) => (
                        <tr key={index} className="border-b border-light-gray">
                          <td className="px-6 py-4 whitespace-nowrap font-bold">
                            Mobile Dev
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {platform}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {typeapp}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Status />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Actions />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Image className="w-10 h-10 p-1 mr-3 text-blue-400 bg-blue-100 rounded-xl" src="{{path}}assets/images/shapes/01.png" alt="profile"> */}
    </div>
  );
};

export default Orders;
