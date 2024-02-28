#!/bin/bash

function check_for_name() {
  local file_name="$1"

  if [ -z "$file_name" ]; then
    echo "Error: You must provide a file name"
    exit 1
  fi
}

function ensure_directories_exist() {
  local directory_path="$1"
  
  mkdir -p "$directory_path"
}
