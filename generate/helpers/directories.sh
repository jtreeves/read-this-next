#!/bin/bash

function ensure_directories_exist() {
  local directory_path="$1"
  mkdir -p "$directory_path"
}