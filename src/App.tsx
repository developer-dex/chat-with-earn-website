// import { Suspense } from "react";
// import { BrowserRouter } from "react-router-dom";
// import ErrorBoundary from "./hoc/ErrorBoundary";
// import AppRoutes from "./routes/AppRoutes";
// import ToastNotification from "./components/common/ToastNotification";
// import { config } from "./config/config";

import './App.css'; // Import the CSS file

function App() {

  return (
    // <>
    //   <BrowserRouter basename={config.baseName}>
    //     <ErrorBoundary>
    //       <Suspense fallback={<div>Loading...</div>}>
    //         <AppRoutes />
    //         <ToastNotification />
    //       </Suspense>
    //     </ErrorBoundary>
    //   </BrowserRouter>
    // </>
    <div className="app-container">
      <img 
        src="/Meet-With-Money.jpg" 
        alt="Coming Soon" 
        className="app-image" 
      />
    </div>
  )
}

export default App;
