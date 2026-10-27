# Fire Safety Challenge, for Condon Fire & Safety

A quick browser game (about 3 minutes) for Condon Fire & Safety, Indianapolis. Players spot fire hazards in an office, a restaurant kitchen and a paint shop, pick the right extinguisher, and use P.A.S.S. to put the fire out. In the kitchen they decide when to pull the mechanical suppression system, which fires once and then needs a recharge. The end screen links to Condon's service request page and phone number.

Play: https://johnny4958.github.io/condon-fire-game/

The game lays itself out in landscape with a sidebar on laptops and in portrait on phones.

Each game picks 6 hazards per room at random from a set of 8 (the office always keeps the power strips, since that's where its fire starts), so players can't just memorize where to tap.

## Top-score reward (off until Condon approves it)

The 5% reward takes a near-perfect run: all 3 fires out, the kitchen system pulled only for the real fire, and at most one slip in the whole game (one missed hazard out of 18, or one wrong extinguisher pick out of 3). Speed doesn't count. A near-perfect run is the only way to earn the Fire Marshal rank.

The 5% reward is built but switched off. While it's off, players never see an offer. To see the reward screen as a demo, open the game with `?rewardpreview=1` on the end of the address. Preview mode is clearly labeled and sends and saves nothing.

To turn it on, once Condon approves the offer:

1. In `index.html`, change `approved:false` to `approved:true` in the `REWARD` settings.
2. Host `index.html` on condonfire.com itself. An iframe that loads it from github.io won't work.

When it's on, a near-perfect run shows a Claim button. The player enters name, email and phone and checks a consent box, and the game posts `{name, phone, email, message}` to Condon's own `/api/request-service` endpoint, the same one that handles the site's Request Service form. The message includes the reward ID and score. Nothing about the player is stored in this repo, in the address bar, or in the browser except a "claimed on this device" flag.

What "one per customer" really means here: the game blocks a second claim on the same device, and the email and phone checks only confirm the format. Condon's staff does the real check before taking 5% off, by looking for that email or phone in earlier claims and confirming with the customer. The score is calculated in the browser, so someone technical could fake one; staff verification is the actual safeguard.

If you want the website to block repeat claims automatically, Condon's site needs its own endpoint that looks up the email and phone, refuses repeats, and sends back a single-use code. Then point `REWARD.endpoint` at that endpoint.

## Embed on a website

Paste this into an HTML or embed block. On laptops it shows a landscape box up to 1100 px wide (kept short enough to fit the screen); on phones and narrow columns it shows the 480 px portrait box.

```html
<style>
.condon-game{width:100%;max-width:480px;margin:0 auto;aspect-ratio:2/3}
@media (min-width:700px) and (min-aspect-ratio:1/1){.condon-game{max-width:min(1100px,calc(92vh*1.525));aspect-ratio:61/40}}
.condon-game iframe{display:block;width:100%;height:100%;border:0;border-radius:12px}
</style>
<div class="condon-game"><iframe src="https://johnny4958.github.io/condon-fire-game/" title="Fire Safety Challenge from Condon Fire &amp; Safety" allow="autoplay; web-share; clipboard-write" loading="lazy"></iframe></div>
```

`index.html` is the whole game in one file, with fonts and logo built in.
