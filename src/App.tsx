// import { Suspense } from "react";
// import { BrowserRouter } from "react-router-dom";
// import ErrorBoundary from "./hoc/ErrorBoundary";
// import AppRoutes from "./routes/AppRoutes";
// import ToastNotification from "./components/common/ToastNotification";
// import { config } from "./config/config";

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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <img 
      src="/Meet-With-Money.jpg" 
      alt="Coming Soon" 
      style={{ maxWidth: '50%', height: 'auto' }} 
    />
  </div>
  )
}

export default App;
