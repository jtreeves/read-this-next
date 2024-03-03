#!/bin/bash

function check_for_name() {
    local file_name="$1"

    if [ -z "$file_name" ]; then
        echo "Error: You must provide a file name"
        exit 1
    fi
}
function check_for_path() {
    local path="$1"

    if [ -z "$path" ]; then
        echo "Error: You must provide a path"
        exit 1
    fi
}

function ensure_directories_exist() {
    local directory_path="$1"

    # final_path=$(echo "$directory_path" | sed 's/\/\/\//\//')
    final_path="$directory_path"

    mkdir -p "\"$final_path\""
}
