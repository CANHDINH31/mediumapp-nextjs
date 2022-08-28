import { MediumProvider } from "../context/MediumContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MediumProvider>
      <Component {...pageProps} />
    </MediumProvider>
  );
}

export default MyApp;
