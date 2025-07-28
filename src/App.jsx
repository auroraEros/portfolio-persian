import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <DarkModeProvider>
      <Toaster
        position="top-center"
        gutter={24}
        containerStyle={{
          top: "1.5rem",
        }}
        toastOptions={{
          common: {
            duration: 5000,
            textAlign: "center",
          },
          
          success: {
            duration: 5000,
            style: {
              background: "hsl(250 47% 60%)",
              color: "hsl(210 40% 98%)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              textAlign: "center",
              padding: "16px 24px",
              fontSize: "16px",
              maxWidth: "500px",
            },
            iconTheme: {
              primary: "hsl(250 47% 60%)",
              secondary: "hsl(210 40% 98%)",
            },
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
