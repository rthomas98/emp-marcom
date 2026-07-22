# Search Recovery Launch Runbook

This runbook covers the deployment and account-level steps that cannot be completed from the application code alone.

## 1. Make `www` authoritative

- Attach both `www.empuls3.com` and `empuls3.com` to the production application.
- Set `www.empuls3.com` as the primary domain.
- Set `APP_URL=https://www.empuls3.com` and `APP_CANONICAL_URL=https://www.empuls3.com` in production.
- Confirm the old WordPress origin is no longer served directly after the application redirect is verified.
- Keep the apex domain attached so requests can receive an application-level `301` redirect.

Verify these examples in production:

```bash
curl -I https://empuls3.com/
curl -I https://empuls3.com/about-us/
curl -I https://empuls3.com/contact-us/
curl -I https://empuls3.com/capabilities/
curl -I https://empuls3.com/request-proposal/
```

Every response should be a single permanent redirect to the equivalent `https://www.empuls3.com/...` URL.

## 2. Verify crawl signals

- Confirm `https://www.empuls3.com/robots.txt` returns `200` and names the `www` sitemap.
- Confirm every URL in `https://www.empuls3.com/sitemap.xml` returns `200` and emits one self-referencing `www` canonical.
- Submit the sitemap in Google Search Console and Bing Webmaster Tools.
- In Google Search Console, inspect the homepage, contact page, case-study index, and the five Dallas pages and request indexing after deployment.
- Monitor Page indexing for alternate canonical and redirect errors during the following four to eight weeks.

## 3. Verify lead measurement

- Confirm that GA4 property `G-7GYXH0ED2H` is the intended production property.
- Use GA4 Realtime or DebugView to verify `generate_lead`, `contact_form_success`, `phone_click`, `email_click`, and `schedule_consultation_click`.
- Mark `generate_lead`, `phone_click`, `email_click`, and completed scheduling events as key events when they represent genuine leads.
- Complete a real test submission and confirm both email delivery and the GA4 success event. Do not count submit-button clicks as leads.

## 4. Close the proof gap

Publish at least three client-approved case studies aligned with the primary offers:

1. Software rescue or legacy modernization.
2. CRM, API, or workflow integration.
3. Ongoing senior engineering support.

For each case study, record the starting condition, business impact, work performed, delivery period, measurable result, measurement source, and client approval. Do not publish estimates or reconstructed metrics as verified outcomes.

## 5. Monitor after launch

- Check Search Console weekly for indexed-page growth, canonical selection, crawl errors, and search queries.
- Check GA4 weekly for successful leads by landing page and channel.
- Review phone and email click quality against actual inquiries.
- Do not start paid acquisition until redirects, canonicals, sitemap indexing, and conversion events are verified in production.
