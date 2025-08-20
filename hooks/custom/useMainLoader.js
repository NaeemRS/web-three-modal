import { useState, useEffect, useCallback } from "react";
import MainLoader from "../../components/loader/MainLoader";
export default function useMainLoader() {
  const [RenderLoader, setRenderLoader] = useState(<MainLoader />);

  useEffect(() => {
    setTimeout(() => {
      setRenderLoader(<></>);
    }, 3000);
  }, []);

  return RenderLoader;
}
