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
        address: "31 2nd Avenue",
        description: "Opened in 1970 by Jonas Mekas, Jerome Hill, P. Adams Sitney, Peter Kubelka, and Stan Brakhage, Anthology in its original conception was a showcase for the Essential Cinema Repertory collection. An ambitious attempt to define the art of cinema by means of a selection of films which would screen continuously, the Essential Cinema collection was intended to encourage the study of the medium’s masterworks as works of art rather than disposable entertainment, making Anthology the first museum devoted to film as an art form. The project was never completed, but even in its unfinished state it represented an uncompromising critical overview of cinema’s history, and remains a crucial part of Anthology’s exhibition program.",
        image: "Project Directory/EVimages/anthology_image.jpg",
    },
    {
        position: { lat: 40.73112, lng: -73.98631 },
        title: "Peter Hujar's Loft",
        artist: "Peter Hujar",
        description: "",
        image: "",
    },
    {
        position: { lat: 40.72365, lng: -73.98740 },
        title: "Claes Oldenburg The Store",
        artist: "Claes Oldenburg",
        address: "107 East 2nd Street",
        description: "",
        image: "",
    },
    {
        position: { lat: 40.72664, lng: -73.99043 },
        title: "La Mama Experimental Theater",
        address: "66 East 4th Street", 
    },
    {
        position: { lat: 40.7271036, lng: -73.9873551 },
        title: "Paul Morrissey's Apartment",
        artist: "Paul Morrissey",
        address: "321 East 6th Street",
    },
    {
        position: { lat: 40.72604, lng: -73.98392 },
        title: "Pyramid Club",  
        address: "101 Avenue A", 
    },
    {
        position: { lat: 40.72923, lng: -73.98483 },
        title: "East Village Eye",   
        address: "159 1st Avenue",
    },
    {
        position: { lat: 40.72664, lng: -73.97788 },
        title: "Peace Eye Bookstore",
        address: "383 East 10th Street",
        description: "Opened by Ed Sanders in 1964, Peace Eye Bookstore was a second home to the Beats. It was frequented by poets, musicians, and activists. Sanders recalled: “The bookstore became pretty famous. It was the stopping off point for all visiting librarians and professors because I had a lot of well-known writers hanging out there—William Burroughs, Allen Ginsberg.”[1] The shop not only played host to writers but also sold “literary curiosities,” including pubic hair from sixteen poets, Ginsberg’s cold-cream jars, and hairs from his beard. The shop was raided by the police on January 2, 1966, under the pretense of responding to a burglary. Sanders was charged with selling lewd and obscene prints and literature, and although the case was dismissed, the confiscated items were never returned, and he was effectively forced out of business.",
       
    },
    {
        position: { lat: 40.72903, lng: -73.98632 },
        title: "St. Mark's Place",
       
    },
    {
        position: { lat: 40.72680, lng: -73.98178 },
        title: "Tompkins Square Park", 
    },
    {
        position: { lat: 40.72889, lng: -73.98497 },
        title: "The Living Theater",  
        address: "151 1st Avenue",
    },
    {
        position: { lat: 40.72851, lng: -73.99148 },
        title: "The Village Voice",
        address: "36 Cooper Square",
       
    },
    {
        position: { lat: 40.73222, lng: -73.98968 },
        title: "Tanager Gallery",
        address: "90 East 10th Street",
    },
    {
        position: { lat: 40.73098, lng: -73.98979 },
        title: "Willem de Kooning's Studio",   
        address: "88 East 10th Street",
    },
    {
        position: { lat: 40.73104, lng: -73.98976 },
        title: "Allen Ginsburg and Peter Orlovsky's Apartment",
        address: "408 East Tenth Street",
        description: "Peter Orlovsky found this apartment after his and Ginsberg’s home at 704 East Fifth Street was condemned. They lived here from 1965 to 1975, during which time Ginsberg began receiving increased international attention for his poetry and political activism— protesting the Vietnam War, fighting censorship, and advocating for the liberalization of drug laws. He wrote many poems in their apartment here, #4C, including Mugging, which referenced an incident in which Ginsberg was set upon by neighborhood kids who took his money and watch but left his valuable manuscripts.", 
    },
    {
        position: { lat: 40.72965, lng: -73.98167 },
        title: "Allen Ginsberg Studio",
        address: "437 East 12th Street",
    },
    {
        position: { lat: 40.72638, lng: -73.98995 },
        title: "Louis N. Jaffe Art Theater / Club 181 / Phoenix Theater",
        address: "82 East 4th Street",
        description: "The Louis N. Jaffe Art Theater, a former Yiddish theater, was the location of the Mafia-controlled Club 181 (1945-51), known for its lavish shows of “female impersonators” (a term used at the time) and “drag king” staff, and the pioneering Off-Broadway Phoenix Theater (1953-61)",
    },
    {
        position: { lat: 40.73149, lng: -73.99248 },
        title: "The Ninth Street Show",
        address: "60 East 9th Street",
        description: "Organized by the Artist’s Club and curated by Leo Castelli in 1951, the Ninth Street show was the first time the New York School shows together. It included 74 artists, including Willem de Kooning, Helen Frankenthaler, Philip Guston, Grace Hartigan, Hans Hofmann, Lee Krasner, and Jackson Pollock. ",   
    },
    {
        position: { lat: 40.72949, lng: -73.97951 },
        title: "David Wojnarowicz Studio",
        address: "529 East 13th Street", 
    },
    {
        position: { lat: 40.73043, lng: -73.98819 },
        title: "Diane Arbus Apartment",
        address: "120 East 10th Street", 
    },
    {
        position: { lat: 40.72851, lng: -73.98401 },
        title: "Fun Gallery",
        address: "254 East 10th Street", 
    },
    {
        position: { lat: 40.72812, lng: -73.98660 },
        title: "Joan Mitchell Studio",
        address: "60 St. Marks Place", 
    },
    {
        position: { lat: 40.73115, lng: -73.98998 },
        title: "Area Gallery",
        address: "82 East 10th Street", 
    },
    {
        position: { lat: 40.73081, lng: -73.98957 },
        title: "Phoenix Gallery",
        address: "40 3rd Avenue", 
    },
    {
        position: { lat: 40.73106, lng: -73.98933 },
        title: "March Gallery",
        address: "95 East 10th Street", 
    },
    {
        position: { lat: 40.73223, lng: -73.99161 },
        title: "Elaine de Kooning",
        address: "791 Broadway", 
    },
    {
        position: { lat: 40.73053, lng: -73.98799 },
        title: "Robert Gober",
        address: "119 East 10th Street", 
    },
];

  // Create a shared info window
  const infoWindow = new InfoWindow();

  // Create the markers
  tourStops.forEach(({ position, title, artist, description, image }, i) => {
    const pin = new PinElement({
  
    glyphColor: " #031070",
    background: " #0000ff",
    borderColor: " #031070",
    scale: .75,
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
          <button id="learn-more" style="margin-top: 10px; padding: 5px 10px; font-size: 14px; cursor: pointer;">
            Learn More
          </button>
        </div>
      `;
    //   infoWindow.close();
      infoWindow.setContent(infoContent);
      infoWindow.open(map, marker);

      google.maps.event.addListenerOnce(infoWindow, "domready", () => {
        document.getElementById("learn-more").addEventListener("click", () => {
          openModal(title, description, image);
        });
      });

      function openModal(title, description, image) {
        const modal = document.getElementById("modal");
        const overlay = document.getElementById("overlay");
      
        document.getElementById("modal-title").textContent = title;
        document.getElementById("modal-content").innerHTML = `
          <p>${description || "No description available."}</p>
          ${image ? `<img src="${image}" alt="${title}" style="max-width: 100%; height: auto; margin-top: 10px;">` : ""}
        `;
      
        modal.style.display = "block";
        overlay.style.display = "block";

        document.getElementById("close-modal").addEventListener("click", closeModal);

      }
      
      
      function closeModal() {
        const modal = document.getElementById("modal");
        const overlay = document.getElementById("overlay");

        // Hide the modal and overlay
        modal.style.display = "none";
        overlay.style.display = "none";

        // Remove event listener to prevent it from being added multiple times
        document.getElementById("close-modal").removeEventListener("click", closeModal);
      }
    });
  });
}

initMap();