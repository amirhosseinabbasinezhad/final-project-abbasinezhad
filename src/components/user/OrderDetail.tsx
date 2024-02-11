import { Box, Typography, Tooltip } from "@mui/material"

const Detail = ({ order }: { order: any }) => {
    console.log(order);

    return (
        <Box sx={{ bgcolor: "#fff" }}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>{order?.products?.map((item: any, idx: number) => {
                return <Box key={idx} sx={{ width: "65px" }}>
                    
                        <img style={{ width: "100%", borderRadius: "50%",border:"1px solid #F79DA5" }} src={item?.img} alt={item?.title} />
                    
                </Box>
            })}
            </Box>
        </Box>
    )
}
export default Detail;