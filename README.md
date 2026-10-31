# Avtotest Uzbekistan

Windows kompyuterlarida haydovchilik nazariy imtihoniga tayyorgarlik uchun
mo‘ljallangan Avtotest dasturining tanishtiruv va yuklab olish sahifasi.

## Ishga tushirish

1. Node.js o‘rnatilganini tekshiring.
2. Loyiha papkasida bog‘liqliklarni o‘rnating:

   ```bash
   npm install
   ```

3. Rivojlantirish serverini ishga tushiring:

   ```bash
   npm run dev
   ```

4. Ishlab chiqarish versiyasini yig‘ing:

   ```bash
   npm run build
   ```

   Tayyor fayllar `dist/` papkasida hosil bo‘ladi. Mahalliy ko‘rish uchun
   `npm run preview` buyrug‘idan foydalaning.

## Yuklab olish faylini sozlash

- EXE yoki ZIP faylni `public/downloads/` papkasiga joylang. Hozirgi
  yuklab olish manzili `AZIZBEK AVTO TEST.zip` fayliga ulangan.
  Yuklab olish tugmasi sozlangan manzildagi fayl mavjud bo‘lmaguncha faol
  bo‘lmaydi.
  Faylni ishlab turgan server paytida qo‘shsangiz, serverni qayta ishga
  tushiring.
- Fayl nomi yoki manzilini o‘zgartirsangiz, `src/config/appConfig.json`
  faylidagi `downloadUrl` qiymatini yangilang. Tashqi manbadan yuklab olish
  uchun uni to‘g‘ridan-to‘g‘ri havolaga o‘zgartiring va loyihani yig‘ishda
  `VITE_DOWNLOAD_AVAILABLE=true` muhit o‘zgaruvchisini belgilang.
- Tashqi manba uchun `download` atributi brauzer tomonidan e’tiborsiz
  qoldirilishi mumkin; server to‘g‘ridan-to‘g‘ri faylni yuborishi kerak.
- Haqiqiy EXE fayli loyiha bilan birga taqdim etilmaydi. Uni alohida
  ta’minlashingiz kerak; soxta fayl yaratilmagan.

## Netlify yoki Vercel’da joylashtirish

Loyihani Git omboriga yuklab, Netlify yoki Vercel’da shu omborni ulang.
Build buyrug‘i `npm run build`, nashr papkasi esa `dist` bo‘lsin. EXE fayli
mahalliy bo‘lsa, uni build vaqtida `public/downloads/avtotest.exe` ichiga
joylang. Tashqi manba ishlatilsa, hosting sozlamalarida
`VITE_DOWNLOAD_AVAILABLE=true` muhit o‘zgaruvchisini ham kiriting.

Telegram va boshqa platformalarda havola rasmi sifatida
`public/versellink.png` ishlatiladi. Vercel build jarayonida Open Graph
manzillari avtomatik ravishda Vercel domeni bilan to‘ldiriladi. Boshqa hosting
ishlatilsa, build muhitida `VITE_SITE_URL` qiymatini `https://sayt-domeni.uz`
ko‘rinishida belgilang. Telegram avvalgi preview rasmini keshlab qolishi
mumkin; yangi preview chiqishi biroz vaqt olishi mumkin.

## Texnologiyalar

React, TypeScript, Vite va Lucide React.
