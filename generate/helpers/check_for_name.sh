#!/bin/bash

function check_for_name() {
  local file_name="$1"

  if [ -z "$file_name" ]; then
    echo "Error: You must provide a file name"
    exit 1
  fi
}
