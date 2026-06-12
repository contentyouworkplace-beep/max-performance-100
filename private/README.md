# Private product files

Drop the paid product files in this folder with EXACTLY these names:

| File | Delivered as |
|---|---|
| `Client_Scope_Protection_Playbook.pdf` | PDF version |
| `Client_Scope_Protection_Playbook.docx` | Editable Word version |
| `Client_Scope_Protection_Cheat_Sheet.docx` | Cheat sheet |

They are served only through `/api/download` with a valid signed token
(emailed to buyers after PayPal payment). They are never publicly
reachable via URL — unlike anything in `/public`.

⚠️ **IMPORTANT: make the GitHub repo PRIVATE before committing real
product files here.** The repo is currently public — anyone could read
the files straight from GitHub otherwise. (Vercel deploys private repos
without any extra cost.)
