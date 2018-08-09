# bdd-test

## Install Chimp

```
npm install -g chimp
```

## Running tests

### Single run

Simply run the `chimp` command:

```
chimp
```

### Run tests when files change 

To run all tests marked with the `@watch` attribute, run `chimp --watch`. A test with the `@watch` attribute looks like this:

```
@watch
Scenario: Check web services links appear
  Given a web browser is at the DADI.cloud home page
  When the user clicks on the web services header link
  Then the sub menu is displayed
```

### Ignore tests

To ignore a test when running, add the `@ignore` attribute:

```
@ignore
Scenario: Check web services links appear
  Given a web browser is at the DADI.cloud home page
  When the user clicks on the web services header link
  Then the sub menu is displayed
```


## Resources

* [Chimp](https://chimp.readme.io/docs)
* [Webdriver.io API documentation](http://webdriver.io/api.html)
* [Chai Assertion Library documentation](http://chaijs.com/api/bdd/)
* [Puppeteer](https://github.com/GoogleChrome/puppeteer)
