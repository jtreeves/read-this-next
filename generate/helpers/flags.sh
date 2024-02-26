#!/bin/bash

function process_flags() {
  local flags=()

  for arg in "$@"; do
    case "$arg" in
      -c)
        flags["CLIENT_FLAG"]=true
        ;;
      -s)
        flags["SERVER_FLAG"]=true
        ;;
    esac
  done

  echo "${flags[@]}"
}
