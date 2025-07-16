# 安装 Docker
## 安装 Docker 必要的依赖包
sudo yum install -y yum-utils device-mapper-persistent-data lvm2

## 添加 Docker 的官方仓库
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

## 安装 Docker
sudo yum install -y docker-ce docker-ce-cli containerd.io

## 启动 Docker 服务
sudo systemctl start docker

## 设置 Docker 开机自启
sudo systemctl enable docker

## 验证 Docker 是否安装成功
docker --version


# 安装 Node.js
## 安装 Node.js 必要的依赖包
sudo yum install -y gcc-c++ make

## 添加 Node.js 官方仓库（以安装最新版本为例）
curl -sL https://rpm.nodesource.com/setup_18.x | sudo bash -

## 安装 Node.js
sudo yum install -y nodejs

## 验证 Node.js 和 npm 是否安装成功
node -v
npm -v

## 获取 npm 镜像仓库地址
npm config get registry
--> 默认是 https://registry.npmjs.org/ 需要修改成国内镜像

## 设置国内 npm 镜像仓库
npm config set registry https://registry.npmmirror.com

## 安装 pnpm 
> 高效的包管理工具，使用硬链接和符号链接来存储依赖，避免重复安装相同的包，节省磁盘空间。更快的安装速度，适合大型项目。
npm install -g pnpm


## 安装 vite 
> 现代化的前端构建工具，用于开发和构建前端项目；专注于快速开发和热更新，适合现代框架（如 Vue、React）；使用 ES 模块和浏览器原生支持
npm install -g vite

## 验证 vite 是否安装成功
vite --version


# 安装 Go
## 下载 Go 安装包
wget https://mirrors.aliyun.com/golang/go1.24.0.linux-amd64.tar.gz

## 解压安装 Go
tar -C /usr/local -xzf go1.24.0.linux-amd64.tar.gz

## 更新环境变量 将 Go 路径添加到 PATH 中
echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc
source ~/.bashrc

## 验证 Go 是否安装成功
go version

## 查看 Go 代理
go env | grep GOPROXY
--> 默认是 GOPROXY='https://proxy.golang.org,direct' 需要修改成国内代理

## 设置国内的 Go 代理模块
go env -w GOPROXY=https://mirrors.aliyun.com/goproxy/,direct



# 安装 Git
## 安装 Git
sudo yum install -y git

## 验证 Git 是否安装成功
git --version

## 生成 SSH Key
ssh-keygen -t rsa -b 4096 -C "8351840@qq.com"

## 查看生成的公钥
cat ~/.ssh/id_rsa.pub

## 添加公钥到 GitHub
Settings -> SSH and GPG keys -> New SSH key

## 测试到Github的连接
ssh -T git@github.com
--> Hi chengyi01! You've successfully authenticated, but GitHub does not provide shell access.

## 提交代码
git config --global user.email "8351840@qq.com"
git add .
git commit -m 'add node'
git pull --rebase
git push origin main


# 过程日志
# 查看 Killed 日志
sudo dmesg | grep -i 'killed process'
--> [10630150.135482] Out of memory: Killed process 164390 (node) total-vm:23166768kB, anon-rss:788176kB, file-rss:54384kB, shmem-rss:0kB, UID:0 pgtables:21336kB oom_score_adj:0