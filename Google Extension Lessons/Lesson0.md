# Lesson 0 — What a Chrome extension REALLY is

A Chrome extension is <b>not one program.</b>

It is a <b>folder</b> that Chrome loads, containing:

- A manifest file (rules + permissions)

- Optional HTML pages

- Optional JavaScript files

- Optional CSS

That’s it.

There is no magic. Chrome just reads the folder.

## The ONE file that every extension MUST have

`manifest.json`

If this file is wrong, <b>nothing works.</b>

Think of `manifest.json` as:

> “Hey Chrome, here’s what my extension is allowed to do and where my code lives.”
