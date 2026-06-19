


const profilUrl = ''; // Profile URL

async function baslat() {
    console.log('🤖 Gerçek tarayıcı tabanlı F5 botu başlatılıyor...');
    

    const { default: puppeteer } = await import('puppeteer');
    

    const browser = await puppeteer.launch({ 
        headless: true 
    });
    
    const page = await browser.newPage();
    
    
    await page.setViewport({ width: 1280, height: 800 });

    let toplamF5 = 0;

    console.log('🚀 Profil ziyaret döngüsü başladı. Durdurmak için CTRL + C yapabilirsin.');

    while (true) {
        try {
            
            await page.goto(profilUrl, { waitUntil: 'networkidle2' });
            
            toplamF5++;
            console.log(`[BAŞARILI] 👁️ Profil gerçek olarak ziyaret edildi! Toplam F5: ${toplamF5}`);
            
            
            await new Promise(resolve => setTimeout(resolve, 1000));
            
        } catch (error) {
            console.log(`[HATA] Yeniden deneniyor: ${error.message}`);
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    }
}

baslat();