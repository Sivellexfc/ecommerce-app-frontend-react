# E-Commerce App Frontend (React)

Bu proje, **React tabanlı** bir e-ticaret uygulamasının frontend kısmıdır. Kullanıcılar ürünleri görüntüleyebilir, sepete ekleyebilir, ödeme yapabilir ve ürünlere yorum yapabilir. Uygulama, hem mobil hem de masaüstü cihazlar için optimize edilmiştir.

![home](https://github.com/user-attachments/assets/25a42e30-771b-4c4d-bf9a-c05f1b8581ff)

## İçindekiler

- [Özellikler](#özellikler)
- [Kullanılan Teknolojiler](#kullanılan-teknolojiler)
- [Uygulamanın Çalıştırılması](#uygulamanın-çalıştırılması)
- [Proje Yapısı](#proje-yapısı)
- [API Uç Noktaları](#api-uç-noktaları)
- [Katkıda Bulunma](#katkıda-bulunma)
- [Lisans](#lisans)

## Özellikler

- **Ürün Kataloğu**: Çeşitli satıcıların sattığı ürünleri listeleyebilirsiniz.
- **Ürün Detayları**: Ürün bilgilerini, kullanıcı yorumlarını ve puanlamaları görüntüleyebilirsiniz.
![details](https://github.com/user-attachments/assets/241b3a42-23d3-4999-ba2e-2c3bf7b7fa8f)
- **Sepet**: Ürünleri sepete ekleyebilir, miktarlarını güncelleyebilir ve çıkarabilirsiniz.

<div align="center">
  <img src="https://github.com/user-attachments/assets/a1a2a594-160c-4ef0-a589-9ecbe0cc1fb3" alt="cart" width="300"/>
</div>


- **Kullanıcı Doğrulaması**: JWT ile oturum açabilirsiniz, kayıt olabilirsiniz.
![kayıtol](https://github.com/user-attachments/assets/5800ef59-04c7-407c-a067-a66a34c1fb8c)
- **Satıcı Doğrulaması**: JWT ile satıcı olarak oturum açabilirsiniz, kayıt olabilirsiniz.
![hesapsatıcıoluştur](https://github.com/user-attachments/assets/f60a1c43-3ea8-4144-8e2c-8a812349b9b6)
- **Mağaza İşlemleri**: Satıcı olarak açılan hesabınıza bir mağaza bağlayabilirsiniz.
![magazayok](https://github.com/user-attachments/assets/d460bfbe-fc61-41d0-873f-1bc1adea7826)
![magazaolustur](https://github.com/user-attachments/assets/04d834e9-a1ff-4e92-b9f6-469ff7d649fe)
![magazam](https://github.com/user-attachments/assets/3aa541ba-505e-4ddc-8be4-dfc02a370df1)
- **Ürün Ekleme**: Oluşturulan mağazanıza çeşitli ürünler ekleyebilirsiniz ve ürün bilgilerini güncelleyip detaylandırabilirsiniz.
![urunekle](https://github.com/user-attachments/assets/d5f8391c-050f-4a24-9993-c08a355bdbff)
- **Sipariş Verme**: Kullanıcılar yeni sipariş verebilir veya önceki siparişlerini görüntüleyebilir.
![completeorder](https://github.com/user-attachments/assets/75f164b6-c8b1-4e4d-80d3-a0de285b2d5c)
![ONAY](https://github.com/user-attachments/assets/12b5c268-6360-4025-9fb2-b4e03ea5f7ba)
![history](https://github.com/user-attachments/assets/1409ada3-abc7-4959-b1ff-29683d1cdb23)
- **Değerlendirme ve Yorumlar**: Kullanıcılar geçmiş siparişlerindeki ürünlere yorum yapabilir ve puan verebilir.
![review](https://github.com/user-attachments/assets/48b1c240-6b4a-44f3-984f-8dec22f3a8d4)

## Kullanılan Teknolojiler

- **Frontend**:
  - [React.js](https://reactjs.org/) - Kullanıcı arayüzleri oluşturmak için JavaScript kütüphanesi.
  - [Cookies](https://www.npmjs.com/package/react-cookie) - Kullanıcı kimlik doğrulama işlemlerinde kullanılan token'ları yönetmek için kullanılır.
  - [JWT Decode](https://www.jwt.io) - JSON Web Token (JWT) işlemleri için kullanılır.
  - [React Router](https://reactrouter.com/) - Uygulama içi yönlendirme.
  - [Axios](https://axios-http.com/) - HTTP istekleri yapmak için kütüphane.
  - [Tailwind CSS](https://tailwindcss.com/) - CSS çerçevesi.
  - [React Icons](https://react-icons.github.io/react-icons/) - İkon kütüphanesi.

- **Backend (Harici API)**:
  - Ürün, sipariş ve kullanıcı verileri için bir backend servisi ile ([spring-boot-ecommerce-microservice](https://github.com/Sivellexfc/spring-boot-ecommerce-microservice)) entegre edilmiştir.

## Kurulum

Frontend'i yerel ortamda çalıştırmak için aşağıdaki adımları takip edin:

1. **Proje deposunu klonlayın**:
    ```bash
    git clone https://github.com/Sivellexfc/ecommerce-app-frontend-react.git
    cd ecommerce-app-frontend-react
    ```

2. **Bağımlılıkları yükleyin**:
    ```bash
    npm install
    ```

3. **Geliştirme sunucusunu başlatın**:
    ```bash
    npm start
    ```

   Uygulama `http://localhost:3000` adresinde çalışacaktır.


## Uygulamanın Çalıştırılması

Uygulamayı geliştirme modunda çalıştırmak için:

```bash
npm start
