const cpuRankings = {
  "N/A": 0,
  "core ultra 9 285k": 10,
  "core i9-14900k": 10,
  "ryzen 9 9950x": 10,
  "core i9-14900": 9.5,
  "core i9-13900k": 9.5,
  "ryzen 9 9900x": 9.5,
  "ryzen 9 5950x": 9.5,
  "ryzen 9 7950x": 9.5,
  "core ultra 7 265k": 9,
  "core i9-13900": 9,
  "core i9-12900k": 9,
  "ryzen 9 5900x": 9,
  "core i7-14700k": 9,
  "ryzen 7 9700x": 9,
  "core i7-14700": 8.5,
  "core i7-13700k": 8.5,
  "core i9-12900": 8.5,
  "ryzen 9 3950x": 8.5,
  "core i9-11900k": 8.5,
  "ryzen 7 8700g": 8.5,
  "core i7-13700": 8,
  "core i7-12700k": 8,
  "ryzen 9 3900x": 8,
  "core i9-11900": 8,
  "core i9-10900k": 8,
  "ryzen 7 7700x": 8,
  "core i7-11700k": 7.5,
  "core i7-12700": 7.5,
  "core i9-10900": 7.5,
  "core i9-9900k": 7.5,
  "ryzen 7 5800x": 7.5,
  "ryzen 7 7700": 7.5,
  "core i7-11700": 7,
  "core i7-10700k": 7,
  "ryzen 7 5700g": 7,
  "ryzen 7 3800x": 7,
  "core ultra 5 245k": 7,
  "core i7-10700f": 6.5,
  "core i7-10700": 6.5,
  "core i5-14600k": 7,
  "core i5-14600": 6.5,
  "core i5-13600k": 6.5,
  "ryzen 5 9600x": 7,
  "ryzen 5 8600g": 6.5,
  "ryzen 5 7600x": 6.5,
  "core i5-13600": 6,
  "core i5-12600k": 6,
  "core i5-14500": 6,
  "core i7-9700k": 6,
  "core i7-9700f": 6,
  "core i7-9700": 6,
  "core i7-8700k": 6,
  "core i5-13500": 5.5,
  "core i5-12600": 5.5,
  "core i5-11600k": 5.5,
  "ryzen 5 7500f": 5.5,
  "ryzen 5 5600g": 5.5,
  "core i7-8700": 5.5,
  "core i7-7700k": 5.5,
  "core i5-11600": 5,
  "core i5-11500": 5,
  "core i5-12500": 5,
  "ryzen 5 7400": 5,
  "ryzen 5 5600x": 6,
  "ryzen 5 5500": 5,
  "ryzen 5 3600x": 5,
  "ryzen 7 2700x": 6,
  "core i7-7700": 5,
  "core i7-6700k": 5,
  "core i5-10600k": 5,
  "core i5-10600kf": 5,
  "core i5-10500": 4.5,
  "core i5-10600": 4.5,
  "core i5-9600k": 4.5,
  "core i5-9600kf": 4.5,
  "ryzen 5 3600": 4.5,
  "ryzen 5 3500x": 4.5,
  "core i5-9500": 3.5,
  "core i5-9400f": 3.5,
  "core i5-9400": 3.5,
  "core i5-8600k": 3.5,
  "core i5-8600": 3,
  "core i5-8500": 3,
  "core i5-8400": 3,
  "core i7-6700": 4.5,
  "core i7-4790k": 4.5,
  "core i7-4790": 4,
  "core i7-3770k": 4,
  "core i7-3770": 3.5,
  "core i7-2700k": 3.5,
  "core i7-2600k": 3.5,
  "core i7-2600": 3,
  "core i5-7600k": 2.5,
  "core i5-7600": 2.5,
  "core i5-7500": 2.5,
  "core i5-7400": 2,
  "core i5-6600k": 2,
  "core i5-6600": 1.5,
  "core i5-6500": 1.5,
  "core i5-6400": 1.5,
  "ryzen 7 2700": 5.5,
  "ryzen 7 3700x": 6.5,
  "ryzen 7 2700x": 6,
  "ryzen 7 1800x": 5,
  "ryzen 7 1700x": 4.5,
  "ryzen 7 1700": 4.5,
  "ryzen 5 2600x": 4,
  "ryzen 5 2600": 3.5,
  "ryzen 5 2500x": 3.5,
  "ryzen 5 2400g": 3.5,
  "ryzen 5 1600x": 3,
  "ryzen 5 1600": 2.5,
  "ryzen 5 1500x": 2,
  "ryzen 5 1400": 2,
  "core i3-14100": 4,
  "core i3-13100": 3.5,
  "core i3-12300": 3,
  "core i3-12100": 3,
  "core i3-11320": 2.5,
  "core i3-11100": 2.5,
  "core i3-10320": 2,
  "core i3-10100": 2,
  "core i3-9350k": 1.5,
  "core i3-9100f": 1.5,
  "core i3-9100": 1.5,
  "core i3-8350k": 1,
  "core i3-8300": 1,
  "core i3-8100": 1,
  "core i3-7350k": 0.5,
  "core i3-7300": 0.5,
  "core i3-7100": 0.5,
  "core i3-6320": 0.5,
  "core i3-6300": 0.5,
  "core i3-6100": 0.5,
  "ryzen 3 7300": 3,
  "ryzen 3 7100": 2.5,
  "ryzen 3 5300g": 2,
  "ryzen 3 5100": 2,
  "ryzen 3 3300x": 1.5,
  "ryzen 3 3200g": 1,
  "ryzen 3 2300x": 1,
  "ryzen 3 2200g": 0.5,
  "ryzen 3 1300x": 0.5,
  "ryzen 3 1200": 0.5,
  "core i7-5820k": 5,
  "core i7-5960x": 6,
  "core i7-4770k": 5,
  "core i5-4690k": 4.5,
  "core i3-6100t": 0.5,
  "amd fx-8350": 3.5,
  "amd fx-8370": 3.5,
  "amd fx-8320": 3,
  "amd fx-6300": 2.5,
  "amd athlon x4 860k": 1.5,
  "amd athlon 3000g": 2,
  "ryzen threadripper 3990x": 9.5,
  "ryzen threadripper 3970x": 9.5,
  "ryzen threadripper 3960x": 9,
  "intel xeon e5-2699 v4": 7,
  "intel xeon e5-2680 v3": 6.5,
  "core i9-10980xe": 8,
  "core i9-10940x": 7.5,
  "core i9-10920x": 7.5,
  "core i9-9980xe": 7.5,
  "core i9-7960x": 7,
  "core i9-7940x": 6.5,
  "core i9-7920x": 6.5,
  "core i9-7900x": 6.5,
  "intel xeon e5-2670": 6,
  "intel xeon e5-2667 v3": 6.5,
  "intel xeon e5-2697 v3": 6.5,
  "intel xeon gold 6248": 8,
  "intel xeon gold 6230": 7.5,
  "intel xeon platinum 8280": 8.5,
  "ryzen threadripper 2950x": 8,
  "ryzen threadripper 2920x": 7.5,
  "ryzen threadripper 2970wx": 8.5,
  "ryzen threadripper 2990wx": 9,
  "ryzen 9 7900x": 9,
  "ryzen 7 7800x3d": 8.5,
  "ryzen 5 7600": 6,
  "ryzen 5 7500": 5.5,
  "ryzen 7 5800": 7,
  "ryzen 5 5600": 5.5,
  "ryzen 5 5500x": 5,
  "ryzen 5 5600g": 5.5,
  "ryzen 3 5300g": 2,
  "ryzen 3 3200g": 1,
  "ryzen 5 2400g": 3.5,
  "pentium gold g6600": 2,
  "pentium gold g6500": 1.5,
  "pentium gold g6400": 1.5,
  "celeron g5900": 1,
  "celeron g5920": 1,
  "celeron g4930": 0.5,
  "core i7-1185g7": 6,
  "core i5-1135g7": 5,
  "core i3-1115g4": 3.5,
  "ryzen 7 5800u": 6,
  "ryzen 5 5600u": 5,
  "ryzen 3 5300u": 3,
  
};

