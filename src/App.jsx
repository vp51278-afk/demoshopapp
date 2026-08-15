import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Common Navbar
import Navbar from "./components/Navbar";

// Home Page
import Home from "./pages/Home";


// Customer Service
import CustomerService from "./components/CustomerService";
import Orders from "./components/Orders";

import ContactUs from "./components/ContactUs";
import HelpCenter from "./components/HelpCenter";
import TrackOrder from "./components/TrackOrder";
import ReturnsRefunds from "./components/ReturnsRefunds";
import ShippingInformation from "./components/ShippingInformation";
import PaymentOptions from "./components/PaymentOptions";
import TermsConditions from "./components/TermsConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Feedback from "./components/Feedback";

// Fresh Category Components
import Fruits from "./components/Fruits";
import FruitsShopping from "./components/FruitsShopping";

import Vegetables from "./components/Vegetables";
import VegetablesShopping from "./components/VegetablesShopping";

import DairyProducts from "./components/DairyProducts";
import DairyProductsShopping from "./components/DairyProductsShopping";

import Bakery from "./components/Bakery";
import BakeryShopping from "./components/BakeryShopping";

import Chips from "./components/Chips";
import ChipsShopping from "./components/ChipsShopping";

import ColdDrinks from "./components/ColdDrinks";
import ColdDrinksShopping from "./components/ColdDrinksShopping";

import Household from "./components/Household";
import HouseholdShopping from "./components/HouseholdShopping";

// Fashion Components
import Fashion from "./components/Fashion";

import Men from "./components/Men";
import Women from "./components/Women";
import Saree from "./components/Saree";
import Lehenga from "./components/Lehenga";
import Western from "./components/Western";
import Tops from "./components/Tops";
import Kurti from "./components/Kurti";
import Footwear from "./components/Footwear";
import Jeans from "./components/Jeans";
import Coord from "./components/Coord";
import CoordShopping from "./components/CoordShopping";



import Makeup from "./components/Makeup";
import MakeupShopping from "./components/MakeupShopping";

import Jewellery from "./components/Jewellery";
import JewelleryShopping from "./components/JewelleryShopping";

import Accessories from "./components/Accessories";
import AccessoriesShopping from "./components/AccessoriesShopping";

import Skincare from "./components/Skincare";
import SkincareShopping from "./components/SkincareShopping";




import HomeKitchen from "./components/HomeKitchen";
import KitchenEssential from "./components/KitchenEssential";
import KitchenApplicances from "./components/KitchenAppliances";
import HomeDecor from "./components/HomeDecor";
import HomeDecorShopping from "./components/HomeDecorShopping";

// Other Components
import Beauty from "./components/Beauty";

import Mobiles from "./components/Mobiles";

import Fresh from "./components/Fresh";



// Beauty Category Components
import EthnicWear from "./components/EthnicWear";
import EthnicWearShopping from "./components/EthnicWearShopping";

import WatchesAccessories from "./components/WatchesAccessories";
import WatchesAccessoriesShopping from "./components/WatchesAccessoriesShopping";

import Tshirts from "./components/Tshirts";
import TshirtsShopping from "./components/TshirtsShopping";

import Jackets from "./components/Jackets";
import JacketsShopping from "./components/JacketsShopping";

import Hoodies from "./components/Hoodies";
import HoodiesShopping from "./components/HoodiesShopping";

import Shoes from "./components/Shoes";
import ShoesShopping from "./components/ShoesShopping";

import Trousers from "./components/Trousers";
import TrousersShopping from "./components/TrousersShopping";

import Jeans2 from "./components/Jeans2";
import Jeans2Shopping from "./components/Jeans2Shopping";

import Shirts from "./components/Shirts";
import ShirtsShopping from "./components/ShirtsShopping";



// Mobile Category Components
import Smartphones from "./components/Smartphones";
import SmartphonesShopping from "./components/SmartphonesShopping";

import Earbuds from "./components/Earbuds";
import EarbudsShopping from "./components/EarbudsShopping";





import BluetoothSpeakers from "./components/BluetoothSpeakers";

import PowerBanks from "./components/PowerBanks";
import PowerBanksShopping from "./components/PowerBanksShopping";

import SmartWatches from "./components/SmartWatches";
import SmartWatchesShopping from "./components/SmartWatchesShopping";

import Dining from "./components/Dining";
import DiningShopping from "./components/DiningShopping";


