import { useEffect } from "react";

export const SubstackEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://substack.com/embedjs/embed.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="substack-post-embed">
      <p lang="en">The Dove of Peace by Omer Eilam</p>
      <a
        data-post-link
        href="https://omereilam.substack.com/p/the-dove-of-peace"
      >
        Read on Substack
      </a>
    </div>
  );
};
