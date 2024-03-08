#!/bin/bash

TEMPLATE_DIR="generate/templates"
COMPONENT_IMPORT="import { Component } from '@/data/types'"
REACT_CHILDREN_IMPORT="import { ReactChildren } from '@/data/interfaces'"
METADATA_IMPORT="import { Metadata } from 'next'"
SERVICE_ERROR_IMPORT="import { ServiceError } from '@/data/errors'"
FETCH_IMPORT="import { createFetchOptions } from '@/utilities/create-fetch-options'"
JSON_IMPORT="import { JSON_CONTENT_HEADER } from '@/data/constants'"

function use_content_from_template() {
    local main_name="$1"
    local content_type="$2"
    local sub_folder="$3"
    local file_name="$4"
    local full_dir_path="$TEMPLATE_DIR"

    if [ $sub_folder ]; then
        full_dir_path+="/$sub_folder"
    fi

    full_dir_path+="/$content_type"

    content=$(sed "s/{{MAIN_NAME}}/$main_name/g" "$full_dir_path")

    content=$(sed -e "s/{{MAIN_NAME}}/$main_name/g" -e "s/{{FILE_NAME}}/$file_name/g" "$full_dir_path")

    echo "$content"
}

function determine_content_for_core() {
    local main_name="$1"
    local content_type="$2"

    content=$(sed "s/{{MAIN_NAME}}/$main_name/g" "$TEMPLATE_DIR/$content_type")

    echo "$content"
}

function determine_content_for_test() {
    local file_name="$1"
    local main_name="$2"
    local content_type="$3"

    content=$(sed -e "s/{{MAIN_NAME}}/$main_name/g" -e "s/{{FILE_NAME}}/$file_name/g" "$TEMPLATE_DIR/tests/$content_type")

    echo "$content"
}

function prepend_directive_to_content() {
    local intro_directive="$1"
    local content="$2"

    result="'$intro_directive'"$'\n\n'"$content"

    echo "$result"
}

function make_page_async() {
    local page_content="$1"

    async_content=$(echo "$page_content" | sed 's/default function/default async function/')
    async_content=$(echo "$async_content" | sed 's/: Component/: Promise<Component>/')
    async_content=$(echo "$async_content" | sed 's/return/const result: any = await {}\n\n    return/')
    async_content=$(echo "$async_content" | sed 's|</>|: {result}</>|')

    echo "$async_content"
}

function adjust_content_for_page() {
    local component_content="$1"

    page_content=$(echo "$component_content" | sed 's/export/export default/')
    page_content=$(echo "$page_content" | sed 's/()/Page()/')

    echo "$page_content"
}

function adjust_content_for_page_test() {
    local component_test="$1"

    page_test=$(echo "$component_test" | sed 's/ component/Page view/')
    page_test=$(echo "$page_test" | sed '2 s/{[[:space:]]\(.*\)[[:space:]]}/\1/')
    page_test=$(echo "$page_test" | sed '2 s/ from/Page from/')
    page_test=$(echo "$page_test" | sed 's/ \/>/Page \/>/')

    echo "$page_test"
}

function inject_call_into_service() {
    local service_content="$1"
    local is_fetch="$2"
    local up_to_try=$(echo "$service_content" | awk 'NR<=2 {print}')
    local after_try=$(echo "$service_content" | awk 'NR>2 {print}')
    local final_content=""

    if [ "$is_fetch" = "true" ]; then
        fetch_call=$(use_content_from_template "" "fetch-call" "partials")
        final_content+="$SERVICE_ERROR_IMPORT"$'\n'
        final_content+="$FETCH_IMPORT"$'\n\n'
        final_content+="$up_to_try"$'\n'
        final_content+="$fetch_call"$'\n'
        final_content+="$after_try"
        final_content=$(echo "$final_content" | sed 's/{ ServiceError }/{ ServiceError, FetchError }/')
    else
        default_call=$(use_content_from_template "" "default-call" "partials")
        final_content+="$SERVICE_ERROR_IMPORT"$'\n\n'
        final_content+="$up_to_try"$'\n'
        final_content+="$default_call"$'\n'
        final_content+="$after_try"
    fi

    echo "$final_content"
}

function create_layout() {
    local main_name="$1"
    local has_metadata="$2"
    local layout_content=$(use_content_from_template "$main_name" "layout")
    local final_content=""

    if [ "$has_metadata" = "true" ]; then
        metadata_content=$(use_content_from_template "$main_name" "metadata" "partials")
        final_content+="$METADATA_IMPORT"$'\n'
        final_content+="$COMPONENT_IMPORT"$'\n'
        final_content+="$REACT_CHILDREN_IMPORT"$'\n\n'
        final_content+="$metadata_content"$'\n\n'
        final_content+="$layout_content"
    else
        final_content+="$COMPONENT_IMPORT"$'\n'
        final_content+="$REACT_CHILDREN_IMPORT"$'\n\n'
        final_content+="$layout_content"
    fi

    echo "$final_content"
}
