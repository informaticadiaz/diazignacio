#!/usr/bin/env sh
set -eu

output_dir="data/pages-dist"

rm -rf "$output_dir"
mkdir -p "$output_dir"

cp index.html blog.html "$output_dir/"
cp -R assets css js "$output_dir/"
cp pages/404.html pages/_headers "$output_dir/"
