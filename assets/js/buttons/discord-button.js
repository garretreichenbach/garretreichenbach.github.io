function copyDiscordToClipboard() {
    var button = document.getElementById("discord-button");
    button.focus();
    button.select();
    document.execCommand("copy");
}
