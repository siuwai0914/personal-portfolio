import React from "react";

// Loads react-lottie-player only in the browser, so Node never imports lottie-web.
const ClientLottie = (props) => {
  const [Player, setPlayer] = React.useState(null);

  React.useEffect(() => {
    let active = true;
    import("react-lottie-player").then((mod) => {
      if (active) setPlayer(() => mod.default);
    });
    return () => {
      active = false;
    };
  }, []);

  return Player ? <Player {...props} /> : null;
};

export default ClientLottie;