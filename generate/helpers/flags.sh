#!/bin/bash

function process_flags() {
    for arg in "$@"; do
        case "$arg" in
        -a)
            export ASYNC_FLAG=true
            ;;
        -c)
            export CLIENT_FLAG=true
            ;;
        -dy)
            export DYNAMIC_FLAG=true
            ;;
        -del)
            export DELETE_FLAG=true
            ;;
        -er)
            export ERROR_FLAG=true
            ;;
        -fet)
            export FETCH_FLAG=true
            ;;
        -get)
            export GET_FLAG=true
            ;;
        -lo)
            export LOADING_FLAG=true
            ;;
        -m)
            export META_FLAG=true
            ;;
        -nf)
            export NOT_FOUND_FLAG=true
            ;;
        -pat)
            export PATCH_FLAG=true
            ;;
        -post)
            export POST_FLAG=true
            ;;
        -put)
            export PUT_FLAG=true
            ;;
        -s)
            export SERVER_FLAG=true
            ;;
        -sl)
            export SLOT_FLAG=true
            ;;
        esac
    done
}
