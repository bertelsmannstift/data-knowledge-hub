# How to run this project


## The python part
* clone this repository
* install [miniconda](https://docs.conda.io/en/latest/miniconda.html)
* setup conda environment: `cd tiktok-hashtags-knowledgehub && conda env create -f tt-hashtag-conda-environment.yml`

## The javascript part
* install [nodejs](https://nodejs.org/en) and [google chrome browser](https://www.google.com/chrome/)
* setup scraping environment:``npm install`
* edit `scrape_tiktok_withDB.js` and edit the installation path of chrome
* run scraper `node scrape_tiktok_withDB.js`
* start jupyter to analyse the data `cd .. && jupyter lab`