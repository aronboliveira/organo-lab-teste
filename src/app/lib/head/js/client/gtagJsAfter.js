const gTagJsAfterStr = (() => {
  window.dataLayer = window.dataLayer || [];
  const gtag = (...args) => window.dataLayer.push(args);
  gtag("set", "linker", { domains: ["blog.organolab.com.br"] });
  gtag("js", new Date());
  gtag("set", "developer_id.dZTNiMT", true);
  gtag("config", process.env.NEXT_PUBLIC_GA_TRACKING_ID, {
    anonymize_ip: true,
  });
  gtag("config", "G-EK3Y6QCW4W");
})().toString();
export default gTagJsAfterStr;
