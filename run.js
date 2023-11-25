const { readFileSync, readdirSync, writeFileSync } = require("fs");

function buildContent() {
  const r = "./website/";
  let html = readFileSync(r + "html/index.html").toString();
  const css = readFileSync(r + "css/style.css").toString();
  for (const file of readdirSync(r + "js")) {
    const content = readFileSync(r + "js/" + file).toString();
    html = html.replaceAll(
      `<script src="../js/${file}"></script>`,
      `<script>${content}</script>`
    );
  }
  html += `<style>\n${css}</style>`;
  return html;
}

function implantString(data) {
  const fileDir = "./worker/src/index.ts";
  let workerCode = readFileSync(fileDir).toString();
  const matched = workerCode.match(/`(.*?);/g);
  const capturedString = matched ? matched[0].slice(1) : null;
  if (!capturedString)
    throw new Error("Could not find valid place to install code");
  workerCode = workerCode.replace(
    capturedString,
    `${Buffer.from(data).toString("base64")}\`;`
  );
  writeFileSync(fileDir, workerCode);
}

implantString(buildContent());
