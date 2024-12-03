(g => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = `https://maps.${c}apis.com/maps/api/js?` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a) })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) })({
  key: "AIzaSyAUfVoiLhHOaxmUpfrmuIfvKV8ivVZPu90",
  v: "weekly",
  // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
  // Add other bootstrap parameters as needed, using camel case.
});
 
 // Initialize and add the map
let map;

async function initMap() {
  // Request needed libraries.
  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");

  // Initialize the map
  const map = new Map(document.getElementById("map"), {
    zoom: 17,
    center: { lat: 40.72702, lng: -73.98307 },
    mapId: "4504f8b37365c3d0",
  });

  // Define tour stops with additional data
  const tourStops = [
    {
      position: { lat: 40.72490, lng: -73.99014 },
      title: "Anthology Film Archives",
      artist: "Jonas Mekas",
    },
    {
      position: { lat: 40.73129, lng: -73.98614 },
      title: "Peter Hujar's Loft",
      artist: "Peter Hujar",
    },
    {
      position: { lat: 40.72365, lng: -73.98740 },
      title: "Claes Oldenburg The Store",
      artist: "Claes Oldenburg",
    },
    {
      position: { lat: 40.72729, lng: -73.98895 },
      title: "La Mama",
      artist: "La Mama",
    },
  ];

  // Create a shared info window
  const infoWindow = new InfoWindow();

  // Create the markers
  tourStops.forEach(({ position, title, artist }, i) => {
    const pin = new PinElement({
      glyph: `${i + 1}`,
      scale: 1.5,
    });

    const marker = new AdvancedMarkerElement({
      position,
      map,
      title: `${i + 1}. ${title}`,
      content: pin.element,
      gmpClickable: true,
    });

    // Add click listener for the marker
    marker.addListener("click", () => {
      const infoContent = `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2 style="margin: 0;">${title}</h2>
          <p style="margin: 0;"><strong>Artist:</strong> ${artist}</p>
        </div>
      `;
      infoWindow.close();
      infoWindow.setContent(infoContent);
      infoWindow.open(map, marker);
    });
  });
}

initMap();