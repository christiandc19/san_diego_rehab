import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import TreatmentPage from './routes/TreatmentPage'
import AboutPage from './routes/AboutPage'
import InsurancePage from './routes/InsurancePage'
import ContactPage from './routes/ContactPage'

import MH from './routes/MH';
import Jobs from './routes/JOBS';

import AcuteStressDisorder from './routes/AcuteStressDisorder';
import ADHD from './routes/ADHD';
import AngerDisorder from './routes/AngerDisorder';
import Anxiety from './routes/Anxiety';
import BipolarDisorder from './routes/BipolarDisorder';
import Depression from './routes/DepressionPage';
import PanicDisorder from './routes/PanicDisorderPage';
import PTSD from './routes/PTSDPage';
import Schizoaffective from './routes/SchizoaffectivePage';
import Schizophrenia from './routes/SchizophreniaPage';

import COCAINE from './routes/COCAINE';
import ALCOHOL from './routes/ALCOHOL';
import FENTANYL from './routes/FENTANYL';
import HEROIN from './routes/HEROIN';
import KRATOM from './routes/KRATOM';
import MDMA from './routes/MDMA';
import METH from './routes/METH';
import OPIATE from './routes/OPIATE';
import OPIOID from './routes/OPIOID';
import OXYCODONE from './routes/OXYCODONE';
import PRESCRIPTIONS from './routes/PRESCRIPTIONS';
import XANAX from './routes/XANAX';

import SA from './routes/SA';
import Php from './routes/PHP';
import Iop from './routes/IOP';
import Op from './routes/OP';
import CaseManagementPage from './routes/Programs-CaseManagement';
import CrisisInterventionPage from './routes/Programs-CrisisIntervention';
import FamilyTherapyPage from './routes/Programs-FamilyTherapy';

import PrivacyPolicyPage from './routes/PrivacyPolicyPage';




ReactDOM.render(
  <BrowserRouter basename={window.location.pathname || ''} >
    <Routes>
      <Route exact path='/' element={<App />} />

      <Route exact path='/mental-health' element={<MH />} />
      <Route exact path='/jobs' element={<Jobs />} />

      <Route exact path='/acute-stress-disorder' element={<AcuteStressDisorder />} />
      <Route exact path='/adhd' element={<ADHD />} />
      <Route exact path='/anger-disorder' element={<AngerDisorder />} />
      <Route exact path='/anxiety' element={<Anxiety />} />
      <Route exact path='/bipolar-disorder' element={<BipolarDisorder />} />
      <Route exact path='/depression' element={<Depression />} />
      <Route exact path='/panic-disorder' element={<PanicDisorder />} />
      <Route exact path='/ptsd' element={<PTSD />} />
      <Route exact path='/schizoaffective' element={<Schizoaffective />} />
      <Route exact path='/schizophrenia' element={<Schizophrenia />} />




      <Route exact path='/alcohol' element={<ALCOHOL />} />
      <Route exact path='/cocaine' element={<COCAINE />} />
      <Route exact path='/fentanyl' element={<FENTANYL />} />
      <Route exact path='/heroin' element={<HEROIN />} />
      <Route exact path='/kratom' element={<KRATOM />} />
      <Route exact path='/mdma' element={<MDMA />} />
      <Route exact path='/meth' element={<METH />} />
      <Route exact path='/opiate' element={<OPIATE />} />
      <Route exact path='/opioid' element={<OPIOID />} />
      <Route exact path='/oxycodone' element={<OXYCODONE />} />
      <Route exact path='/prescriptions' element={<PRESCRIPTIONS />} />
      <Route exact path='/xanax' element={<XANAX />} />

      <Route exact path='/substance-abuse' element={<SA />} />
      <Route exact path='/php' element={<Php />} />
      <Route exact path='/iop' element={<Iop />} />
      <Route exact path='/op' element={<Op />} />
      <Route exact path='/case-management' element={<CaseManagementPage />} />
      <Route exact path='/crisis-intervention' element={<CrisisInterventionPage />} />
      <Route exact path='/family-therapy' element={<FamilyTherapyPage />} />


      <Route exact path='/privacy-policy' element={<PrivacyPolicyPage />} />


      <Route exact path='/treatment' element={<TreatmentPage />} />
      <Route exact path='/about-us' element={<AboutPage />} />
      <Route exact path='/insurance' element={<InsurancePage />} />
      <Route exact path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

