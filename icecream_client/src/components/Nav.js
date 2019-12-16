import React from "react";

function Nav(props) {
  return (
    <nav>
      <h1>Interesting Articles</h1>
      <a href="https://www.museumoficecream.com/ice-cream" target="_blank">
        Museum of Ice Cream
      </a>
      <br></br>
      <a
        href="https://www.barry-callebaut.com/en-US/manufacturers/trends-insights/top-10-trends-watch-ice-cream"
        target="_blank"
      >
        Ten Trends to Watch in Ice Cream
      </a>
      <br></br>
      <a
        href="https://www.forbes.com/sites/ambergibson/2019/11/21/holiday-gift-guide-2019-the-best-new-ice-cream-flavors/#1e0000e05ed2"
        target="_blank"
      >
        Holiday Gift Guide 2019
      </a>
      <br></br>
      <br></br>
      <br></br>
      <h1>My Favorite Ice Cream Shops</h1>
      <a href="https://peachesncreamicecream.com/index.html" target="_blank">
        Peaches and Cream
      </a>
      <br></br>
      <a href="https://www.arethusafarm.com/" target="_blank">
        Arethusa Farm
      </a>
    </nav>
  );
}

export default Nav;
