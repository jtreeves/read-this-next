#!/bin/bash

function check_for_name() {
    local base_name="$1"

    if [ -z "$base_name" ]; then
        echo "Error: You must provide a base name"
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
    local directories=("$@")
    local cd_list=""

    for i in "${directories[@]}"; do
        mkdir -p "$i"
        if [ -d "$i" ]; then
            cd "$i"
            cd_list="../$cd_list"
        fi
    done

    cd "$cd_list"
}
