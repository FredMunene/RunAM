import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseRunAm from '@/components/WhyChooseRunAm';
import ForSenders from '@/components/ForSenders';
import ForTravelers from '@/components/ForTravelers';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import GetStartedModal from '@/components/GetStartedModal';
import SignInModal from '@/components/SignInModal';

export default function Landing() {
  const [showGetStarted, setShowGetStarted] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <HowItWorks />
      <WhyChooseRunAm />
      <ForSenders />
      <ForTravelers />
      <CTA />
      <Footer />
      
      <GetStartedModal isOpen={showGetStarted} onClose={() => setShowGetStarted(false)} />
      <SignInModal isOpen={showSignIn} onClose={() => setShowSignIn(false)} />
    </div>
  );
}
