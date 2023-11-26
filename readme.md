# Cara Jalanin Aplikasi
- download go https://go.dev/doc/install
- downlaod git https://git-scm.com/downloads
- download sqlite https://sqlitebrowser.org/dl/
- download gcc https://sourceforge.net/projects/tdm-gcc/

download source code
```
git clone https://github.com/Kulyah/tb2-rpl.git
``

buka projek di vscode
terus jalanin
```
go env -w CGO_ENABLED=1
go mod download
go run ./...
```

push code
```
git add .
git commit -m "update"
git push origin main
```

pull code
```
git pull origin main
```

buka localhost/
