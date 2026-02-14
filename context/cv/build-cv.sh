#!/bin/bash
# Compile cv.tex to PDF, clean up artifacts, and copy to public/

cd "$(dirname "$0")"

pdflatex -interaction=nonstopmode cv.tex
pdflatex -interaction=nonstopmode cv.tex  # second pass for references

rm -f cv.aux cv.log cv.out cv.fls cv.fdb_latexmk cv.synctex.gz cv.bbl cv.blg cv.toc cv.nav cv.snm cv.vrb

cp cv.pdf ../../public/cv.pdf

echo "Done → context/cv/cv.pdf + public/cv.pdf"