import GardenOutdoorShopping from "./components/GardenOutdoorShopping";
import CleaningSuppliesShopping from "./components/CleaningSuppliesShopping";
import BedroomEssentialsShopping from "./components/BedroomEssentialsShopping";
import StorageOrganizationShopping from "./components/StorageOrganizationShopping";
import BedroomEssentials from "./components/BedroomEssentials";
import StorageOrganization from "./components/StorageOrganization";
import CleaningSupplies from "./components/CleaningSupplies";

import GardenOutdoor from "./components/GardenOutdoor";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Fashion */}
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/fashion/makeup" element={<Makeup />} />
        <Route path="/fashion/men" element={<Men />} />
        <Route path="/fashion/women" element={<Women />} />
        

        {/* Women's Fashion */}
        <Route path="/fashion/women/saree" element={<Saree />} />
        <Route path="/fashion/women/lehenga" element={<Lehenga />} />
        <Route path="/fashion/women/western" element={<Western />} />
        <Route path="/fashion/women/tops" element={<Tops />} />
        <Route path="/fashion/women/kurti" element={<Kurti />} />
        <Route path="/fashion/women/footwear" element={<Footwear />} />
        <Route path="/fashion/women/jeans" element={<Jeans />} />
        <Route path="/fashion/women/coord" element={<Coord />} />
        <Route
          path="/fashion/coord-shopping"
          element={<CoordShopping />}
        /> 

        {/* Home & Kitchen */}
        <Route path="/home-kitchen" element={<HomeKitchen />} />
        <Route
          path="/home-kitchen/kitchen-essentials"
          element={<KitchenEssential />}
        />
        <Route
          path="/home-kitchen/kitchen-appliances"
          element={<KitchenApplicances />}
        />
        <Route
          path="/home-kitchen/home-decor"
          element={<HomeDecor />}
        />
        <Route
          path="/home-decor-shopping"
          element={<HomeDecorShopping />}
        />        

{/* Beauty */}
<Route path="/beauty" element={<Beauty />} />

<Route path="/beauty/ethnic-wear" element={<EthnicWear />} />
<Route
  path="/beauty/ethnic-wear-shopping"
  element={<EthnicWearShopping />}
/>
{/* Beauty Categories */}
<Route path="/fashion/makeup" element={<Makeup />} />
<Route path="/fashion/makeup/shopping" element={<MakeupShopping />} />

<Route path="/fashion/jewellery" element={<Jewellery />} />
<Route path="/fashion/jewellery/shopping" element={<JewelleryShopping />} />

<Route path="/fashion/accessories" element={<Accessories />} />
<Route path="/fashion/accessories/shopping" element={<AccessoriesShopping />} />

<Route path="/fashion/skincare" element={<Skincare />} />
<Route path="/fashion/skincare/shopping" element={<SkincareShopping />} />



<Route
  path="/home-kitchen/bedroom-essentials"
  element={<BedroomEssentials />}
/>

<Route
  path="/home-kitchen/storage-organization"
  element={<StorageOrganization />}
/>

<Route
  path="/home-kitchen/cleaning-supplies"
  element={<CleaningSupplies />}
/>
<Route path="/orders" element={<Orders />} />

<Route
  path="/home-kitchen/garden-outdoor"
  element={<GardenOutdoor />}
/>




<Route
  path="/beauty/watches-accessories"
  element={<WatchesAccessories />}
/>
<Route
  path="/beauty/watches-accessories-shopping"
  element={<WatchesAccessoriesShopping />}
/>

<Route path="/beauty/jackets" element={<Jackets />} />
<Route
  path="/beauty/jackets-shopping"
  element={<JacketsShopping />}
/>

<Route path="/beauty/hoodies" element={<Hoodies />} />
<Route
  path="/beauty/hoodies-shopping"
  element={<HoodiesShopping />}
/>

<Route path="/beauty/shoes" element={<Shoes />} />
<Route
  path="/beauty/shoes-shopping"
  element={<ShoesShopping />}
/>

<Route path="/beauty/trousers" element={<Trousers />} />
<Route
  path="/beauty/trousers-shopping"
  element={<TrousersShopping />}
/>

<Route path="/beauty/jeans2" element={<Jeans2 />} />
<Route
  path="/beauty/jeans2-shopping"
  element={<Jeans2Shopping />}
/>

{/* T-Shirts */}
<Route path="/beauty/t-shirts" element={<Tshirts />} />
<Route
  path="/beauty/t-shirts-shopping"
  element={<TshirtsShopping />}
/>

{/* Shirts */}
<Route path="/beauty/shirts" element={<Shirts />} />
<Route
  path="/beauty/shirts-shopping"
  element={<ShirtsShopping />}
/>
<Route path="/household-shopping" element={<HouseholdShopping />} />

{/* Mobiles */}
<Route path="/mobiles" element={<Mobiles />} />

