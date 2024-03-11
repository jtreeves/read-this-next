#!/bin/bash

function process_flags() {
    for arg in "$@"; do
        case "$arg" in
        -a | --async)
            export ASYNC_FLAG=true
            ;;
        -c | --client)
            export CLIENT_FLAG=true
            ;;
        -dy | --dynamic)
            export DYNAMIC_FLAG=true
            ;;
        -de | --delete)
            export DELETE_FLAG=true
            ;;
        -e | --error)
            export ERROR_FLAG=true
            ;;
        -f | --fetch)
            export FETCH_FLAG=true
            ;;
        -g | --get)
            export GET_FLAG=true
            ;;
        -l | --loading)
            export LOADING_FLAG=true
            ;;
        -m | --meta)
            export META_FLAG=true
            ;;
        -nf | --non-found)
            export NOT_FOUND_FLAG=true
            ;;
        -pa | --patch)
            export PATCH_FLAG=true
            ;;
        -po | --post)
            export POST_FLAG=true
            ;;
        -pu | --put)
            export PUT_FLAG=true
            ;;
        -s | --server)
            export SERVER_FLAG=true
            ;;
        -sl | --slot)
            export SLOT_FLAG=true
            ;;
        esac
    done
}
