# Savage Trader

A mobile-first demo trading dashboard for the Deriv API.

## Safety model

- Demo mode is the default
- Live trading is disabled in the UI
- OAuth is used instead of password collection
- Raw OAuth tokens must not be stored in browser storage or committed to Git
- Production OAuth callback credentials require encrypted server-side sessions

## Development

```bash
npm install
npm run dev
```

Create a Deriv app and set:

```bash
NEXT_PUBLIC_DERIV_APP_ID=your_app_id
```

Register this redirect URL in your Deriv app:

```text
http://localhost:3000/api/oauth/callback
```

For production, add HTTPS and the deployed callback URL.
