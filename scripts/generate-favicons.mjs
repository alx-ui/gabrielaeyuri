import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const svgContent = fs.readFileSync('public/favicon.svg', 'utf8');

// HTML template with transparent background and SVG rendered at target size
function createHtml(size) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: transparent; width: ${size}px; height: ${size}px; overflow: hidden; display: flex; align-items: center; justify-content: center; }
    svg { width: ${size}px; height: ${size}px; }
  </style>
</head>
<body>
  ${svgContent}
</body>
</html>`;
}

// Generate PNG for a given size using Edge headless
function generatePng(size, outputPath) {
  const tempHtml = `temp-favicon-${size}.html`;
  fs.writeFileSync(tempHtml, createHtml(size));
  const absTemp = path.resolve(tempHtml);
  const absOut = path.resolve(outputPath);

  try {
    execSync(`"${edgePath}" --headless=new --disable-gpu --force-device-scale-factor=1 --window-size=${size},${size} --default-background-color=00000000 --screenshot="${absOut}" "file://${absTemp.replace(/\\/g, '/')}"`, {
      stdio: 'pipe'
    });
  } finally {
    if (fs.existsSync(tempHtml)) {
      fs.unlinkSync(tempHtml);
    }
  }
}

// Minimal standard ICO generator from PNG buffers
function createIco(pngBuffers) {
  // ICO Header: 6 bytes
  // 0-1: Reserved (0)
  // 2-3: Image type (1 for ICO)
  // 4-5: Number of images
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngBuffers.length, 4);

  // Each directory entry is 16 bytes
  const dirEntrySize = 16;
  const dirEntries = [];
  let currentOffset = 6 + (pngBuffers.length * dirEntrySize);

  for (const { width, height, buffer } of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(width >= 256 ? 0 : width, 0);
    entry.writeUInt8(height >= 256 ? 0 : height, 1);
    entry.writeUInt8(0, 2); // color palette (0 if >= 8bpp)
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // size of image data
    entry.writeUInt32LE(currentOffset, 12); // offset of image data
    dirEntries.push(entry);
    currentOffset += buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers.map(p => p.buffer)]);
}

console.log('Generating PNG favicons...');
generatePng(32, 'public/favicon-32x32.png');
generatePng(16, 'public/favicon-16x16.png');
generatePng(180, 'public/apple-touch-icon.png');
generatePng(192, 'public/android-chrome-192x192.png');

console.log('Generating ICO favicon...');
const buf16 = fs.readFileSync('public/favicon-16x16.png');
const buf32 = fs.readFileSync('public/favicon-32x32.png');
const icoBuf = createIco([
  { width: 16, height: 16, buffer: buf16 },
  { width: 32, height: 32, buffer: buf32 }
]);

fs.writeFileSync('public/favicon.ico', icoBuf);
fs.writeFileSync('favicon.ico', icoBuf);
console.log('Favicons generated successfully!');
