<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Shared site navigation and footer live around the root Outlet so every content page keeps consistent navigation.
- A shared fixed WhatsApp link uses the central agency contact URL without a messaging API, so visitors start their own conversation directly.
- Portfolio concepts and offer data use one browser-safe module, keeping previews, detail pages and price tests aligned.
- Contact currently exports a local brief without sending data; do not present it as a delivered enquiry until a destination is configured.
- Portfolio project pages use the realizations parent Outlet with separate index and dynamic leaves so every concept has a shareable URL.

- Scroll animation uses dynamically imported GSAP ScrollTrigger with lifecycle cleanup and reduced-motion fallback; native document scrolling stays available.
- The method sequence is a sticky section whose active step follows scroll progress, with buttons providing direct step navigation.
- Portfolio category sections and filters derive from the shared portfolio catalog so every listed concept has the same detail-page data.
- Homepage explainer media uses an externalized video asset with native playback controls; motion generation is an authoring task, not a visitor feature.
