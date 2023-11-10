# YouTube Bookmarks Chrome Extension

## Description

YouTube Bookmarks is a simple Chrome extension that allows you to bookmark your favorite moments in YouTube videos. It provides a convenient way to save timestamps and add descriptions for easy reference.

## 🚀 How It Works

### 1. Installation

- Make sure you have Google Chrome installed on your computer.

- Download or clone this repository to your local machine.

### 2. Load the Extension

- Open Google Chrome and go to **Manage Extensions**.

- Enable **Developer mode**.

- Click on **Load unpacked extension** and select the folder where you cloned or downloaded the extension files.

### 3. Bookmarking Videos

- When watching a YouTube video, a bookmark button <img src="assets/bookmark.png" alt="Bookmark Icon" width="22"> will appear in the video player controls.

- Click the bookmark button to save the current timestamp as a bookmark.

### 4. Viewing Bookmarks

- Click on the extension icon in the Chrome toolbar, or use the extension popup.

- The popup will display a list of bookmarks for the currently playing YouTube video.

### 5. Managing Bookmarks

- You can play a bookmark by clicking the play button <img src="assets/play.png" alt="Play Icon" width="22"> next to it.

- To delete a bookmark, click the delete button <img src="assets/delete.png" alt="Delete Icon" width="22"> next to it.

## 📂 File Structure

- **background.js**: Handles events when a YouTube tab is updated and sends messages to contentScript.js.

- **contentScript.js**: Manages the bookmarking functionality on the YouTube video page.

- **popup.html, popup.js**: Controls the extension popup that displays bookmarks.

- **utils.js**: Contains utility functions for interacting with Chrome tabs.

- **assets**: Folder containing images used by the extension.

- **manifest.json**: Configuration file for the Chrome extension.

## 🔒 Permissions

This extension requires the following permissions:

- `storage`: To store and retrieve bookmarks.

- `tabs`: To interact with the active tab and send messages.

## 🌐 Compatibility

The extension is designed to work on YouTube video pages.

## 🔄 Version

Current Version: 0.1.0

## 🛠️ Troubleshooting

If you encounter any issues or have suggestions for improvements, feel free to open an issue in the [GitHub repository](#link-to-your-github-repository).
