# Prologue

Prologue is a single page responsive site template with a sticky sidebar. It is a port of [HTML5 UP's Prologue theme](https://html5up.net/prologue).

![Prologue Theme screenshot](https://raw.githubusercontent.com/sethmacleod/prologue/master/images/screenshot.png)

## Installation

Run the following commands inside your Hugo site folder:

    $ cd themes
    $ git clone https://github.com/sethmacleod/prologue.git

## Getting Started

After installation, you will need to configure the config.toml file, change pictures, and edit your page.

### The config file

Copy the config.toml from the exampleSite folder into your Hugo site's root folder. Change the fields as needed. Add or delete social media by following the examples in the file. You may need to look up the [font-awesome](http://fontawesome.io/) icon names. The icon field should be filled out without the "fa" prefix. The icon field for Twitter should be 'twitter' instead of 'fa-twitter'.

The portfolio is based on 3 columns. Pick a column for your photos and simply add their data to the appropriate section.

### Changing pictures

You will need to change your avatar, banner, and about photos. To change these, add the following three files to your `/static/img/` folder:

- `avatar.jpg`
- `banner.jpg`
- `about.jpg`

### Writing your page

The rest of your page can be edited in the `index.html` file. Copy it to your layouts folder and then make your changes.

### Contact Form

You will need to use an external service for the contact form since static sites cannot handle forms on their own. One such service is [Formspree](https://formspree.io/). Formspree has a free tier.

## License

This theme is released under the CC BY 3.0 license. For more information, read the [License](https://github.com/sethmacleod/prologue/blob/master/LICENSE.md).
