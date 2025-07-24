/**
 * Report Web Vitals
 * Measures and reports performance metrics such as:
 * CLS, FID, FCP, LCP, and TTFB.
 * 
 * @param {function} onPerfEntry - Callback function to handle performance metrics.
 */
const reportWebVitals = (onPerfEntry) => {
  // Ensure the callback exists and is a valid function
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Dynamically import the web-vitals library to avoid unnecessary loading
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Execute each metric collector and pass the results to the callback
      getCLS(onPerfEntry);   // Cumulative Layout Shift
      getFID(onPerfEntry);   // First Input Delay
      getFCP(onPerfEntry);   // First Contentful Paint
      getLCP(onPerfEntry);   // Largest Contentful Paint
      getTTFB(onPerfEntry);  // Time To First Byte
    });
  }
};

export default reportWebVitals;
