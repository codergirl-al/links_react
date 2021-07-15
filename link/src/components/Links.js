import React from "react";
import "./Links.css";

import Link from "./Link";

function Links() {
  return (
    <div className="container">
      <Link
        link="https://codergirl-al.medium.com"
        title="Medium"
        description="My blog on Medium"
      />
      <Link
        link="https://dev.to/codergirl_al"
        title="DEV.to"
        description="Same blog, but in DEV.to"
      />
      <Link
        link="https://github.com/codergirl-al"
        title="GitHub"
        description="My GitHub profile and lots of projects!"
      />
      <Link
        link="https://twitch.tv/codergirl_al"
        title="Twitch"
        description="Not streaming... yet? xD"
      />
      <Link
        link="https://www.linkedin.com/in/albina-peposhi-a458021a7/"
        title="LinkedIn"
        description="My LinkedIn profile - sometimes sharing nice posts"
      />
      <Link
        link="#"
        title="My personal website"
        description="Haiyaaa coming soon :)"
      />
    </div>
  );
}

export default Links;
