# Paradise Golf — Memberships

An interactive page for Paradise Golf's four membership tiers (Silver, Gold, Platinum, Monthly). Built with plain HTML, CSS, and vanilla JavaScript. No frameworks, no build step.

## How to run

Open `index.html` in any modern browser. That's it.

## The main decision: how to present the data

Before writing any code, I spent time looking at websites that offer subscription options like streaming services and gym memberships to see how they present their plans. The pattern that kept showing up was a row of tier cards with the price up front and the details one click away. I wanted to build something in that style: a dynamic comparison view where the user can see all the options side by side, change the pricing context, and expand the section they are interested in.

The season toggle came out of looking at the flyer. The pricing has three rows per tier (Year-Round, Summer, Winter), and without a toggle I would have to either show three prices per card or pick one. The toggle lets the user filter to the pricing that actually applies to them, and the prices update live across all four cards as they switch.

I also added a small line under the toggle that shows the actual date range for the selected season. That way it is clear what "Summer" actually means without crowding the toggle buttons with extra text.

## Color and visual choices

The brand green (`#004D00`) shows up in different areas of the website like the header bar, section heading, active season button, price amounts, and "See benefits" buttons.

I tried to use it purposefully by applying it to things that will catch the user's eyes like the price, primary action, and brand instead of applying it everywhere.

For the page background I went with `#f4f3ef`, a light cream. I started with pure white and noticed that the page felt flat. The light cream gives the white cards better contrast. For the season section I tried to create a mix of colors that fit nicely together and look natural when hovering and clicking them, by using a warm border color (`#e2e2e0`) and a faintly green-tinted hover color for the season buttons (`#eef0ec`).

## Small things I had to fix along the way

- **The "See benefits" buttons drifted out of vertical alignment** when some cards were expanded and others were not. This was because the card taglines had different line counts, and the price block height changed between regular pricing and the Monthly "Seasonal only" state. Fixed it with `min-height` on both the tagline and the price block, and `align-items: flex-start` on the card row so cards take their natural height instead of stretching to match each other.
- **The footer used to float in the middle of the page** when all the cards were collapsed. Used the flexbox sticky footer pattern (`min-height: 100vh` on body, `flex: 1` on main) so the footer always sits at the actual bottom.
- **Iterated on the card hover effect.** This one took me a few tries. I was not sure which combination of styles would feel right on the cards or how they should respond to being hovered over. I tried a small lift on its own (`translateY(-2px)`), a soft shadow on its own (`box-shadow`), and both together. The lift alone felt flat and the shadow alone felt static. Both together gave the right "the card rises slightly off the page" feeling, so that is what I kept.

## How the JavaScript works

`app.js` keeps a small `state` object with the current season and which cards are expanded, and re-renders the cards section whenever something changes. Two event listeners total with one on the toggle and one on the cards container, both using event delegation so they don't break when the cards are re-rendered.

The data lives in `data.js` as a hardcoded `TIERS` array. I separated it from the rendering logic so the page structure stays focused on layout and behavior.

## What I would improve with more time

- **A real "help me choose" recommender.** Right now the user does the comparing themselves. A short flow asking "how often do you play and where?" and then highlighting the best-fit tier would meaningfully help users who are not sure where to start.
- **Persist the user's season choice.** Right now the toggle resets to Year-Round every time the page loads. Saving the last choice with `localStorage` would let returning visitors see the information for the season they previously selected in their session.
- **A real call-to-action on each card.** Each card only has a "See benefits" button that shows information about the different plans. In a real product, there would be a button to actually choose the plan and start signup. At the moment, the page helps the user decide but does not help them act on the decision.

