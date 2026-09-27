# Empuls3 website improvements — local handoff

Date: September 27, 2026. Primary checkout: `/Users/robthomas/Development/emp-marcom`. Baseline: `22c22a9eebee12f31d216b11365600a0c5968e75`. This records the local verification snapshot before the release requested later on September 27, 2026.

## Implemented

- Preserved the restored homepage composition and added a new-project path, with a matching watercolor illustration. Relume Layout 1 and Team 1 were inspected in Chrome and adapted to existing components without adding a dependency.
- Added the existing founder identity, biography and portrait to Home and About.
- Added new-project form intent, optional undecided/assessment budgets, and a consultation request fallback that replaces the unavailable calendar link.
- Standardized the response commitment to one business day; replaced an open-ended satisfaction/payment promise with agreed scope and acceptance language.
- Added dated, authentic live-site captures for Hebert-Thomas Law and CodeGig. Clearly distinguished current captures from original delivery. Suppressed the unavailable Solushiens outbound link with a dated status.
- Changed the default mail configuration to honor MAIL_MAILER, retaining resend as its fallback. This permits safe local log delivery and the PHPUnit array mailer.

## Orca outcomes

Run `run_3a192e060a39` used the isolated checkout `/Users/robthomas/orca/workspaces/emp-marcom/orca-setup-check`.

- Initial frontend task `task_ec645ae917d0`: succeeded after the user resolved the trust prompt; failed startup attempt did not implement code.
- Frontend refinement task `task_b00ef632471e`: succeeded, reviewed and integrated.
- Final contact semantics and reciprocal backend review `task_f0d15bc37c6c`: succeeded. Claude converted three stateful actions to buttons with keyboard focus styling and reviewed the final mail configuration. Codex reviewed and integrated the final frontend files.
- Final full frontend patch digest supplied by Claude: `3f5b1f98721b0223eea4ab6929011fd96e3821a68ab336c00b80b17392cf0355`. Integration additionally removes four trailing spaces in CaseStudies/Index.tsx; no behavior change.
- Worker release completed with `external_terminal` retention; Orca reports no reclaimable terminals. Worktree and uncommitted work are preserved.

## Verification

- `composer test`: 70 passed, 215 assertions after the mail configuration change.
- TypeScript, targeted ESLint and production builds passed. Final primary build: `/private/tmp/empuls3-final-build.log`.
- React Doctor: no findings in the changed-file scan; reported score 82/100. This is not a claim that every legacy file was audited.
- `git diff --check`: clean.
- Chrome: home new-project CTA selected Project Request and New Website or Web App Build; empty submission blocked required fields. A failed local mail attempt preserved input. After the configuration correction, the same project request succeeded and its log contained the selected type and not-sure budget.
- Chrome: consultation action selected General Inquiry and seeded topic/times; synthetic consultation submission succeeded using local log mail. Final buttons were checked after integration.
- Chrome at 390px: no horizontal overflow on Home, Contact and About; mobile menu opened and navigated to About. New-project content and illustration were visually inspected on phone and desktop. Viewport override was reset.
- Founder portrait and profile visually verified on About. Real portfolio captures loaded; unavailable client-site status verified. Screenshot: `empuls3-new-project-preview.png` beside this report.

Local runtime: http://127.0.0.1:8439. Ignored local environment and disposable SQLite preview database only. Synthetic submissions were logged locally, not delivered externally. Portfolio preview records are local fixtures paraphrasing public content and are not a production database copy; their fixture imagery is not a claim about deployed content. No production migration was run.

## Remaining prerequisites

- User decision: use the contact form and email only. Consultation requests go through the form to info@empuls3.com; no calendar service or account repair is required. The obsolete calendar-click analytics branch was removed.
- Genuine software rescue/integration case studies still require approved client facts, artifacts and outcomes. No invented case studies were added.
- Before deployment, verify production MAIL_MAILER is resend or unset, rebuild the configuration cache, and confirm actual email delivery. The previously hardcoded default ignored any environment value. Local log success does not prove production delivery.
- The user subsequently authorized commit, push, deployment and live production verification on September 27, 2026. Production acceptance is recorded separately from this local snapshot.

See `website-improvements-assets.md` for the generation prompt, sources and saved assets. The image tool did not expose a model selector, so no claim is made that generation used Astra.
