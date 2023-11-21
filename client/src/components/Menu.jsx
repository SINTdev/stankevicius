import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import { useNavigate } from "react-router-dom";

const Menu = (props) => {
  let navigate = useNavigate();
  const newMenuItems = [
    {
      link: "About",
      subLinks: [
        {
          link: "Introduction",
          to: "/menu/introduction",
          content: {
            img: "/assets/introduction.jpg",
            title: "Introduction",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget bibendum urna. Integer efficitur augue eu cursus suscipit.",
          },
        },
        {
          link: "Our Company",
          to: "/menu/our_company",
          content: {
            img: "/assets/our_company.jpg",
            title: "Our Company",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget bibendum urna. Integer efficitur augue eu cursus suscipit.",
          },
        },
        {
          link: "CEO's Letter",
          to: "/menu/ceo_letter",
          content: {
            img: "/assets/ceo_letter.jpg",
            title: "CEO's Letter",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget bibendum urna. Integer efficitur augue eu cursus suscipit.",
          },
        },
      ],
    },
    {
      link: "Private Clients",
      subLinks: [
        {
          link: "Small Business",
          to: "/menu/small_business",
          content: {
            img: "/assets/small_business.jpg",
            title: "Small Business",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget bibendum urna. Integer efficitur augue eu cursus suscipit.",
          },
        },
        {
          link: "Institutions",
          to: "/menu/institutions",
          content: {
            img: "/assets/institutions.jpg",
            title: "Institutions",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget bibendum urna. Integer efficitur augue eu cursus suscipit.",
          },
        },
      ],
    },
    {
      link: "International Trade Consulting",
      subLinks: [
        {
          link: "Sourcing and Procurement",
          to: "/menu/sourcing_procurement",
          content: {
            img: "/assets/sourcing_procurement.jpg",
            title: "Sourcing and Procurement",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget bibendum urna. Integer efficitur augue eu cursus suscipit.",
          },
        },
        {
          link: "Production and Manufacturing",
          to: "/menu/production_manufacturing",
          content: {
            img: "/assets/production_manufacturing.jpg",
            title: "Production and Manufacturing",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget bibendum urna. Integer efficitur augue eu cursus suscipit.",
          },
        },
        {
          link: "Shipping and Logistics",
          to: "/menu/shipping_logistics",
          content: {
            img: "/assets/shipping_logistics.jpg",
            title: "Shipping and Logistics",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget bibendum urna. Integer efficitur augue eu cursus suscipit.",
          },
        },
        {
          link: "Inspection and Quality Checks",
          to: "/menu/inspection_quality",
          content: {
            img: "/assets/inspection_quality.jpg",
            title: "Inspection and Quality Checks",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget bibendum urna. Integer efficitur augue eu cursus suscipit.",
          },
        },
      ],
    },
    {
      link: "Contracting and Due Diligence",
      subLinks: [
        {
          link: "Business Audit",
          to: "/menu/business_audit",
          content: {
            img: "/assets/business_audit.jpg",
            title: "Business Audit",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget bibendum urna. Integer efficitur augue eu cursus suscipit.",
          },
        },
        {
          link: "Business Counterparty Due Diligence",
          to: "/menu/counterparty_due_diligence",
          content: {
            img: "/assets/counterparty_due_diligence.jpg",
            title: "Business Counterparty Due Diligence",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget bibendum urna. Integer efficitur augue eu cursus suscipit.",
          },
        },
        {
          link: "Professional Contracting",
          to: "/menu/professional_contracting",
          content: {
            img: "/assets/professional_contracting.jpg",
            title: "Professional Contracting",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget bibendum urna. Integer efficitur augue eu cursus suscipit.",
          },
        },
      ],
    },
    {
      link: "News & Insights",
      subLinks: [
        {
          link: "Stankevicius News",
          to: "/menu/stankevicius_news",
          content: {
            img: "/assets/company_news.jpg",
            title: "Stankevicius News",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget bibendum urna. Integer efficitur augue eu cursus suscipit.",
          },
        },
        {
          link: "Industry Insights (Partner Content)",
          to: "/menu/industry_insights",
          content: {
            img: "/assets/industry_insights.jpg",
            title: "Industry Insights (Partner Content)",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget bibendum urna. Integer efficitur augue eu cursus suscipit.",
          },
        },
      ],
    },
  ];

  const [menuItems, setMenuItems] = useState(newMenuItems);

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
        <h1 className="font-extrabold text-[24px] mt-2 mb-1">
          {data?.content?.title}
        </h1>
        <p className="text-[18px]">{data?.content?.desc}</p>
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
    <div className="fixed top-0 left-0 bg-white w-screen h-screen z-10">
      <div className="max-w-screen-xl mx-auto  h-full p-2 justify-center hidden md:flex">
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
                  className={`block text-sm border-l-2 border-l-transparent ${
                    (selectedSubLink === null && hoveredSubLink === index) ||
                    selectedSubLink === index
                      ? "font-bold hover:bg-[#F1F1F1] hover:border-l-[#221f1f]"
                      : ""
                  } cursor-pointer px-5 py-2`}
                  onClick={() => {
                    handleSubLinkClick(index);
                    navigate(subLink.to);
                    props?.setIsMenuOpen(false);
                  }}
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

      <MobileMenu navigate={navigate} setIsMenuOpen={props?.setIsMenuOpen} />
    </div>
  );
};

export default Menu;
