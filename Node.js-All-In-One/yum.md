
# yum

> YUM (Yellowdog Updater, Modified)

https://www.tecmint.com/20-linux-yum-yellowdog-updater-modified-commands-for-package-mangement/

https://en.wikipedia.org/wiki/Yellow_Dog_Updater,_Modified

> YUM (Yellowdog Updater Modified) is an open source command-line as well as graphical based package management tool for RPM (RedHat Package Manager) based Linux systems.


```sh

# yum -y install firefox

# yum remove firefox

# yum update mysql

# yum list openssh
$ yum list openssh-4.3p2

# yum search vsftpd

# yum info firefox

# yum list | less

# yum list installed | less

# yum provides /etc/httpd/conf/httpd.conf

# yum check-update

# yum update

# yum grouplist

# yum groupinstall 'MySQL Database'

# yum groupupdate 'DNS Name Server'

# yum groupremove 'DNS Name Server'

# yum repolist

# yum repolist all

# yum --enablerepo=epel install phpmyadmin

# yum shell

# yum clean all

# yum history


```


https://linux.die.net/man/8/yum

https://www.computerhope.com/unix/yum.htm

http://www.tutorialspoint.com/unix_commands/yum.htm


