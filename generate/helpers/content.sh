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

  content=$(sed -e "s/{{MAIN_NAME}}/$main_name/g" -e "s/{{FILE_NAME}}/$file_name/g" "$TEMPLATE_DIR/$content_type.test")

  echo "$content"
}

function prepend_directive_to_content() {
  local intro_directive="$1"
  local content="$2"

  result="$intro_directive\n$content"

  echo "$result"
}