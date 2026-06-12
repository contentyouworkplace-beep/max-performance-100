# Go-Live Setup Checklist

Everything below is free. Do the steps in order — later steps depend on earlier ones.

## 0. Make the GitHub repo private

GitHub → repo → **Settings** → scroll to **Danger Zone** → **Change visibility** → Private.
Required before committing paid product files to `private/`. Vercel keeps deploying private repos normally.

## 1. Commit & push this code

Push to `main` — Vercel auto-deploys. The new API routes do nothing harmful without env vars (emails just log a warning), so deploying early is safe.

## 2. Resend (email sending)

1. Sign up at https://resend.com (free: 3,000 emails/month, 100/day).
2. **Domains → Add Domain** → enter `maxperformance100.com` → region closest to your buyers.
3. Resend shows DNS records (1 MX + 2 TXT for DKIM/SPF). Add them at the registrar where the domain's DNS is managed (Spaceship for this domain).
   - Spaceship: Domains → maxperformance100.com → Advanced DNS → add each record. Enter hosts WITHOUT the domain suffix (`send`, not `send.maxperformance100.com`).
4. Back in Resend click **Verify DNS Records** — usually verifies in 5–30 min.
5. **API Keys → Create API Key** → name `maxperformance100-prod`, permission "Sending access" → copy the `re_...` key (shown once).

## 3. Microsoft Clarity (analytics)

1. Go to https://clarity.microsoft.com → sign in (any Microsoft/Google account).
2. **New project** → Name: `MaxPerformance100`, Website: `https://maxperformance100.com`, category: Business.
3. When asked how to install, pick **Install manually** — the code is already in the site (`src/components/Clarity.tsx`). You only need the **Project ID** (visible in the project URL or Settings → Overview).

## 4. Vercel environment variables

Vercel dashboard → your project → **Settings → Environment Variables**. Add each for **Production** (and Preview if you want):

| Name | Value |
|---|---|
| `RESEND_API_KEY` | `re_...` from step 2 |
| `EMAIL_FROM` | `MaxPerformance100 <support@maxperformance100.com>` |
| `OWNER_NOTIFY_EMAIL` | `support.maxperformance100@gmail.com` |
| `DOWNLOAD_SECRET` | long random string (e.g. output of `openssl rand -hex 32`) |
| `PAYPAL_BUSINESS_EMAIL` | `dchtristate@gmail.com` |
| `PAYPAL_ENV` | `live` (use `sandbox` while testing) |
| `NEXT_PUBLIC_SITE_URL` | `https://maxperformance100.com` |
| `NEXT_PUBLIC_CLARITY_PROJECT_ID` | `x59murp0kr` |

Then **Deployments → ⋯ on the latest → Redeploy** (env changes only apply on a new deploy; `NEXT_PUBLIC_*` vars especially need a rebuild).

## 5. PayPal

1. Log in to the PayPal account for `dchtristate@gmail.com`.
2. **Upgrade to a Business account** if it's Personal (free: Settings → Upgrade to Business). Needed to reliably receive payments and card checkout from guests.
3. Confirm email + link a bank so the account can receive money.
4. (Belt & braces) Enable IPN: **Account Settings → Notifications → Instant payment notifications → Choose IPN Settings** → URL: `https://maxperformance100.com/api/paypal-ipn` → "Receive IPN messages (Enabled)". The buttons already send `notify_url` per-transaction, but this sets a default.
5. **India note:** if the account is registered in India, PayPal only supports *receiving international* payments (no domestic INR). You'll need PAN, a local bank account, and a purpose code; PayPal auto-withdraws daily to the bank.

## 6. Product files

Put the 3 paid files in `private/` with EXACT names (see `private/README.md`):
- `Client_Scope_Protection_Playbook.pdf`
- `Client_Scope_Protection_Playbook.docx`
- `Client_Scope_Protection_Cheat_Sheet.docx`

Commit + push (repo must be private by now — step 0).

## 7. Test everything

1. **Free sample:** submit your email in the homepage form → sample email should arrive + you get a lead notification.
2. **Payments (no real money):** set `PAYPAL_ENV=sandbox` in Vercel + redeploy. Go to https://developer.paypal.com → **Dashboard → IPN Simulator** → IPN handler URL: `https://maxperformance100.com/api/paypal-ipn`, transaction type "Web Accept", set `payment_status=Completed`, `receiver_email=dchtristate@gmail.com`, `mc_gross=47.00`, `mc_currency=USD`, `payer_email=<your email>` → Send. You should receive the purchase email with 3 working download links. Flip `PAYPAL_ENV` back to `live` + redeploy.
3. **Clarity:** visit the live site, then check the Clarity dashboard — first data appears within ~2 hours.
4. **Real-money dress rehearsal (optional):** have a friend buy for $47 and refund them via PayPal.

## Ongoing

- Sale emails land in `OWNER_NOTIFY_EMAIL` with a "Fulfillment email: ✅/❌" line — if ❌, send files manually.
- Resend dashboard → **Logs** shows every email + delivery status.
- Download links expire after 7 days; buyers can email support for a fresh one (any new link works — they're stateless).
