# GenAI Case Study Showcase

Public GitHub Pages site for selected GenAI consulting, PoC delivery, and applied AI engineering case studies.

Live site: <https://hwan96-ai.github.io/genai-case-study-showcase/>

This repository is intentionally simple: static HTML, one shared CSS file, and one small theme script. There is no build step, package install, backend, tracking script, CDN, web font, or runtime API call.

## What This Site Shows

- A compact portfolio landing page in `index.html`
- Detailed case pages under `cases/`
- Print-friendly pages for interview packets or PDF export
- Conservative public wording for role, evidence, limits, and outcomes

## Case Pages

| Page | Public scope |
| --- | --- |
| `cases/a02-tts.html` | Korean TTS evaluation criteria and benchmark work |
| `cases/a03-braille.html` | Sapie-Braille agent expansion |
| `cases/a04-cardfollow.html` | CardFollow preview deployment and delivery safeguards |
| `cases/a05-a06-aicc.html` | AICC chatbot-to-callbot PoC work with anonymized customer context |
| `cases/a07-sapie-reco.html` | Sapie Reco delivery lead work, with direct RAG/PoC contributions stated separately |
| `cases/a08-yeonsung.html` | Yeonsung University admissions chatbot backend and approved public service reference |

## Open Locally

Open `index.html` directly in a browser. All paths are relative, so the site works from `file://` as well as GitHub Pages.

The light/dark theme toggle is stored in local browser storage. Printing hides navigation controls and uses a clean light theme.

## Public Safety Notes

- The site uses only reviewed public-safe copy.
- Unapproved customer names, internal endpoints, raw logs, private evidence paths, credentials, and non-public operational details are intentionally excluded.
- A07 is described as delivery lead / PM work with direct RAG core, cold-user, and PoC chatbot contributions. It is not described as a solo implementation of the full recommendation engine.
- A08 references the approved public service and backend delivery work, but does not claim traffic, accuracy, consultation volume, revenue, or other unapproved operating metrics.
- Quantitative chips on case pages are design or benchmark facts only when public-safe; they are not expanded into business-impact claims without approval.

## External Links

External links are intentionally limited and open only when the reader clicks them:

- GitHub profile: <https://github.com/hwan96-ai>
- Korean TTS benchmark: <https://github.com/hwan96-ai/korean-tts-benchmark>
- Sapie Reco public news article: <https://www.newswire.co.kr/newsRead.php?no=1003424>
- Yeonsung University admissions chatbot: <https://yeonsung.sapie.ai/>
- CardFollow preview deployment: <https://cardfollow-preview-hwan.fly.dev/>

## Maintenance

Keep this repository static and dependency-free. When adding or editing a case, update the matching HTML page, check all links, and keep role/outcome wording conservative. New public claims should come from already-reviewed source material, not from memory or inference.
