#!/bin/bash

function validate_entity_created() {
  local main_name="$1"
  local content_type="$2"

  echo "$main_name $content_type created!"
}