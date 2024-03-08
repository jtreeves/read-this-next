#!/bin/bash

function create_file() {
    local content="$1"
    local file_name="$2"
    local directory="$3"
    local extension="$4"
    local is_test="$5"
    local full_file_path="$directory/$file_name"

    if [ "$is_test" == "true" ]; then
        full_file_path+=".test"
    fi

    full_file_path+=".$extension"

    echo "$content" >"$full_file_path"
}
