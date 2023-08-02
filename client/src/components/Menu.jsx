import React, { useState } from "react";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([
    {
      link: "About",
      subLinks: [
        {
          link: "Board of Directors",
          content: {
            img: "/assets/test3.jpeg",
            title: "Board of Directors",
            desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias praesentium dicta alias! Voluptatum molestiae suscipit praesentium sunt fuga. Alias, reiciendis. Sit ullam recusandae in, fugit natus corrupti quaerat laborum totam.",
          },
        },
        {
          link: "Products",
          content: {
            title: "Products",
            links: [
              {
                label:
                  "Cardiovascular and metabolic disease research at Novartis",
                url: "https://www.novartis.com/about/products?search_api_fulltext=&sort_by=title&sort_order=ASC&page",
              },
              {
                label:
                  "Cardiovascular and metabolic disease research at Novartis",
                url: "https://www.novartis.com/about/products?search_api_fulltext=&sort_by=title&sort_order=ASC&page",
              },
              {
                label:
                  "Cardiovascular and metabolic disease research at Novartis",
                url: "https://www.novartis.com/about/products?search_api_fulltext=&sort_by=title&sort_order=ASC&page",
              },
              {
                label:
                  "Cardiovascular and metabolic disease research at Novartis",
                url: "https://www.novartis.com/about/products?search_api_fulltext=&sort_by=title&sort_order=ASC&page",
              },
              {
                label:
                  "Cardiovascular and metabolic disease research at Novartis",
                url: "https://www.novartis.com/about/products?search_api_fulltext=&sort_by=title&sort_order=ASC&page",
              },
            ],
          },
        },
      ],
    },
    {
      link: "Patients and Caregivers",
      subLinks: [
        {
          link: "Board of Directors",
          content: {
            img: "/assets/test3.jpeg",
            title: "Board of Directors",
            desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias praesentium dicta alias! Voluptatum molestiae suscipit praesentium sunt fuga. Alias, reiciendis. Sit ullam recusandae in, fugit natus corrupti quaerat laborum totam.",
          },
        },
        {
          link: "Products",
          content: {
            title: "Products",
            links: [
              {
                label:
                  "Cardiovascular and metabolic disease research at Novartis",
                url: "https://www.novartis.com/about/products?search_api_fulltext=&sort_by=title&sort_order=ASC&page",
              },
              {
                label:
                  "Cardiovascular and metabolic disease research at Novartis",
                url: "https://www.novartis.com/about/products?search_api_fulltext=&sort_by=title&sort_order=ASC&page",
              },
              {
                label:
                  "Cardiovascular and metabolic disease research at Novartis",
                url: "https://www.novartis.com/about/products?search_api_fulltext=&sort_by=title&sort_order=ASC&page",
              },
              {
                label:
                  "Cardiovascular and metabolic disease research at Novartis",
                url: "https://www.novartis.com/about/products?search_api_fulltext=&sort_by=title&sort_order=ASC&page",
              },
              {
                label:
                  "Cardiovascular and metabolic disease research at Novartis",
                url: "https://www.novartis.com/about/products?search_api_fulltext=&sort_by=title&sort_order=ASC&page",
              },
            ],
          },
        },
      ],
    },
    {
      link: "Healthcare Professional",
      subLinks: [
        {
          link: "Board of Directors",
          content: {
            img: "/assets/test3.jpeg",
            title: "Board of Directors",
            desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias praesentium dicta alias! Voluptatum molestiae suscipit praesentium sunt fuga. Alias, reiciendis. Sit ullam recusandae in, fugit natus corrupti quaerat laborum totam.",
          },
        },
        {
          link: "Products",
          content: {
            title: "Products",
            links: [
              {
                label:
                  "Cardiovascular and metabolic disease research at Novartis",
                url: "https://www.novartis.com/about/products?search_api_fulltext=&sort_by=title&sort_order=ASC&page",
              },
              {
                label:
                  "Cardiovascular and metabolic disease research at Novartis",
                url: "https://www.novartis.com/about/products?search_api_fulltext=&sort_by=title&sort_order=ASC&page",
              },
              {
                label:
                  "Cardiovascular and metabolic disease research at Novartis",
                url: "https://www.novartis.com/about/products?search_api_fulltext=&sort_by=title&sort_order=ASC&page",
              },
              {
                label:
                  "Cardiovascular and metabolic disease research at Novartis",
                url: "https://www.novartis.com/about/products?search_api_fulltext=&sort_by=title&sort_order=ASC&page",
              },
              {
                label:
                  "Cardiovascular and metabolic disease research at Novartis",
                url: "https://www.novartis.com/about/products?search_api_fulltext=&sort_by=title&sort_order=ASC&page",
              },
            ],
          },
        },
      ],
    },
    {
      link: "ESG",
      subLinks: [
        {
          link: "Board of Directors",
          content: {
            img: "/assets/test3.jpeg",
            title: "Board of Directors",
            desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias praesentium dicta alias! Voluptatum molestiae suscipit praesentium sunt fuga. Alias, reiciendis. Sit ullam recusandae in, fugit natus corrupti quaerat laborum totam.",
          },
        },
        {
          link: "Products",
          content: {
            title: "Products",
            links: [
              {
                label:
                  "Cardiovascular and metabolic disease research at Novartis",
                url: "https://www.novartis.com/about/products?search_api_fulltext=&sort_by=title&sort_order=ASC&page",
              },
              {
                label:
                  "Cardiovascular and metabolic disease research at Novartis",
                url: "https://www.novartis.com/about/products?search_api_fulltext=&sort_by=title&sort_order=ASC&page",
              },
              {
                label:
                  "Cardiovascular and metabolic disease research at Novartis",
                url: "https://www.novartis.com/about/products?search_api_fulltext=&sort_by=title&sort_order=ASC&page",
              },
              {
                label:
                  "Cardiovascular and metabolic disease research at Novartis",
                url: "https://www.novartis.com/about/products?search_api_fulltext=&sort_by=title&sort_order=ASC&page",
              },
              {
                label:
                  "Cardiovascular and metabolic disease research at Novartis",
                url: "https://www.novartis.com/about/products?search_api_fulltext=&sort_by=title&sort_order=ASC&page",
              },
            ],
          },
        },
      ],
    },
  ]);

  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedSubLink, setSelectedSubLink] = useState(null);
  const [hoveredSubLink, setHoveredSubLink] = useState(null);

  const handleItemHover = (index) => {
    setHoveredItem(index);
    setSelectedSubLink(null);
    setHoveredSubLink(null);
  };

  const handleSubLinkClick = (subLinkIndex) => {
    setSelectedSubLink(subLinkIndex);
  };

  const handleSubLinkHover = (subLinkIndex) => {
    setHoveredSubLink(subLinkIndex);
  };

  const renderShowUp = (data) => {
    return (
      <div className="">
        <img src={data?.content?.img} alt="" />
        <h1 className="font-extrabold text-xl mt-2 mb-1">
          {data?.content?.title}
        </h1>
        <p className="text-sm">{data?.content?.desc}</p>
        <div className="space-y-4 mt-7">
          {data?.content?.links?.map((link, one) => {
            return (
              <div className="border-b w-fit border-gray-300 hover:border-black transition-all duration-300 ease-in-out">
                <a className="text-sm font-medium" href={link?.url}>
                  {link?.label}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="absolute top-0 left-0 bg-white w-screen h-screen z-10">
      <div className="max-w-screen-xl mx-auto flex h-full p-2 justify-center">
        <div className="flex w-screen h-screen absolute top-0 left-0 -z-10">
          <div className="flex-1 w-1/2 h-full bg-white"></div>
          <div className="flex-1 h-full bg-[#F1F1F1]"></div>
        </div>
        <div className="w-1/2 h-full pt-20 flex">
          <div className="w-1/2">
            <div className="space-y-2 w-full pb-5 border-b-2">
              {menuItems.map((menuItem, index) => (
                <p
                  key={index}
                  className={`font-bold cursor-pointer px-5 py-2 border-l-2 border-l-transparent ${
                    hoveredItem === index
                      ? "hover:bg-[#F1F1F1] hover:border-l-[#221f1f] "
                      : ""
                  }`}
                  onMouseEnter={() => handleItemHover(index)}
                  onClick={() => handleSubLinkClick(index)}
                >
                  {menuItem.link}
                </p>
              ))}
            </div>
            <div className="space-y-2 w-full pt-5">
              {menuItems.map((menuItem, index) => (
                <p
                  key={index}
                  className={`cursor-pointer px-5 py-1 ${
                    hoveredItem === index ? "hover:font-bold" : ""
                  }`}
                  onMouseEnter={() => handleItemHover(index)}
                  onClick={() => handleSubLinkClick(index)}
                >
                  {menuItem.link}
                </p>
              ))}
            </div>
          </div>
          <div className="w-1/2">
            {hoveredItem !== null &&
              menuItems[hoveredItem].subLinks.map((subLink, index) => (
                <div
                  key={index}
                  className={`${
                    (selectedSubLink === null && hoveredSubLink === index) ||
                    selectedSubLink === index
                      ? "font-bold"
                      : ""
                  } cursor-pointer px-5 py-2`}
                  onClick={() => handleSubLinkClick(index)}
                  onMouseEnter={() => handleSubLinkHover(index)}
                  onMouseLeave={() => setHoveredSubLink(null)}
                >
                  {subLink.link}
                </div>
              ))}
          </div>
        </div>
        <div className="w-1/2 h-full bg-[#F1F1F1] pt-20 px-10">
          {selectedSubLink !== null &&
            renderShowUp(menuItems[hoveredItem]?.subLinks[selectedSubLink])}
          {hoveredSubLink !== null &&
            selectedSubLink === null &&
            renderShowUp(menuItems[hoveredItem]?.subLinks[hoveredSubLink])}
        </div>
      </div>
    </div>
  );
};

export default Menu;
