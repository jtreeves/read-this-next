#!/bin/bash

function process_flags() {
    local flags=()

    for arg in "$@"; do
        case "$arg" in
        -a)
            flags["ASYNC_FLAG"]=true
            ;;
        -c)
            flags["CLIENT_FLAG"]=true
            ;;
        -d)
            flags["DYNAMIC_FLAG"]=true
            ;;
        -del)
            flags["DELETE_FLAG"]=true
            ;;
        -e)
            flags["ERROR_FLAG"]=true
            ;;
        -get)
            flags["GET_FLAG"]=true
            ;;
        -l)
            flags["LOADING_FLAG"]=true
            ;;
        -nf)
            flags["NOT_FOUND_FLAG"]=true
            ;;
        -pat)
            flags["PATCH_FLAG"]=true
            ;;
        -post)
            flags["POST_FLAG"]=true
            ;;
        -put)
            flags["PUT_FLAG"]=true
            ;;
        -s)
            flags["SERVER_FLAG"]=true
            ;;
        -sl)
            flags["SLOT_FLAG"]=true
            ;;
        esac
    done

    echo "${flags[@]}"
}
