function add_path_to_directories() {
    local core_path="$1"
    local destination_dir="$2"
    local directories=("${@:3}")

    if [ "$core_path" != "/" ]; then
        IFS="/"
        read -ra path_dirs <<<"$core_path"
        unset IFS

        directories+=("${path_dirs[@]}")
        destination_dir+="/$core_path"
    fi

    echo "$destination_dir"
    echo "${directories[@]}"
}

function ensure_directories_exist() {
    local directories=("$@")
    local cd_list=""

    for i in "${directories[@]}"; do
        mkdir -p "$i"
        if [ -d "$i" ]; then
            cd "$i"
            cd_list="../$cd_list"
        fi
    done

    cd "$cd_list"
}
