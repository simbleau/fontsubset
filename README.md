# 🍴 Fork
This project is a fork from [Jieiku](https://github.com/jieiku)'s [https://github.com/Jieiku/fontsubset](https://github.com/Jieiku/fontsubset).


# FontSubset

This project is used to generate font subsets which are extremely small and lightweight to use in projects such as my [blog](https://github.com/simbleau/blog) and [website](https://github.com/simbleau/website).

Simply edit the [package.json](package.json) file with the icons in a script to be included.

Setup:

```shell
git clone https://github.com/Jieiku/fontsubset
cd fontsubset
npm install fs path glob yaml subset-font
npm install --save-dev @fortawesome/fontawesome-free
```

Run:

```shell
npm run-script webiste
npm run-script blog
```

The above scripts generate the new fonts and output them to the assets folder, you will find these commands defined in the `package.json` file.

# Font inspection

I use [fontforge](https://fontforge.org/en-US/) to inspect the generated fonts for their code points.

---

❗ **More information: see [parent repository](https://github.com/Jieiku/fontsubset/blob/main/README.md).**
