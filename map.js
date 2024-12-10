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
        image: "Project Directory/EVimages/JonasMekas.jpg",
    },
    {
        position: { lat: 40.73112, lng: -73.98631 },
        title: "Peter Hujar's Loft",
        artist: "Peter Hujar",
        address: "189 2nd Avenue",
        description: "See Glossary",
        image: "Project Directory/EVimages/PeterHujar.jpg",
      
    },
    {
        position: { lat: 40.72365, lng: -73.98740 },
        title: "Claes Oldenburg The Store",
        artist: "Claes Oldenburg",
        address: "107 East 2nd Street",
        description: "In the winter of 1961, Oldenburg circumvented the practice of selling art through a gallery by opening a storefront on the Lower East Side of Manhattan and selling his work there. Among the unorthodox, eclectic offerings were sculptures of undergarments and slices of blueberry pie and other pastries made out of painted plaster. To advertise this bold endeavor, Oldenburg created business cards and stationery as well as posters such as the one below. Modeled after a poster the artist saw in a Puerto Rican neighborhood of New York, it retains a few Spanish words. A milestone of Pop art, The Store heralded Oldenburg’s interest in the line between art and commodity and the role of the artist in self-promotion.",
        image: "Project Directory/EVimages/TheStore.jpg",
    },
    {
        position: { lat: 40.72664, lng: -73.99043 },
        title: "La Mama Experimental Theater",
        address: "66 East 4th Street", 
        artist: "See Glossary",
        description: "See Glossary",
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
        artist: "See Glossary",
        description: "After opening in 1979, the Pyramid Club helped define the East Village drag queen, gay, post-punk and no wave art and music scenes of the 1980s. The nightclub became a hangout for a new group of drag performers such as Lypsinka, Lady Bunny, and RuPaul, whose first New York City show was at the Pyramid Club in 1982.",
        image: "Project Directory/EVimages/PyramidClub.jpg",

    },
    {
        position: { lat: 40.72923, lng: -73.98483 },
        title: "East Village Eye",   
        address: "159 1st Avenue",
        artist: "See Glossary",
        description: "Founded by Leonard Abrams in 1979, this small, monthly magazine published out of a basement storefront. Abrams set out to 'create a community in print' at a moment when New York City neared bankruptcy. In its eight-year run, the publication commissioned artists to create centerfolds for each issue and documented developments in fashion, music, politics, and the art scene—including the early careers of the artist Jean-Michel Basquiat and the hip hop pioneer Fab Five Freddy. The magazine covered the rise of HIV/AIDS, the stores and bars that shaped the culture of the neighborhood, and eventually, the gentrification of downtown Manhattan. The New York Public Library acquired the archive of the East Village Eye and is now the only public institution to have a complete run of all 72 issues.",
        image: "Project Directory/EVimages/EastVillageEye.jpg",
    },
    {
        position: { lat: 40.72664, lng: -73.97788 },
        title: "Peace Eye Bookstore",
        address: "383 East 10th Street",
        arists: "See Glossary",
        description: "Opened by Ed Sanders in 1964, Peace Eye Bookstore was a second home to the Beats. It was frequented by poets, musicians, and activists. Sanders recalled: “The bookstore became pretty famous. It was the stopping off point for all visiting librarians and professors because I had a lot of well-known writers hanging out there—William Burroughs, Allen Ginsberg.”[1] The shop not only played host to writers but also sold “literary curiosities,” including pubic hair from sixteen poets, Ginsberg’s cold-cream jars, and hairs from his beard. The shop was raided by the police on January 2, 1966, under the pretense of responding to a burglary. Sanders was charged with selling lewd and obscene prints and literature, and although the case was dismissed, the confiscated items were never returned, and he was effectively forced out of business.",
        image: "Project Directory/EVimages/PeaceEye.jpg",
    },
    {
        position: { lat: 40.72903, lng: -73.98632 },
        title: "St. Marks Place",
        artist: "See Glossary",
        address: "St. Marks Place",
        description: "See Glossary",
       
    },
    {
        position: { lat: 40.72680, lng: -73.98178 },
        title: "Tompkins Square Park", 
        artist: "See Glossary",
        address: "Tompkins Square Park",
        description: "See Glossary",
    },
    {
        position: { lat: 40.72889, lng: -73.98497 },
        title: "The Living Theater",  
        address: "151 1st Avenue",
        artist: "See Glossary",
        description: " 'We called it The Living Theatre, because we wanted it to change with time. People say, Yeah—the world is in lousy shape, and there are wars and horrors going on all the time. But what am I gonna do? Who am I? What can I do? And to give people the sense that there is something they can do, that they are empowered. That begins in the theatre.' —Judith Malina",
    },
    {
        position: { lat: 40.72851, lng: -73.99148 },
        title: "The Village Voice",
        address: "36 Cooper Square",
        artist: "See Glossary",
        description: "The Village Voice is an American news and culture publication, known for being the country's first alternative newsweekly. Founded in 1955 by Dan Wolf, Ed Fancher, John Wilcock, and Norman Mailer, The Village Voice began as a platform for the creative community of New York City. It ceased publication in 2017, although its online archives remain accessible. After an ownership change, The Village Voice reappeared in print as a quarterly in April 2021. The Village Voice has received three Pulitzer Prizes, the National Press Foundation Award, and the George Polk Award. It has published the work of a variety of writers and artists, including writer Ezra Pound, cartoonist Lynda Barry, artist Greg Tate, music critic Robert Christgau, and film critics Andrew Sarris, Jonas Mekas, and J. Hoberman.",
        image: "Project Directory/EVimages/TheVillageVoice.jpg",
    },
    {
        position: { lat: 40.73222, lng: -73.98968 },
        title: "Tanager Gallery",
        address: "90 East 10th Street",
        artist: "Louise Bourgeois, Alex Katz, Mary Abbott, Sidney Geist",
        description: "The Tanager Gallery operated from 1952-1962 in New York City. The gallery was one of the first artist cooperative galleries formed on 10th Street in Manhattan to provide an alternative to the larger upscale galleries of Madison Avenue. In 1952, the artist cooperative Tanager Gallery opened at 90 East 10th Street in Manhattan. Co-founders included Charles Cajori, Lois Dodd, Angelo Ippolito, William King, and Fred Mitchell. The Tanager offered open spaces for young artists to show their work and to sell art on their own terms. Membership at the Tanager included American Realists Alex Katz and Philip Pearlstein, and the Pop art/found-art collagist Tom Wesselmann. Later artists to join the cooperatiive included Mary Abbott, Perle Fine, Sidney Geist, Joseph Groell, Nanno de Groot, Sally Hazelet, Ben Isquith, Lester Johnson, Nicholas Marsicano, George Earl Ortman, Charlotte Park, Philip Pearlstein, Frank Stout, Raymond Rocklin, and Sal Sirugo. From 1952 to 1962, the Tanager Gallery exhibited works from about 250 artists.",
    },
    {
        position: { lat: 40.73098, lng: -73.98979 },
        title: "Willem de Kooning's Studio",   
        address: "88 East 10th Street",
        artist: "Willem de Kooning",
        description: "On April 5, 1959, Village Voice photographer Fred McDarrah snapped this iconic photo of Willem de Kooning on the stoop of 88 East 10th Street, his home and studio from 1952 to 1959. De Kooning lived and worked here during some of his most productive years as an artist, and when he and his contemporaries on East 10th Street were having the most profound impact upon New York City and the broader art world.",
        image: "Project Directory/EVimages/deKooning.jpg",
      },
    {
        position: { lat: 40.73104, lng: -73.98976 },
        title: "Allen Ginsburg and Peter Orlovsky's Apartment",
        address: "408 East Tenth Street",
        description: "Peter Orlovsky found this apartment after his and Ginsberg’s home at 704 East Fifth Street was condemned. They lived here from 1965 to 1975, during which time Ginsberg began receiving increased international attention for his poetry and political activism— protesting the Vietnam War, fighting censorship, and advocating for the liberalization of drug laws. He wrote many poems in their apartment here, #4C, including Mugging, which referenced an incident in which Ginsberg was set upon by neighborhood kids who took his money and watch but left his valuable manuscripts.", 
    },
    {
        position: { lat: 40.72965, lng: -73.98167 },
        title: "Allen Ginsberg's Studio",
        artist: "Allen Ginsberg",
        address: "437 East 12th Street",
        description: "Pigeons shake their wings on the copper church roof</br> out my window across the street, a bird perched on</br> the cross surveys the city’s blue-grey clouds. Larry Rivers</br> ‘ll come at 10 AM and take my picture. I’m taking</br> your picture, pigeons. I’m writing you down, Dawn.</br>I’m immortalizing your exhaust, Avenue A bus.</br>O Thought! Now you’ll have to think the same thing forever!</br>Fourth Floor, Dawn, Up All Night Writing Letters by Allen Ginsberg, New York, June 7, 1980, 6:48 A.M.",
        image: "Project Directory/EVimages/AllenGinsberg.jpg",
    },
    {
        position: { lat: 40.72638, lng: -73.98995 },
        title: "Louis N. Jaffe Art Theater / Club 181 / Phoenix Theater",
        address: "82 East 4th Street",
        artist: "See Glossary",
        description: "The Louis N. Jaffe Art Theater, a former Yiddish theater, was the location of the Mafia-controlled Club 181 (1945-51), known for its lavish shows of “female impersonators” (a term used at the time) and “drag king” staff, and the pioneering Off-Broadway Phoenix Theater (1953-61)",
    },
    {
        position: { lat: 40.73149, lng: -73.99248 },
        title: "The 9th Street Show",
        address: "60 East 9th Street",
        artist: "Willem de Kooning, Helen Frankenthaler, Philip Guston, Grace Hartigan, Hans Hofmann, Lee Krasner, and Jackson Pollock",
        description: "Organized by the Artist’s Club and curated by Leo Castelli in 1951, Held in 1951 in an abandoned storefront in Lower Manhattan, in a building slated to be demolished, the exhibition featured the work of around 70 artists. Almost all of the participants were virtually anonymous at the time, having been shut out by the galleries, museums, and collectors who ran the New York City scene. Their rejection stemmed largely from the fact that their work was experimental and tended to be abstract, in contradiction to the tastes of the American market.",   
        image: "Project Directory/EVimages/9thStreetShow.jpg",
    },
    {
        position: { lat: 40.72949, lng: -73.97951 },
        title: "David Wojnarowicz / Peter Hujar Apartment",
        artist: "David Wojnarowicz",
        address: "529 East 13th Street", 
        description: "David Wojnarowicz challenged the art world and castigated America for failing the LGBT community, particularly in response to the AIDS crisis. Wojnarowicz lived and worked in Hujar’s former loft from 1988 until his death from AIDS in 1992.",
        image: "Project Directory/EVimages/Wojnarowicz.jpg",
    },
    {
        position: { lat: 40.73043, lng: -73.98819 },
        title: "Diane Arbus Apartment",
        address: "120 East 10th Street", 
        artist: "Diane Arbus",
        description: "Diane Arbus was an American photographer best known for her intimate black-and-white portraits. Arbus often photographed people on the fringes of society, including the mentally ill, transgender people, and circus performers. She moved to 120 East 10th Street in 1968.",
        image: "Project Directory/EVimages/DianeArbus.jpg",
    },
    {
        position: { lat: 40.72851, lng: -73.98401 },
        title: "Fun Gallery",
        address: "254 East 10th Street", 
        artist: "Kenny Scharf, Jean-Michel Basquiat, Keith Haring",
        description: "The Fun Gallery was an art gallery founded by Patti Astor and Bill Stelling in 1981, that had a cultural impact until it closed in 1985. As an early art gallery in Manhattan's East Village, it exposed the talents of street art by showcasing graffiti artists such as Fab 5 Freddy, Futura 2000, and Lee Quiñones. Artists Kenny Scharf, Jean-Michel Basquiat, and Keith Haring also had solo exhibitions at the Fun Gallery.",
        image: "Project Directory/EVimages/FunGallery.jpg",
    },
    {
        position: { lat: 40.72812, lng: -73.98660 },
        title: "Joan Mitchell Studio",
        address: "60 St. Marks Place", 
        artist: "Joan Mitchell",
        description: "Joan Mitchell (1925–1992) was an abstract artist whose exceptional career spanned more than four decades. She worked in a variety of mediums—including oil painting, pastel on paper, and printmaking—and is widely recognized as one of the most significant artists of the post-war era. Her approach to abstraction is distinguished for its physicality, daring use of color, and direct connections to her everyday experiences of landscape, people, poetry, music, and even her beloved dogs.",
    },
    {
        position: { lat: 40.73115, lng: -73.98998 },
        title: "Area Gallery",
        address: "82 East 10th Street", 
        artist: "Tom Boutis, John Ireland Collins, Charles DuBack, Joe Fiore, Bernard Langlais, Ed Moses, Daphne Mumford, Paul Yakovenko",
        description: "Area Gallery operated between 1958 and 1965. Its members included artists such as Lydia Brown, Jean Cohen, Charles DuBack, Tom Boutis, Ed Moses, and Joe Fiore.",
    },
    {
        position: { lat: 40.73081, lng: -73.98957 },
        title: "Phoenix Gallery",
        address: "40 3rd Avenue", 
        artist: "Alice Forman, Philip Held, Aaron Levy, Gertrude Shibley, Alida Walsh, Florence Weinstein",
    },
    {
        position: { lat: 40.73106, lng: -73.98933 },
        title: "March Gallery",
        address: "95 East 10th Street", 
        artist: "Stanley Fisher, Sam Goodman, Jean-Jacques Lebel, Boris Lurie, Kenneth van Sickle",
    },
    {
        position: { lat: 40.73223, lng: -73.99161 },
        title: "Elaine de Kooning's Studio",
        address: "791 Broadway", 
        artist: "Elaine de Kooning",
        description: "Abstract Expressionism, a movement rooted in the post-World War II era, was synonymous with the vibrant art scene of downtown New York. This collective of groundbreaking artists included Jackson Pollock, Lee Krasner, Willem & Elaine de Kooning, Mark Rothko, and Helen Frankenthaler, among others. While varied in their techniques, they all shared a common goal: to transcend the conventional boundaries of art through spontaneity, emotional depth, and freedom of expression.",
        image: "Project Directory/EVimages/ElainedeKooning_1974.jpg",
    },
];

  // Create a shared info window
  const infoWindow = new InfoWindow();

  // Create the markers
  tourStops.forEach(({ position, title, address, artist, description, image }, i) => {
    const pin = new PinElement({
  
    glyphColor: " #0000ff",
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
        <div style="font-family: monospace; font-size: 1em;">
          <h3 style="margin: 0;">${title}</h3>
          <p style="margin: 0;"><strong>Artist:</strong> ${artist}</p>
          <p style="margin: 0;"><strong>Address:</strong> ${address}</p>
          <button class="button" id="learn-more" style="margin-top: 10px; padding: 5px 10px; font-size: 14px; cursor: pointer;">
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