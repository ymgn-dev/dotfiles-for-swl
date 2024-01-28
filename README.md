# ymgn's dotfiles for WSL2

Dotfiles of the Ubuntu user, by the Ubuntu user, for the Ubuntu user.

![](https://github.com/ymgn-dev/dotfiles/blob/main/resources/logo.png)

## Requirements

- Install curl and git

```shell
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git
```

- Install Bun

```shell
curl -fsSL https://bun.sh/install | bash -s "bun-v1.0.14"
```

- Clone this repository into your workspace directory.

```shell
mkdir -p ~/Workspace
git clone git@github.com:ymgn-dev/dotfiles.git ~/Workspace/dotfiles
```

## Usage

```shell
cd ~/Workspace/dotfiles
bun install
```

## Installation Overview

| Managers | Details                            |
| -------- | ---------------------------------- |
| GNU Stow | https://www.gnu.org/software/stow/ |
| Rye      | https://rye-up.com/                |
| Volta    | https://volta.sh/                  |

| Commands      | Details                                    |
| ------------- | ------------------------------------------ |
| AWS CLI       | https://aws.amazon.com/cli/?nc1=h_ls       |
| AWS CDK       | https://aws.amazon.com/cdk/?nc1=h_ls       |
| bat           | https://github.com/sharkdp/bat             |
| delta         | https://github.com/dandavison/delta        |
| eza           | https://github.com/eza-community/eza       |
| FFmpeg        | https://ffmpeg.org/                        |
| Firebase CLI  | https://firebase.google.com/docs/cli       |
| fzf           | https://github.com/junegunn/fzf            |
| inshellisense | https://github.com/microsoft/inshellisense |
| ni            | https://github.com/antfu/ni                |
| Terraform     | https://developer.hashicorp.com/terraform  |
| tree          | http://mama.indstate.edu/users/ice/tree/   |
| XSel          | https://github.com/kfish/xsel              |

| GUIs / TUIs                                | Details                                                                    |
| ------------------------------------------ | -------------------------------------------------------------------------- |
| Docker                                     | https://www.docker.com/                                                    |
| Lazygit                                    | https://github.com/jesseduffield/lazygit                                   |
| Tmux                                       | https://github.com/tmux/tmux                                               |

| Other          | Details                 |
| -------------- | ----------------------- |
| Symbolic Links | Managing it using Stow. |

### Visual Studio Code Settings

https://github.com/ymgn-dev/vscode-settings

In this repository, I am sharing my Visual Studio Code configuration files.
You can use the same settings by overwriting your local configuration files with these.
