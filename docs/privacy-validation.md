# Privacy validation record

- Surface: `showcase-pages`
- Rule version: `public-surface-privacy-2026-06-28.1`
- Approval snapshot date: `2026-06-28`
- Input scope: repository root `.`; text files with `.md`, `.html`, `.css`, `.js`, `.json`, `.jsonl`, `.txt`, `.yml`, `.yaml`; excludes `.git/` and `node_modules/`.
- Validator command:

```powershell
pwsh -NoProfile -File $env:PUBLIC_SURFACE_VALIDATOR -CandidateRoot . -SurfaceId showcase-pages -DenylistPath $env:CASE_BOUNDARY_DENYLIST -ApprovalManifestPath $env:PUBLIC_APPROVAL_MANIFEST -FailClosed
```

## Count-only result

```json
{
  "files_scanned": 11,
  "denylist_loaded": true,
  "denylist_token_count": 90,
  "approval_entries_in_scope": 21,
  "blocked_hits_total": 0,
  "counts": {
    "identifier_denylist": 0,
    "credential_assignment": 0,
    "key_material": 0,
    "email": 0,
    "local_user_path": 0,
    "local_drive_path": 0,
    "private_endpoint": 0,
    "approval_exception": 66,
    "approval_scope_violation": 0,
    "unapproved_github_url": 0,
    "unapproved_sapie_endpoint": 0
  },
  "passed": true
}
```
