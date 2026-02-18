# Partner & Referral Intake API

**Google Apps Script Backend**

## Overview

This API accepts **validated POST submissions** and inserts them into specific Google Sheets.
It also emits **webhooks on status changes** and **on internal errors**.

The system is intentionally defensive:

* Strict payload validation
* Server-controlled workflow fields
* Fail-safe error reporting

---

## Architecture Summary

| Component        | Responsibility                          |
| ---------------- | --------------------------------------- |
| `doPost`         | Public API entry for inserts            |
| Google Sheets    | Primary data store                      |
| `onEdit` trigger | Emits status-change webhooks            |
| Webhooks         | Email / downstream notification service |

---

## Base URL

This is a **Google Apps Script Web App URL**, for example:

```
https://script.google.com/macros/s/{SCRIPT_ID}/exec
```

> Environment-specific. No versioning yet — treat changes as breaking.

---

## Authentication

**None.**

This endpoint is expected to be:

* Behind obscurity (unguessable URL)
* Protected by validation and payload limits

> If exposed publicly at scale, add:
>
> * API key header
> * Origin allowlist
> * HMAC signature

---

## Content Type

```
Content-Type: application/json
```

---

## Payload Limits

| Constraint    | Value           |
| ------------- | --------------- |
| Max body size | **10 KB**       |
| Encoding      | UTF-8 JSON only |

Requests exceeding the limit are rejected.

---

## POST `/exec`

### Purpose

Insert a new row into a predefined Google Sheet.

---

## Request Body Schema

```json
{
  "table": "partner" | "referral",
  "data": {
    "<Column Header>": "<Value>"
  }
}
```

---

### `table`

| Value      | Target Sheet           |
| ---------- | ---------------------- |
| `partner`  | `Partner Applications` |
| `referral` | `Referral Submissions` |

Any other value → **hard rejection**.

---

### `data`

* Must be an **object**
* Keys must match **sheet column headers**
* Missing fields are auto-filled as empty strings

#### Client-forbidden fields

These are **server-controlled** and **must not** be sent:

| Field    | Behavior                         |
| -------- | -------------------------------- |
| `Time`   | Auto-set to submission timestamp |
| `Status` | Auto-set to `"Pending"`          |

If provided → request fails.

---

### Partnership Type Validation

If the column `Partnership Type` exists and is supplied:

**Allowed values only:**

```
Strategic
Referral
```

Anything else → request fails.

---

## Example Request

```http
POST /exec
Content-Type: application/json
```

```json
{
  "table": "partner",
  "data": {
    "Company Name": "Acme Corp",
    "Contact Name": "Jane Doe",
    "Email": "jane@acme.com",
    "Partnership Type": "Strategic"
  }
}
```

---

## Insert Behavior

* Row order is derived from **sheet headers**
* Headers define the schema
* New columns added to the sheet are automatically supported
* No schema duplication in code

---

## Success Response

```json
{
  "success": true
}
```

Always HTTP **200 OK**.

---

## Failure Handling (Important)

This API is **designed to never expose internal errors to clients**.

### What actually happens on failure

1. Insert fails **or** validation fails
2. Error is sent to the **error webhook**
3. Client receives **200 OK**

```json
{
  "success": true,
  "note": "Sent error email, database operation failed"
}
```

### Only time the API hard-fails

If **both** fail:

* Database insert
* Error webhook delivery

Then the script throws and Google returns a 500.

---

## Error Webhook

### Triggered When

* Validation fails
* Sheet lookup fails
* Append fails
* Runtime exceptions

### Destination

```
POST https://mergexemailserver.netlify.app/api
```

### Payload

```json
{
  "phase": "INSERT" | "STATUS_CHANGE",
  "error": {
    "message": "Error message",
    "stack": "Stack trace or null"
  },
  "request": {
    "rawBody": "...",
    "parsedPayload": { ... }
  },
  "timestamp": "ISO-8601"
}
```

---

## Status Change Webhook

### Trigger

Automatically fired when:

* A **Status** cell is edited
* Value actually changes
* Not header row
* Sheet is monitored

### Watched Sheets

* `Partner Applications`
* `Referral Submissions`

---

### Payload

```json
{
  "sheet": "Partner Applications",
  "row": 7,
  "data": {
    "Time": "...",
    "Company Name": "...",
    "Status": "Approved",
    "...": "..."
  }
}
```

This is a **full row snapshot**, not a diff.

---

## Status Field Rules

* Status column must be named **exactly** `Status`
* Any manual edit triggers the webhook
* No debounce — rapid edits will emit multiple events

---

## Guarantees

* No partial writes
* No silent validation bypass
* Headers define schema (source of truth)
* Workflow fields are server-controlled
* Webhook failures do **not** block sheet writes

---

## Non-Guarantees (By Design)

* No authentication
* No idempotency
* No retries
* No ordering guarantees across concurrent writes

---

## Recommended Client Practices

* Treat **200 OK** as “request accepted”, not “insert succeeded”
* Validate inputs client-side to avoid silent failures
* Do not rely on response for business logic
* Use webhook notifications for workflow state

---

## Operational Notes

* Sheet renames **will break the API**
* Column header changes are safe
* Removing `Status` disables status webhooks
* Payloads >10KB are rejected immediately