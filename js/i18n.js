// Fixed interface text (menu, buttons, form labels) in each language.
// Page content (bio, work cards, experience…) is translated in content/site.js instead, through the admin panel.
// index.html marks each spot with data-i18n="key" (text), data-i18n-label (aria-label) or data-i18n-alt (alt).
// {name} is replaced with the name from the admin panel's Site tab, {first} with the short name.
// Section titles and menu labels can also be replaced per site in the admin panel (Page tab).
window.SITE_LANGUAGES = { en: 'English', nl: 'Nederlands', fr: 'Français' };

window.SITE_UI_TEXT = {
  'meta.description': {
    en: "{name}'s portfolio.",
    nl: 'Portfolio van {name}.',
    fr: 'Portfolio de {name}.',
  },
  'lang.label': { en: 'Language', nl: 'Taal', fr: 'Langue' },
  'nav.toggle': { en: 'Toggle navigation', nl: 'Menu openen of sluiten', fr: 'Ouvrir ou fermer le menu' },
  'nav.about': { en: 'About', nl: 'Over mij', fr: 'À propos' },
  'nav.reel': { en: 'Reel', nl: 'Reel', fr: 'Reel' },
  'nav.work': { en: 'Work', nl: 'Werk', fr: 'Projets' },
  'nav.contact': { en: 'Contact', nl: 'Contact', fr: 'Contact' },

  'hero.seeWork': { en: 'See the work', nl: 'Bekijk mijn werk', fr: 'Voir les projets' },
  'hero.getInTouch': { en: 'Get in touch', nl: 'Neem contact op', fr: 'Me contacter' },
  'hero.resume': { en: 'Resume', nl: 'CV', fr: 'CV' },

  'about.title': { en: 'About', nl: 'Over mij', fr: 'À propos' },
  'about.photoAlt': { en: 'Portrait of {name}', nl: 'Portret van {name}', fr: 'Portrait de {name}' },

  'reel.title': { en: 'Showreel', nl: 'Showreel', fr: 'Showreel' },
  'reel.soon': { en: 'Showreel coming soon', nl: 'Showreel volgt binnenkort', fr: 'Showreel bientôt disponible' },

  'work.title': { en: 'Work & Experience', nl: 'Werk & ervaring', fr: 'Projets & expérience' },
  'work.filterLabel': { en: 'Filter work by category', nl: 'Werk filteren op categorie', fr: 'Filtrer les projets par catégorie' },
  'work.all': { en: 'All', nl: 'Alles', fr: 'Tout' },
  'type.video': { en: 'Video', nl: 'Video', fr: 'Vidéo' },
  'type.audio': { en: 'Audio', nl: 'Audio', fr: 'Audio' },
  'type.code': { en: 'Code', nl: 'Code', fr: 'Code' },
  'work.watch': { en: 'Watch video', nl: 'Bekijk video', fr: 'Voir la vidéo' },
  'work.details': { en: 'View details', nl: 'Bekijk details', fr: 'Voir les détails' },
  'work.highlights': { en: 'Projects', nl: 'Projecten', fr: 'Projets' },
  'work.prev': { en: 'Previous project', nl: 'Vorig project', fr: 'Projet précédent' },
  'work.next': { en: 'Next project', nl: 'Volgend project', fr: 'Projet suivant' },
  'work.slide': { en: 'Project {n}', nl: 'Project {n}', fr: 'Projet {n}' },
  'work.watchMany': { en: 'Watch videos', nl: "Bekijk video's", fr: 'Voir les vidéos' },
  'work.videoCount': { en: '{n} videos', nl: "{n} video's", fr: '{n} vidéos' },
  'work.videoN': { en: 'Video {n}', nl: 'Video {n}', fr: 'Vidéo {n}' },
  'work.pictureCount': { en: '{n} pictures', nl: "{n} foto's", fr: '{n} images' },
  'work.pictureN': { en: 'Picture {n}', nl: 'Foto {n}', fr: 'Image {n}' },
  'work.viewPictures': { en: 'View pictures', nl: "Bekijk foto's", fr: 'Voir les images' },
  'work.prevMedia': { en: 'Previous', nl: 'Vorige', fr: 'Précédent' },
  'work.nextMedia': { en: 'Next', nl: 'Volgende', fr: 'Suivant' },
  'work.videosLabel': { en: 'Videos in this project', nl: "Video's in dit project", fr: 'Vidéos de ce projet' },
  'work.closeDetails': { en: 'Close project details', nl: 'Projectdetails sluiten', fr: 'Fermer les détails du projet' },
  'experience.title': { en: 'Experience', nl: 'Ervaring', fr: 'Expérience' },
  'toolkit.title': { en: 'Toolkit', nl: 'Toolkit', fr: 'Outils' },

  'contact.title': { en: 'Contact', nl: 'Contact', fr: 'Contact' },
  'contact.formTitle': { en: 'Send a Message', nl: 'Stuur een bericht', fr: 'Envoyer un message' },
  'contact.name': { en: 'Name', nl: 'Naam', fr: 'Nom' },
  'contact.email': { en: 'Your email', nl: 'Je e-mailadres', fr: 'Votre e-mail' },
  'contact.subject': { en: 'Subject', nl: 'Onderwerp', fr: 'Objet' },
  'contact.message': { en: 'Message', nl: 'Bericht', fr: 'Message' },
  'contact.send': { en: 'Send message', nl: 'Verstuur bericht', fr: 'Envoyer le message' },
  'contact.linkedin': { en: 'Connect on LinkedIn', nl: 'Vind me op LinkedIn', fr: 'Voir mon LinkedIn' },
  'contact.note': {
    en: 'Sending opens your email app with the message pre-filled, addressed to {first}.',
    nl: 'Bij verzenden opent je e-mailapp met het bericht al ingevuld, gericht aan {first}.',
    fr: "L'envoi ouvre votre application e-mail avec le message déjà rempli, adressé à {first}.",
  },
};