const gpuRankings = {
  "N/A": 0,
  "rtx 5090": 110,
  "rtx 4090": 100,
  "rtx 4080": 90,
  "rtx 4070 ti": 80,
  "rtx 4070": 75,
  "rtx 4060 ti": 70,
  "rtx 4060": 65,
  "rtx 3090 ti": 95,
  "rtx 3090": 90,
  "rtx 3080 ti": 85,
  "rtx 3080": 80,
  "rtx 3070 ti": 75,
  "rtx 3070": 70,
  "rtx 3060 ti": 65,
  "rtx 3060": 60,
  "rtx 3050": 55,
  "rtx 2080 ti": 65,
  "rtx 2080": 60,
  "rtx 2070 super": 55,
  "rtx 2070": 50,
  "rtx 2060 super": 45,
  "rtx 2060": 40,
  "gtx 1660 ti": 60,
  "gtx 1660 super": 58,
  "gtx 1660": 55,
  "gtx 1650 super": 50,
  "gtx 1650": 45,
  "gtx 1080 ti": 50,
  "gtx 1080": 45,
  "gtx 1070 ti": 40,
  "gtx 1070": 35,
  "gtx 1060 6gb": 30,
  "gtx 1060 3gb": 28,
  "gtx 1050 ti": 20,
  "gtx 1050": 18,
  "gtx 980 ti": 50,
  "gtx 980": 45,
  "gtx 970": 40,
  "gtx 960": 30,
  "gtx 950": 25,
  "gtx 780 ti": 35,
  "gtx 780": 33,
  "gtx 770": 30,
  "gtx 760": 28,
  "gtx 750 ti": 25,
  "gtx 750": 23,
  "gtx 660": 15,
  "rx 7900 xtx": 100,
  "rx 7900 xt": 90,
  "rx 7800 xt": 80,
  "rx 7700 xt": 65,
  "rx 7600 xt": 55,
  "rx 7600": 50,
  "rx 6950 xt": 95,
  "rx 6900 xt": 90,
  "rx 6800 xt": 85,
  "rx 6800": 80,
  "rx 6750 xt": 70,
  "rx 6700 xt": 70,
  "rx 6650 xt": 65,
  "rx 6600 xt": 60,
  "rx 6600": 55,
  "rx 6500 xt": 35,
  "rx 6400": 25,
  "rx 5700 xt": 65,
  "rx 5700": 60,
  "rx 5600 xt": 50,
  "rx 5500 xt": 45,
  "rx 5500": 30,
  "rx 590": 40,
  "rx 580": 38,
  "rx 570": 35,
  "rx 560": 28,
  "rx 550": 20,
  "r9 390x": 35,
  "r9 390": 33,
  "r9 380x": 30,
  "r9 380": 28,
  "r9 370": 25,
  "r9 360": 22,
  "gt 1030": 10,
  "gt 710": 2,
  "gtx titan x": 42,
  "gtx titan": 38,
  "gtx 580": 20,
  "gtx 480": 18,
  "gtx 285": 12,
  "gtx 280": 10,
  "gt 730": 8,
  "gt 640": 5,
  "mx150": 4,
  "rx vega 64": 48,
  "rx vega 56": 45,
  "r9 fury x": 46,
  "r9 fury": 44,
  "r9 295x2": 50,
  "r9 290x": 40,
  "hd 7970": 30,
  "hd 7870": 25,
  "r7 250": 15,
  "r5 240": 10


};

