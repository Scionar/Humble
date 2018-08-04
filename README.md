# Humble :pray:

Content focused [Ghost](https://ghost.org/) theme. Includes index and post page styles. Style is inspired from [koajs.com](http://koajs.com/) and [github.com](https://github.com/).

## Configuration

Site features are controllable with configuration file. Configuration this way are not included into version control. To enable this, create file `/assets/js/config.js` with next content example content.

```
USE_DISQUS = true;
DISQUS_SHORTNAME = 'joonaviertola';
DISQUS_URL = 'https://joonaviertola.disqus.com';
```

Change your own configurations. At the moment, only Disqus feature supported.



## Development

Theme uses Sass (SCSS syntax) and uses BEM naming methodology.

Install compiler.

```
npm install
```

Compile Sass.

```
npm run compile-sass
```

Run Sass compiling on change.
```
npm run watch-sass
```
