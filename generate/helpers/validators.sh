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
