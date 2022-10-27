## [https://proxzima.dev/resume](https://proxzima.dev/resume)

## Preview

#### Résumé

You can see [PDF](https://raw.githubusercontent.com/PROxZIMA/resume/master/extras/Pratik%20Pingale's%20Resume.pdf)

| Page 1 | Page 2 |
|:---:|:---:|
| [![Résumé](https://raw.githubusercontent.com/PROxZIMA/resume/master/docs/assets/resume-0.png)](https://raw.githubusercontent.com/PROxZIMA/resume/master/extras/Pratik%20Pingale's%20Resume.pdf)  | [![Résumé](https://raw.githubusercontent.com/PROxZIMA/resume/master/docs/assets/resume-1.png)](https://raw.githubusercontent.com/PROxZIMA/resume/master/extras/Pratik%20Pingale's%20Resume.pdf) |

#### Cover Letter

You can see [PDF](https://raw.githubusercontent.com/PROxZIMA/resume/master/extras/Pratik%20Pingale's%20Cover%20Letter.pdf)

| Without Sections | With Sections |
|:---:|:---:|
| [![Cover Letter(Traditional)](https://raw.githubusercontent.com/PROxZIMA/resume/master/docs/assets/coverletter-0.png)](https://raw.githubusercontent.com/PROxZIMA/resume/master/extras/Pratik%20Pingale's%20Cover%20Letter.pdf)  | [![Cover Letter(Awesome)](https://raw.githubusercontent.com/PROxZIMA/resume/master/docs/assets/coverletter-1.png)](https://raw.githubusercontent.com/PROxZIMA/resume/master/extras/Pratik%20Pingale's%20Cover%20Letter.pdf) |

## How to Use

#### Requirements

A full TeX distribution is assumed.  [Various distributions for different operating systems (Windows, Mac, \*nix) are available](http://tex.stackexchange.com/q/55437) but TeX Live is recommended.
You can [install TeX from upstream](https://tex.stackexchange.com/q/1092) (recommended; most up-to-date) or use `sudo apt-get install texlive-full` if you really want that.  (It's generally a few years behind.)

If you don't want to install the dependencies on your system, this can also be obtained via [Docker](https://docker.com).

#### Usage

- At a command prompt, run

```bash
$ lualatex {your-cv}.tex
```

- Using docker:

```bash
$ docker run --rm --user $(id -u):$(id -g) -i -w "/doc" -v "$PWD":/doc thomasweise/texlive make
```

In either case, this should result in the creation of ``{your-cv}.pdf``

- Using Makefile:

```bash
$ make [resume | cv | clsample | coverletter company_name | clean]
```

To prepare cover letter for a company, create ``company_name-coverlater.tex`` file in ``src`` directory and run ``make coverletter company_name``.


## Credit

[**Awesome-CV**](https://github.com/posquit0/Awesome-CV) is LaTeX template for a CV(Curriculum Vitae), Résumé or Cover Letter inspired by Fancy CV. It is easy to customize your own template, especially since it is really written by a clean, semantic markup.

[**LaTeX**](https://www.latex-project.org) is a fantastic typesetting program that a lot of people use these days, especially the math and computer science people in academia.

[**LaTeX FontAwesome**](https://github.com/furl/latex-fontawesome) is bindings for FontAwesome icons to be used in XeLaTeX.

[**Roboto**](https://github.com/google/roboto) is the default font on Android and ChromeOS, and the recommended font for Google’s visual language, Material Design.

[**Source Sans Pro**](https://github.com/adobe-fonts/source-sans-pro) is a set of OpenType fonts that have been designed to work well in user interface (UI) environments.


## Contact

You are free to take my `.tex` file and modify it to create your own resume. Please don't use my resume for anything else without my permission, though!

Good luck!


## Maintainers
- [PROxZIMA](https://github.com/PROxZIMA)
