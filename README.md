# Fire Safety Challenge, for Condon Fire & Safety

A quick browser game (about 3 minutes) for Condon Fire & Safety, Indianapolis. Players spot fire hazards in an office, a restaurant kitchen and a paint shop, pick the right extinguisher, and use P.A.S.S. to put the fire out. In the kitchen they decide when to pull the mechanical suppression system, which fires once and then needs a recharge. The end screen links to Condon's service request page and phone number.

Play: https://johnny4958.github.io/condon-fire-game/

The game lays itself out in landscape with a sidebar on laptops and in portrait on phones.

Each game picks 6 hazards per room at random from a set of 10 (11 in the paint shop; the office always keeps the power strips and the paint shop always keeps the booth filters, since that's where their fires start), so players can't just memorize where to tap. The set includes an extinguisher left on the floor under its empty hook (it can land on different hooks in the office) and an extinguisher used as a doorstop. A game never shows the same picks twice in a row.

## Top-score reward (on)

The 5% reward takes a score of 6,000 or more in one game (6,000 exactly counts). To change the cutoff, edit `minScore:6000` in the `REWARD` settings in `index.html`.

The end screen shows the score only, with no rank or tier names.

The 5% reward is switched on. To turn it off, change `approved:true` to `approved:false` in the `REWARD` settings in `index.html`. While it's off, players never see an offer, and `?rewardpreview=1` on the end of the address shows a labeled sample.

When it's on, a score of 6,000 or more shows a button that opens a reward code (like `FSG-1A2B3C4D`). The player mentions it when booking. The game doesn't ask for or send any contact info.

What "one per customer" means here: the game gives each device one code and shows the same code again on replays. Condon's staff does the real check before taking 5% off, by confirming the customer hasn't used the reward before. Clearing the browser or switching devices gets a new code, and the score is calculated in the browser, so staff verification is the actual safeguard.

Collecting email and phone to track claims is on hold until Condon decides what they want.

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
