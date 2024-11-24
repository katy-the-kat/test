document.getElementById('ssh-login').addEventListener('click', () => {
  const consoleOutput = document.getElementById('console');
  consoleOutput.value += '\n[INFO] Connecting to SSH...\n';
  consoleOutput.value += '[ERROR] SSH functionality is not supported in this demo.\n';
});

document.getElementById('vnc-console').addEventListener('click', () => {
  const consoleOutput = document.getElementById('console');
  consoleOutput.value += '\n[INFO] Connecting to VNC...\n';
  consoleOutput.value += '[ERROR] VNC functionality is not supported in this demo.\n';
});
