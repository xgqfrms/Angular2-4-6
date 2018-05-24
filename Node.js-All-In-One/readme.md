# Node.js & Unix Linux & NVM & NPM

> Node.js All in One!

## Node.js & Unix/Linux

https://nodejs.org/en/download/package-manager/
https://nodejs.org/en/download/package-manager/#enterprise-linux-and-fedora

https://github.com/nodesource/distributions
https://nodesource.com/
https://docs.nodesource.com/


```sh
# Enterprise Linux and Fedora
## ncluding Red Hat® Enterprise Linux® / RHEL, CentOS and Fedora.

# On RHEL, CentOS or Fedora, for Node.js v6 LTS:
$ curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -

# Alternatively for Node.js 9:
$ curl --silent --location https://rpm.nodesource.com/setup_9.x | sudo bash -

# Then install:
$ sudo yum -y install nodejs


## Optional: install build tools
$ sudo yum install gcc-c++ make
# or: sudo yum groupinstall 'Development Tools'



```

## Available architectures:
    i386 (32-bit, not available for EL7)
    x86_64 (64-bit)

## Supported Red Hat® Enterprise Linux® versions:
    RHEL 5 (32-bit and 64-bit)
    RHEL 6 (32-bit and 64-bit)
    RHEL 7 (64-bit)

## Supported CentOS versions:
    CentOS 5 (32-bit and 64-bit)
    CentOS 6 (32-bit and 64-bit)
    CentOS 7 (64-bit)

## Supported CloudLinux versions:
    CloudLinux 6 (32-bit and 64-bit)

