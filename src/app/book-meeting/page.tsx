'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MeetingPage() {
  const router = useRouter();

  useEffect(() => {
    // The URL to which you want to redirect
    const redirectUrl = 'https://calendly.com/dhruv-aii/30mins';
    
    // Redirect the user to the specified link
    window.location.href = redirectUrl;
  }, []);

  return null; // No need to render anything, the redirect will happen immediately
}
