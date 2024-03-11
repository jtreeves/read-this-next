#!/bin/bash

function check_for_input() {
    local input="$1"
    local type="$2"

    if [ -z "$input" ]; then
        echo "Error: You must provide a $type"
        exit 1
    fi
}

function check_for_name() {
    local base_name="$1"

    check_for_input "$base_name" "base name"
}

function check_for_path() {
    local path="$1"

    check_for_input "$path" "path"
}
