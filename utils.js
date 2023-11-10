export async function getActiveTabURL() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

export async function isYoutubePage() {
    const activeTap = await getActiveTabURL()
    const queryParameters = activeTap.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters)

    const currentVideo = urlParameters.get("v")

    if (!activeTap.url.includes("youtube.com/watch")) {
        console.log('Is not youtube page!');
        return false
    }

    if (!currentVideo) {
        console.log('Not current video in url');
        return false
    }

    return true
}
