// Add any helper functions here
export function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  export function formatCurrency(num) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
  }