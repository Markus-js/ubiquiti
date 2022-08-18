# Ubiquiti device catalogue
This application allows employees to look up Ubiquiti devices by searching, filtering, and reading additional information about each device.
## Tools
 This application is built with TypeScript, React, React Router and Redux Toolkit for global state management.

 - Github repository: [visit](https://github.com/Markus-js/ubiquiti)
 - Deployed with Netlify: [visit](https://symphonious-seahorse-32c0c9.netlify.app/)

## Remaining Features & tasks


 - Fail gracefully.
   - If the API fails, then inform the user about it. 
 - lazy loading  
   - reduced page load time by presenting x amount of products at first request and the rest when needed. 
 - Pre-load components
   - Make the device detail pages load faster with SSR or pre-render data when hovering over a product before the user clicks on it.
 - Filter reset feature 
   - When filters are applied, the filter button in the right of the toolbar displays a reset option for  filters, but the function doesn't rerender the UI yet. 
 - List view resizing by the width of the counts of products displayed - needs to be statically sized.
 - E2E & Unit tests
 - Mobile responsive