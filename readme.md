# SmartEdu Projesi

SmartEdu, eğitim materyallerini düzenlemek ve paylaşmak için kullanılan bir web uygulamasıdır.

## Özellikler

- Kullanıcılar, hesap oluşturabilir ve oturum açabilir.
- Kullanıcılar, kursları görüntüleyebilir, kurslara kaydolabilir ve yeni kurslar oluşturabilir.
- Kurslar kategorilere ayrılabilir ve kategorilere göre filtrelenip görüntülenebilir.
- Kullanıcılar, kurs materyallerini yükleyebilir ve düzenleyebilir.
- Kullanıcılar, profil bilgilerini güncelleyebilir.
- Oturum açma ve hata mesajları için flash bildirimleri kullanılır.

## Örnek Ekran Görüntüleri

#### Anasayfa
![Anasayfa](/public/screenshots/home-menu-gif.gif)
<hr>

#### Öğrenci
![Kurs Detayları](/public/screenshots/student-gif.gif)
<hr>

#### Öğretmen
![Profil Sayfası](/public/screenshots/teacher-gif.gif)
<hr>

#### Admin
![Profil Sayfası](/public/screenshots/admin-gif.gif)
<hr>

## Kullanılan Eklentiler

Proje geliştirmek için aşağıdaki eklentiler kullanılmıştır:

- **express:** Web uygulamamızı oluşturmak ve sunmak için kullanılan hızlı ve minimal bir web çerçevesidir.

- **mongoose:** MongoDB veritabanına erişim sağlayan bir ODM (Object Data Modeling) kütüphanesidir.

- **express-session:** Oturum yönetimi için kullanılır ve oturum verilerini saklamak için MongoDB kullanır.

- **connect-mongo:** express-session ile birlikte kullanılan bir oturum saklama yöntemidir. Oturum verilerini MongoDB'de depolar.

- **connect-flash:** Kullanıcıya oturum açma, hata mesajları gibi anlık bildirimler göstermek için kullanılır.

- **method-override:** HTTP metodlarını düzenlemek ve PUT, DELETE gibi işlemleri gerçekleştirmek için kullanılır.

- **ejs:** View motoru olarak kullanılır, HTML şablonlarını oluşturmak için kullanılır.

- **public:** Statik dosyaların (CSS, JS vb.) sunulmasını sağlar.

- **body-parser:** `express.urlencoded` ve `express.json` için kullanılan bir middleware'dir.


## Nasıl Çalıştırılır

Projenin yerel bir ortamda çalıştırılması için aşağıdaki adımları izleyebilirsiniz:

1. Node.js ve MongoDB yüklü olduğundan emin olun.

2. Bu repo'yu klonlayın:

   ```bash
   git clone https://github.com/sizin-github-hesabınız/smartedu-projesi.git
   cd smartedu-projesi

3. Gerekli npm paketlerini yükleyin:
    ```npm
    npm 
    install

4. MongoDB veritabanını başlatın.

5. Uygulamayı başlatın:
    ```node
    node app.js
    ```

6. Tarayıcınızı açın ve http://localhost:3000 adresine gidin.


## Katkılar

Katkıda bulunmak için aşağıdaki adımları izleyin:

1. Bu repo'yu fork edin.
2. Yeni bir özellik eklemek veya bir hata düzeltmek için bir dal      (branch) oluşturun.
3. Değişikliklerinizi yapın ve düzenleyin.
4. Değişikliklerinizi commit edin.
5. Yaptığınız değişiklikleri fork ettiğiniz ana repo'ya gönderin.
6. Bir pull talebi (pull request) oluşturun.

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır.