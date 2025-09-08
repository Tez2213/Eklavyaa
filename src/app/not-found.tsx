'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Home, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-[#ffce3b]/10 flex items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto text-center">
        {/* Error Image */}
        <div className="mb-6">
          <div className="relative w-48 h-36 mx-auto rounded-xl overflow-hidden shadow-md">
            <Image
              src="/err.webp"
              alt="404 Error"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Error Text */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Oops! Page Not Found
          </h1>
          <p className="text-gray-600 text-sm mb-4">
            The page you're looking for doesn't exist.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {/* Back to Dashboard Button */}
          <Button
            onClick={() => router.push('/dashboard')}
            className="w-full bg-[#ffce3b] hover:bg-[#ffde00] text-white py-3 rounded-xl font-bold shadow-lg"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>

          {/* Go Back Button */}
          <Button
            variant="outline"
            onClick={() => router.back()}
            className="w-full py-2 rounded-xl border-[#ffce3b]/30 hover:bg-[#ffce3b]/10 text-[#ffce3b] hover:text-[#ffde00]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Fun Message */}
        <div className="mt-6 p-3 bg-[#ffce3b]/10 rounded-xl border border-[#ffce3b]/20">
          <p className="text-[#ffce3b] text-sm font-medium">
            🌟 Keep learning with Eklavyaa!
          </p>
        </div>
      </div>
    </div>
  );
}
