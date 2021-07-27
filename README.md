# MINI CONTACT LIST - FIREBASE
Sebuah mini proyek percobaan untuk pembelajaran React-Native dengan menggunakan REST API Firebase.
Semoga bermanfaat.
## Setting Git secara global
```
git config --global user.name "Rofiuddin"
git config --global user.email "kambing.rofi@gmail.com"
```

## Meng-copy repository (penyimpanan) pada komputer
```
git clone https://gitlab.com/rofiareiv/mini-contact-list-firebase.git
cd mini-contact-list-firebase
rm -rf .git
```
branch main disini adalah branch baru pengganti branch master.
## Push pada folder yang sudah ada
```
cd existing_folder
git init --initial-branch=main
git remote add origin https://gitlab.com/rofiareiv/mini-contact-list-firebase.git
git add .
git commit -m "Initial commit"
git push -u origin main
```
untuk windows bisa menambahkan username di depan gitlab.com seperti ini ```https://username@gitlab.com/username/mini-contact-list-firebase.git```
## Push pada repository yang sudah ada
```
cd existing_repo
git remote rename origin old-origin
git remote add origin https://gitlab.com/rofiareiv/mini-contact-list-firebase.git
git push -u origin --all
git push -u origin --tags
```

## Penting
Setelah melakukan cloning proyek ini lakukan langkah berikut di terminal (cmd/powercell).
```
npm install
```
Selajutnya cek pada file ```package.json``` untuk mengetahui plugin apa saja yang terinstall pada proyek ini.