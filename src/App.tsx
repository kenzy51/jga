import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { LayoutUI } from "@ui-kit/layout";
import NewHeader from "@ui-kit/newHeader/NewHeader";
import { CallModal } from "@features/main/CallModal";
import { setCallModal } from "@store/slices";
import { Footer } from "@ui-kit/footer/Footer";
import { AppRouter } from "./providers";

export default function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="wrapperApp">
      <NewHeader />
      <div className="mainApp">
        <LayoutUI>
          <AppRouter />
        </LayoutUI>
      </div>
      <CallModal onClose={() => dispatch(setCallModal(false))} />
      <Footer />
    </div>
  );
}
