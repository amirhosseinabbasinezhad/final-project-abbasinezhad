
import Header from "../../../components/home/Header";
import Products from "../../../components/home/Products";



const Clothes = () => {


    
    return <>
        <div className="clothes" style={{ padding: "20px 20px 5px 20px" }}>
       <Header text="name"/>
        <Products limit="5" categoryType="men"/>
        </div>
    </>

}
export default Clothes;