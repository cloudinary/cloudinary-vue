# Contributing to Cloudinary Vue SDK

Contributions are welcome and greatly appreciated!

## Reporting a bug

- Ensure that the bug was not already reported by searching in GitHub under [Issues](https://github.com/cloudinary/cloudinary-vue/issues) and the Cloudinary [Support forms](https://support.cloudinary.com).
- If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/cloudinary/cloudinary-vue/issues/new).
  Be sure to include a **title and clear description**, as much relevant information as possible, and a **code sample** or an **executable test case** demonstrating the expected behavior that is not occurring.
- If you require assistance in the implementation of Cloudinary Vue SDK please [submit a request](https://support.cloudinary.com/hc/en-us/requests/new) in the Cloudinary web site.

## Requesting a feature

We would love to hear your requests!
Please be aware that the package is used in a wide variety of environments and that some features may not be applicable to all users.

- [Open a GitHub issue](https://github.com/cloudinary/cloudinary-vue/issues/new) describing the benefits (and possible drawbacks) of the requested feature

## Fixing a bug / Implementing a new feature

- Follow the instructions detailed in [Code contribution](#code-contribution)
- Open a new GitHub pull request
- Ensure the PR description clearly describes the bug / feature. Include the relevant issue number if applicable.
- Provide test code that covers the new code

## Code contribution

When contributing code, either to fix a bug or to implement a new feature, please follow these guidelines:

#### Fork the Project

Fork [project on Github](https://github.com/cloudinary/cloudinary-vue) and check out your copy.

```sh
# clone repository and name your remote "fork"
git clone https://github.com/[CONTRIBUTOR]/cloudinary-vue.git -o fork
# enter newly created directory
cd cloudinary-vue
# add original Cloudinary Vue SDK remote location as "origin"
git remote add origin https://github.com/cloudinary/cloudinary-vue.git
```

#### Install prerequisites

```sh
# in repository folder
npm i -g @vue/cli
npm i
```

#### Create a Topic Branch

Make sure your fork is up-to-date and create a topic branch for your feature or bug fix.

```sh
# checkout onto and refresh master branch
git checkout master
git pull origin master
# create a new feature/fix branch off of it
git checkout -b my-feature-branch
```

#### Rebase

If you've been working on a change for a while, rebase with origin/master before submitting a PR.

```sh
git fetch origin
git rebase origin/master
git push origin my-feature-branch -f
```

#### Write Tests

Try to write a test that reproduces the problem you're trying to fix or describes a feature that you want to build.

**We definitely appreciate pull requests that highlight or reproduce a problem, even without a fix.**

#### Write Code

Implement your feature or bug fix.
**Make sure that tests completes without errors.**

#### Write Documentation

Document your changes in the [README](README.md) and also \*.md files specific for every component.

#### Running the tests

Run the basic test suite with `npm t`.

**Make sure that tests completes without errors.**
Travis-CI will run the full suite as well when you submit your pull request.

Preview styleguidist live documentation with `npm run styleguide` to verify results.

#### Commit Changes

Check the code with `npm run lint` and fix any indicated issues.

Make sure git knows your name and email address:

```
git config --global user.name "Your Name"
git config --global user.email "contributor@example.com"
```

Please don't include build system or documentation artifacts in your PR unless it is precisely what you aim to do. If so, `npm run build` produces essential package files and outputs documentation files.

Please squash your commits into a single commit when appropriate. This simplifies future cherry picks and keeps the git log clean.

Writing good commit logs is important. A commit log should describe what changed and why. Commit message/name should be in form of a task description, ie. `"add support for some feature"`. Upon commiting tests will be run again, so expect some delay in processing that request.

```
git add ...
git commit
```

#### Push

```
git push fork my-feature-branch
```

#### Make a Pull Request

Go to your fork [https://github.com/[CONTRIBUTOR]/cloudinary-vue](#fork-the-project) and select your feature branch. Click the 'Pull Request' button and fill out the form. Pull requests are usually reviewed within a few days.
Ensure the PR description clearly describes the problem and solution. Include the relevant issue number if applicable.

#### Check on Your Pull Request

Go back to your pull request after a few minutes and see whether it passed muster with Travis-CI. Everything should look green, otherwise fix issues and amend your commit as described above.

#### Be Patient

It's likely that your change will not be merged and that the nitpicky maintainers will ask you to do more, or fix seemingly benign problems. Hang on there!

#### Thank You

Please do know that we really appreciate and value your time and work. We love you, really.
