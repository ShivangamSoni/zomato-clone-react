import "./style.css";
import { useState } from "react";
import OrderOptionTab from "../../Components/OrderOptionTab";
import OrderSection from "../../Containers/OrderSection";

const Order = () => {
  const [activeSection, setActiveSection] = useState("Delivery");

  return (
    <div className="orderContainer">
      <OrderOptionTab setActiveSection={setActiveSection} activeSection={activeSection} />

      <OrderSection activeSection={activeSection} />
    </div>
  );
};

export default Order;
