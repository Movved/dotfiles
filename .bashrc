#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
alias grep='grep --color=auto'
alias HyprNano='nano /home/movved/.config/hypr/hyprland.conf'
PS1='[\u@\h \W]\$ '
