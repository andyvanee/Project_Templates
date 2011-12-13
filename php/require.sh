#!/bin/sh
base=`pwd`

function require {
cd "$base"
if [ -d "$1" ]
  then
    cd "$1"
    git pull
else
  git clone "$2" "$1"
fi         
}

# The most basic requirement manager I could think of.
# Set the destination path and the git repo as arguments

require lib/simpletest https://github.com/wesen/php-simpletest.git