## Supported Fedora versions:
    Fedora 21 (Twenty One) (32-bit and 64-bit)
    Fedora 20 (Heisenbug) (32-bit and 64-bit)
    Fedora 19 (Schrödinger's Cat) (32-bit and 64-bit)

## Other distributions known to be supported:
    Oracle Linux (mirrors RHEL very closely)
    Amazon Linux (tested on 2016.03)


## Enterprise Linux

> Enterprise Linux (RHEL and CentOS) users may use the Node.js and npm packages from the EPEL repository.

https://fedoraproject.org/wiki/EPEL
https://fedoraproject.org/wiki/EPEL/testing

```sh

# Install the appropriate epel-release RPM for your version (found on the EPEL repository homepage), then run:
$ sudo yum install nodejs npm --enablerepo=epel

```


## Node.js

https://nodejs.org/en/#download

### 8.9.1 LTS

> Recommended For Most Users

### 9.2.0 Current
> Latest Features

https://github.com/nodejs/Release#release-schedule

> 8.x.x LTS

https://newsletter.nodejs.org



## NPM

https://docs.npmjs.com/getting-started/installing-node


```sh

$ npm install npm@latest -g

# Installing npm manually
# https://registry.npmjs.org/npm/-/npm-{VERSION}.tgz.

```



## NVM

https://nodejs.org/en/download/package-manager/#nvm

https://github.com/creationix/nvm

```sh

$ env VERSION=`python tools/getnodeversion.py` make install DESTDIR=`nvm_version_path v$VERSION` PREFIX=""

$ nvm use 8

$ nvm uninstall 8


```


# Windows

https://chocolatey.org/

```sh

$ cinst nodejs

# or for full install with npm
$ cinst nodejs.install

```

http://scoop.sh/

```sh

$ scoop install nodejs

# scoop install curl

```



## How to Install Node.js and NPM on Linux

https://www.ostechnix.com/install-node-js-linux/


> On RHEL, CentOS, you need to enable EPEL repository first.

```sh
# Install Nodejs using your distribution’s package manager

$ sudo yum install epel-release

$ sudo yum install nodejs npm

# Install Nodejs from NodeSource

## Node.js v6
$ curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -

## Node.js v7
$ curl --silent --location https://rpm.nodesource.com/setup_7.x | bash -

# On RHEL, CentOS or Fedora, for Node.js v6 LTS:
# ??? 8.x
$ curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -


## yum install nodejs npm
$ sudo yum install nodejs npm

# Install build tools (Optional)

$ sudo yum groupinstall 'Development Tools'

# Install Nodejs using NVM

## Alternatively, you can install Nodejs using NVM (Node Version Manager).
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash

## The above command will clone the nvm repository to ~/.nvm and add the source line to your profile (~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc).


## source the .bash_profile as root user:
$ source ~/.bash_profile

## To verify whether NVM is installed or not, run:
$ command -v nvm

$ nvm

# run the following command to view the list of available Nodejs versions:
$ nvm ls-remote

## To install the most recent Nodejs version, just run:
$ nvm install node

## For example, to install Nodejs v7.9.0, run:
$ nvm install v7.9.0

## To view the list of installed Nodejs versions, run:
$ nvm list

## You can also switch between different Nodejs versions as below.
$ nvm use node

## Or, you can just run it to be more specific:
$ nvm run node v7.9.0

## To set a particular Nodejs version as the default, run:
$ nvm alias default v7.9.0

## To remove the particular Nodejs version, run:
$ nvm uninstall v7.9.0

## To view the currently installed and default Nodejs version, run:
$ node --version #OR
$ node -v

## Check npm version:
$ npm -v


```

# NVM

https://github.com/creationix/nvm

https://github.com/creationix/nvm#installation

https://github.com/creationix/nvm/releases/tag/v0.33.6

```sh

# To install or update nvm, you can use the install script using cURL:
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash

# Verify installation
$ command -v nvm

```

https://github.com/creationix/nvm/blob/v0.33.6/install.sh





# cURL

> command line tool and library for transferring data with URLs.

https://curl.haxx.se/

## Supports...

> DICT, FILE, FTP, FTPS, Gopher, HTTP, HTTPS, IMAP, IMAPS, LDAP, LDAPS, POP3, POP3S, RTMP, RTSP, SCP, SFTP, SMB, SMBS, SMTP, SMTPS, Telnet and TFTP.

> curl supports SSL certificates, HTTP POST, HTTP PUT, FTP uploading, HTTP form based upload, proxies, HTTP/2, cookies, user+password authentication (Basic, Plain, Digest, CRAM-MD5, NTLM, Negotiate and Kerberos), file transfer resume, proxy tunneling and more.


https://www.gitbook.com/download/pdf/book/bagder/everything-curl

https://github.com/curl/curl
https://www.gitbook.com/book/bagder/everything-curl/details






## Unix/Linux

https://en.wikipedia.org/wiki/Linux_distribution
https://en.wikipedia.org/wiki/Linux_distribution#/media/File:Linux_Distribution_Timeline.svg


https://en.wikipedia.org/wiki/Unix
https://en.wikipedia.org/wiki/File:Unix_history-simple.svg
https://upload.wikimedia.org/wikipedia/commons/7/77/Unix_history-simple.svg


https://en.wikipedia.org/wiki/Berkeley_Software_Distribution
https://en.wikipedia.org/wiki/Berkeley_Software_Distribution#/media/File:Unix_history-simple.svg





## How to check Unix version?


https://kb.iu.edu/d/aaya

https://unix.stackexchange.com/questions/88644/how-to-check-os-and-version-using-a-linux-command

https://www.cyberciti.biz/faq/command-to-show-linux-version/

https://www.linux.com/learn/how-find-your-linux-version-or-distro-release-and-why-it-matters


```sh
# kernel release
$ uname -r

# distribution release
$ lsb_release -a


# For a Debian-based distribution (such as Ubuntu)
$ dpkg -l openssl

# rpm-based distribution (such as Fedora)
$ rpm -qa | grep openssl

```

https://www.linux.com/answers/how-can-i-tell-what-version-linux-i-have


```sh
# Good
$ cat /etc/redhat-release

$ cat /etc/system-release

$ lsb_release -a

$ cat /etc/issue

$ more /etc/*-release

# Not Too Good
$ cat /etc/lsb-release

$ uname -r

# Bad
$ cat /etc/os-release

```






https://nodejs.org/en/download/package-manager/



# Enterprise Linux and Fedora


> Including Red Hat® Enterprise Linux® / RHEL, CentOS and Fedora.

https://nodejs.org/en/download/package-manager/#enterprise-linux-and-fedora


https://c9.io/


https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server

