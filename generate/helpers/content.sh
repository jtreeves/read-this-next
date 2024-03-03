#!/bin/bash

TEMPLATE_DIR="generate/templates"

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