const vramRankings = {
  "N/A": 0,
  "2GB": 2,
  "4GB": 4,
  "6GB": 6,
  "8GB": 8,
  "10GB": 10,
  "12GB": 12,
  "16GB": 16,
  "24GB": 24,
  "48GB": 48
};

const windowsRankings = {
  "N/A": 0,
  "windows 11": 11,
  "windows 10": 10,
  "windows 8": 8,
  "windows 7": 7
};



// Populate dropdowns with options
function populateDropdown(id, options) {
  const select = document.getElementById(id);
  // Clear existing options before populating
  select.innerHTML = "";
  for (const option of options) {
    const opt = document.createElement("option");
    // Use original option text as value but normalized to lowercase trimmed for lookup
    opt.value = option.toLowerCase().trim();
    opt.textContent = option;
    select.appendChild(opt);
  }
}

// Generic function to populate dropdowns
// Accepts an optionNormalizer callback to process option values if needed
function populateDropdown(id, options, optionNormalizer = (opt) => opt) {
  const select = document.getElementById(id);
  select.innerHTML = ""; // Clear existing options
  for (const option of options) {
    const opt = document.createElement("option");
    opt.value = optionNormalizer(option);
    opt.textContent = option;
    select.appendChild(opt);
  }
}

function populateAllDropdowns() {
  // CPU/GPU/Windows normalized options for lookups
  const cpuOptions = Object.keys(cpuRankings).map(key => key.toUpperCase());
  const gpuOptions = Object.keys(gpuRankings).map(key => key.toUpperCase());
  const vramOptions = Object.keys(vramRankings); // keep as is for VRAM
  const windowsOptions = Object.keys(windowsRankings).map(w => w.charAt(0).toUpperCase() + w.slice(1));

  ["cpuInput", "cpuGame"].forEach(id => populateDropdown(id, cpuOptions, opt => opt.toLowerCase()));
  ["gpuInput", "gpuGame"].forEach(id => populateDropdown(id, gpuOptions, opt => opt.toLowerCase()));
  ["vramSystem", "vramGame"].forEach(id => populateDropdown(id, vramOptions));
  ["windowsSystem", "windowsGame"].forEach(id => populateDropdown(id, windowsOptions, opt => opt.toLowerCase()));
}

function normalize(key) {
  return key.toLowerCase().trim();
}

function normalizeVram(value) {
  return value.trim();
}

function parseStorage(str) {
  if (!str) return 0;
  const s = str.toLowerCase().trim();
  if (s.endsWith("tb")) return parseFloat(s) * 1024;
  if (s.endsWith("gb")) return parseFloat(s);
  return parseFloat(s) || 0;
}

