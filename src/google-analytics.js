/* global dataLayer */
export const initializeGoogleAnalytics = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-954JMH7ZY4');
};
