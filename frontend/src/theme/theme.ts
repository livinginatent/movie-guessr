import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
 const theme = extendTheme({
   styles: {
     global: {
       body: {
         margin: "0",
         bg: "linear-gradient(to right, #654ea3, #eaafc8)", // Set the background color of the body to red
       },
     },
     colors: {
       gray900: "#171923",
       red:'red'
     },
     fonts: {
       default: "Plus Jakarta Sans",
     },
   },
 });

export default theme