function getStatusHtml(sysRank, gameRank, sysVal, noSelectMessage = "No selection") {
  if (sysRank === 0 || sysVal === 0 || sysVal === "" || sysVal === null || sysVal === undefined) {
    return `<span class="warning">${noSelectMessage}</span>`;
  }
  return sysRank >= gameRank ? '<span class="pass">Meets</span>' : '<span class="fail">Below</span>';
}

function compareSpecs(event) {
  event.preventDefault();

  const cpuSys = document.getElementById("cpuInput").value;
  const gpuSys = document.getElementById("gpuInput").value;
  const vramSys = document.getElementById("vramSystem").value;
  const winSys = document.getElementById("windowsSystem").value;

  const cpuGame = document.getElementById("cpuGame").value;
  const gpuGame = document.getElementById("gpuGame").value;
  const vramGame = document.getElementById("vramGame").value;
  const winGame = document.getElementById("windowsGame").value;

  const storageSysStr = document.getElementById("storageSystem").value;
  const storageGameStr = document.getElementById("storageGame").value;

  const cpuSysRank = cpuRankings[normalize(cpuSys)] ?? 0;
  const gpuSysRank = gpuRankings[normalize(gpuSys)] ?? 0;
  const vramSysRank = vramRankings[normalizeVram(vramSys)] ?? 0;
  const winSysRank = windowsRankings[normalize(winSys)] ?? 0;

  const cpuGameRank = cpuRankings[normalize(cpuGame)] ?? 0;
  const gpuGameRank = gpuRankings[normalize(gpuGame)] ?? 0;
  const vramGameRank = vramRankings[normalizeVram(vramGame)] ?? 0;
  const winGameRank = windowsRankings[normalize(winGame)] ?? 0;

  const storageSys = parseStorage(storageSysStr);
  const storageGame = parseStorage(storageGameStr);

  const resultHTML = `
    <table>
      <thead>
        <tr>
          <th>Component</th>
          <th>System Specs</th>
          <th>Game Specs</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>CPU</td>
          <td>${cpuSys} (Score: ${cpuSysRank.toFixed(1)})</td>
          <td>${cpuGame} (Score: ${cpuGameRank.toFixed(1)})</td>
          <td>${getStatusHtml(cpuSysRank, cpuGameRank, cpuSysRank, "No CPU selected")}</td>
        </tr>
        <tr>
          <td>GPU</td>
          <td>${gpuSys} (Score: ${gpuSysRank})</td>
          <td>${gpuGame} (Score: ${gpuGameRank})</td>
          <td>${getStatusHtml(gpuSysRank, gpuGameRank, gpuSysRank, "No GPU selected")}</td>
        </tr>
        <tr>
          <td>Dedicated VRAM (GB)</td>
          <td>${vramSys}</td>
          <td>${vramGame}</td>
          <td>${getStatusHtml(vramSysRank, vramGameRank, vramSysRank, "No VRAM selected")}</td>
        </tr>
        <tr>
          <td>Windows Version</td>
          <td>${winSys}</td>
          <td>${winGame}</td>
          <td>${getStatusHtml(winSysRank, winGameRank, winSysRank, "No Windows version selected")}</td>
        </tr>
        <tr>
          <td>Storage</td>
          <td>${storageSysStr}</td>
          <td>${storageGameStr}</td>
          <td>${storageSys === 0 
            ? '<span class="warning">No Storage selected</span>'
            : (storageSys >= storageGame 
                ? '<span class="pass">Meets</span>' 
                : '<span class="fail">Below</span>')}</td>
        </tr>
      </tbody>
    </table>
  `;

  let messages = [];

  function checkAndMessage(sysRank, gameRank, label, noSelectMsg) {
    if (sysRank === 0) return `⚠️ No ${label} selected for your system.`;
    return sysRank >= gameRank 
      ? `✅ Your ${label} meets or exceeds the game requirement.` 
      : `❌ Your ${label} does NOT meet the game requirement.`;
  }

  messages.push(checkAndMessage(cpuSysRank, cpuGameRank, "CPU", "CPU"));
  messages.push(checkAndMessage(gpuSysRank, gpuGameRank, "GPU", "GPU"));
  messages.push(checkAndMessage(vramSysRank, vramGameRank, "Dedicated VRAM", "VRAM"));
  messages.push(checkAndMessage(winSysRank, winGameRank, "Windows version", "Windows version"));

  if (storageSys === 0) {
    messages.push("⚠️ No storage value entered for your system.");
  } else if (storageSys >= storageGame) {
    messages.push("✅ Your Storage meets or exceeds the game requirement.");
  } else {
    messages.push("❌ Your Storage does NOT meet the game requirement.");
  }

  document.getElementById("result").innerHTML = resultHTML + "<br><br>" + messages.join("<br>");
}

document.addEventListener("DOMContentLoaded", () => {
  populateAllDropdowns();
  document.getElementById("specForm").addEventListener("submit", compareSpecs);
});
