import UseMenu from "../../Hooks/UseMenu";
import PageCover from "../../Shared/PageCover/PageCover";
import coverImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderTabs from "./OrderTabs";

const Order = () => {
  const [menu] = UseMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <PageCover coverImg={coverImg} title={"Order Food Now!"}></PageCover>

      <div className="flex justify-center items-center my-12">
        <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTabs items={salad}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs items={pizza}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs items={soup}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs items={dessert}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs items={drinks}></OrderTabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
