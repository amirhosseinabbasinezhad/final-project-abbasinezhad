import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { useState } from "react";
import useSWR from "swr";
import axios from "axios";
import { Box, List, ListItem, MenuItem, MenuList, Typography, useMediaQuery } from "@mui/material";
import { InputGroup } from "react-bootstrap";
import { useRouter } from "next/router";
const SearchBar = ({ open, setOpen }: { open: boolean; setOpen: any }) => {
    const [sQuery, setSQuery] = useState("");
    const [showItems ,setShowItems]=useState(false)
    
  const phone = useMediaQuery("(max-width: 550px)");
  const tablet = useMediaQuery("(max-width: 770px)");
  const router=useRouter()
  
  const fetcher = (url: string) => axios(url).then((r) => r.data);
  const { data, error, isLoading } = useSWR(
    `https://shop-api-backend-main.vercel.app/api/products/search/${sQuery}`,
    fetcher
  );
  const handleshowFilter = () => {
    setOpen(!open);
  };

  const handleInputFocus = () => {
    setShowItems(true);
  };

  const handleInputBlur = () => {
    setShowItems(false);
  };
 const handleClickProduct=(id:string)=>{
    router.push(`products/${id}`)
    console.log(id);
    
  }
  return (
    <>
      <Box className="searchbar">
        <div className="d-flex flex-row justify-content-between searcharea" style={{width:phone ? "70%" : "50%"}}>
        <div
          className="col-5 dropdown-search p-0"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        >
          {showItems && !isLoading &&(
            <ul>
              {data?.map((item:any,index:number) => (
                <li  key={item?.id} onClick={()=>{handleClickProduct(item?.id)}}>
                    <Box className="searchProductList col-12" >
                        <img src={item?.img} alt={item?.title}/>
                        <Typography className="productTitle ">{item?.title}</Typography>
                    </Box>
                </li>
            ))}
             
              
            </ul>
          )}

          <InputGroup
            className="form-control"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          >
           <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon color="disabled" />
          </IconButton>
            
            <input
              type="text"
              placeholder="search"
              className="form-control"
              style={{
                border: "0px",
                borderRadius: "8px",
                maxHeight: "20px",
              }}
              value={sQuery}
              onChange={(e)=>{setSQuery(e?.target?.value)}}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </InputGroup>
       
          
        
        </div>
       </div>

      <Box className="menubtn" onClick={handleshowFilter}>
        <IconButton sx={{ p: "10px" }}>
          <TuneIcon color="secondary" />
        </IconButton>
      </Box>
      </Box>
     
    </>
  );
};
export default SearchBar;
