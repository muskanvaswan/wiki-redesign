import * as React from 'react';
import { Box, Typography, TextField, Button, IconButton, Divider} from '@mui/material';
import { Search } from '@mui/icons-material'


export default function Index() {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      // alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundImage: "url('/BG.png')",
      backgroundSize: "cover",
      p: 15
    }}>
      <Box sx={{
        display: "flex",
       
        width: 'fit-content',
        borderRadius: 5,
        bgcolor: "#171717",
        backdropFilter: "blur(50)",
        color: "black",
        width: "70%",
        overflow: "hidden"
      }}>
        <Box sx={{
           display: 'flex',
           alignItems: 'center',
            bgcolor: "#D9D9d947",
            width: "100%"

        }}>
          <Typography variant="h3" sx={{
            fontFamily: "Times New Roman",
            transition: "all 1s ease-in-out",
            "&:hover" : {
              transform: "rotate(15deg)"
            },
            m: 3,
          }}>
            W
          </Typography>
          <Divider orientation='vertical' flexItem sx={{borderWidth: "3px"}}/>

          <TextField 
            variant='standard'
            sx={{
              fontSize: "20px",
              flex: 1,
              mb: -10,
              borderRadius: 10
            }}
          />
        </Box>
      </Box>

    </Box>
  );
}
