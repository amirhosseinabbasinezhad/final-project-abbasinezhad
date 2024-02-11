import FilterProductsSlider from "./FilterProductsSlider";
import Slider from "./Slider";
import Header from "./Header";
import Products from "./Products";
import SelectFilters from "./SelectFilters";
import SearchBar from "./Searcbar";
import { useState } from "react";
const Home = () => {
    const [categoryType, setCategoryType] = useState<string>("0");
    
    const [limit, setLimit] = useState<string>("10");
    const [open, setOpen] = useState(false);

    return (<>
        <div style={{ padding: "20px 20px 5px 20px" }} className="homepage">
            <SelectFilters open={open} setOpen={setOpen} limit={limit} setLimit={setLimit} categoryType={categoryType} setCategoryType={setCategoryType}/>
            <Header text="name"/>
            <div className="searchbar">
                <SearchBar open={open} setOpen={setOpen}/>

            </div>
            <Slider />

            <FilterProductsSlider />
            <Products limit={limit} categoryType={categoryType}/>


        </div>



    </>)
}
export default Home;