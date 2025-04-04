import { useEffect, useState } from "react";
import shopImg from "../../assets/home/chef-service.jpg";
import HeaderImg from "../../Share/HeaderImg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "../../components/Card";

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
  const pizza = menu.filter((item) => item.category === "Pizza");
  const soup = menu.filter((item) => item.category === "Soup");
  const dessert = menu.filter((item) => item.category === "Dessert");
  const drinks = menu.filter((item) => item.category === "Drinks");

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
      <div>
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
            {salad.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </TabPanel>
          <TabPanel>
            {pizza.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </TabPanel>
          <TabPanel>
            {soup.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </TabPanel>
          <TabPanel>
            {dessert.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </TabPanel>
          <TabPanel>
            {drinks.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
