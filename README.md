# My Dotfiles

To restore after reinstall:

```bash
# 1. Clone bare repo
git clone --bare https://github.com/Movved/dotfiles.git $HOME/.dotfiles
# 2. Checkout files or go to step 3 and run it
git --git-dir=$HOME/.dotfiles --work-tree=$HOME checkout
# 3. Define alias if u don't have already
echo "alias config='/usr/bin/git --git-dir=\$HOME/.dotfiles/ --work-tree=\$HOME'" >> ~/.zshrc
# 4. Hide untracked files
config config --local status.showUntrackedFiles no
```
nm-applet wifi

