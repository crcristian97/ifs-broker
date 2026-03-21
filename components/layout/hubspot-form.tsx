"use client";

import { useEffect } from "react";

export function HubSpotForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/51214096.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="hs-form-frame"
      data-region="na1"
      data-form-id="212777fd-6970-479c-bd0c-5f1a32b133fa"
      data-portal-id="51214096"
    />
  );
}
