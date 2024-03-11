#!/bin/bash

function create_camel_case_name() {
    local file_name="$1"

    IFS="-" read -ra name_array <<<"$file_name"
    main_name="$(echo "${name_array[0]}" | awk '{print tolower($0)}')"

    for ((i = 1; i < ${#name_array[@]}; i++)); do
        main_name+="$(echo "${name_array[i]}" | awk '{print toupper(substr($0,1,1)) tolower(substr($0,2))}')"
    done

    echo "$main_name"
}

function create_pascal_case_name() {
    local file_name="$1"

    IFS="-" read -ra name_array <<<"$file_name"
    main_name=""

    for element in "${name_array[@]}"; do
        main_name+="$(echo "$element" | awk '{print toupper(substr($0,1,1)) tolower(substr($0,2))}')"
    done

    echo "$main_name"
}
