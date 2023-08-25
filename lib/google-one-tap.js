const client_id = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

if (!client_id) throw new Error('client_id is required.');

export function googleOneTap({
  auto_select = false,
  cancel_on_tap_outside = false,
  context,
  ...opt
} = {}) {
  if (typeof window === 'undefined' || !window.document) return;

  if (context && !['signin', 'signup', 'use'].includes(context))
    context = 'signin';

  const script = document.createElement('script');

  script.src = 'https://accounts.google.com/gsi/client';
  script.async = true;
  script.defer = true;

  script.onload = function () {
    if (!window.google) return;

    document.cookie = 'g_state={}';

    window.google.accounts.id.initialize({
      client_id,
      auto_select,
      cancel_on_tap_outside,
      context,
      ...opt,
    });

    window.google.accounts.id.prompt(({ g: status }) => {
      console.log(`status`, status);
    });
  };

  document.head.appendChild(script);
}
