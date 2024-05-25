 import { Routes, Route } from 'react-router-dom';
 import HeadlinesPage from './Headlines';
 import Benefits from './Benefits';
 import Features from './Features';
 import TrustAndSecurity from './Trust and Security';


 function Pages() {
   return (
     <div>
       <Routes>
         <Route path="/headlines" element={<HeadlinesPage />} />
//          <Route path="/benefits" element={<Benefits />} />
//          <Route path="/features" element={<Features />} />
//          <Route path="/trust and security" element={<TrustAndSecurity />} />
//          {/* <Route path="/call to action" element={<Call To Action />} /> */}
//       </Routes>
//     </div>
   );
 }

 export default Pages;