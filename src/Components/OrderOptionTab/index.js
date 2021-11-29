import "./style.css";

const tabs = [
  {
    id: 1,
    label: "Delivery",
    activeImage: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
    inactiveImage: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
    activeBg: "#FCEEC0",
  },
  {
    id: 2,
    label: "Dining Out",
    activeImage: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
    inactiveImage: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
    activeBg: "#E5F3F3",
  },
  {
    id: 3,
    label: "Nightlife",
    activeImage: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
    inactiveImage: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
    activeBg: "#EDF4FF",
  },
];

const OrderOptionTab = ({ setActiveSection, activeSection }) => {
  return (
    <div className="orderOptionTab">
      <div className="set-width optionsWrapper">
        {tabs.map((tab) => (
          <div key={tab.id} className={`tabItem ${activeSection === tab.label && "activeTab"}`} onClick={() => setActiveSection(tab.label)}>
            <div className="tabImage" style={{ backgroundColor: `${activeSection === tab.label ? tab.activeBg : ""}` }}>
              <img src={activeSection === tab.label ? tab.activeImage : tab.inactiveImage} alt={tab.label} />
            </div>

            <h2 className="tabTitle">{tab.label}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderOptionTab;
