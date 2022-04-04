# Project setup

I've used [this](https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658) article as reference to setup React + Babel + Webpack + HotModuleReplacement

Some package versions might be a bit old (webpack) or deprecated (react-hot-loader), but it should be fine for Dojo (for now). ### Update: I have kind-of updated webpack to version 5, but migrating the webpack config was.. chaotic.. so be aware of that

# Deployment

1. Update files with release version (X.Y.Z)
    - [ ] index.html ==> at `head`'s `title` tag
    - [ ] index.html ==> at the last `script`, change the `bundled_app` link to match `release%2FX.Y.Z` (release/X.Y.Z)
    - [ ] package.json ==> at `version`
2. Commit and push to main
3. Tag the same commit as `release/X.Y.Z` and push it
4. Go to Github and create a new release using the same tag and version
5. Run `yarn build`
6. Upload the assets, generated at `build`, to the release on Github
7. Publish the release
8. DONE! Verify the updated website at https://seigo.github.io/stunning-eureka 


# Automated testing

Maybe we can use `bdd-webdriver` repo as inspiration

```
docker run -p 4444:4444 -p 7900:7900 --shm-size="2g" selenium/standalone-firefox:4.1.3-20220327
```

Note: add `-d` right after `run` to make it detached

