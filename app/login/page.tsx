'use client';
import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
//import { Suspense } from 'react';
 //import { lusitana } from '@/app/ui/fonts';
import {
//  AtSymbolIcon,
  //KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
//import { useActionState } from 'react';
//import { authenticate } from '@/app/lib/actions';
//import { useSearchParams } from 'next/navigation';
 //import Form from 'next/form';

//import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect,useRef } from 'react';
//import { toast } from '@/components/toast';

//import { AuthForm } from '@/components/auth-form';
//import { SubmitButton } from '@/components/submit-button';

import { login, type LoginActionState } from '@/app/lib/actions';
import { useSession } from 'next-auth/react';


export default function LoginPage() {



//const searchParams = useSearchParams();
  //local 
  //const callbackUrl = searchParams.get('callbackUrl') || '/dashboard/overview';

//   const safeRedirect = searchParams.get('callbackUrl');

// // Fallback to dashboard homepage only if callbackUrl is empty or unsafe
//   const callbackUrl = safeRedirect?.startsWith('/') ? safeRedirect : '/dashboard/overview';
//   console.log('main',callbackUrl);
//   const [errorMessage, formAction, isPending] = useActionState(
//     authenticate,
//     undefined,
//   );

 const router = useRouter();

  //const [email, setEmail] = useState('');
  //const [isSuccessful, setIsSuccessful] = useState(false);

  const [state, formAction] = useActionState<LoginActionState, FormData>(
    login,
    {
      status: 'idle',
    },
  );

  const { update: updateSession } = useSession();
  const updateSessionRef = useRef(updateSession);
const routerRef = useRef(router);
const errorMessage="";
console.log(state.status,"outside");
  useEffect(() => {
    if (state.status === 'failed') {
      // toast({
      //   type: 'error',
      //   description: 'Invalid credentials!',
      // });
      console.log(state.status,"failed");
    } else if (state.status === 'invalid_data') {
      // toast({
      //   type: 'error',
      //   description: 'Failed validating your submission!',
      // });
      console.log(state.status,"invalid");
    } else if (state.status === 'success') {
    //  setIsSuccessful(true);
    console.log(state.status,"success");
      updateSessionRef.current();
    routerRef.current.refresh();
    }
  }, [state.status]);

  // const handleSubmit = (formData: FormData) => {
  //   setEmail(formData.get('email') as string);
  //   formAction(formData);
  // };




  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        
         <LoginForm action={formAction} >
           {/* <input type="hidden" name="redirectTo" value={callbackUrl ?? ''} /> */}
        <Button className="mt-4 w-full" >
          Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
        </LoginForm>
        
      </div>
    </main>
  );
}