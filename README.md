# Copy File Link Hotkey

A way to quickly copy the WikiLink of the active file to your clipboard using a hotkey.

## The Problem

In a standard workflow without this plugin, linking to a file usually requires you to navigate to the destination note, remember the filename, return to your original note, and type `[[` to search for it. This breaks flow when you are already looking at the note you want to reference.

## The Solution

This plugin allows you to instantly grab the `[[WikiLink]]` of your current active file via a hotkey, so you can paste it anywhere else immediately.

## Features

* **One-click/Hotkey Copy**: Adds a command to copy the current file's link in `[[Link]]` format.
* **Metadata Aware**: Uses Obsidian's internal logic to ensure the link text is formatted correctly according to your vault settings.

## Usage

1. Open the file you want to link to.
2. Run the command `Copy file link (wiki)` from the Command Palette (`Ctrl/Cmd + P`).
3. (Recommended) Assign a hotkey (e.g., `Ctrl + Shift + C`) to the command in settings.
4. Paste the link anywhere in your vault.

## Installation

### From source

1. Create a folder named `obsidian-copy-file-link` in your `.obsidian/plugins` directory.
2. Place `main.js`, `manifest.json`, and `styles.css` (if applicable) inside.
3. Reload Obsidian and enable the plugin in **Community Plugins**.

## Similar Functionality
- Similar plugins are: [Copy Block Link](https://github.com/mgmeyers/obsidian-copy-block-link)

## ♥️ Support This Project

If you find this little plugin useful, I'd truly appreciate your support. Please consider buying me a coffee on [Ko-fi](https://ko-fi.com/pamelawang_mwahacookie). Your contribution helps me keep making tools that make your creative life easier.
