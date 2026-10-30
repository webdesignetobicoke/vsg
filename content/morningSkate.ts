// Morning Skate Hockey – program content. Edit here, no page changes needed.

// Set to true to put Morning Skate live: shows the page, nav and footer links, sitemap entry and registration payments.
export const MORNING_SKATE_LIVE = false;

export const MORNING_SKATE_PRICE_CAD = 349.99;

// Add upcoming blocks here. When the list has items, the registration form shows a block selector.
//   id:    short unique id, e.g. 'nov-2026'
//   label: what registrants see, e.g. 'Block 1 – Nov 3–14, 2026 (Mon/Wed/Fri, 6:00–7:00 AM)'
//   full:  set true to mark a block as sold out (optional)
export const morningSkateBlocks: { id: string; label: string; full?: boolean }[] = [];

export const pillars = [
  { title: 'Foundations of Flow', description: 'Skating, puck handling, passing and shooting through continuous movement.' },
  { title: 'Transitions & Regroups', description: 'Puck support, timing, regroups and attacking with speed.' },
  { title: 'Offensive Execution', description: 'Passing combinations, offensive movement, zone entries and finishing.' },
  { title: 'Odd-Man Situations', description: '2-on-1 and 3-on-2 execution, spacing and offensive decision-making.' },
  { title: 'Pressure & Competition', description: 'Puck protection, competitive situations and execution under pressure.' },
  { title: 'Complete Game Flow', description: 'Integrating all development pillars through continuous, game-like sequences.' },
];

export const programFacts = [
  { label: 'Program Format', value: '6 on-ice sessions' },
  { label: 'Program Duration', value: '2 weeks' },
  { label: 'Training Days', value: 'Monday / Wednesday / Friday' },
  { label: 'Session Time', value: '6:00–7:00 AM' },
  { label: 'Session Length', value: '60 minutes' },
  { label: 'Group Size', value: '12–15 skaters' },
  { label: 'Player Profile', value: 'Competitive minor hockey players' },
];