{/* Smartphones */}
<Route
  path="/mobiles/smartphones"
  element={<Smartphones />}
/>
<Route
  path="/mobiles/smartphones-shopping"
  element={<SmartphonesShopping />}
/>
<Route
  path="/home-kitchen/dining"
  element={<Dining />}
/>
<Route
  path="/home-kitchen/garden-outdoor-shopping"
  element={<GardenOutdoorShopping />}
/>

<Route
  path="/home-kitchen/cleaning-supplies-shopping"
  element={<CleaningSuppliesShopping />}
/>

<Route
  path="/home-kitchen/bedroom-essentials-shopping"
  element={<BedroomEssentialsShopping />}
/>

<Route
  path="/home-kitchen/storage-organization-shopping"
  element={<StorageOrganizationShopping />}
/>

<Route
  path="/home-kitchen/dining-shopping"
  element={<DiningShopping />}
/>

<Route path="/mobiles/smartwatches" element={<SmartWatches />} />
<Route
  path="/smart-watches-shopping"
  element={<SmartWatchesShopping />}
/>


{/* Makeup */}

<Route
  path="/beauty/makeup"
  element={<Makeup />}
/>

<Route
  path="/beauty/makeup-shopping"
  element={<MakeupShopping />}
/>

{/* Jewellery */}

<Route
  path="/beauty/jewellery"
  element={<Jewellery />}
/>

<Route
  path="/beauty/jewellery-shopping"
  element={<JewelleryShopping />}
/>

{/* Earbuds */}
<Route
  path="/mobiles/earbuds"
  element={<Earbuds />}
/>
<Route
  path="/mobiles/earbuds-shopping"
  element={<EarbudsShopping />}
/>




{/* Power Banks */}
<Route
  path="/mobiles/powerbanks"
  element={<PowerBanks />}
/>
<Route
  path="/mobiles/powerbanks-shopping"
  element={<PowerBanksShopping />}
/>
<Route
  path="/mobiles/bluetooth-speakers"
  element={<BluetoothSpeakers />}
/>

{/* ================= Fresh ================= */}

<Route path="/fresh" element={<Fresh />} />

{/* Fruits */}
<Route
  path="/fresh/fruits"
  element={<Fruits />}
/>
<Route
  path="/fresh/fruits-shopping"
  element={<FruitsShopping />}
/>

{/* Vegetables */}
<Route
  path="/fresh/vegetables"
  element={<Vegetables />}
/>
<Route
  path="/fresh/vegetables-shopping"
  element={<VegetablesShopping />}
/>

{/* Dairy Products */}
<Route
  path="/fresh/dairy-products"
  element={<DairyProducts />}
/>
<Route
  path="/fresh/dairy-products-shopping"
  element={<DairyProductsShopping />}
/>

{/* Bakery */}
<Route
  path="/fresh/bakery"
  element={<Bakery />}
/>
<Route
  path="/fresh/bakery-shopping"
  element={<BakeryShopping />}
/>

{/* Chips & Snacks */}
<Route
  path="/fresh/chips-snacks"
  element={<Chips />}
/>
<Route
  path="/fresh/chips-snacks-shopping"
  element={<ChipsShopping />}
/>

{/* Cold Drinks */}
<Route
  path="/fresh/cold-drinks"
  element={<ColdDrinks />}
/>
<Route
  path="/fresh/cold-drinks-shopping"
  element={<ColdDrinksShopping />}
/>

{/* Household Essentials */}
<Route
  path="/fresh/household"
  element={<Household/>}
/>
<Route
  path="/fresh/household-shopping"
  element={<HouseholdShopping />}
/>

{/* ================= Customer Service ================= */}

<Route
  path="/customer-service"
  element={<CustomerService />}
/>

<Route
  path="/customer-service/contact-us"
  element={<ContactUs />}
/>

<Route
  path="/customer-service/help-center"
  element={<HelpCenter />}
/>

<Route
  path="/customer-service/track-order"
  element={<TrackOrder />}
/>

<Route
  path="/customer-service/returns-refunds"
  element={<ReturnsRefunds />}
/>

<Route
  path="/customer-service/shipping-information"
  element={<ShippingInformation />}
/>

<Route
  path="/customer-service/payment-options"
  element={<PaymentOptions />}
/>

<Route
  path="/customer-service/terms-conditions"
  element={<TermsConditions />}
/>

<Route
  path="/customer-service/privacy-policy"
  element={<PrivacyPolicy />}
/>

<Route
  path="/customer-service/feedback"
  element={<Feedback />}
/>





      </Routes>

    </BrowserRouter>
  );
}

export default App;