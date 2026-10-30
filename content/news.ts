// News & Updates – add new items to the TOP of this list (newest first).
// The home page carousel shows the latest 5.
//   date:    YYYY-MM-DD
//   title:   headline
//   summary: one or two sentences (optional)
//   source:  who published it, e.g. "Hockey News" or "VSG Announcement" (optional)
//   href:    link to the article / announcement (optional – card is not clickable without it)

export interface NewsItem {
  date: string;
  title: string;
  summary?: string;
  source?: string;
  href?: string;
  body?: string; // full article text; when set the card links to /news/<slug> on this site
  slug?: string;
  image?: string; // optional, e.g. '/News/my-article.jpg' (file in public/News) – falls back to the VSG logo
}

export const newsItems: NewsItem[] = [
  // DUMMY CONTENT – replace or delete before launch
  {
    date: '2026-10-20',
    title: 'Morning Skate Hockey Registration Now Open',
    summary: 'Six on-ice sessions, six development pillars. Reserve a spot in the next high-tempo development block.',
    source: 'VSG Announcement',
    href: '/morning-skate',
    image: '/morning-skate-logo.png',
  },
  {
    date: '2026-09-28',
    title: 'Villani Sports Group Expands Partnerships Across Canadian Hockey',
    summary: 'VSG continues to grow its platform of leagues and associations with centralized, sponsor-ready programs.',
    source: 'Sample Publication',
    href: 'https://example.com/article-two',
  },
  {
    date: '2026-09-05',
    title: 'Why Aggregated Sponsorship Is Reshaping Minor Hockey',
    summary: 'A look at how brands are consolidating spend with fewer, higher-impact partners.',
    source: 'Sample Publication',
    href: 'https://example.com/article-three',
  },
  {
    date: '2026-08-14',
    title: 'VSG Launches Platform-Level Sponsorship Program for Junior Hockey',
    summary: 'A single, governed sponsorship platform gives brands category exclusivity across multiple leagues and teams.',
    source: 'Sample Publication',
    href: 'https://example.com/article-four',
  },
  // Example – replace with real items:
  // {
  //   date: '2026-10-01',
  //   title: 'Villani Sports Group announces partnership with ...',
  //   summary: 'Short description of the announcement.',
  //   source: 'VSG Announcement',
  //   href: 'https://example.com/article',
  // },
];
