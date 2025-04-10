import { useEffect, useState } from "react";
import shopImg from "../../assets/home/chef-service.jpg";
import HeaderImg from "../../Share/HeaderImg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CardMap from "../../components/CardMap";
import "./Tap.css";

const OurShop = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [indexTab, setIndexTab] = useState(0);

  // Fetch menu data on component mount
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  // Filter menu based on categories
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");

  // If loading, show loading message
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <HeaderImg
        img={shopImg}
        title="OUR SHOP"
        subtitle="Would you like to try a dish?"
      />
      <div className="pt-10">
        <Tabs defaultIndex={indexTab} onSelect={(index) => setIndexTab(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          {/* Render menu items for each category */}
          <TabPanel>
            <CardMap items={salad}></CardMap>
          </TabPanel>
          <TabPanel>
            <CardMap items={pizza}></CardMap>
          </TabPanel>
          <TabPanel>
            <CardMap items={soup}></CardMap>
          </TabPanel>
          <TabPanel>
            <CardMap items={dessert}></CardMap>
          </TabPanel>
          <TabPanel>
            <CardMap items={drinks}></CardMap>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
