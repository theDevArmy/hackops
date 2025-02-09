const seoConfig = {
  // The default title for your site.
  title: "My Website",
  // A template for the title, allowing you to add a suffix or prefix.
  titleTemplate: "%s | My Website",
  // The default title for pages that don't specify their own title.
  defaultTitle: "My Website",
  // The default description for your site.
  description: "This is the default description of my website.",
  // Open Graph settings for better social media integration.
  openGraph: {
    // The type of content (e.g., website, article).
    type: "website",
    // The locale of your content.
    locale: "en_US",
    // The canonical URL of your site.
    url: "<https://www.mywebsite.com/>",
    // The name of your site.
    site_name: "My Website",
    // The default title for Open Graph.
    title: "My Website",
    // The default description for Open Graph.
    description: "This is the default description of my website.",
    // Images that will be used when your content is shared.
    images: [
      {
        url: "<https://www.mywebsite.com/og-image.jpg>",
        width: 1200,
        height: 630,
        alt: "Og Image Alt",
      },
    ],
  },
  // Twitter settings for Twitter cards.
  twitter: {
    // The card type, which determines how your content is displayed.
    cardType: "summary_large_image",
    // The Twitter handle of your site.
    site: "@mywebsite",
    // The Twitter handle of the content creator.
    creator: "@mywebsite",
    // The default title for Twitter cards.
    title: "My Website",
    // The default description for Twitter cards.
    description: "This is the default description of my website.",
    // The image that will be used in Twitter cards.
    image: "<https://www.mywebsite.com/og-image.jpg>",
  },
  // Additional meta tags to include in the head of your document.
  additionalMetaTags: [
    {
      name: "theme-color",
      content: "#000000",
    },
    {
      name: "msapplication-navbutton-color",
      content: "#000000",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "#000000",
    },
  ],
};
export default seoConfig;
