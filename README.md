## [Preview](https://proxzima.dev/resume/)
[![Github Pages](https://github.com/PROxZIMA/resume/actions/workflows/pages.yml/badge.svg)](https://proxzima.dev/resume/)

#### [Résumé](https://proxzima.dev/resume/)

You can see the PDF [here](https://raw.githubusercontent.com/PROxZIMA/resume/master/extras/Pratik%20Pingale's%20Resume.pdf)

| Page 1 |
|:---:|
|<a href="https://raw.githubusercontent.com/PROxZIMA/resume/master/extras/Pratik%20Pingale's%20Resume.pdf"><img style="width:50%" src="https://raw.githubusercontent.com/PROxZIMA/resume/master/docs/assets/resume.png"/></a> |

#### [Curriculum Vitae](https://proxzima.dev/resume/?cv)

You can see the PDF [here](https://raw.githubusercontent.com/PROxZIMA/resume/master/extras/Pratik%20Pingale's%20CV.pdf)

| Page 1 | Page 2 |
|:---:|:---:|
| [![Résumé](https://raw.githubusercontent.com/PROxZIMA/resume/master/docs/assets/cv-0.png)](https://raw.githubusercontent.com/PROxZIMA/resume/master/extras/Pratik%20Pingale's%20CV.pdf)  | [![Résumé](https://raw.githubusercontent.com/PROxZIMA/resume/master/docs/assets/cv-1.png)](https://raw.githubusercontent.com/PROxZIMA/resume/master/extras/Pratik%20Pingale's%20CV.pdf) |

#### Cover Letter

You can see the PDF [here](https://raw.githubusercontent.com/PROxZIMA/resume/master/extras/Pratik%20Pingale's%20Cover%20Letter.pdf)

| Without Sections | With Sections |
|:---:|:---:|
| [![Cover Letter(Traditional)](https://raw.githubusercontent.com/PROxZIMA/resume/master/docs/assets/coverletter-0.png)](https://raw.githubusercontent.com/PROxZIMA/resume/master/extras/Pratik%20Pingale's%20Cover%20Letter.pdf)  | [![Cover Letter(Awesome)](https://raw.githubusercontent.com/PROxZIMA/resume/master/docs/assets/coverletter-1.png)](https://raw.githubusercontent.com/PROxZIMA/resume/master/extras/Pratik%20Pingale's%20Cover%20Letter.pdf) |

## How to Use

#### Requirements

A full TeX distribution is required. [Various distributions for different operating systems (Windows, Mac, \*nix) are available](http://tex.stackexchange.com/q/55437), but TeX Live is recommended.
You can [install TeX from upstream](https://tex.stackexchange.com/q/1092) (recommended; most up-to-date), or use `sudo apt-get install texlive-full` if you prefer. (Note: this version is generally a few years behind.)

If you don't want to install the dependencies on your system, you can also use [Docker](https://docker.com).

#### Usage

- At a command prompt, run:

```bash
$ lualatex {your-cv}.tex
```

- Using Docker:

```bash
$ docker run --rm --user $(id -u):$(id -g) -i -w "/doc" -v "$PWD":/doc thomasweise/texlive make
```

In either case, this should result in the creation of `{your-cv}.pdf`.

- Using Makefile:

```bash
$ make [resume | cv | clsample | coverletter company_name | clean]
```

To prepare a cover letter for a company, create a `company_name-coverletter.tex` file in the `src` directory and run `make coverletter company_name`.

## Credit

[**Awesome-CV**](https://github.com/posquit0/Awesome-CV) is a LaTeX template for a CV (Curriculum Vitae), résumé, or cover letter inspired by Fancy CV. It is easy to customize your own template, especially since it is written with clean, semantic markup.

[**LaTeX**](https://www.latex-project.org) is a fantastic typesetting program that many people use these days, especially those in math and computer science academia.

[**LaTeX FontAwesome**](https://github.com/furl/latex-fontawesome) provides bindings for FontAwesome icons to be used in XeLaTeX.

[**Roboto**](https://github.com/google/roboto) is the default font on Android and ChromeOS, and the recommended font for Google’s visual language, Material Design.

[**Source Sans Pro**](https://github.com/adobe-fonts/source-sans-pro) is a set of OpenType fonts designed to work well in user interface (UI) environments.

## Contact

You are free to take my `.tex` file and modify it to create your own resume. Please do not use my resume for anything else without my permission.

Good luck!


## Maintainers
- [PROxZIMA](https://github.com/PROxZIMA)
