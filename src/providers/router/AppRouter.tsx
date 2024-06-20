import { routeConfig } from "@router/routeConfig";
import { Spin } from "antd";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "45vh 0",
          }}
        />
      }
    >
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route path={path} key={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};
