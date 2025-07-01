import { Box, Typography } from "@mui/material";

const BlockSeparator = () => {
    return (
        <Box sx={{display: 'flex', width: '100vw', alignItems: 'center', justifyContent: 'center', gap: '1px'}}>
            <Box sx={{height: 100, flex: 1, bgcolor: '#D698C7'}}/>
            <Box sx={{height: 100, flex: 1, bgcolor: '#D698C7', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Typography variant="h3" sx={{color: 'white'}}>1</Typography></Box>
            <Box sx={{height: 100, flex: 1, bgcolor: '#D698C7', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Typography variant="h3" sx={{color: 'white'}}>2</Typography></Box>
            <Box sx={{height: 100, flex: 1, bgcolor: '#D698C7', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Typography variant="h3" sx={{color: 'white'}}>3</Typography></Box>
            <Box sx={{height: 100, flex: 1, bgcolor: '#D698C7', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Typography variant="h3" sx={{color: 'white'}}>4</Typography></Box>
            <Box sx={{height: 100, flex: 1, bgcolor: '#D698C7', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Typography variant="h3" sx={{color: 'white'}}>5</Typography></Box>
            <Box sx={{height: 100, flex: 1, bgcolor: '#D698C7'}}/>
        </Box>
    )
}

export default BlockSeparator;