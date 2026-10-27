# Fire Safety Challenge, for Condon Fire & Safety

A quick browser game (about 3 minutes) for Condon Fire & Safety, Indianapolis. Players spot fire hazards in an office, a restaurant kitchen and a paint shop, pick the right extinguisher, and use P.A.S.S. to put the fire out. In the kitchen they decide when to pull the mechanical suppression system, which fires once and then needs a recharge. The end screen links to Condon's service request page and phone number.

Play: https://johnny4958.github.io/condon-fire-game/

The game lays itself out in landscape with a sidebar on laptops and in portrait on phones.

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
