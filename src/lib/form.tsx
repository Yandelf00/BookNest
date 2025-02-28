'use client';

import { useRouter } from 'next/navigation';

const Form = ({
  children,
  action,
  onSubmit,
}: {
  children: React.ReactNode;
  action: string; 
  onSubmit?: (formData: FormData) => Promise<void>; // Optional onSubmit handler
}) => {
  const router = useRouter();

  return (
    <form
      action={action}
      method="post"
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        // Call the custom onSubmit handler if provided
        if (onSubmit) {
          await onSubmit(formData);
        }

        // Submit the form data to the action URL
        const response = await fetch(action, {
          method: 'POST',
          body: formData,
          redirect: 'manual',
        });

        if (response.status === 0) {
          // Redirected
          return router.refresh();
        } else {
          const js = await response.json();
          console.log(js);
        }
      }}
    >
      {children}
    </form>
  );
};

export default Form;