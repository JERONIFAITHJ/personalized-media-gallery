import React, { useEffect, useState } from "react";

const GoogleSignIn = () => {
  const [loading, setLoading] = useState(false);
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleCredentialResponse,
      });
      window.google.accounts.id.renderButton(
        document.getElementById("google-btn"),
        { theme: "filled_blue", size: "large", width: "200" }
      );
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCredentialResponse = async (response) => {
    setLoading(true);
    try {
      console.log(response);
      const credential = response.credential;
      console.log("CREDENTIALS: ", credential);
      const resp = await fetch("http://localhost:3003/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ credential }),
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      {loading && <p>Loading...</p>}
      <div id="google-btn"></div>
    </div>
  );
};

export default GoogleSignIn;
