import React from "react";

// components/InstallButton.js

import { useState, useEffect } from "react";

const InstallPWAbutton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };

  return deferredPrompt ? (
    <button
      onClick={handleInstallClick}
      className="bg-orange-200 pl-3 pr-3 pt-1 pb-1 rounded-xl mt-[16px]"
    >
      Install App
    </button>
  ) : null;
};

export default InstallPWAbutton;
