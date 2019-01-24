---
layout: default
title: Overview
---
# Auroras.live v2 API Overview

Version 2 of the Auroras.live API is completely re-written from the ground up to be faster and more flexible, with new data and features not found in the previous version.

Data is now broken up into individual modules. Previous versions grouped `bz`, `speed` and `density` into an `ace` group, but in v2 these are separated into `bz`, `speed` and `density` group respectively

## Accessing the API

The API can be accessed a number of ways:

 * Via a JSON POST request to a single endpoint.
   * This can be used to combine multiple calls into a single call
 * Via POST or GET calls to individual endpoints
   * This can be used for simpler calls (e.g. a simple `file_get_contents` call in PHP)

All calls for a module, whether it's via an individual endpoint, or the 'all' endpoint must follow:

```json
{
  "module_name": {
    "parameter1": "true",
    "parameter2": 123
  }
}
```
